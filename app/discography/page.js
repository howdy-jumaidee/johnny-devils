import SbDiscography from "@/components/sections/SbDiscography";
import { RELEASES } from "@/lib/content";

export const metadata = {
  title: "Discography",
  description:
    "The full catalogue of Johnny Devils — eleven studio albums, EPs, and singles spanning five decades of blues rock.",
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
