import SbGallery from "@/components/sections/SbGallery";
import { GALLERY_IMAGES } from "@/lib/content";

export const metadata = {
  title: "Gallery",
  description:
    "Photos from Johnny Devils live shows and recording sessions. Outlaw country and vintage rock from Stockholm.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Johnny Devils",
    description:
      "Photos from Johnny Devils live shows and recording sessions. Outlaw country and vintage rock from Stockholm.",
    url: "https://johnnydevils.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <SbGallery
        blok={{
          _uid: "gallery",
          component: "gallery",
          heading: "Gallery",
          images: GALLERY_IMAGES,
          layout: "masonry",
        }}
      />
    </div>
  );
}
