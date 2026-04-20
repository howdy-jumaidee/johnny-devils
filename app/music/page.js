import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbMusicEmbed from "@/components/sections/SbMusicEmbed";

export const metadata = {
  title: "Music",
  description:
    "Stream Johnny Devils on Spotify, YouTube, and SoundCloud. Listen to all albums, EPs, and singles.",
};

const FALLBACK_EMBEDS = [
  {
    _uid: "me1",
    component: "music_embed",
    heading: "Hellfire & Honey — Full Album",
    platform: "spotify",
    embed_url:
      "https://open.spotify.com/embed/album/placeholder?utm_source=generator&theme=0",
  },
  {
    _uid: "me2",
    component: "music_embed",
    heading: "Live at The Roxy — Full Set",
    platform: "youtube",
    embed_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default async function MusicPage() {
  const story = await fetchStory("music").catch(() => null);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <p className="label-accent text-brand-amber text-xs tracking-widest mb-3">
          Stream
        </p>
        <h1 className="heading-display text-brand-black text-5xl sm:text-7xl">
          Music
        </h1>
        <hr className="divider-amber mt-6 max-w-xs" />
      </div>

      {story ? (
        story.content.body?.map((blok) => (
          <StoryblokServerComponent blok={blok} key={blok._uid} />
        ))
      ) : (
        <div className="flex flex-col gap-12">
          {FALLBACK_EMBEDS.map((blok) => (
            <SbMusicEmbed blok={blok} key={blok._uid} />
          ))}
        </div>
      )}
    </div>
  );
}
