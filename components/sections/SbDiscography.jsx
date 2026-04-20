"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { motion } from "framer-motion";
import ReleaseCard from "@/components/ui/ReleaseCard";

export default function SbDiscography({ blok }) {
  const { heading, releases } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className="py-20 lg:py-32"
      aria-label="Discography"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="label-accent text-brand-amber text-xs tracking-widest mb-3">
            Releases
          </p>
          <h2 className="heading-display text-brand-black text-4xl sm:text-6xl">
            {heading ?? "Discography"}
          </h2>
          <hr className="divider-amber mt-6 max-w-xs" />
        </motion.div>

        {releases?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {releases.map((release, i) => (
              <motion.div
                key={release._uid ?? i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <ReleaseCard release={release.content ?? release} />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-brand-muted">No releases found.</p>
        )}
      </div>
    </section>
  );
}
