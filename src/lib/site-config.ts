// Central business data. Replace every [BRACKETED] placeholder with real
// business information before launch. Nothing here is invented — anything
// unknown is left as an explicit placeholder rather than guessed.

export const siteConfig = {
  name: "Element HVAC",
  legalName: "Element HVAC",
  shortName: "Element",
  tagline: "Veteran-Owned. Built on Integrity.",
  description:
    "Element HVAC is a veteran-owned and operated company delivering dependable heating, cooling, and indoor comfort solutions. With more than 25 years of combined experience, our team brings integrity, discipline, and expert craftsmanship to every job.",

  yearsExperience: "25+",
  yearsExperienceLabel: "25+ Years Combined Experience",
  veteranOwned: true,

  phone: "814-574-3960",
  phoneHref: "tel:+18145743960",
  // No public contact email provided yet — the contact form is the primary
  // digital contact channel until one is added.
  email: "",

  address: {
    line1: "[STREET ADDRESS]",
    city: "Central Pennsylvania",
    state: "PA",
    zip: "[ZIP CODE]",
    // Set to true if there is a public storefront/office. Many HVAC
    // contractors are service-area-only with no walk-in location.
    hasStorefront: false,
  },

  license: {
    label: "PA HVAC License #[LICENSE NUMBER]",
    number: "[LICENSE NUMBER]",
  },

  social: {
    // TODO: add the real Facebook page URL — the Facebook link only
    // renders once this is filled in.
    facebook: "",
    instagram: "",
    google: "",
  },

  google: {
    rating: "[GOOGLE RATING]",
    reviewCount: "[REVIEW COUNT]",
    url: "",
  },

  hours: {
    office: "Mon–Fri, 8:00 AM – 6:00 PM",
    emergency: "24/7 Emergency Service Available",
  },

  serviceAreas: ["Central Pennsylvania", "Surrounding Areas"],

  financingPartner: "[FINANCING PARTNER NAME]",

  nav: [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Financing", href: "/#financing" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
