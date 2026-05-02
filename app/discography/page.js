import SbDiscography from "@/components/sections/SbDiscography";
import { RELEASES } from "@/lib/content";

export const metadata = {
  title: "Discography",
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
