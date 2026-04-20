import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbDiscography from "@/components/sections/SbDiscography";

export const metadata = {
  title: "Discography",
  description:
    "The full catalogue of Johnny Devils — eleven studio albums, EPs, and singles spanning five decades of blues rock.",
};

const FALLBACK_RELEASES = [
  {
    _uid: "r1", title: "Hellfire & Honey", type: "Album",
    release_date: "2024-03-15", slug: "hellfire-and-honey",
    cover_image: null, spotify_url: "#", apple_url: "#", bandcamp_url: "#",
  },
  {
    _uid: "r2", title: "Long Road to Nowhere", type: "Album",
    release_date: "2020-09-04", slug: "long-road-to-nowhere",
    cover_image: null, spotify_url: "#", apple_url: "#", bandcamp_url: "#",
  },
  {
    _uid: "r3", title: "Copper & Rust", type: "Album",
    release_date: "2016-05-20", slug: "copper-and-rust",
    cover_image: null, spotify_url: "#", apple_url: "#", bandcamp_url: "#",
  },
  {
    _uid: "r4", title: "Black Dog Blues", type: "EP",
    release_date: "2013-11-01", slug: "black-dog-blues",
    cover_image: null, spotify_url: "#", apple_url: "#", bandcamp_url: null,
  },
  {
    _uid: "r5", title: "River of Smoke", type: "Album",
    release_date: "2009-07-18", slug: "river-of-smoke",
    cover_image: null, spotify_url: "#", apple_url: "#", bandcamp_url: "#",
  },
  {
    _uid: "r6", title: "Dogs of August", type: "EP",
    release_date: "1979-08-01", slug: "dogs-of-august",
    cover_image: null, spotify_url: null, apple_url: null, bandcamp_url: "#",
  },
];

export default async function DiscographyPage() {
  const story = await fetchStory("discography").catch(() => null);

  if (!story) {
    return (
      <div className="pt-20">
        <SbDiscography
          blok={{
            _uid: "disc-fallback",
            component: "discography",
            heading: "Discography",
            releases: FALLBACK_RELEASES,
          }}
        />
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
