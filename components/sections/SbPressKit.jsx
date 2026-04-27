"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Quote } from "lucide-react";

export default function SbPressKit({ blok }) {
  const { heading, bio_text, quotes, downloadables, band_photos } = blok;
  const bioHtml = null;

  return (
    <section
      className="py-20 lg:py-32"
      aria-label="Press kit"
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
            Media
          </p>
          <h2 className="heading-display text-brand-black text-4xl sm:text-6xl">
            {heading ?? "Press Kit"}
          </h2>
          <hr className="divider-amber mt-6 max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: bio + quotes */}
          <div className="flex flex-col gap-12">
            {bioHtml && (
              <div
                className="text-brand-black/80 leading-relaxed [&_p]:mb-4"
                dangerouslySetInnerHTML={{ __html: bioHtml }}
              />
            )}

            {quotes?.length > 0 && (
              <div className="flex flex-col gap-6">
                <p className="label-accent text-brand-amber text-xs tracking-widest">
                  Press Quotes
                </p>
                {quotes.map((q, i) => (
                  <blockquote
                    key={q._uid ?? i}
                    className="relative border-l-2 border-brand-amber pl-5 py-1"
                  >
                    <Quote
                      size={20}
                      className="absolute -top-1 -left-1 text-brand-amber/30 rotate-180"
                    />
                    <p className="heading-serif text-brand-black text-lg italic leading-snug mb-2">
                      &ldquo;{q.quote}&rdquo;
                    </p>
                    <cite className="not-italic label-accent text-brand-muted text-xs tracking-widest">
                      {q.source}
                      {q.publication ? ` — ${q.publication}` : ""}
                    </cite>
                  </blockquote>
                ))}
              </div>
            )}
          </div>

          {/* Right: downloads + band photos */}
          <div className="flex flex-col gap-10">
            {downloadables?.length > 0 && (
              <div>
                <p className="label-accent text-brand-amber text-xs tracking-widest mb-6">
                  Downloads
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {downloadables.map((item, i) => (
                    <li key={item._uid ?? i}>
                      <a
                        href={item.file?.filename ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="flex items-center justify-between gap-4 p-4 border border-brand-amber/20 hover:border-brand-amber/60 bg-brand-smoke transition-all duration-200 group"
                      >
                        <span className="text-brand-black/90 text-sm group-hover:text-brand-black transition-colors duration-200">
                          {item.label}
                        </span>
                        <Download
                          size={16}
                          className="text-brand-muted group-hover:text-brand-amber transition-colors duration-200 shrink-0"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {band_photos?.length > 0 && (
              <div>
                <p className="label-accent text-brand-amber text-xs tracking-widest mb-6">
                  Press Photos
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {band_photos.map((photo, i) => (
                    <a
                      key={photo._uid ?? i}
                      href={photo.filename ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="relative aspect-square overflow-hidden border border-brand-amber/15 hover:border-brand-amber/50 transition-all duration-200 group"
                      aria-label={`Download press photo ${i + 1}`}
                    >
                      {photo.filename && (
                        <Image
                          src={photo.filename}
                          alt={photo.alt || `Band photo ${i + 1}`}
                          fill
                          sizes="(max-width: 640px) 50vw, 25vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-colors duration-200 flex items-center justify-center">
                        <Download
                          size={20}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
