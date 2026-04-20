import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbGallery from "@/components/sections/SbGallery";

export const metadata = {
  title: "Gallery",
  description:
    "Photos of Johnny Devils — live shots, backstage moments, and studio sessions across five decades.",
};

export default async function GalleryPage() {
  const story = await fetchStory("gallery").catch(() => null);

  if (!story) {
    return (
      <div className="pt-20">
        <SbGallery
          blok={{
            _uid: "gallery-fallback",
            component: "gallery",
            heading: "Gallery",
            images: [],
            layout: "masonry",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-center">
          <p className="text-brand-muted">
            Connect Storyblok to populate the gallery with band photos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {story.content.body?.map((blok) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
}
