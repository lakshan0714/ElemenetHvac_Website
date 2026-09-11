// Service area data. Populated with real Central PA towns as a starting
// point — confirm this list against the towns actually serviced before
// launch, and avoid adding any town that isn't genuinely covered (no
// low-quality doorway pages).

export interface ServiceLocation {
  slug: string;
  name: string;
  state: string;
  blurb: string;
}

export const locations: ServiceLocation[] = [
  {
    slug: "state-college",
    name: "State College",
    state: "PA",
    blurb:
      "Home to Penn State and a fast-growing mix of established neighborhoods and new construction — we service both older systems and modern high-efficiency installs across State College.",
  },
  {
    slug: "altoona",
    name: "Altoona",
    state: "PA",
    blurb:
      "From the Allegheny Front's older housing stock to newer developments, Altoona homeowners count on us for reliable heating and cooling year-round.",
  },
  {
    slug: "bellefonte",
    name: "Bellefonte",
    state: "PA",
    blurb:
      "Bellefonte's historic homes often mean older ductwork and legacy systems — our technicians are experienced working with both vintage and modern HVAC setups.",
  },
  {
    slug: "lewistown",
    name: "Lewistown",
    state: "PA",
    blurb:
      "We provide prompt heating and cooling service throughout Lewistown and the surrounding Juniata Valley communities.",
  },
  {
    slug: "huntingdon",
    name: "Huntingdon",
    state: "PA",
    blurb:
      "Serving Huntingdon homeowners and local businesses with dependable HVAC repair, installation, and maintenance.",
  },
  {
    slug: "tyrone",
    name: "Tyrone",
    state: "PA",
    blurb:
      "Fast, honest HVAC service for Tyrone residents — from emergency repairs to full system replacements.",
  },
  {
    slug: "clearfield",
    name: "Clearfield",
    state: "PA",
    blurb:
      "Central Pennsylvania winters are no joke — we help Clearfield homeowners keep their heating systems running reliably all season.",
  },
  {
    slug: "lock-haven",
    name: "Lock Haven",
    state: "PA",
    blurb:
      "Serving Lock Haven and the surrounding West Branch Susquehanna communities with year-round comfort solutions.",
  },
];

export function getLocationBySlug(slug: string): ServiceLocation | undefined {
  return locations.find((location) => location.slug === slug);
}
