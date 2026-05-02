import SbMusicEmbed from "@/components/sections/SbMusicEmbed";
import { MUSIC_EMBEDS } from "@/lib/content";

export const metadata = {
  title: "Music",
};

export default function MusicPage() {
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

      <div className="flex flex-col gap-12">
        {MUSIC_EMBEDS.map((blok) => (
          <SbMusicEmbed blok={blok} key={blok._uid} />
        ))}
      </div>
    </div>
  );
}
