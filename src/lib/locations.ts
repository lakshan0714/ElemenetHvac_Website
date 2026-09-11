// Service area data. Populated with real Central PA towns as a starting
// point — confirm this list against the towns actually serviced before
// launch, and avoid adding any town that isn't genuinely covered (no
// low-quality doorway pages).

export interface ServiceLocation {
  slug: string;
  name: string;
  state: string;
  blurb: string;
  /** Approximate town center — used to center the map embed on this page. */
  coords: { lat: number; lng: number };
}

export const locations: ServiceLocation[] = [
  {
    slug: "state-college",
    name: "State College",
    state: "PA",
    blurb:
      "Home to Penn State and a fast-growing mix of established neighborhoods and new construction — we service both older systems and modern high-efficiency installs across State College.",
    coords: { lat: 40.7934, lng: -77.86 },
  },
  {
    slug: "altoona",
    name: "Altoona",
    state: "PA",
    blurb:
      "From the Allegheny Front's older housing stock to newer developments, Altoona homeowners count on us for reliable heating and cooling year-round.",
    coords: { lat: 40.5187, lng: -78.3947 },
  },
  {
    slug: "bellefonte",
    name: "Bellefonte",
    state: "PA",
    blurb:
      "Bellefonte's historic homes often mean older ductwork and legacy systems — our technicians are experienced working with both vintage and modern HVAC setups.",
    coords: { lat: 40.9145, lng: -77.7833 },
  },
  {
    slug: "lewistown",
    name: "Lewistown",
    state: "PA",
    blurb:
      "We provide prompt heating and cooling service throughout Lewistown and the surrounding Juniata Valley communities.",
    coords: { lat: 40.5987, lng: -77.5714 },
  },
  {
    slug: "huntingdon",
    name: "Huntingdon",
    state: "PA",
    blurb:
      "Serving Huntingdon homeowners and local businesses with dependable HVAC repair, installation, and maintenance.",
    coords: { lat: 40.4979, lng: -78.0106 },
  },
  {
    slug: "tyrone",
    name: "Tyrone",
    state: "PA",
    blurb:
      "Fast, honest HVAC service for Tyrone residents — from emergency repairs to full system replacements.",
    coords: { lat: 40.6759, lng: -78.238 },
  },
  {
    slug: "clearfield",
    name: "Clearfield",
    state: "PA",
    blurb:
      "Central Pennsylvania winters are no joke — we help Clearfield homeowners keep their heating systems running reliably all season.",
    coords: { lat: 41.0273, lng: -78.4381 },
  },
  {
    slug: "lock-haven",
    name: "Lock Haven",
    state: "PA",
    blurb:
      "Serving Lock Haven and the surrounding West Branch Susquehanna communities with year-round comfort solutions.",
    coords: { lat: 41.1367, lng: -77.4469 },
  },
];

export function getLocationBySlug(slug: string): ServiceLocation | undefined {
  return locations.find((location) => location.slug === slug);
}
