import SbDiscography from "@/components/sections/SbDiscography";
import { RELEASES } from "@/lib/content";

export const metadata = {
  title: "Discography",
  description:
    "Browse the full Johnny Devils discography — albums and EPs from their 2024 debut Ground Rush to early recordings.",
  openGraph: {
    title: "Discography | Johnny Devils",
    description:
      "Browse the full Johnny Devils discography — albums and EPs from their 2024 debut Ground Rush to early recordings.",
    url: "https://johnnydevils.com/discography",
  },
};

export default function DiscographyPage() {
  return (
    <div className="pt-20">
      <SbDiscography
        blok={{
          _uid: "discography",
          component: "discography",
          heading: "Discography",
          releases: RELEASES,
        }}
      />
    </div>
  );
}
