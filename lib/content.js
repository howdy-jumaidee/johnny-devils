// ─── Band Info ───────────────────────────────────────────────────────────────

export const BAND = {
  name: "Johnny Devils",
  tagline: "Raw blues. Burning soul. Vintage rock and roll.",
  bookingEmail: "my@jubel.se",
  socials: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    twitter: "#",
  },
};

// ─── Members ─────────────────────────────────────────────────────────────────

export const MEMBERS = [
  { _uid: "m1", name: "Jumaidee Elias",     role: "Lead Vocals & Rhythm Guitar" },
  { _uid: "m2", name: "Erion Kapedani",     role: "Lead Guitar & Vocals" },
  { _uid: "m3", name: "Jack Gooderidge",    role: "Bass Guitar & Backing Vocals" },
  { _uid: "m4", name: "Jonathan Kull",      role: "Trumpet & Backing Vocals" },
  { _uid: "m5", name: "Jacob Tollet",       role: "Drums & Backing Vocals" },
];

// ─── About ───────────────────────────────────────────────────────────────────

export const ABOUT = {
  heading: "About the Band",
  paragraphs: [
    `Johnny Devils took shape on a winter evening in February 2024. Songwriting came naturally, and a shared love of country and 1960s rock quickly set the tone for a sound that would soon become their own. Rooted in classic songcraft yet aimed at something more contemporary, the band has grown into an expression where melody, drive, and feeling take center stage.`,
    `After a year of rehearsals in a living room in Nacka, the next phase began. Recording took shape alongside shows across Stockholm, and the band started forging their identity on stage as well. What had started as a mutual pull toward country, rock’n’roll, and the aesthetics of the sixties gradually became something more cohesive, a world of their own, with nerve, groove, and darkness in equal measure.`,
    `Their debut album Ground Rush arrived after two years of rehearsals and live performances. The result is a band that moves freely between rock, country, and Americana, with a sound that feels as timeless as it does alive. Johnny Devils build their music on strong songs, clear presence, and a feel for the raw over the polished.`,
    `Johnny Devils are a band in motion, shaped by repetition, stage experience, and an unshakeable love for music that carries history while pointing forward.`,
  ],
};

// ─── Discography ─────────────────────────────────────────────────────────────

export const RELEASES = [
  {
    _uid: "r1",
    slug: "hellfire-and-honey",
    title: "Hellfire & Honey",
    type: "Album",
    release_date: "2024-03-15",
    cover_image: null,
    spotify_url: "#",
    apple_url: "#",
    bandcamp_url: "#",
    tracklist: [
      "Hellfire & Honey",
      "Devil in the Details",
      "Long Way Down",
      "Copper Sky",
      "Rattlesnake Road",
      "Honey Trap",
      "Ghost of the Delta",
      "Burn It Clean",
      "Stone & Smoke",
      "Last Train South",
    ],
    description:
      "The eleventh studio album from Johnny Devils — recorded live to tape in three days at Electrical Audio, Chicago. Raw, loud, and uncompromising.",
  },
  {
    _uid: "r2",
    slug: "long-road-to-nowhere",
    title: "Long Road to Nowhere",
    type: "Album",
    release_date: "2020-09-04",
    cover_image: null,
    spotify_url: "#",
    apple_url: "#",
    bandcamp_url: "#",
    tracklist: [
      "Long Road to Nowhere",
      "Dust & Diesel",
      "Redline",
      "Last Exit",
      "Flatlands",
      "Mile Marker Zero",
      "Highway Widow",
      "Empty Tank",
    ],
    description:
      "A meditation on distance, loss, and the American highway. Recorded during lockdown with a stripped-back sound.",
  },
  {
    _uid: "r3",
    slug: "copper-and-rust",
    title: "Copper & Rust",
    type: "Album",
    release_date: "2016-05-20",
    cover_image: null,
    spotify_url: "#",
    apple_url: "#",
    bandcamp_url: "#",
    tracklist: [
      "Copper & Rust",
      "Factory Floor",
      "Old Iron",
      "Motor City Blues",
      "Rust Never Sleeps",
      "The Foundry",
      "Hard Metal Soul",
      "Shift Change",
      "Smoke Stack",
    ],
    description:
      "A love letter to Detroit — the city that forged them. Heavy on tone, light on sentiment.",
  },
  {
    _uid: "r4",
    slug: "black-dog-blues",
    title: "Black Dog Blues",
    type: "EP",
    release_date: "2013-11-01",
    cover_image: null,
    spotify_url: "#",
    apple_url: "#",
    bandcamp_url: null,
    tracklist: [
      "Black Dog Blues",
      "Bad Luck Woman",
      "Southern Discomfort",
      "Crossroads Revisited",
    ],
    description: "Four songs recorded in a single afternoon. No overdubs, no edits.",
  },
  {
    _uid: "r5",
    slug: "river-of-smoke",
    title: "River of Smoke",
    type: "Album",
    release_date: "2009-07-18",
    cover_image: null,
    spotify_url: "#",
    apple_url: "#",
    bandcamp_url: "#",
    tracklist: [
      "River of Smoke",
      "Delta Fever",
      "Muddy Ground",
      "Southern Cross",
      "Swamp Thing",
      "Rain on the Levee",
      "Low Water Blues",
      "Bayou Burning",
      "Smoke Signal",
      "Home Again",
    ],
    description:
      "A deep dive into the Delta blues tradition — twelve-bar structures and slide guitar, filtered through forty years of road noise.",
  },
  {
    _uid: "r6",
    slug: "dogs-of-august",
    title: "Dogs of August",
    type: "EP",
    release_date: "1979-08-01",
    cover_image: null,
    spotify_url: null,
    apple_url: null,
    bandcamp_url: "#",
    tracklist: [
      "Dogs of August",
      "Motor City Grind",
      "Hellbound Train",
      "August Heat",
    ],
    description:
      "The debut. Recorded live in a converted auto-body shop in Detroit. Sold two thousand copies out of the back of a van.",
  },
];

// ─── Tour Dates ───────────────────────────────────────────────────────────────

export const TOUR_DATES = [
  {
    _uid: "t1",
    date: "2026-06-14",
    venue: "The Roxy Theatre",
    city: "Los Angeles",
    country: "USA",
    ticket_url: "#",
    sold_out: false,
  },
  {
    _uid: "t2",
    date: "2026-06-20",
    venue: "Vic Theatre",
    city: "Chicago",
    country: "USA",
    ticket_url: "#",
    sold_out: false,
  },
  {
    _uid: "t3",
    date: "2026-06-27",
    venue: "Bowery Ballroom",
    city: "New York",
    country: "USA",
    ticket_url: "#",
    sold_out: true,
  },
  {
    _uid: "t4",
    date: "2026-07-05",
    venue: "Electric Ballroom",
    city: "London",
    country: "UK",
    ticket_url: "#",
    sold_out: false,
  },
  {
    _uid: "t5",
    date: "2026-07-12",
    venue: "Paradiso",
    city: "Amsterdam",
    country: "Netherlands",
    ticket_url: "#",
    sold_out: false,
  },
  {
    _uid: "t6",
    date: "2026-07-19",
    venue: "Pavillons Sauvages",
    city: "Paris",
    country: "France",
    ticket_url: "#",
    sold_out: false,
  },
  {
    _uid: "t7",
    date: "2025-11-08",
    venue: "The Fillmore",
    city: "San Francisco",
    country: "USA",
    ticket_url: null,
    sold_out: false,
  },
  {
    _uid: "t8",
    date: "2025-10-25",
    venue: "9:30 Club",
    city: "Washington D.C.",
    country: "USA",
    ticket_url: null,
    sold_out: true,
  },
];

// ─── Music Embeds ─────────────────────────────────────────────────────────────

export const MUSIC_EMBEDS = [
  {
    _uid: "me1",
    heading: "Hellfire & Honey — Full Album",
    platform: "spotify",
    embed_url:
      "https://open.spotify.com/embed/album/placeholder?utm_source=generator&theme=0",
  },
  {
    _uid: "me2",
    heading: "Live at The Roxy — Full Set",
    platform: "youtube",
    embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

// ─── Gallery ──────────────────────────────────────────────────────────────────

export const GALLERY_IMAGES = [
  // Add image objects here: { _uid: "g1", filename: "/gallery/show-1.jpg", alt: "Live at The Roxy" }
];

// ─── Merch ────────────────────────────────────────────────────────────────────

export const MERCH_ITEMS = [
  { _uid: "mi1", name: "Ground Rush Vinyl",    price: "300 KR", image: { filename: "/merch/ground_rush.png",    alt: "Ground Rush Vinyl" },    external_url: "#", cta_label: "PRE-ORDER",          sold_out: false },
  { _uid: "mi2", name: "Ground Rush T-Shirt",  price: "250 KR", image: { filename: "/merch/JDModel2.png",       alt: "Ground Rush T-Shirt" },   external_url: "#", cta_label: "AVAILABLE ON SHOWS", sold_out: false },
  { _uid: "mi3", name: "Devil's Boots",        price: "2299 KR", image: { filename: "/merch/JD_Devilsboots.webp", alt: "Devil's Boots", position: "center 75%" }, external_url: "#", cta_label: "PRE-ORDER", sold_out: false },
  { _uid: "mi4", name: "Johnny's Belt Buckle", price: "99 KR",  image: { filename: "/merch/JD_Beltbuckle.webp",  alt: "Johnny's Belt Buckle" }, external_url: "#", cta_label: "PRE-ORDER",          sold_out: false },
];

// ─── Press ────────────────────────────────────────────────────────────────────

export const PRESS_QUOTES = [
  {
    _uid: "q1",
    quote:
      "Johnny Devils don't just play the blues — they weaponize it. One of the most vital live acts of their generation, full stop.",
    source: "Marcus Reid",
    publication: "Rolling Stone",
  },
  {
    _uid: "q2",
    quote:
      "Hellfire & Honey is the record they were always building toward. Ferocious, raw, and shot through with the kind of conviction that most bands only pretend to have.",
    source: "Sophie Vance",
    publication: "Mojo Magazine",
  },
  {
    _uid: "q3",
    quote:
      "In a world of curated authenticity, Johnny Devils are the real thing. Turn it up.",
    source: "Dave Olsen",
    publication: "NME",
  },
];

export const PRESS_DOWNLOADS = [
  { _uid: "d1", label: "Official Band Bio — Short (PDF)", file: { filename: "#" } },
  { _uid: "d2", label: "Official Band Bio — Long (PDF)",  file: { filename: "#" } },
  { _uid: "d3", label: "Hellfire & Honey Press Release (PDF)", file: { filename: "#" } },
  { _uid: "d4", label: "Technical Rider (PDF)",           file: { filename: "#" } },
];

// ─── Contact ─────────────────────────────────────────────────────────────────

export const CONTACT = {
  heading: "Contact & Booking",
  subtext:
    "For bookings, press inquiries, or anything else — use the form below or reach us directly at my@jubel.se. We respond within 48 hours.",
  booking_email: "my@jubel.se",
};
