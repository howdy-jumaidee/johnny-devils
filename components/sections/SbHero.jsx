"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function SbHero({ blok }) {
  const {
    headline,
    subheadline,
    background_image,
    cta_label,
    cta_href,
    video_embed,
  } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className="grain-overlay relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      {background_image?.filename && (
        <Image
          src={background_image.filename}
          alt={background_image.alt || "Johnny Devils"}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="label-accent text-brand-amber text-sm tracking-widest mb-6"
        >
          Official Site
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="heading-display text-brand-cream text-6xl sm:text-8xl lg:text-[9rem] leading-none mb-6"
        >
          {headline ?? (
            <>
              Johnny
              <br />
              <span className="text-brand-amber">Devils</span>
            </>
          )}
        </motion.h1>

        {subheadline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-brand-cream/70 text-lg sm:text-xl max-w-xl mb-10"
          >
            {subheadline}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap gap-4 justify-center sm:justify-start"
        >
          <Button href={cta_href ?? "/music"} size="lg">
            {cta_label ?? "Listen Now"}
          </Button>
          <Button href="/shows" variant="ghost" size="lg">
            Upcoming Shows
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="label-accent text-brand-muted text-xs tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-brand-amber/40"
        />
      </motion.div>
    </section>
  );
}
