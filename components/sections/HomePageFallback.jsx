"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { Calendar, Music, ShoppingBag, ArrowRight } from "lucide-react";

const TEASERS = [
  {
    icon: Music,
    label: "Latest Release",
    title: "Hellfire & Honey",
    sub: "New album — out now",
    href: "/discography",
    cta: "Listen",
  },
  {
    icon: Calendar,
    label: "Next Show",
    title: "The Roxy, L.A.",
    sub: "June 14, 2026",
    href: "/tour",
    cta: "Get Tickets",
  },
  {
    icon: ShoppingBag,
    label: "New in Merch",
    title: "Hellfire Tour Tee",
    sub: "Limited run — grab yours",
    href: "/merch",
    cta: "Shop Now",
  },
];

export default function HomePageFallback() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen overflow-hidden bg-brand-black"
        aria-label="Hero"
      >
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        {/* Dark overlay so text is legible */}
        <div className="absolute inset-0 bg-brand-black/40 pointer-events-none" aria-hidden="true" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

        {/* Content — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-14 lg:pb-20">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="label-accent text-brand-amber text-xs tracking-widest mb-3"
            >
              Johnny Devils
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-display text-brand-cream text-[4.5rem] leading-none mb-1"
            >
              Ground Rush
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="label-accent text-brand-cream/60 text-xs tracking-widest mb-5"
            >
              The Album — Out Now
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <Button href="/music" variant="outlined" size="sm">
                Listen Now
              </Button>
              <Link
                href="/tour"
                className="relative group label-accent text-brand-cream/50 text-xs tracking-widest hover:text-brand-cream transition-colors duration-200 py-2"
              >
                Tour Dates
                <span className="absolute bottom-0 left-0 right-0 h-px bg-brand-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Teasers ──────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" aria-label="Quick links">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEASERS.map(({ icon: Icon, label, title, sub, href, cta }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-smoke p-8 lg:p-10 flex flex-col gap-5 group hover:bg-brand-smoke/80 transition-colors duration-200"
              >
                <Icon size={28} className="text-brand-amber" />
                <div>
                  <p className="label-accent text-brand-muted text-xs tracking-widest mb-2">
                    {label}
                  </p>
                  <h3 className="heading-serif text-brand-black text-2xl mb-1">
                    {title}
                  </h3>
                  <p className="text-brand-black/50 text-sm">{sub}</p>
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 label-accent text-brand-amber text-xs tracking-widest hover:gap-3 transition-all duration-200 mt-auto"
                >
                  {cta}
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Snippet ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 border-t border-brand-amber/10" aria-label="About">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="label-accent text-brand-amber text-xs tracking-widest mb-4">
              The Band
            </p>
            <h2 className="heading-display text-brand-black text-4xl sm:text-5xl mb-6">
              Born in the smoke
            </h2>
            <p className="text-brand-black/70 text-lg leading-relaxed mb-4">
              Johnny Devils came together in a back-alley rehearsal room in
              Detroit in 1978. Four road-worn musicians united by one shared
              obsession: the unvarnished truth of American blues, filtered
              through the grit of heavy rock and the heat of Southern soul.
            </p>
            <p className="text-brand-black/75 leading-relaxed mb-8">
              Across six decades and eleven studio albums, they&apos;ve played
              every dive bar and festival stage worth playing — from the Delta
              to Dublin, from the Sunset Strip to São Paulo. The fire never went
              out.
            </p>
            <Button href="/about" variant="outlined">
              Full Story
              <ArrowRight size={14} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative aspect-[4/3] border border-brand-amber/20 bg-brand-smoke flex items-center justify-center"
          >
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-brand-amber/40" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-brand-amber/40" />
            <p className="label-accent text-brand-muted text-xs tracking-widest text-center px-8">
              Band photo coming soon
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
