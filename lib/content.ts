// Single source of truth for all copy. Service text is taken verbatim from the company brochure.

export const company = {
  name: "EKVEERA INFRA PROJECTS LLP",
  short: "Ekveera Infra Projects LLP",
  tagline: "Luxury in Every Structure",
  statement: "Build with Confidence",
  director: "Yash Sudhir Walhekar",
  role: "Director",
  address: ["Ekveera Heights, Gurudwara Walhekarwadi Road,", "Walhekarwadi, Chinchwad, Pune"],
  phone: "+91 9322130674",
  phoneHref: "tel:+919322130674",
  whatsapp: "https://wa.me/919322130674",
  email: "ekveerainfraprojectsllp@gmail.com",
  maps: "https://www.google.com/maps/search/?api=1&query=Ekveera+Heights+Gurudwara+Walhekarwadi+Road+Chinchwad+Pune",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export type Service = { no: string; title: string; img: string; points: string[] };
export type Group = { key: string; title: string; intro: string; services: Service[] };

export const groups: Group[] = [
  {
    key: "A",
    title: "Foundation & Structure",
    intro: "The ground, the frame and the envelope that protects it.",
    services: [
      { no: "01", title: "Earthwork", img: "earthwork", points: ["Site clearing, foundation excavation, pits and trenches", "Backfilling, murum filling, compaction and rubble soling", "Anti-termite treatment and sub-base preparation"] },
      { no: "02", title: "RCC & Structural Work", img: "rcc", points: ["Reinforcement steel and RCC structural construction", "Footings, columns, beams, slabs and staircases", "Concrete and Tremix work where specified"] },
      { no: "03", title: "Masonry & Plaster", img: "masonry", points: ["Blockwork and masonry partitions", "Internal gypsum, sanala and tar plaster", "External sand-face plaster and finishing"] },
      { no: "04", title: "Waterproofing", img: "waterproofing", points: ["Basement rafts, lift pits and retaining walls", "Toilets, balconies, terraces and refuge areas", "Shahabad, brickbat, chemical and tank waterproofing"] },
    ],
  },
  {
    key: "B",
    title: "Architectural Finishes",
    intro: "The surfaces, openings and details people live with every day.",
    services: [
      { no: "05", title: "Doors & Woodwork", img: "doors", points: ["Main, bedroom, toilet, balcony and staircase doors", "Service-shaft and fire-rated doors", "Frames, fittings, hardware and carpentry"] },
      { no: "06", title: "Windows & Sliding Doors", img: "windows", points: ["Aluminium windows and sliding doors", "Rolling shutters and glazed entrance doors", "Associated hardware and fittings"] },
      { no: "07", title: "Flooring & Tiling", img: "flooring", points: ["Floor and wall tiling, interior and exterior", "Granite, marble and natural stone installation", "Skirting, thresholds and finishing"] },
      { no: "08", title: "MS & SS Fabrication", img: "fabrication", points: ["Mild-steel and stainless-steel grills and railings", "Metal fabrication and associated fixtures", "Polycarbonate sheet installations"] },
    ],
  },
  {
    key: "C",
    title: "Services & Systems",
    intro: "The finishes and building systems that make a structure work.",
    services: [
      { no: "09", title: "Painting & Polishing", img: "painting", points: ["Internal and external painting systems", "Surface preparation, putty, primer and coatings", "Polishing and decorative finishes"] },
      { no: "10", title: "Plumbing & Drainage", img: "plumbing", points: ["Water supply, sanitary and drainage pipework", "Down-take lines and related installations", "CP and sanitary fittings"] },
      { no: "11", title: "Electrical Work", img: "electrical", points: ["Internal conduits, wiring and distribution", "Switches, fixtures and common-area provisions", "Testing as per approved electrical designs"] },
      { no: "12", title: "Lift Work", img: "lift", points: ["Lift-related civil works and shaft coordination", "Lift installation through specialist vendors where in scope"] },
    ],
  },
  {
    key: "D",
    title: "Facade & Final Handover",
    intro: "The face of the building, its amenities and the keys in hand.",
    services: [
      { no: "13", title: "Fire-Fighting Work", img: "fire", points: ["Fire-fighting installations as per approved plans", "Fire protection piping, fittings and provisions"] },
      { no: "14", title: "Elevation, Glazing & Facade", img: "facade", points: ["Louvers, vertical fins and DGU glazing", "ACP cladding, CNC jali and false ceilings", "CRC box-section work for external elevations"] },
      { no: "15", title: "Building Amenities", img: "amenities", points: ["Video door phones and biometric access systems", "Garbage chutes, solar systems and ventilation", "Basement and shaft HVAC provisions"] },
      { no: "16", title: "Final Works & Handover", img: "handover", points: ["Letterboxes, nameplates, parking and notice boards", "Building signage and departmental labour", "Final cleaning, finishing and handover works"] },
    ],
  },
];

export const principles = [
  { no: "01", title: "Precision", text: "Every stage is approached with attention to detail." },
  { no: "02", title: "Integrity", text: "Clear communication and responsible execution." },
  { no: "03", title: "Excellence", text: "Quality workmanship from foundation to finish." },
];

export const steps = [
  { no: "01", title: "Discovery", text: "Understanding the project, requirements and scope." },
  { no: "02", title: "Planning", text: "Coordination of project requirements, drawings and execution planning." },
  { no: "03", title: "Execution", text: "Coordinated construction and implementation of the approved scope." },
  { no: "04", title: "Finishing", text: "Architectural finishes, systems and final detailing." },
  { no: "05", title: "Handover", text: "Final cleaning, finishing and handover works." },
];

// ponytail: placeholder portfolio. Imagery is representative, NOT completed Ekveera work.
// Replace each entry with a real project (name, location, photos) and set placeholder: false.
export const projects = [
  { type: "Residential", name: "Residential Development", location: "Pune, Maharashtra", img: "tower", placeholder: true,
    text: "Multi-storey residential construction, delivered from groundwork through finishes, systems and handover." },
  { type: "Commercial", name: "Commercial Building", location: "Pune, Maharashtra", img: "facade", placeholder: true,
    text: "Structure, glazing and elevation work for contemporary commercial spaces." },
  { type: "Turnkey", name: "Turnkey Project", location: "Pune, Maharashtra", img: "amenities", placeholder: true,
    text: "A single team coordinating every discipline, from earthwork to building amenities and final handover." },
];
