export type ServicePage = {
  slug: string;
  name: string;
  shortName: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
  issues: { title: string; detail: string }[];
};

export const SERVICES: ServicePage[] = [
  {
    slug: "heating",
    name: "Heating",
    shortName: "Heating",
    navLabel: "Heating",
    eyebrow: "Heating",
    h1: "Furnace, Boiler & Heat Pump Service in Littleton",
    title: "Heating Repair & Installation in Littleton, CO",
    description:
      "Furnace, boiler, and heat pump repair, installation, and tune-ups from Tailored Air in Littleton and the Denver metro. Honest diagnostics. American Standard partner.",
    image: "/images/asset-03-ae8061e2e456b77f.jpg",
    imageAlt: "Furnace and heating system service in a Littleton, Colorado home",
    lede: "Colorado winters punish heating systems. We repair the furnace you have, replace it when a repair is no longer the honest answer, and tune it before the first hard freeze so you are not finding out it failed at 2 a.m.",
    sections: [
      {
        heading: "What we work on",
        paragraphs: [
          "Gas furnaces, boilers, and heat pumps in Littleton, Englewood, Highlands Ranch, Lakewood, and the rest of the Denver metro. We install American Standard equipment when a replacement is the right call, and we service every major brand already in the house.",
          "A lot of “you need a new system” quotes we see are actually a failed ignitor, a clogged filter, a cracked flame sensor, or a thermostat that was never set up. We diagnose first and tell you the cheaper option when it will hold.",
        ],
      },
      {
        heading: "When to call before it becomes an emergency",
        paragraphs: [
          "Short-cycling, blowing cold air, new rattles, a yellow burner flame, or a furnace that takes several tries to start are all worth a visit while it is still daylight. Most of those can be diagnosed on the first trip.",
          "If you have no heat at all, call (720) 296-6008. Emergency dispatch is available after hours.",
        ],
      },
    ],
    issues: [
      { title: "No heat", detail: "Ignitor, gas valve, thermostat, or a tripped safety switch." },
      { title: "Short cycling", detail: "Oversized equipment, dirty filter, or a failing limit switch." },
      { title: "Uneven rooms", detail: "Duct issues, a tired blower, or a system that was never balanced." },
      { title: "High bills", detail: "An aging heat exchanger, wrong-size system, or skipped fall tune-ups." },
    ],
  },
  {
    slug: "cooling",
    name: "Cooling",
    shortName: "Cooling",
    navLabel: "Cooling",
    eyebrow: "Cooling",
    h1: "AC Repair & Installation in Littleton and Denver Metro",
    title: "AC Repair & Installation in Littleton, CO",
    description:
      "Central air, ductless mini-splits, and smart thermostat upgrades from Tailored Air. Repair, replacement, and spring tune-ups for Littleton and the Denver metro.",
    image: "/images/asset-04-a0a791afc2f64aec.jpg",
    imageAlt: "Central air conditioning installation and repair in the Denver metro",
    lede: "Denver-metro heat shows up fast. We size cooling for the house you have, repair the system that is already there, and catch weak capacitors and dirty coils in the spring before the first 90-degree day.",
    sections: [
      {
        heading: "Central air and ductless",
        paragraphs: [
          "Central AC replacements, condenser and coil repairs, and ductless mini-splits for additions, garages, and older homes that were never designed for whole-house cooling. Smart thermostat upgrades are part of the same visit when they actually help the system run better.",
          "We do not quote a catalog tonnage and hope it fits. We look at the house, the ducts, and how you use the rooms upstairs.",
        ],
      },
      {
        heading: "Spring tune-ups",
        paragraphs: [
          "A cooling tune-up is the cheapest way to avoid a Saturday failure in July. We check refrigerant, clean what we can reach, test capacitors, and tell you if a part is on its way out while you still have options.",
          "Same-day repair is often available when a unit goes down mid-season. If you have no cooling during a heat wave, call and we will treat it as urgent.",
        ],
      },
    ],
    issues: [
      { title: "Warm air from vents", detail: "Low refrigerant, a failed compressor, or a nest in the outdoor unit." },
      { title: "Ice on the lines", detail: "Airflow problems or a refrigerant leak, not something to keep running." },
      { title: "Short, loud cycles", detail: "A weak capacitor or a system that was oversized for the house." },
      { title: "One hot floor", detail: "Duct design, a tired blower, or a house that needs a mini-split upstairs." },
    ],
  },
  {
    slug: "air-quality",
    name: "Indoor Air Quality",
    shortName: "Air Quality",
    navLabel: "Air Quality",
    eyebrow: "Indoor Air Quality",
    h1: "Indoor Air Quality Solutions in Littleton, CO",
    title: "Indoor Air Quality in Littleton, CO",
    description:
      "Air purifiers, humidifiers, UV lamps, and carbon monoxide detectors from Tailored Air. Cleaner indoor air for Littleton and Denver metro homes.",
    image: "/images/asset-05-172da8b27213500c.jpg",
    imageAlt: "Indoor air quality equipment installed with a home HVAC system",
    lede: "Dry winters, wildfire smoke, and older ductwork all show up in the air you breathe. The same system that heats and cools the house can also filter it, add humidity, and watch for carbon monoxide if it is set up to.",
    sections: [
      {
        heading: "What we install and service",
        paragraphs: [
          "Whole-home air purifiers, humidifiers, UV lamps at the coil, and carbon monoxide detectors tied into the system. We also look at filter setup. A lot of “dusty house” calls are a wrong-size filter or a bypass that was never sealed.",
          "If anyone in the house has allergies, or you notice dust building up faster after a system was replaced, an air-quality visit is usually faster than guessing at retail gadgets.",
        ],
      },
      {
        heading: "Colorado-specific air",
        paragraphs: [
          "Winter humidity in Littleton often sits far below what wood floors, sinuses, and static electricity can tolerate. A correctly sized humidifier on the furnace is a different tool than a portable unit in one bedroom.",
          "Wildfire season is the other spike. Better filtration will not make outdoor air perfect, but it cuts what the system pulls back through the house.",
        ],
      },
    ],
    issues: [
      { title: "Dry air and static", detail: "Furnace heat without a humidifier. Common from November through March." },
      { title: "Dust on every surface", detail: "Filter bypass, leaky returns, or a system that was never commissioned." },
      { title: "Allergy flare-ups", detail: "Better filtration and a coil that is actually clean." },
      { title: "Smoke in the house", detail: "Filtration upgrades during wildfire season, not just closed windows." },
    ],
  },
  {
    slug: "water-heaters",
    name: "Water Heaters",
    shortName: "Water Heaters",
    navLabel: "Water Heaters",
    eyebrow: "Water Heaters",
    h1: "Water Heater Repair & Installation in Littleton",
    title: "Water Heater Repair & Installation in Littleton, CO",
    description:
      "Tank and tankless water heater repair, replacement, and maintenance from Tailored Air in Littleton and the Denver metro. Honest repair-vs-replace advice.",
    image: "/images/asset-06-324c71bdb9b1b626.jpg",
    imageAlt: "Tank and tankless water heater installation in Littleton, Colorado",
    lede: "If you are running out of hot water, hearing popping in the tank, or seeing rust at the base, we will tell you whether a repair or a replacement is the honest next step. We install both traditional tanks and tankless units.",
    sections: [
      {
        heading: "Tank and tankless",
        paragraphs: [
          "Standard tank replacements are often a same-day job when the venting and gas line are already right. Tankless upgrades take more planning — gas load, venting, and electrical — and we handle that work instead of leaving you to coordinate three trades.",
          "Popping, rusty water, or a wet floor under the tank is not something to watch for another winter. A leaking tank does not get better.",
        ],
      },
      {
        heading: "Repair when it still makes sense",
        paragraphs: [
          "Thermostats, heating elements, anode rods, and T&P valves are repairable. We will not sell a new heater because a $40 part failed. We will sell a new heater when the tank is done or the repair will not last.",
        ],
      },
    ],
    issues: [
      { title: "No hot water", detail: "Pilot, element, gas valve, or a tank that has reached the end." },
      { title: "Not enough hot water", detail: "Sediment, a failing element, or a tank that is undersized for the house." },
      { title: "Popping or rumbling", detail: "Sediment on the bottom of the tank. A flush can help if the tank is still sound." },
      { title: "Rust at the base", detail: "The tank is leaking. Replacement, not another anode rod." },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial HVAC",
    shortName: "Commercial",
    navLabel: "Commercial",
    eyebrow: "Commercial",
    h1: "Commercial HVAC in Littleton and the Denver Metro",
    title: "Commercial HVAC in Littleton, CO",
    description:
      "Commercial HVAC installation, repair, upgrades, and maintenance for offices, retail, and light commercial buildings in Littleton and the Denver metro.",
    image: "/images/asset-07-81ca984cc0a5c26c.jpg",
    imageAlt: "Commercial HVAC installation and rooftop unit maintenance in Denver",
    lede: "Offices, retail, and light commercial buildings need systems that stay online during business hours. We design, install, upgrade, and maintain commercial HVAC so tenants and customers are not waiting on a callback.",
    sections: [
      {
        heading: "What “commercial” means here",
        paragraphs: [
          "Rooftop units, split systems, and the controls that keep a small office or shop comfortable. We are not a national facilities vendor. We are the local team you can reach when a RTU dies on a Monday morning.",
          "Maintenance agreements are available if you want seasonal inspections on a schedule instead of discovering a failure when the space is full.",
        ],
      },
      {
        heading: "After-hours and planned work",
        paragraphs: [
          "We can schedule noisy or disruptive work outside of your busiest hours. Emergency commercial repair uses the same (720) 296-6008 line as residential.",
        ],
      },
    ],
    issues: [
      { title: "One zone down", detail: "A failed RTU, a stuck damper, or a thermostat that was overridden." },
      { title: "Hot and cold rooms", detail: "Controls, zoning, or equipment that was never commissioned for the build-out." },
      { title: "After-hours failure", detail: "Call the emergency line. We will tell you what to expect before we roll." },
      { title: "No maintenance history", detail: "A seasonal agreement so filters, belts, and drains are not a surprise." },
    ],
  },
  {
    slug: "emergency",
    name: "Emergency HVAC Repair",
    shortName: "Emergency",
    navLabel: "Emergency",
    eyebrow: "24/7 Emergency",
    h1: "24/7 Emergency HVAC Repair in Littleton, CO",
    title: "24/7 Emergency HVAC Repair in Littleton, CO",
    description:
      "24/7 emergency heating, cooling, and water heater repair from Tailored Air. Call (720) 296-6008. Real people, not a call center. Littleton and Denver metro.",
    image: "/images/asset-08-ae8698982c2864a6.jpg",
    imageAlt: "Emergency HVAC repair technician service in Littleton and Denver metro",
    lede: "No heat, no cooling, or a water heater that just flooded the utility room does not wait for weekday hours. Call (720) 296-6008 any time. You will talk to a real person, not a call center.",
    sections: [
      {
        heading: "What counts as an emergency",
        paragraphs: [
          "No heat when it is below freezing, no cooling during a heat wave, a system that is sparking or smelling like gas, or a water heater that is actively leaking. We also treat a total system failure before a holiday weekend as urgent.",
          "If it can wait until morning without risking pipes, people, or the house, we will say so. We do not invent emergencies to justify a night dispatch.",
        ],
      },
      {
        heading: "What to do while we are on the way",
        paragraphs: [
          "If you smell gas, leave the house and call the gas company as well as us. For no heat, check the thermostat batteries and the furnace switch — it looks like a light switch and gets turned off more often than people think. For a leaking water heater, shut the supply valve if you can reach it safely.",
          "We will tell you what to expect on the phone before a technician is rolling.",
        ],
      },
    ],
    issues: [
      { title: "No heat overnight", detail: "Call. Frozen pipes cost more than an after-hours visit." },
      { title: "No AC in a heat wave", detail: "Especially with kids, elderly family, or a home office that cannot wait." },
      { title: "Water on the floor", detail: "A leaking tank or a failed condensate drain. Shut water off if you can." },
      { title: "Burning smell or sparking", detail: "Shut the system down at the switch and call. Do not keep resetting it." },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export function relatedServices(slug: string) {
  return SERVICES.filter((service) => service.slug !== slug);
}
