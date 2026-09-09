export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  category:
    | "Cooling"
    | "Heating"
    | "Installation"
    | "Maintenance"
    | "Air Quality"
    | "Commercial"
    | "Emergency";
  summary: string;
  heroSubhead: string;
  image: {
    /** Path under /public where the real photo should live once generated. */
    src: string;
    alt: string;
    /** Reference prompt for generating a matching photo (e.g. via OpenAI images). */
    prompt: string;
  };
  commonProblems: string[];
  symptoms: string[];
  solution: string;
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  featured?: boolean;
}

const standardProcess: ServiceProcessStep[] = [
  {
    title: "Call or Request Service",
    description:
      "Reach our team by phone or through the online request form. Tell us what's going on and we'll get you on the schedule.",
  },
  {
    title: "Diagnosis & Transparent Estimate",
    description:
      "A licensed technician inspects your system, explains what's happening in plain language, and provides upfront pricing before any work begins.",
  },
  {
    title: "Expert Workmanship",
    description:
      "We complete the job with the discipline and attention to detail our veteran-owned team is built on — no shortcuts, no surprises.",
  },
  {
    title: "Follow-Up & Warranty",
    description:
      "We stand behind our work. You'll know exactly what warranty coverage applies and who to call if you have any follow-up questions.",
  },
];

export const services: Service[] = [
  {
    slug: "ac-repair",
    name: "AC Repair",
    image: {
      src: "/images/services/ac-repair.jpg",
      alt: "Technician diagnosing an outdoor air conditioning unit",
      prompt:
        "Professional commercial photography: a focused HVAC technician kneeling beside an outdoor air conditioning condenser unit in a suburban backyard, using a multimeter to diagnose the system, tool bag open nearby. Warm natural daylight, technician in a clean dark navy uniform, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Cooling",
    summary: "Fast, reliable air conditioning repair to get your home cool again.",
    heroSubhead:
      "When your AC stops working, you need a fix you can trust — not a temporary patch. Our technicians diagnose the real problem and repair it right the first time.",
    commonProblems: [
      "AC blowing warm or room-temperature air",
      "Weak or restricted airflow from vents",
      "Strange noises — grinding, squealing, or banging",
      "Refrigerant leaks or low refrigerant levels",
      "Water pooling around the indoor unit",
      "System short cycling on and off",
      "Thermostat not communicating with the system",
    ],
    symptoms: [
      "Rooms that never quite reach the set temperature",
      "Rising energy bills without a clear cause",
      "The outdoor unit running constantly",
      "Musty odors when the system runs",
    ],
    solution:
      "Our technicians run a full diagnostic to isolate the actual cause of the problem — not just the symptom — before recommending a repair. We explain the issue, walk you through the options, and complete the repair with manufacturer-approved parts and practices.",
    process: standardProcess,
    faqs: [
      {
        question: "How quickly can you repair my air conditioner?",
        answer:
          "In most cases we can diagnose the issue same-day. Many common AC repairs are completed in a single visit once parts are on hand.",
      },
      {
        question: "Is it worth repairing an older AC unit?",
        answer:
          "It depends on the age of the system, the cost of the repair, and its efficiency rating. We'll give you an honest recommendation on repair versus replacement — never a pressured upsell.",
      },
    ],
    featured: true,
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    image: {
      src: "/images/services/ac-installation.jpg",
      alt: "Technicians installing a new outdoor air conditioning unit",
      prompt:
        "Professional commercial photography: two HVAC technicians carefully installing a new outdoor air conditioning condenser unit on a concrete pad beside a house, one leveling the unit. Warm natural daylight, technicians in clean dark navy uniforms, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Installation",
    summary:
      "Professional installation of new, energy-efficient air conditioning systems.",
    heroSubhead:
      "A properly sized and installed air conditioner is the foundation of a comfortable home. We handle the full installation with precision and care.",
    commonProblems: [
      "Moving into a home without central air conditioning",
      "Adding cooling to a room addition",
      "Upgrading from window units to central air",
      "Replacing an undersized or mismatched system",
    ],
    symptoms: [
      "Uneven cooling between rooms",
      "A system that's too small — or too large — for the space",
      "Outdated equipment that no longer meets efficiency standards",
    ],
    solution:
      "We perform a proper load calculation for your home before recommending equipment — not a one-size-fits-all quote. That means correctly sized ductwork, refrigerant lines, and equipment matched to your home's actual cooling needs.",
    process: standardProcess,
    faqs: [
      {
        question: "How do you determine the right size AC for my home?",
        answer:
          "We evaluate square footage, insulation, window exposure, ductwork, and local climate factors using an industry-standard load calculation — not a rough estimate.",
      },
      {
        question: "How long does a new AC installation take?",
        answer:
          "Most straightforward installations are completed in a single day. More complex installs involving ductwork changes may take longer, which we'll outline in your estimate.",
      },
    ],
    featured: true,
  },
  {
    slug: "ac-replacement",
    name: "AC Replacement",
    image: {
      src: "/images/services/ac-replacement.jpg",
      alt: "Technician replacing an old outdoor air conditioning unit with a new one",
      prompt:
        "Professional commercial photography: an HVAC technician removing an old outdoor air conditioner unit from a concrete pad while a new energy-efficient unit waits nearby in a suburban backyard. Warm natural daylight, technician in a clean dark navy uniform, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Installation",
    summary:
      "Replace an aging or failing air conditioner with a modern, efficient system.",
    heroSubhead:
      "When repairs no longer make sense, we make replacing your air conditioner straightforward — with honest guidance and clean installation.",
    commonProblems: [
      "Frequent repairs on an aging system",
      "Rising utility bills from declining efficiency",
      "A system using outdated or discontinued refrigerant",
      "An AC unit older than 12–15 years",
    ],
    symptoms: [
      "Repair costs approaching the price of a new system",
      "Inconsistent cooling despite recent repairs",
      "Higher humidity indoors than expected",
    ],
    solution:
      "We help you weigh repair versus replacement honestly, then handle the full removal of the old system and installation of the new one — including proper disposal and a clean, code-compliant setup.",
    process: standardProcess,
    faqs: [
      {
        question: "How do I know if I need a repair or a full replacement?",
        answer:
          "As a general guideline, if your system is over 12–15 years old and facing a costly repair, replacement is often the more economical choice long-term. We'll walk through the numbers with you directly.",
      },
      {
        question: "Will a new system lower my energy bills?",
        answer:
          "Modern, correctly sized systems are significantly more efficient than older equipment, which typically translates into lower monthly cooling costs.",
      },
    ],
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    image: {
      src: "/images/services/heating-repair.jpg",
      alt: "Technician inspecting an indoor furnace unit",
      prompt:
        "Professional commercial photography: an HVAC technician inspecting an indoor furnace unit in a home utility room or basement, using a flashlight and hand tools. Warm indoor lighting, technician in a clean dark navy uniform, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Heating",
    summary: "Dependable heating repair when your home needs it most.",
    heroSubhead:
      "A heating system that fails in the cold isn't just inconvenient — it's a safety concern. We respond quickly and repair the issue correctly.",
    commonProblems: [
      "No heat or insufficient heat output",
      "Thermostat not triggering the system",
      "Strange smells or sounds during operation",
      "Pilot light or ignition failures",
      "Uneven heating throughout the home",
    ],
    symptoms: [
      "Rooms that stay cold no matter the thermostat setting",
      "The system cycling on and off rapidly",
      "A noticeable spike in heating costs",
    ],
    solution:
      "Our technicians safely diagnose heating systems — gas, electric, or heat pump — and repair the root cause using manufacturer-approved parts and procedures.",
    process: standardProcess,
    faqs: [
      {
        question: "Is a heating system that smells unusual dangerous?",
        answer:
          "Any unusual burning smell, or a smell of gas, should be treated seriously. Turn off the system, ventilate the area, and call us right away for an inspection.",
      },
      {
        question: "Do you repair all types of heating systems?",
        answer:
          "Our technicians service furnaces, heat pumps, and other common residential heating equipment.",
      },
    ],
    featured: true,
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    image: {
      src: "/images/services/furnace-repair.jpg",
      alt: "Close-up of a technician repairing furnace components",
      prompt:
        "Professional commercial photography: close-up of an HVAC technician's hands adjusting the internal components of an open furnace unit, tools laid out on a cloth nearby, focused expression. Warm indoor lighting, technician in a clean dark navy uniform, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Heating",
    summary: "Expert furnace diagnostics and repair to restore reliable heat.",
    heroSubhead:
      "From ignition problems to airflow issues, our technicians diagnose furnace problems accurately and repair them with lasting results.",
    commonProblems: [
      "Furnace won't ignite or stay lit",
      "Blower running constantly or not at all",
      "Frequent cycling on and off",
      "Cold air blowing instead of heat",
      "Unusual noises during startup or operation",
    ],
    symptoms: [
      "Higher gas or electric bills without explanation",
      "Yellow or flickering pilot light instead of blue",
      "Dust or a burning smell when the furnace runs",
    ],
    solution:
      "We inspect the ignition system, heat exchanger, blower motor, and safety controls to find the true cause of the problem, then repair it following manufacturer specifications.",
    process: standardProcess,
    faqs: [
      {
        question: "How often should a furnace be serviced?",
        answer:
          "Most manufacturers recommend annual furnace maintenance, ideally before the heating season begins, to catch small issues before they become failures.",
      },
      {
        question: "Can a furnace repair wait until morning?",
        answer:
          "For safety-related issues like gas smells or carbon monoxide concerns, do not wait — leave the home and call emergency services and our team immediately.",
      },
    ],
  },
  {
    slug: "furnace-installation",
    name: "Furnace Installation",
    image: {
      src: "/images/services/furnace-installation.jpg",
      alt: "Technician installing a new furnace unit",
      prompt:
        "Professional commercial photography: an HVAC technician installing a new furnace unit in a clean home basement or utility closet, ductwork visible, organized tools nearby. Warm indoor lighting, technician in a clean dark navy uniform, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Installation",
    summary: "Precision furnace installation built around your home's heating needs.",
    heroSubhead:
      "Your furnace is the core of your home's winter comfort. We install it correctly the first time, with proper sizing and safety checks.",
    commonProblems: [
      "Replacing an aging or inefficient furnace",
      "Installing heat in a new construction or addition",
      "Upgrading from an oversized or undersized unit",
    ],
    symptoms: [
      "A furnace that short-cycles due to incorrect sizing",
      "Rooms far from the furnace staying noticeably cooler",
      "Old equipment no longer meeting efficiency standards",
    ],
    solution:
      "We calculate the correct heating load for your home, recommend appropriately sized equipment, and install it to manufacturer and code specifications — including proper venting and safety controls.",
    process: standardProcess,
    faqs: [
      {
        question: "How long does furnace installation take?",
        answer:
          "A standard replacement is typically completed in a single day. New installations involving ductwork or venting changes may take longer.",
      },
      {
        question: "What efficiency rating should I choose?",
        answer:
          "We'll walk you through the tradeoffs between standard and high-efficiency furnaces based on your climate, usage, and budget.",
      },
    ],
  },
  {
    slug: "heat-pump-services",
    name: "Heat Pump Services",
    image: {
      src: "/images/services/heat-pump-services.jpg",
      alt: "Technician servicing an outdoor heat pump unit",
      prompt:
        "Professional commercial photography: an HVAC technician servicing an outdoor heat pump unit with a light dusting of frost, checking a pressure gauge, cold-weather suburban setting. Crisp natural daylight, technician in a clean dark navy uniform, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Heating",
    summary: "Installation, repair, and maintenance for heat pump systems.",
    heroSubhead:
      "Heat pumps provide efficient heating and cooling in one system — when they're installed and maintained correctly. We handle both.",
    commonProblems: [
      "Heat pump running but not heating or cooling effectively",
      "Ice buildup on the outdoor unit",
      "System stuck in defrost mode",
      "Reduced efficiency over time",
    ],
    symptoms: [
      "Higher-than-expected energy bills",
      "Weak airflow from vents",
      "The outdoor unit running excessively",
    ],
    solution:
      "We diagnose and service heat pump systems including refrigerant charge, defrost cycles, and electrical components, and can also design and install a new heat pump system sized to your home.",
    process: standardProcess,
    faqs: [
      {
        question: "Do heat pumps work well in cold climates?",
        answer:
          "Modern heat pumps are designed to perform efficiently across a wide range of temperatures, though performance varies by model — we can help you choose the right equipment for your climate.",
      },
      {
        question: "Is a heat pump cheaper to run than a furnace?",
        answer:
          "Operating costs depend on local energy prices, climate, and the specific equipment. We can help you compare options based on your situation.",
      },
    ],
  },
  {
    slug: "hvac-installation",
    name: "HVAC Installation",
    image: {
      src: "/images/services/hvac-installation.jpg",
      alt: "Technicians installing a complete residential HVAC system",
      prompt:
        "Professional commercial photography: two HVAC technicians installing a complete residential HVAC system, indoor air handler and outdoor condenser unit both visible, modern suburban home. Warm natural daylight, technicians in clean dark navy uniforms, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Installation",
    summary: "Complete heating and cooling system installation for your home.",
    heroSubhead:
      "Whether you need a full system for new construction or a complete overhaul, we design and install HVAC systems built for long-term reliability.",
    commonProblems: [
      "New construction without an HVAC system",
      "Major additions requiring expanded capacity",
      "Replacing multiple aging components at once",
    ],
    symptoms: [
      "No existing heating or cooling infrastructure",
      "A patchwork of mismatched, inefficient equipment",
    ],
    solution:
      "We design a complete heating and cooling solution around your home's layout, insulation, and usage patterns, then install every component to code.",
    process: standardProcess,
    faqs: [
      {
        question: "Do you handle both heating and cooling installation together?",
        answer:
          "Yes. We design and install complete systems, coordinating heating and cooling equipment so they work together efficiently.",
      },
    ],
  },
  {
    slug: "hvac-replacement",
    name: "HVAC Replacement",
    image: {
      src: "/images/services/hvac-replacement.jpg",
      alt: "Technician reviewing a completed HVAC system replacement",
      prompt:
        "Professional commercial photography: an HVAC technician standing next to a newly installed modern HVAC outdoor unit, clipboard in hand reviewing a completed installation checklist, suburban backyard. Warm natural daylight, technician in a clean dark navy uniform, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Installation",
    summary:
      "Full system replacement when it's time to upgrade your heating and cooling.",
    heroSubhead:
      "When your whole system has reached the end of its life, we make replacing it straightforward from estimate to final walkthrough.",
    commonProblems: [
      "An aging system with declining performance across the board",
      "Rising repair frequency and cost",
      "Outdated equipment that no longer meets efficiency needs",
    ],
    symptoms: [
      "Multiple components failing within a short window",
      "A noticeable jump in monthly utility costs",
      "Inconsistent comfort despite repairs",
    ],
    solution:
      "We evaluate your whole system, recommend right-sized replacement equipment, and manage the full removal and installation process with minimal disruption to your home.",
    process: standardProcess,
    faqs: [
      {
        question: "Can I replace just the outdoor unit and keep the indoor unit?",
        answer:
          "In some cases, but mismatched systems often run less efficiently and can void manufacturer warranties. We'll advise honestly based on your specific equipment.",
      },
    ],
  },
  {
    slug: "hvac-maintenance",
    name: "HVAC Maintenance",
    image: {
      src: "/images/services/hvac-maintenance.jpg",
      alt: "Technician performing a seasonal maintenance tune-up",
      prompt:
        "Professional commercial photography: an HVAC technician performing a seasonal maintenance tune-up on an outdoor condenser unit, cleaning the coils, tool kit open on the ground beside them. Warm natural daylight, technician in a clean dark navy uniform, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Maintenance",
    summary: "Seasonal tune-ups and maintenance plans that prevent costly breakdowns.",
    heroSubhead:
      "Routine maintenance is the single best way to avoid emergency breakdowns and extend the life of your system.",
    commonProblems: [
      "Systems that haven't been serviced in over a year",
      "Reduced efficiency from dirty coils or filters",
      "Small issues that go unnoticed until they cause a failure",
    ],
    symptoms: [
      "Gradually rising energy bills",
      "Reduced airflow or comfort",
      "A system nearing the end of its warranty without a service record",
    ],
    solution:
      "Our maintenance visits include a full system inspection, cleaning, and tune-up designed to catch small problems early and keep your system running at peak efficiency.",
    process: standardProcess,
    faqs: [
      {
        question: "How often should HVAC maintenance be scheduled?",
        answer:
          "We recommend servicing your cooling system in spring and your heating system in fall — once each, before the season of heavy use begins.",
      },
      {
        question: "Do you offer a maintenance plan?",
        answer:
          "Yes — ask our team about ongoing maintenance plan options for your home.",
      },
    ],
    featured: true,
  },
  {
    slug: "emergency-hvac",
    name: "Emergency HVAC Service",
    image: {
      src: "/images/services/emergency-hvac.jpg",
      alt: "Technician arriving for an emergency HVAC call at dusk",
      prompt:
        "Professional commercial photography: an HVAC technician arriving at a home's front door at dusk with a tool bag, service van with warm headlights visible in the driveway. Cinematic blue-hour lighting, technician in a clean dark navy uniform, urgent but professional and reassuring mood, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Emergency",
    summary: "24/7 emergency heating and cooling repair when you need it most.",
    heroSubhead:
      "HVAC failures don't wait for business hours. Neither do we. Our team is available around the clock for urgent heating and cooling issues.",
    commonProblems: [
      "No heat during freezing temperatures",
      "No cooling during extreme heat",
      "Gas smells or suspected carbon monoxide issues",
      "Complete system failure",
    ],
    symptoms: [
      "A home that's becoming unsafe due to extreme temperatures",
      "A system that has stopped working entirely with no warning",
    ],
    solution:
      "Call us any time, day or night. We prioritize emergency calls and dispatch a technician to diagnose and stabilize the situation as quickly as possible.",
    process: standardProcess,
    faqs: [
      {
        question: "What counts as an HVAC emergency?",
        answer:
          "Complete loss of heat in freezing weather, complete loss of cooling in extreme heat, gas odors, or any safety-related system failure should be treated as an emergency.",
      },
      {
        question: "Is emergency service available on weekends and holidays?",
        answer:
          "Yes, our emergency line is available 24/7, including weekends and holidays.",
      },
    ],
    featured: true,
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality",
    image: {
      src: "/images/services/indoor-air-quality.jpg",
      alt: "Technician installing a whole-home air purifier",
      prompt:
        "Professional commercial photography: an HVAC technician installing a whole-home air purifier or humidifier unit next to a furnace in a clean, bright utility room. Soft natural light, technician in a clean dark navy uniform, confident and trustworthy demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Air Quality",
    summary: "Air purification, filtration, and humidity control for a healthier home.",
    heroSubhead:
      "The air inside your home affects your family's comfort and health every day. We help you improve it with proven solutions.",
    commonProblems: [
      "Excess dust throughout the home",
      "Humidity that's too high or too low",
      "Allergy or respiratory irritation indoors",
      "Lingering odors circulated by the HVAC system",
    ],
    symptoms: [
      "Family members experiencing indoor allergy symptoms",
      "Visible dust buildup shortly after cleaning",
      "Sticky or overly dry indoor air depending on season",
    ],
    solution:
      "We assess your home's air quality needs and recommend appropriate solutions — including filtration upgrades, air purifiers, and humidity control equipment integrated with your existing system.",
    process: standardProcess,
    faqs: [
      {
        question:
          "What's the difference between a standard filter and a whole-home air purifier?",
        answer:
          "A standard filter protects your equipment and captures larger particles. A whole-home air purifier is a dedicated system designed to more thoroughly treat the air circulating through your home.",
      },
    ],
  },
  {
    slug: "ductwork-services",
    name: "Ductwork Services",
    image: {
      src: "/images/services/ductwork-services.jpg",
      alt: "Technician inspecting and sealing home ductwork",
      prompt:
        "Professional commercial photography: an HVAC technician inspecting exposed ductwork in a home attic or basement using a flashlight, sealing a duct joint with tape. Warm directional lighting, technician in a clean dark navy uniform, focused expression, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Maintenance",
    summary: "Duct inspection, sealing, repair, and installation for efficient airflow.",
    heroSubhead:
      "Leaky or poorly designed ductwork can undermine even the best HVAC equipment. We inspect, repair, and optimize your duct system.",
    commonProblems: [
      "Uneven temperatures between rooms",
      "Visible or audible air leaks at duct joints",
      "Excessive dust from duct leakage pulling in attic or crawlspace air",
      "Old, damaged, or undersized ductwork",
    ],
    symptoms: [
      "Rooms far from the air handler that are hard to heat or cool",
      "Noticeably higher energy bills relative to system size",
      "Visible duct damage or disconnected sections",
    ],
    solution:
      "We inspect your ductwork for leaks, damage, and design issues, then perform sealing, repair, or replacement to restore proper airflow throughout your home.",
    process: standardProcess,
    faqs: [
      {
        question: "How do I know if my ductwork has leaks?",
        answer:
          "Signs include uneven room temperatures, higher bills, and visible gaps or disconnected sections in accessible ductwork. A professional inspection gives a definitive answer.",
      },
    ],
  },
  {
    slug: "thermostat-installation",
    name: "Thermostat Installation",
    image: {
      src: "/images/services/thermostat-installation.jpg",
      alt: "Technician mounting a smart thermostat on a wall",
      prompt:
        "Professional commercial photography: close-up of an HVAC technician mounting a modern smart thermostat on a wall in a bright hallway, small screwdriver in hand. Soft natural light, technician in a clean dark navy uniform, precise and attentive demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Installation",
    summary:
      "Smart and programmable thermostat installation for better comfort and control.",
    heroSubhead:
      "A modern thermostat gives you more control over comfort and efficiency. We install and configure it to work seamlessly with your system.",
    commonProblems: [
      "Outdated thermostats with limited scheduling",
      "Thermostats incompatible with newer HVAC equipment",
      "Inaccurate temperature readings",
    ],
    symptoms: [
      "A thermostat that doesn't hold the set temperature",
      "No ability to schedule or remotely control the system",
    ],
    solution:
      "We help you choose a thermostat compatible with your system, then handle the installation and configuration so it works correctly from day one.",
    process: standardProcess,
    faqs: [
      {
        question: "Will a smart thermostat work with my existing HVAC system?",
        answer:
          "Compatibility depends on your system type and wiring. We verify compatibility before recommending a specific model.",
      },
    ],
  },
  {
    slug: "commercial-hvac",
    name: "Commercial HVAC",
    image: {
      src: "/images/services/commercial-hvac.jpg",
      alt: "Technician servicing a rooftop commercial HVAC unit",
      prompt:
        "Professional commercial photography: an HVAC technician on a rooftop servicing a large commercial HVAC unit, business park or city skyline in the background, daytime. Bright natural daylight, technician in a clean dark navy uniform with safety gear, confident and professional demeanor, shallow depth of field, high resolution, editorial quality, no visible text, logos, or brand names, 4:3 aspect ratio.",
    },
    category: "Commercial",
    summary: "Reliable heating and cooling service for commercial properties.",
    heroSubhead:
      "Downtime costs money. We provide commercial HVAC service built around minimizing disruption to your business.",
    commonProblems: [
      "Rooftop unit failures affecting business operations",
      "Uneven comfort across a commercial space",
      "Aging commercial equipment nearing end of life",
      "Inconsistent maintenance history",
    ],
    symptoms: [
      "Customer or employee complaints about comfort",
      "Rising utility costs across a commercial property",
      "Equipment reaching or exceeding its expected service life",
    ],
    solution:
      "We service, repair, and install commercial HVAC equipment with attention to your business's schedule and operational needs, minimizing disruption wherever possible.",
    process: standardProcess,
    faqs: [
      {
        question: "Do you offer maintenance contracts for commercial properties?",
        answer:
          "Yes — contact our team to discuss a maintenance plan tailored to your property and equipment.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured);
}
