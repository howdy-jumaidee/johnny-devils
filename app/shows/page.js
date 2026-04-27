import SbTourList from "@/components/sections/SbTourList";
import { TOUR_DATES } from "@/lib/content";

export const metadata = {
  title: "Tour Dates",
  description:
    "Johnny Devils live tour dates and concert schedule. Find a show near you and grab tickets before they sell out.",
};

export default function TourPage() {
  return (
    <div className="pt-20">
      <SbTourList
        blok={{
          _uid: "tour",
          component: "tour_list",
          heading: "Tour Dates",
          dates: TOUR_DATES,
        }}
      />
    </div>
  );
}
