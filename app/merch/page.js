import SbMerchGrid from "@/components/sections/SbMerchGrid";
import { MERCH_ITEMS } from "@/lib/content";

export const metadata = {
  title: "Merch",
  description:
    "Official Johnny Devils merchandise — tees, vinyl, hats, and more. Shop the Hellfire Tour collection.",
};

export default function MerchPage() {
  return (
    <div className="pt-20">
      <SbMerchGrid
        blok={{
          _uid: "merch",
          component: "merch_grid",
          heading: "Merch",
          items: MERCH_ITEMS,
        }}
      />
    </div>
  );
}
