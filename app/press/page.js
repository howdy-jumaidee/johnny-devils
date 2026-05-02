import { redirect } from "next/navigation";
import SbPressKit from "@/components/sections/SbPressKit";
import { PRESS_QUOTES, PRESS_DOWNLOADS } from "@/lib/content";

export const metadata = {
  title: "Press Kit",
  description:
    "Johnny Devils press kit — band bio, high-res photos, press quotes, and downloadable assets for media use.",
};

export default function PressPage() {
  redirect("/");  // remove this line to re-enable the press page
  return (
    <div className="pt-20">
      <SbPressKit
        blok={{
          _uid: "press",
          component: "press_kit",
          heading: "Press Kit",
          bio_text: null,
          quotes: PRESS_QUOTES,
          downloadables: PRESS_DOWNLOADS,
          band_photos: [],
        }}
      />
    </div>
  );
}
