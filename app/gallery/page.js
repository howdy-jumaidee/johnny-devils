import SbGallery from "@/components/sections/SbGallery";
import { GALLERY_IMAGES } from "@/lib/content";

export const metadata = {
  title: "Gallery",
  description:
    "Photos of Johnny Devils — live shots, backstage moments, and studio sessions across five decades.",
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
