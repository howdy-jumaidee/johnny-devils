import { Barlow } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

/* ─── Font Loading ──────────────────────────────────────────────────────────── */
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

/* ─── Root Metadata ─────────────────────────────────────────────────────────── */
export const metadata = {
  metadataBase: new URL("https://johnnydevils.com"),
  title: {
    default: "Johnny Devils — Official Site",
    template: "%s | Johnny Devils",
  },
  description: "Five-piece outlaw country from Stockholm. Ground Rush — out now.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johnnydevils.com",
    siteName: "Johnny Devils",
    images: [
      {
        url: "/JD_bandphoto.png",
        width: 1200,
        height: 630,
        alt: "Johnny Devils band photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/JD_bandphoto.png"],
  },
};

/* ─── JSON-LD Schema ────────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Johnny Devils",
  description: "Five-piece outlaw country and rock from Stockholm. Raw blues, burning soul, vintage rock and roll.",
  url: "https://johnnydevils.com",
  image: "https://johnnydevils.com/JD_bandphoto.png",
  genre: ["Rock", "Country", "Americana", "Blues"],
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    name: "Stockholm, Sweden",
  },
  member: [
    { "@type": "OrganizationRole", member: { "@type": "Person", name: "Jumaidee Elias" }, roleName: "Lead Vocals & Rhythm Guitar" },
    { "@type": "OrganizationRole", member: { "@type": "Person", name: "Erion Kapedani" }, roleName: "Lead Guitar & Vocals" },
    { "@type": "OrganizationRole", member: { "@type": "Person", name: "Jack Gooderidge" }, roleName: "Bass Guitar & Backing Vocals" },
    { "@type": "OrganizationRole", member: { "@type": "Person", name: "Jonathan Kull" }, roleName: "Trumpet & Backing Vocals" },
    { "@type": "OrganizationRole", member: { "@type": "Person", name: "Jacob Tollet" }, roleName: "Drums & Backing Vocals" },
  ],
  album: {
    "@type": "MusicAlbum",
    name: "Ground Rush",
    datePublished: "2024",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "booking",
    email: "my@jubel.se",
  },
  sameAs: [
    "https://open.spotify.com/artist/7KaAcV1L15lnvGm4uY4RYy",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-black antialiased overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
