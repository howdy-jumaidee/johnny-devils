import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import HomePageFallback from "@/components/sections/HomePageFallback";

export const metadata = {
  title: "Johnny Devils — Official Site",
  description:
    "Official website for Johnny Devils. Raw blues. Burning soul. Vintage rock and roll born in the fire of the 1970s.",
};

export default async function HomePage() {
  const story = await fetchStory("home").catch(() => null);

  // Render static fallback if Storyblok is not connected
  if (!story) return <HomePageFallback />;

  return (
    <>
      {story.content.body?.map((blok) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </>
  );
}
