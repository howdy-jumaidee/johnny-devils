import { fetchStory, fetchStories } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbRelease from "@/components/sections/SbRelease";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const stories = await fetchStories("releases/").catch(() => []);
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const story = await fetchStory(`releases/${params.slug}`).catch(() => null);
  return {
    title: story?.content?.title ?? "Release",
    description: `${story?.content?.title ?? "Release"} by Johnny Devils`,
  };
}

export default async function ReleasePage({ params }) {
  const story = await fetchStory(`releases/${params.slug}`).catch(() => null);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <Button href="/discography" variant="ghost" size="sm">
          <ArrowLeft size={14} />
          Back to Discography
        </Button>
      </div>

      {story ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SbRelease blok={story.content} />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="text-brand-muted text-lg">Release not found.</p>
        </div>
      )}
    </div>
  );
}
