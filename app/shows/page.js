import SbTourList from "@/components/sections/SbTourList";
import { TOUR_DATES } from "@/lib/content";

export const metadata = {
  title: "Shows",
  description:
    "Catch Johnny Devils live in 2026. Upcoming shows in Stockholm, Malmö, Öland, and Gothenburg — full tour schedule.",
  openGraph: {
    title: "Shows | Johnny Devils",
    description:
      "Catch Johnny Devils live in 2026. Upcoming shows in Stockholm, Malmö, Öland, and Gothenburg — full tour schedule.",
    url: "https://johnnydevils.com/shows",
  },
};

const eventsJsonLd = TOUR_DATES.map((t) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: `Johnny Devils at ${t.venue}`,
  startDate: t.date,
  location: {
    "@type": "Place",
    name: t.venue,
    address: {
      "@type": "PostalAddress",
      addressLocality: t.city,
      addressCountry: t.country === "Sweden" ? "SE" : t.country,
    },
  },
  performer: {
    "@type": "MusicGroup",
    name: "Johnny Devils",
    url: "https://johnnydevils.com",
  },
  eventStatus: t.sold_out
    ? "https://schema.org/EventCancelled"
    : "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  ...(t.ticket_url && t.ticket_url !== "#"
    ? {
        offers: {
          "@type": "Offer",
          url: t.ticket_url,
          availability: "https://schema.org/InStock",
        },
      }
    : {}),
}));

export default function ShowsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsJsonLd) }}
      />
      <div className="pt-20">
        <SbTourList
          blok={{
            _uid: "shows",
            component: "tour_list",
            heading: "Shows",
            dates: TOUR_DATES,
          }}
        />
      </div>
    </>
  );
}
