"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function SbGallery({ blok }) {
  const { heading, images, layout } = blok;
  const [index, setIndex] = useState(-1);

  const slides = (images ?? []).map((img) => ({
    src: img.asset?.filename ?? img.filename ?? "",
    alt: img.asset?.alt ?? img.alt ?? "",
    description: img.caption ?? undefined,
  }));

  const isMasonry = layout === "masonry";

  return (
    <section
      className="py-20 lg:py-32"
      aria-label="Photo gallery"
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
            Gallery
          </p>
          <h2 className="heading-display text-brand-black text-4xl sm:text-6xl">
            {heading ?? "Photos"}
          </h2>
          <hr className="divider-amber mt-6 max-w-xs" />
        </motion.div>

        {slides.length > 0 ? (
          isMasonry ? (
            /* Masonry layout using CSS columns */
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {slides.map((img, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onClick={() => setIndex(i)}
                  className="break-inside-avoid block w-full relative overflow-hidden border border-brand-amber/15 hover:border-brand-amber/50 transition-all duration-200 group"
                  aria-label={`Open image ${i + 1}`}
                >
                  {img.src && (
                    <Image
                      src={img.src}
                      alt={img.alt || `Gallery image ${i + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          ) : (
            /* Standard grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {slides.map((img, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setIndex(i)}
                  className="relative aspect-square overflow-hidden border border-brand-amber/15 hover:border-brand-amber/50 transition-all duration-200 group"
                  aria-label={`Open image ${i + 1}`}
                >
                  {img.src && (
                    <Image
                      src={img.src}
                      alt={img.alt || `Gallery image ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          )
        ) : (
          <p className="text-brand-muted">No gallery images yet.</p>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions]}
        styles={{
          container: { backgroundColor: "rgba(26, 18, 8, 0.97)" },
        }}
      />
    </section>
  );
}
