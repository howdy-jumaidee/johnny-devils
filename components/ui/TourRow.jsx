import { ExternalLink, MapPin } from "lucide-react";

export default function TourRow({ date, venue, city, country, ticket_url, sold_out, past = false }) {
  const formatted = date
    ? new Date(date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "TBA";

  return (
    <article
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-brand-amber/15 transition-colors duration-200 ${
        past ? "opacity-40" : "hover:border-brand-amber/40"
      }`}
    >
      {/* Date */}
      <div className="flex items-start sm:items-center gap-4 flex-1">
        <div className="min-w-[5rem]">
          <p className="label-accent text-brand-amber text-sm tracking-widest">
            {formatted}
          </p>
        </div>

        <hr className="hidden sm:block w-px h-8 border-none bg-brand-amber/20 self-center" />

        {/* Venue & Location */}
        <div>
          <p className="text-brand-black font-medium">{venue ?? "Venue TBA"}</p>
          <p className="flex items-center gap-1 text-brand-muted text-sm mt-0.5">
            <MapPin size={12} className="shrink-0" />
            {city ?? ""}
            {country ? `, ${country}` : ""}
          </p>
        </div>
      </div>

      {/* Status / Ticket */}
      <div className="flex items-center gap-3 sm:justify-end">
        {sold_out ? (
          <span className="label-accent text-xs px-3 py-1.5 border border-brand-rust/60 text-brand-rust tracking-widest">
            Sold Out
          </span>
        ) : past ? (
          <span className="label-accent text-xs px-3 py-1.5 border border-brand-muted/40 text-brand-muted tracking-widest">
            Past Show
          </span>
        ) : ticket_url ? (
          <a
            href={ticket_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-brand-amber text-brand-amber label-accent text-xs tracking-widest hover:bg-brand-amber hover:text-brand-black transition-all duration-200"
          >
            Tickets
            <ExternalLink size={11} />
          </a>
        ) : (
          <span className="label-accent text-xs text-brand-muted tracking-widest">
            Free Entry
          </span>
        )}
      </div>
    </article>
  );
}
