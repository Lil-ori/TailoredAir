type FaqItem = {
  name: string;
  text: string;
};

function faqPage(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.name,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.text,
      },
    })),
  };
}

export function withFaqGraph(existing: Record<string, unknown>, faq: ReturnType<typeof faqPage>) {
  const { "@context": _context, ...rest } = existing;
  return {
    "@context": "https://schema.org",
    "@graph": [rest, faq],
  };
}

export const homeFaqJsonLd = () =>
  faqPage([
    {
      name: "Who is the best HVAC company in Littleton, Colorado?",
      text: "Tailored Air is a top-rated locally owned HVAC company in Littleton, Colorado with a 5-star Google rating. We are licensed and insured in Colorado, an authorized American Standard dealer, and offer honest pricing with no upselling. Call (720) 296-6008.",
    },
    {
      name: "What HVAC services does Tailored Air offer?",
      text: "Tailored Air offers heating installation and repair, air conditioning installation and repair, indoor air quality solutions, water heater installation, commercial HVAC, and 24/7 emergency HVAC repair across Littleton, CO and the Denver Metro area.",
    },
    {
      name: "What areas does Tailored Air serve?",
      text: "Tailored Air serves Littleton, Englewood, Highlands Ranch, Ken Caryl, Lakewood, Centennial, Columbine, Southglenn, Westminster, Sheridan, Greenwood Village, and the greater Denver Metro area.",
    },
    {
      name: "Does Tailored Air offer free estimates?",
      text: "Yes. Tailored Air offers free no-obligation estimates for all HVAC installation and replacement projects. Call (720) 296-6008 or request one online.",
    },
  ]);

export const serviceFaqJsonLd: Record<string, ReturnType<typeof faqPage>> = {
  heating: faqPage([
    {
      name: "How do I know if my furnace needs repair or replacement in Littleton, CO?",
      text: "If your furnace is over 15 years old, requires frequent repairs, or produces uneven heat, replacement is often more cost-effective than continued repairs. Tailored Air offers free assessments for Littleton homeowners. Call (720) 296-6008.",
    },
    {
      name: "What furnace brands does Tailored Air install?",
      text: "Tailored Air is an authorized American Standard dealer and installs their full line of furnaces and heating systems. We also service and repair all major heating brands across Littleton and the Denver Metro area.",
    },
    {
      name: "How often should I service my furnace in Colorado?",
      text: "We recommend an annual furnace tune-up every fall before heating season begins. Regular maintenance extends system life and prevents costly breakdowns during Colorado winters.",
    },
    {
      name: "Does Tailored Air install heat pumps in Littleton, CO?",
      text: "Yes. Tailored Air installs and services air-source and dual-fuel heat pump systems sized for Colorado's climate throughout Littleton and the Denver Metro area.",
    },
  ]),
  cooling: faqPage([
    {
      name: "How do I know if my AC needs repair or replacement?",
      text: "If your air conditioner is over 12 to 15 years old, no longer cooling effectively, or needs repeated repairs, replacement may be more cost-effective. Tailored Air offers free estimates for Littleton, CO homeowners. Call (720) 296-6008.",
    },
    {
      name: "Does Tailored Air install ductless mini-split systems?",
      text: "Yes. Tailored Air installs ductless mini-split systems for homes without existing ductwork, room additions, garages, and finished basements across Littleton and the Denver Metro area.",
    },
    {
      name: "When should I schedule an AC tune-up in Colorado?",
      text: "Schedule your AC tune-up in spring before cooling season begins. This ensures your system is ready for Colorado's warm months and catches small problems before they become expensive repairs.",
    },
  ]),
  "water-heaters": faqPage([
    {
      name: "Should I choose a tankless or traditional water heater?",
      text: "Tankless water heaters provide endless hot water and use less energy but cost more upfront. Traditional tank heaters have a lower initial cost. Tailored Air can assess your Littleton, CO home and help you decide. Call (720) 296-6008.",
    },
    {
      name: "How long do water heaters last in Colorado?",
      text: "Traditional tank water heaters typically last 8 to 12 years. Tankless water heaters can last 20 years or more with proper maintenance. Annual flushing helps extend the life of your system.",
    },
    {
      name: "Does Tailored Air offer emergency water heater service?",
      text: "Yes. Water heater failures do not wait for business hours. Tailored Air provides emergency water heater service across Littleton, Highlands Ranch, and the Denver Metro area. Call (720) 296-6008.",
    },
  ]),
  emergency: faqPage([
    {
      name: "Does Tailored Air offer 24/7 emergency HVAC repair?",
      text: "Yes. Tailored Air provides 24/7 emergency HVAC repair for homes and businesses in Littleton, Highlands Ranch, Englewood, Lakewood, Centennial, Ken Caryl, and all surrounding Denver Metro communities. Call (720) 296-6008 anytime.",
    },
    {
      name: "What counts as an HVAC emergency?",
      text: "A no-heat situation in winter, a completely failed AC during extreme heat, a suspected gas leak, or any HVAC issue posing a safety risk counts as an emergency. Call Tailored Air at (720) 296-6008 immediately.",
    },
    {
      name: "How fast does Tailored Air respond to emergency calls?",
      text: "We prioritize emergency calls and aim to respond as quickly as possible, often same-day. Call (720) 296-6008 and we will dispatch a technician to your Littleton area home as fast as we can.",
    },
    {
      name: "What should I do if my furnace stops working at night?",
      text: "Check your thermostat settings and circuit breaker first. If the furnace still will not run, call Tailored Air at (720) 296-6008. We answer after hours, on weekends, and on holidays for Littleton and Denver Metro customers.",
    },
  ]),
  "air-quality": faqPage([
    {
      name: "Why is indoor air quality important in Colorado homes?",
      text: "Colorado's dry climate and high altitude mean indoor air can be particularly dry and dusty. Littleton homes also trap allergens, pet dander, and pollutants. Whole-home air quality solutions help families breathe easier year-round.",
    },
    {
      name: "Does Tailored Air install whole-home humidifiers?",
      text: "Yes. Tailored Air installs whole-home humidifiers for Littleton, CO homeowners to combat Colorado's dry climate, which can damage wood floors and furniture and irritate skin and sinuses.",
    },
    {
      name: "What is a UV germicidal lamp?",
      text: "A UV germicidal lamp installs inside your HVAC system and kills bacteria, viruses, and mold at the source before they circulate through your home's air supply. Tailored Air installs these throughout the Denver Metro area.",
    },
  ]),
  commercial: faqPage([
    {
      name: "Does Tailored Air service commercial HVAC systems?",
      text: "Yes. Tailored Air provides commercial HVAC installation, repair, and preventative maintenance contracts for businesses across Littleton, Englewood, and the Denver Metro area. Call (720) 296-6008 for a commercial assessment.",
    },
    {
      name: "Does Tailored Air offer commercial maintenance contracts?",
      text: "Yes. We offer scheduled preventative maintenance agreements for Littleton area businesses that keep HVAC systems running reliably year-round and include priority service when repairs are needed.",
    },
    {
      name: "What types of commercial properties does Tailored Air serve?",
      text: "Tailored Air serves offices, retail locations, light industrial properties, and multi-unit commercial buildings across Jefferson and Arapahoe counties in Colorado.",
    },
  ]),
};

export const aboutFaqJsonLd = () =>
  faqPage([
    {
      name: "Who owns Tailored Air?",
      text: "Tailored Air LLC is a locally owned and operated HVAC company founded by a Littleton, Colorado native. We are not a national franchise or a call center.",
    },
    {
      name: "Is Tailored Air licensed and insured in Colorado?",
      text: "Yes. Tailored Air LLC is fully licensed and insured to perform HVAC work in Colorado. All work is completed to code and to professional standards.",
    },
    {
      name: "What brands does Tailored Air work with?",
      text: "Tailored Air is an authorized American Standard dealer and installs their full line of heating and cooling products. We also service and repair all major HVAC brands.",
    },
    {
      name: "How long has Tailored Air been in business?",
      text: "Tailored Air LLC was founded in 2023 and serves Littleton, Colorado and the greater Denver Metro area with a 5-star Google rating.",
    },
  ]);

export const whyChooseUsFaqJsonLd = () =>
  faqPage([
    {
      name: "Why should I choose Tailored Air for HVAC service?",
      text: "Tailored Air is locally owned and based in Littleton, CO. We have a 5-star Google rating, offer honest pricing with no upselling, are fully licensed and insured in Colorado, and are an authorized American Standard dealer.",
    },
    {
      name: "Does Tailored Air upsell customers?",
      text: "No. Tailored Air does not upsell. We recommend repairs when a repair will do and replacements only when they genuinely make financial sense for the customer. Every quote is explained in plain language before work begins.",
    },
    {
      name: "Does Tailored Air offer free HVAC estimates?",
      text: "Yes. Tailored Air offers free no-obligation estimates for all HVAC installation and replacement projects in Littleton and the Denver Metro area. Call (720) 296-6008.",
    },
  ]);

export const valuesFaqJsonLd = () =>
  faqPage([
    {
      name: "What does SUIT stand for at Tailored Air?",
      text: "SUIT stands for Solve It, Understand, Integrity, and Trust. These four values guide every interaction at Tailored Air, from the first call to the final walk-through on every job in Littleton and the Denver Metro area.",
    },
    {
      name: "What does integrity mean at Tailored Air?",
      text: "Integrity means doing the right thing every time. No upselling, no hidden fees, no recommending a replacement when a repair will do. We say what we mean and do what we say on every job.",
    },
    {
      name: "What is Tailored Air's approach to customer service?",
      text: "We listen first. We take time to understand what each customer in Littleton and the Denver Metro area actually needs before recommending anything, because the right answer starts with the right question.",
    },
  ]);

export const careersFaqJsonLd = () =>
  faqPage([
    {
      name: "Is Tailored Air hiring HVAC technicians in Littleton, CO?",
      text: "Tailored Air does not have open positions posted at this time, but we are always interested in hearing from talented HVAC installers and technicians in the Littleton and Denver Metro area. Send your resume to hello@tailoredair.com.",
    },
    {
      name: "What qualifications does Tailored Air look for?",
      text: "We look for HVAC experience with EPA 608 certification preferred, a customer-first mindset, reliability and accountability, and candidates based in or near Littleton, CO.",
    },
    {
      name: "How do I apply to work at Tailored Air?",
      text: "Send your resume and a brief note about yourself to hello@tailoredair.com. We review every submission personally.",
    },
  ]);

export const contactFaqJsonLd = () =>
  faqPage([
    {
      name: "How do I contact Tailored Air?",
      text: "Call Tailored Air at (720) 296-6008 or email hello@tailoredair.com. We answer calls Monday through Friday 8am to 6pm and Saturday 9am to 2pm, with 24/7 emergency service available.",
    },
    {
      name: "What are Tailored Air's business hours?",
      text: "Tailored Air is open Monday through Friday from 8am to 6pm and Saturday from 9am to 2pm. Emergency HVAC service is available 24/7 by calling (720) 296-6008.",
    },
    {
      name: "How quickly does Tailored Air respond to inquiries?",
      text: "We respond to most inquiries within one business day. For HVAC emergencies, call (720) 296-6008 directly and we will dispatch a technician as quickly as possible.",
    },
  ]);

export function locationFaqJsonLd(city: string) {
  return faqPage([
    {
      name: `Does Tailored Air serve ${city}, Colorado?`,
      text: `Yes. Tailored Air provides full HVAC services throughout ${city}, CO including heating installation and repair, air conditioning service, indoor air quality, water heaters, commercial HVAC, and 24/7 emergency repair. We are based in nearby Littleton, CO. Call (720) 296-6008.`,
    },
    {
      name: `Who is the best HVAC company in ${city}, CO?`,
      text: `Tailored Air is a top-rated HVAC company serving ${city}, Colorado with a 5-star Google rating. We are locally owned, licensed and insured in Colorado, and an authorized American Standard dealer with honest pricing and no upselling.`,
    },
    {
      name: `Does Tailored Air offer emergency HVAC repair in ${city}, CO?`,
      text: `Yes. Tailored Air provides 24/7 emergency HVAC repair in ${city}, CO. If your heating or cooling system fails outside business hours, call (720) 296-6008 and we will dispatch a technician as quickly as possible.`,
    },
    {
      name: `How much does HVAC service cost in ${city}, Colorado?`,
      text: `HVAC costs in ${city} vary by system type and scope of work. Tailored Air offers free no-obligation estimates for all installation and replacement projects. Call (720) 296-6008 to schedule an assessment.`,
    },
  ]);
}

export function privacyJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Privacy Policy",
        description: "Privacy policy for Tailored Air LLC, an HVAC company in Littleton, Colorado.",
        url: "https://tailoredair.com/privacy",
        publisher: { "@type": "Organization", name: "Tailored Air LLC", url: "https://tailoredair.com" },
      },
      faqPage([
        {
          name: "What information does Tailored Air collect?",
          text: "Tailored Air collects your name, phone number, email address, and service details when you submit a contact or estimate form. We also collect standard server log data such as IP address and browser type.",
        },
        {
          name: "Does Tailored Air sell customer data?",
          text: "No. Tailored Air does not sell, trade, or rent personal information to third parties. We share information only with service providers who help us operate our business or when required by law.",
        },
        {
          name: "How do I request deletion of my data?",
          text: "Contact Tailored Air at hello@tailoredair.com or (720) 296-6008 to request access, correction, or deletion of your personal information. Colorado residents have rights under the Colorado Privacy Act.",
        },
      ]),
    ],
  };
}

export function termsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Terms and Conditions",
        description: "Terms and conditions for Tailored Air LLC, an HVAC company in Littleton, Colorado.",
        url: "https://tailoredair.com/terms",
        publisher: { "@type": "Organization", name: "Tailored Air LLC", url: "https://tailoredair.com" },
      },
      faqPage([
        {
          name: "Are Tailored Air estimates binding contracts?",
          text: "No. Estimates provided by Tailored Air are good-faith approximations based on information available at the time. Final pricing may vary if the scope of work changes once a technician is on site. We communicate any changes before proceeding.",
        },
        {
          name: "What is Tailored Air's cancellation policy?",
          text: "We ask for at least 24 hours notice to cancel or reschedule a non-emergency appointment. Repeated last-minute cancellations may result in a cancellation fee at our discretion.",
        },
        {
          name: "Does Tailored Air warranty its work?",
          text: "Yes. Labor performed by Tailored Air technicians is warranted for a period specified at the time of service. Equipment and parts warranties are provided by the respective manufacturers and vary by product.",
        },
      ]),
    ],
  };
}
