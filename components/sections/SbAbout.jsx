"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SbAbout({ blok }) {
  const { heading, body_text, band_photo, members } = blok;
  const bodyHtml = null;

  return (
    <section
      className="py-20 lg:py-32"
      aria-label="About the band"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="label-accent text-brand-amber text-xs tracking-widest mb-3">
            The Story
          </p>
          <h2 className="heading-display text-brand-black text-4xl sm:text-6xl">
            {heading ?? "About the Band"}
          </h2>
          <hr className="divider-amber mt-6 max-w-xs" />
        </motion.div>

        {/* Two-column: text + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {bodyHtml && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="prose prose-invert prose-lg max-w-none text-brand-black/80 leading-relaxed [&_p]:mb-5"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          )}

          {band_photo?.filename && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] lg:aspect-auto"
            >
              <Image
                src={band_photo.filename}
                alt={band_photo.alt || "Johnny Devils band photo"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover border border-brand-amber/20"
              />
              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-brand-amber/50" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-brand-amber/50" />
            </motion.div>
          )}
        </div>

        {/* Member bios */}
        {members?.length > 0 && (
          <div>
            <p className="label-accent text-brand-amber text-xs tracking-widest mb-10">
              The Members
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {members.map((member, i) => (
                <motion.article
                  key={member._uid ?? i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: i * 0.1 } } }}
                  className="flex flex-col gap-4"
                >
                  {member.photo?.filename && (
                    <div className="relative aspect-square overflow-hidden bg-brand-smoke">
                      <Image
                        src={member.photo.filename}
                        alt={member.photo.alt || member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="heading-serif text-brand-black text-lg">
                      {member.name}
                    </h3>
                    <p className="label-accent text-brand-amber text-xs tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
