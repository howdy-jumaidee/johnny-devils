"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import { motion } from "framer-motion";
import MerchCard from "@/components/ui/MerchCard";

export default function SbMerchGrid({ blok }) {
  const { heading, items } = blok;

  return (
    <section
      {...storyblokEditable(blok)}
      className="py-20 lg:py-32"
      aria-label="Merchandise"
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
            Store
          </p>
          <h2 className="heading-display text-brand-black text-4xl sm:text-6xl">
            {heading ?? "Merch"}
          </h2>
          <hr className="divider-amber mt-6 max-w-xs" />
        </motion.div>

        {items?.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {items.map((item, i) => (
              <motion.div
                key={item._uid ?? i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <MerchCard
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  external_url={item.external_url}
                  sold_out={item.sold_out}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-brand-muted">No merch available right now — check back soon.</p>
        )}
      </div>
    </section>
  );
}
