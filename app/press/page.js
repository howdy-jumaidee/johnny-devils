import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbPressKit from "@/components/sections/SbPressKit";

export const metadata = {
  title: "Press Kit",
  description:
    "Johnny Devils press kit — band bio, high-res photos, press quotes, and downloadable assets for media use.",
};

const FALLBACK_BLOK = {
  _uid: "press-fallback",
  component: "press_kit",
  heading: "Press Kit",
  bio_text: null,
  quotes: [
    {
      _uid: "q1",
      quote:
        "Johnny Devils don't just play the blues — they weaponize it. One of the most vital live acts of their generation, full stop.",
      source: "Marcus Reid",
      publication: "Rolling Stone",
    },
    {
      _uid: "q2",
      quote:
        "Hellfire & Honey is the record they were always building toward. Ferocious, raw, and shot through with the kind of conviction that most bands only pretend to have.",
      source: "Sophie Vance",
      publication: "Mojo Magazine",
    },
    {
      _uid: "q3",
      quote:
        "In a world of curated authenticity, Johnny Devils are the real thing. Turn it up.",
      source: "Dave Olsen",
      publication: "NME",
    },
  ],
  downloadables: [
    { _uid: "d1", label: "Official Band Bio — Short (PDF)", file: { filename: "#" } },
    { _uid: "d2", label: "Official Band Bio — Long (PDF)", file: { filename: "#" } },
    { _uid: "d3", label: "Hellfire & Honey Press Release (PDF)", file: { filename: "#" } },
    { _uid: "d4", label: "Technical Rider (PDF)", file: { filename: "#" } },
  ],
  band_photos: [],
};

export default async function PressPage() {
  const story = await fetchStory("press").catch(() => null);

  if (!story) {
    return (
      <div className="pt-20">
        <SbPressKit blok={FALLBACK_BLOK} />
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
