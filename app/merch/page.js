import SbMerchGrid from "@/components/sections/SbMerchGrid";
import { MERCH_ITEMS } from "@/lib/content";

export const metadata = {
  title: "Merch",
  description:
    "Official Johnny Devils merchandise — Ground Rush vinyl, t-shirts, boots, and belt buckles.",
  alternates: { canonical: "/merch" },
  openGraph: {
    title: "Merch | Johnny Devils",
    description:
      "Official Johnny Devils merchandise — Ground Rush vinyl, t-shirts, boots, and belt buckles.",
    url: "https://johnnydevils.com/merch",
  },
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
