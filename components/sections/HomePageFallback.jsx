"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

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
                href="/shows"
                className="relative group label-accent text-brand-cream/50 text-xs tracking-widest hover:text-brand-cream transition-colors duration-200 py-2"
              >
                Upcoming Shows
                <span className="absolute bottom-0 left-0 right-0 h-px bg-brand-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            </motion.div>
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
              Who&apos;s Johnny?
            </h2>
            <p className="text-brand-black/70 text-lg leading-relaxed mb-4">
              Johnny Devils took shape on a winter evening in February 2024. A
              shared love of country and 1960s rock set the tone early, and what
              began as rehearsals in a living room in Nacka grew into something
              more, a sound rooted in classic songcraft but alive with nerve,
              groove, and darkness.
            </p>
            <p className="text-brand-black/75 leading-relaxed mb-8">
              Their debut album Ground Rush arrived after two years of rehearsals
              and live shows across Stockholm. A band that moves freely between
              rock, country, and Americana, Johnny Devils build their music on
              strong songs, raw presence, and a feel for the timeless over the
              trendy.
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
            className="relative aspect-[4/3] border border-brand-amber/20 overflow-hidden"
          >
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-brand-amber/40 z-10" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-brand-amber/40 z-10" />
            <Image
              src="/JD_bandphoto.png"
              alt="Johnny Devils band photo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
