"use client";

import { motion } from "framer-motion";

const PLATFORM_HEIGHTS = {
  spotify: 352,
  youtube: 315,
  soundcloud: 166,
};

export default function SbMusicEmbed({ blok }) {
  const { heading, platform, embed_url } = blok;
  const height = PLATFORM_HEIGHTS[platform] ?? 315;

  if (!embed_url) return null;

  return (
    <section
      className="py-12"
      aria-label={`${platform ?? "Music"} embed`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="heading-serif text-brand-black text-2xl mb-6"
          >
            {heading}
          </motion.h3>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-brand-amber/20 overflow-hidden bg-brand-smoke"
        >
          <iframe
            src={embed_url}
            width="100%"
            height={height}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={heading ?? `${platform} player`}
            className="block"
            style={{ colorScheme: "normal" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
