import { Barlow } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import components from "@/storyblok/components";
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

/* ─── Storyblok Init ────────────────────────────────────────────────────────── */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components,
  bridge: true,
});

/* ─── Root Metadata ─────────────────────────────────────────────────────────── */
export const metadata = {
  title: {
    default: "Johnny Devils — Official Site",
    template: "%s | Johnny Devils",
  },
  description:
    "Official website for Johnny Devils. Raw blues. Burning soul. Vintage rock and roll born in the fire of the '70s.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Johnny Devils",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${barlow.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-black antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
