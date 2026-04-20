"use client";

import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import { motion } from "framer-motion";

export default function SbTextSection({ blok }) {
  const { heading, body, alignment } = blok;
  const bodyHtml = body ? renderRichText(body) : null;

  const alignClass =
    alignment === "center"
      ? "text-center mx-auto"
      : alignment === "right"
      ? "text-right ml-auto"
      : "text-left";

  return (
    <section
      {...storyblokEditable(blok)}
      className="py-16 lg:py-24"
      aria-label={heading ?? "Text section"}
    >
      <div className={`max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto ${alignClass}`}>
        {heading && (
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="heading-display text-brand-black text-3xl sm:text-5xl mb-8"
          >
            {heading}
          </motion.h2>
        )}
        {bodyHtml && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-brand-black/80 leading-relaxed [&_p]:mb-4 [&_a]:text-brand-amber [&_a]:underline [&_strong]:text-brand-black [&_h3]:heading-serif [&_h3]:text-xl [&_h3]:mt-6 [&_h3]:mb-3"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        )}
      </div>
    </section>
  );
}
