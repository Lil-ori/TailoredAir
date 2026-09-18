import { getSiteUrl } from "@/lib/site";

export type LocationPage = {
  slug: string;
  city: string;
  state: "CO";
  zip: string;
  lat: number;
  lng: number;
  county: string;
  neighbors: string;
  title: string;
  meta: string;
  intro: string;
  extra: string;
  localCopy: string;
  priority: number;
};

export const locations: LocationPage[] = [
  {
    slug: "littleton-co",
    city: "Littleton",
    state: "CO",
    zip: "80120",
    lat: 39.6136,
    lng: -105.0166,
    county: "Jefferson County",
    neighbors: "Englewood, Highlands Ranch, Ken Caryl, and Lakewood",
    title: "HVAC Services in Littleton, CO | Tailored Air, Local HVAC Experts",
    meta: "Tailored Air is Littleton's trusted local HVAC company. Expert heating, cooling, water heaters, and 24/7 emergency repair. Call (720) 296-6008 for a free estimate.",
    intro:
      "Tailored Air is proud to be Littleton's local HVAC company. We are based right here in Littleton, CO, and we serve homeowners and businesses throughout the community with honest, high-quality heating and cooling services. From furnace installation to 24/7 emergency repair, our team knows Littleton and treats every home we enter like our own.",
    extra:
      "Our technicians live in and around Littleton, which means we know the older homes near downtown as well as newer builds at the edge of town, and we size equipment for how this community actually lives.",
    localCopy:
      "Tailored Air is your local HVAC neighbor, based right here in Littleton. We know Jefferson County weather, we are licensed and insured in Colorado, and we are an authorized American Standard dealer. Homeowners choose us for honest pricing, a 5-star Google rating, and work we would stand behind in our own houses. We also serve nearby Englewood, Highlands Ranch, Ken Caryl, and Lakewood.",
    priority: 0.9,
  },
  {
    slug: "highlands-ranch",
    city: "Highlands Ranch",
    state: "CO",
    zip: "80126",
    lat: 39.5528,
    lng: -104.9691,
    county: "Douglas County",
    neighbors: "Littleton, Centennial, Parker, and Lone Tree",
    title: "HVAC Services in Highlands Ranch, CO | Tailored Air",
    meta: "Expert HVAC installation and repair in Highlands Ranch, CO. Heating, cooling, and 24/7 emergency service. Call Tailored Air at (720) 296-6008.",
    intro:
      "Tailored Air provides expert HVAC services to homeowners and businesses throughout Highlands Ranch, CO. Based just minutes away in Littleton, our team knows the area and responds fast when Highlands Ranch families need heating or cooling help, whether it is a seasonal tune-up or a middle-of-the-night emergency.",
    extra:
      "From Backcountry to the Town Center, Highlands Ranch homes take a beating from dry winters and hot afternoons. We install, repair, and maintain systems that keep this community comfortable without the upsell.",
    localCopy:
      "When Highlands Ranch families need heat or AC, we are just minutes away in Littleton. Highlands Ranch homeowners get a neighbor, not a call center. We know Douglas County, we are licensed and insured in Colorado, and we are an authorized American Standard dealer with a 5-star rating and honest pricing. We also serve Littleton, Centennial, Parker, and Lone Tree.",
    priority: 0.8,
  },
  {
    slug: "englewood",
    city: "Englewood",
    state: "CO",
    zip: "80110",
    lat: 39.6486,
    lng: -104.9878,
    county: "Arapahoe County",
    neighbors: "Littleton, Sheridan, Cherry Hills Village, and Denver",
    title: "HVAC Services in Englewood, CO | Tailored Air",
    meta: "Trusted HVAC installation and repair in Englewood, CO. Heating, cooling, and emergency HVAC service. Call Tailored Air at (720) 296-6008.",
    intro:
      "Tailored Air serves Englewood, CO homeowners and businesses with expert heating installation, air conditioning repair, and 24/7 emergency HVAC service. We are locally based in nearby Littleton and bring the same honest, no-pressure approach to every job in Englewood.",
    extra:
      "Englewood has a mix of classic bungalows and newer infill, and that mix shows up in how we diagnose a furnace or size a replacement AC. We treat every Englewood house like it is on our own block.",
    localCopy:
      "Englewood is just up the road from our Littleton shop, so response times stay short. Englewood customers get licensed, insured Colorado HVAC work from an authorized American Standard dealer, honest pricing, and a 5-star reputation. We also serve Littleton, Sheridan, Cherry Hills Village, and Denver.",
    priority: 0.8,
  },
  {
    slug: "lakewood",
    city: "Lakewood",
    state: "CO",
    zip: "80226",
    lat: 39.7047,
    lng: -105.0814,
    county: "Jefferson County",
    neighbors: "Littleton, Wheat Ridge, Morrison, and Denver",
    title: "HVAC Services in Lakewood, CO | Tailored Air",
    meta: "Professional HVAC services in Lakewood, CO. Heating, cooling, and emergency HVAC repair across Lakewood and Jefferson County. Call (720) 296-6008.",
    intro:
      "Tailored Air provides professional HVAC installation, repair, and maintenance for homes and businesses across Lakewood, CO. We are a Jefferson County company based in Littleton, and we treat every Lakewood customer with the same straightforward, honest service that has earned us a 5-star reputation.",
    extra:
      "Lakewood stretches from Belmar to the foothills, and those elevation and housing differences matter when a system is sized or repaired. Our team shows up ready for the house in front of us, not a one-size quote.",
    localCopy:
      "Lakewood homeowners work with a Jefferson County neighbor based in Littleton, licensed and insured in Colorado, and an authorized American Standard dealer. Honest pricing and a 5-star Google rating are the baseline, not a slogan. We also serve Littleton, Wheat Ridge, Morrison, and Denver, so Lakewood is never the edge of our map.",
    priority: 0.7,
  },
  {
    slug: "centennial",
    city: "Centennial",
    state: "CO",
    zip: "80112",
    lat: 39.5807,
    lng: -104.8772,
    county: "Arapahoe County",
    neighbors: "Highlands Ranch, Greenwood Village, Parker, and Lone Tree",
    title: "HVAC Services in Centennial, CO | Tailored Air",
    meta: "Expert HVAC installation and repair in Centennial, CO. Serving Centennial and the South Denver Metro. Call Tailored Air at (720) 296-6008.",
    intro:
      "Tailored Air serves Centennial, CO homeowners and businesses with expert heating, cooling, and emergency HVAC repair. Our team is based in Littleton and provides fast, reliable service throughout Centennial and the South Denver Metro area, with honest pricing and no upselling.",
    extra:
      "Centennial summers run hot and winters still get cold enough to punish a neglected furnace. We keep Centennial homes comfortable year-round with maintenance, repairs, and replacements explained in plain language.",
    localCopy:
      "Centennial families get the same no-pressure approach we use in Littleton. We are licensed and insured in Colorado, an authorized American Standard dealer, and a 5-star team that would rather fix what is fair than sell what is convenient. We also serve Highlands Ranch, Greenwood Village, Parker, and Lone Tree, so Centennial sits in the middle of our service area, not the far edge.",
    priority: 0.7,
  },
  {
    slug: "ken-caryl",
    city: "Ken Caryl",
    state: "CO",
    zip: "80127",
    lat: 39.5708,
    lng: -105.1019,
    county: "Jefferson County",
    neighbors: "Littleton, Lakewood, Morrison, and Chatfield",
    title: "HVAC Services in Ken Caryl, CO | Tailored Air",
    meta: "Local HVAC services in Ken Caryl, CO. Tailored Air is just minutes away in Littleton. Heating, cooling, and 24/7 emergency HVAC repair. Call (720) 296-6008.",
    intro:
      "Tailored Air is Ken Caryl's neighbor. Based just minutes away in Littleton, we provide expert HVAC installation, repair, and maintenance to Ken Caryl homeowners and businesses. When your heating or cooling system needs attention, our team responds quickly with honest service and fair pricing.",
    extra:
      "Ken Caryl sits against the foothills, where wind, dust, and temperature swings work equipment harder than a typical suburb. We service Ken Caryl systems with that climate in mind, from seasonal tune-ups to emergency repair.",
    localCopy:
      "Ken Caryl is minutes from our Littleton shop, so you are calling a neighbor. Ken Caryl homeowners get licensed and insured Colorado HVAC work, an authorized American Standard dealer, honest pricing, and a 5-star rating. We also serve Littleton, Lakewood, Morrison, and Chatfield.",
    priority: 0.7,
  },
];

export const LOCATION_SERVICE_CARDS = [
  {
    slug: "heating",
    title: "Heating Installation & Repair",
    blurb: "Furnaces, boilers, heat pumps, and seasonal maintenance for Colorado winters.",
  },
  {
    slug: "cooling",
    title: "Air Conditioning Installation & Repair",
    blurb: "Central AC, ductless mini-splits, and smart thermostat upgrades.",
  },
  {
    slug: "air-quality",
    title: "Indoor Air Quality",
    blurb: "Purifiers, humidifiers, UV lamps, and CO detectors for healthy indoor air.",
  },
  {
    slug: "water-heaters",
    title: "Water Heater Services",
    blurb: "Traditional and tankless installation, repair, and maintenance.",
  },
  {
    slug: "commercial",
    title: "Commercial HVAC",
    blurb: "Design, installation, upgrades, and maintenance for all property types.",
  },
  {
    slug: "emergency",
    title: "24/7 Emergency Repair",
    blurb: "24/7 emergency repair. When comfort can't wait, we're there fast.",
  },
] as const;

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function locationJsonLd(location: LocationPage) {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: `Tailored Air, ${location.city}, CO`,
    url: getSiteUrl(),
    telephone: "+17202966008",
    email: "hello@tailoredair.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: "CO",
      postalCode: location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    areaServed: { "@type": "City", name: location.city },
    hasMap: "https://maps.app.goo.gl/2PU5vhgZRs3mSjiT9",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "47",
    },
  };
}
