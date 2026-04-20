import { storyblokEditable } from "@storyblok/react/rsc";
import TourRow from "@/components/ui/TourRow";

export default function SbTourDate({ blok }) {
  const isPast = blok.date ? new Date(blok.date) < new Date() : false;

  return (
    <div {...storyblokEditable(blok)}>
      <TourRow
        date={blok.date}
        venue={blok.venue}
        city={blok.city}
        country={blok.country}
        ticket_url={blok.ticket_url}
        sold_out={blok.sold_out}
        past={isPast}
      />
    </div>
  );
}
