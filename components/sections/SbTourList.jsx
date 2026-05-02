"use client";

import { motion } from "framer-motion";
import TourRow from "@/components/ui/TourRow";

export default function SbTourList({ blok }) {
  const { heading, dates } = blok;

  const now = new Date();
  const upcoming = (dates ?? []).filter(
    (d) => !d.date || new Date(d.date) >= now
  );
  const past = (dates ?? []).filter(
    (d) => d.date && new Date(d.date) < now
  );

  return (
    <section
      className="py-20 lg:py-32"
      aria-label="Tour dates"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="label-accent text-brand-amber text-xs tracking-widest mb-3">
            Live
          </p>
          <h2 className="heading-display text-brand-black text-4xl sm:text-6xl">
            {heading ?? "Tour Dates"}
          </h2>
          <hr className="divider-amber mt-6 max-w-xs" />
        </motion.div>

        {/* Upcoming */}
        {upcoming.length > 0 ? (
          <div className="mb-20">
            {upcoming.map((date, i) => (
              <motion.div
                key={date._uid ?? i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <TourRow
                  date={date.date}
                  date_display={date.date_display}
                  venue={date.venue}
                  city={date.city}
                  country={date.country}
                  ticket_url={date.ticket_url}
                  tickets_pending={date.tickets_pending}
                  sold_out={date.sold_out}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-brand-amber/20">
            <p className="heading-serif text-brand-muted text-xl mb-2">
              No upcoming shows
            </p>
            <p className="text-brand-muted text-sm">
              Check back soon — more dates dropping shortly.
            </p>
          </div>
        )}

        {/* Past shows (collapsed) */}
        {past.length > 0 && (
          <details className="group">
            <summary className="label-accent text-brand-muted text-xs tracking-widest cursor-pointer hover:text-brand-amber transition-colors duration-200 mb-6 list-none flex items-center gap-2">
              <span className="w-4 h-px bg-brand-muted/40 group-open:bg-brand-amber transition-colors duration-200" />
              Past Shows ({past.length})
            </summary>
            {past
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((date, i) => (
                <TourRow
                  key={date._uid ?? i}
                  date={date.date}
                  date_display={date.date_display}
                  venue={date.venue}
                  city={date.city}
                  country={date.country}
                  ticket_url={date.ticket_url}
                  tickets_pending={date.tickets_pending}
                  sold_out={date.sold_out}
                  past
                />
              ))}
          </details>
        )}
      </div>
    </section>
  );
}
