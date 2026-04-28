import SbTourList from "@/components/sections/SbTourList";
import { TOUR_DATES } from "@/lib/content";

export const metadata = {
  title: "Shows",
  description:
    "Johnny Devils live shows and concert schedule. Find a show near you and grab tickets before they sell out.",
};

export default function ShowsPage() {
  return (
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
  );
}
