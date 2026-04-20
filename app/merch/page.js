import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbMerchGrid from "@/components/sections/SbMerchGrid";

export const metadata = {
  title: "Merch",
  description:
    "Official Johnny Devils merchandise — tees, vinyl, hats, and more. Shop the Hellfire Tour collection.",
};

const FALLBACK_ITEMS = [
  {
    _uid: "mi1", name: "Hellfire Tour Tee", price: "$35",
    image: null, external_url: "#", sold_out: false,
  },
  {
    _uid: "mi2", name: "Hellfire & Honey LP", price: "$28",
    image: null, external_url: "#", sold_out: false,
  },
  {
    _uid: "mi3", name: "Logo Snapback", price: "$30",
    image: null, external_url: "#", sold_out: true,
  },
  {
    _uid: "mi4", name: "Copper & Rust Hoodie", price: "$65",
    image: null, external_url: "#", sold_out: false,
  },
  {
    _uid: "mi5", name: "Devil's Head Enamel Pin", price: "$12",
    image: null, external_url: "#", sold_out: false,
  },
  {
    _uid: "mi6", name: "Dogs of August Tote Bag", price: "$20",
    image: null, external_url: "#", sold_out: false,
  },
];

export default async function MerchPage() {
  const story = await fetchStory("merch").catch(() => null);

  if (!story) {
    return (
      <div className="pt-20">
        <SbMerchGrid
          blok={{
            _uid: "merch-fallback",
            component: "merch_grid",
            heading: "Merch",
            items: FALLBACK_ITEMS,
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
