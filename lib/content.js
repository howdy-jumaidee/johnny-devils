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
  { _uid: "m1", name: 'Johnny "Devil" Marrano', role: "Lead Vocals & Harmonica" },
  { _uid: "m2", name: "Sal Cortez",              role: "Lead Guitar" },
  { _uid: "m3", name: 'Benji "Big Bear" Wallace', role: "Bass Guitar" },
  { _uid: "m4", name: "Ray Odum",                role: "Drums & Percussion" },
];

// ─── About ───────────────────────────────────────────────────────────────────

export const ABOUT = {
  heading: "About the Band",
  paragraphs: [
    `Johnny Devils came together in the smoke-filled back rooms of Detroit in 1978. Singer and harmonica player Johnny Marrano had been drifting through the Mississippi Delta for two years, soaking up Robert Johnson records and Muddy Waters shows before returning north with fire in his chest and a voice that sounded like gravel being dragged over hot coals.`,
    `He found guitarist Sal Cortez busking outside a Tiger Stadium gate after a game, coaxed bassist Benji Wallace out of retirement with a phone call and a bottle of bourbon, and spotted drummer Ray Odum behind the kit at a church social in Dearborn — playing gospel like he was summoning something dangerous.`,
    `Their debut EP, Dogs of August, was recorded live in a converted auto-body shop and sold two thousand copies out of the back of a van. By 1982, they were headlining the Roxy in Los Angeles. By 1985, they were selling out arenas in Europe. The fire never went out.`,
    `Eleven studio albums. Hundreds of festival slots. A reputation as one of the most electrifying live acts of their generation. Johnny Devils don't make music for the charts — they make music for the road, for the night, for the feeling you get when the guitar hits the right note and everything else falls away.`,
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
  { _uid: "mi1", name: "Hellfire Tour Tee",       price: "$35", image: null, external_url: "#", sold_out: false },
  { _uid: "mi2", name: "Hellfire & Honey LP",     price: "$28", image: null, external_url: "#", sold_out: false },
  { _uid: "mi3", name: "Logo Snapback",           price: "$30", image: null, external_url: "#", sold_out: true  },
  { _uid: "mi4", name: "Copper & Rust Hoodie",    price: "$65", image: null, external_url: "#", sold_out: false },
  { _uid: "mi5", name: "Devil's Head Enamel Pin", price: "$12", image: null, external_url: "#", sold_out: false },
  { _uid: "mi6", name: "Dogs of August Tote Bag", price: "$20", image: null, external_url: "#", sold_out: false },
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
