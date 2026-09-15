export type ServicePoint = {
  title: string;
  body: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  navLabel: string;
  number: string;
  image: string;
  imageAlt: string;
  description: string;
  intro: string;
  points: ServicePoint[];
};

export const services: ServicePage[] = [
  {
    slug: "heating",
    title: "Heating",
    navLabel: "Heating",
    number: "01",
    image: "/images/asset-03-ae8061e2e456b77f.jpg",
    imageAlt: "HVAC heating system installation and repair in Littleton CO",
    description:
      "Furnace, boiler, and heat pump installation, repair, and seasonal maintenance for Littleton and the Denver metro area.",
    intro:
      "Colorado winters do not leave much room for a system that is almost working. Tailored Air installs, repairs, and maintains the heating equipment that keeps Littleton and Denver metro homes comfortable when temperatures drop, with honest recommendations and workmanship we would stand behind in our own houses.",
    points: [
      {
        title: "Furnaces",
        body: "Repair, replacement, and high-efficiency upgrades for gas furnaces, including the diagnostics that tell you whether a fix or a new system is the smarter spend.",
      },
      {
        title: "Boilers",
        body: "Hydronic heat done right: leak tracing, circulator issues, and replacements sized for the home instead of whatever is sitting on the truck.",
      },
      {
        title: "Heat pumps",
        body: "Modern heat pumps that handle Colorado shoulder seasons and, with the right setup, take a real load off your furnace through the year.",
      },
      {
        title: "Seasonal maintenance",
        body: "Tune-ups before the first hard freeze so you are not finding a problem at 9 p.m. on the coldest night of the year.",
      },
    ],
  },
  {
    slug: "cooling",
    title: "Cooling",
    navLabel: "Cooling",
    number: "02",
    image: "/images/asset-04-a0a791afc2f64aec.jpg",
    imageAlt: "Air conditioning installation and repair Denver metro",
    description:
      "Central air, ductless mini-splits, and smart thermostat upgrades for Littleton and the Denver metro area.",
    intro:
      "Denver summers can sneak up on a house that was built for winter. We design and service cooling systems that keep indoor temperatures even, keep humidity in check, and do not send the electric bill through the roof.",
    points: [
      {
        title: "Central air",
        body: "Installation, repair, and replacement of central AC systems matched to your ductwork, insulation, and how the house actually lives, not a one-size square-footage guess.",
      },
      {
        title: "Ductless mini-splits",
        body: "Room-by-room comfort for additions, finished basements, and homes where running new ductwork would be more disruption than it is worth.",
      },
      {
        title: "Smart thermostats",
        body: "Upgrades that make an existing system easier to live with, from scheduling to remote control, without a pile of unused features.",
      },
      {
        title: "Seasonal cooling service",
        body: "Spring checkups so the first 90-degree day is not when you find out the condenser is not going to keep up.",
      },
    ],
  },
  {
    slug: "air-quality",
    title: "Air Quality",
    navLabel: "Air Quality",
    number: "03",
    image: "/images/asset-05-172da8b27213500c.jpg",
    imageAlt: "Indoor air quality solutions Littleton Colorado",
    description:
      "Indoor air quality solutions including purifiers, humidifiers, UV lamps, and CO detectors in Littleton and Denver metro.",
    intro:
      "Comfort is more than temperature. Dry winter air, wildfire smoke, dust, and closed-up houses all show up in how you feel at home. Tailored Air helps you treat the air itself, not just heat and cool it.",
    points: [
      {
        title: "Purifiers and filtration",
        body: "Whole-home filtration and air cleaning options that catch the fine dust and allergens a standard filter never will.",
      },
      {
        title: "Humidifiers",
        body: "Whole-home humidification that takes the edge off Colorado winters, protecting woodwork, sinuses, and static-prone rooms.",
      },
      {
        title: "UV lamps",
        body: "Ultraviolet treatment at the system to reduce biological growth on coils and help keep the air path cleaner between filter changes.",
      },
      {
        title: "CO detectors",
        body: "Carbon monoxide protection installed and placed the way it should be, because this is not a place to guess.",
      },
    ],
  },
  {
    slug: "water-heaters",
    title: "Water Heaters",
    navLabel: "Water Heaters",
    number: "04",
    image: "/images/asset-06-324c71bdb9b1b626.jpg",
    imageAlt: "Water heater installation and repair Littleton CO",
    description:
      "Traditional and tankless water heater installation, repair, and maintenance in Littleton, CO and the Denver metro area.",
    intro:
      "Hot water should be boring. When a tank starts leaking or a tankless unit errors out, Tailored Air repairs or replaces it with the same straightforward approach we bring to heating and cooling: explain the options, price it fairly, and do the job once.",
    points: [
      {
        title: "Traditional tanks",
        body: "Repair when it still makes sense, and replacement when rust, age, or a leak means you would only be buying time.",
      },
      {
        title: "Tankless systems",
        body: "On-demand water heaters for homes that want a smaller footprint and a steady supply, sized and vented correctly for the load.",
      },
      {
        title: "Repairs",
        body: "Thermostats, heating elements, anode rods, igniters, and the other parts that fail long before the tank itself is done.",
      },
      {
        title: "Maintenance",
        body: "Flushes and checkups that stretch the life of the unit and keep you from discovering sediment the hard way.",
      },
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    navLabel: "Commercial",
    number: "05",
    image: "/images/asset-07-81ca984cc0a5c26c.jpg",
    imageAlt: "Commercial HVAC installation and maintenance Denver",
    description:
      "Commercial HVAC design, installation, upgrades, and maintenance for properties in Littleton and the Denver metro area.",
    intro:
      "A tenant, a shop floor, or an office does not wait on a comfort issue the way a house might. We design, install, upgrade, and maintain commercial HVAC with an eye on downtime, serviceability, and equipment that matches how the building is actually used.",
    points: [
      {
        title: "Design and installation",
        body: "New systems and replacements planned around occupancy, hours, and the realities of the space, not a catalog page.",
      },
      {
        title: "Upgrades",
        body: "Efficiency and control upgrades that cut operating cost without a full rip-and-replace when the bones of the system are still sound.",
      },
      {
        title: "Maintenance agreements",
        body: "Scheduled service so filters, belts, and refrigerant issues get caught on a Tuesday instead of during a Friday rush.",
      },
      {
        title: "All property types",
        body: "Retail, offices, light industrial, and mixed-use spaces across Littleton and the greater Denver metro.",
      },
    ],
  },
  {
    slug: "emergency",
    title: "Emergency",
    navLabel: "Emergency",
    number: "06",
    image: "/images/asset-08-ae8698982c2864a6.jpg",
    imageAlt: "24/7 emergency HVAC repair Littleton and Denver metro",
    description:
      "24/7 emergency HVAC repair in Littleton, CO and the Denver metro area. Call (720) 296-6008.",
    intro:
      "Heat that dies at midnight and AC that quits on a holiday weekend are not scheduling problems. Tailored Air offers 24/7 emergency repair so you talk to a real person, get a tech moving, and get the system back to safe and livable as fast as the job allows.",
    points: [
      {
        title: "Anytime response",
        body: "Call (720) 296-6008 day or night. HVAC emergencies do not wait for business hours, and neither do we.",
      },
      {
        title: "No call-center runaround",
        body: "You reach the team that will actually show up, not a switchboard reading from a script.",
      },
      {
        title: "Honest triage",
        body: "We stabilize what we can on the first visit and tell you plainly if a part, a return trip, or a replacement is the right next step.",
      },
      {
        title: "After the emergency",
        body: "Once you are comfortable again, we can talk maintenance so the next failure is less likely to land at 2 a.m.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
