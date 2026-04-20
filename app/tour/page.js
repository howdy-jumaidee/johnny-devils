import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbTourList from "@/components/sections/SbTourList";

export const metadata = {
  title: "Tour Dates",
  description:
    "Johnny Devils live tour dates and concert schedule. Find a show near you and grab tickets before they sell out.",
};

const FALLBACK_DATES = [
  {
    _uid: "t1", date: "2026-06-14", venue: "The Roxy Theatre",
    city: "Los Angeles", country: "USA", ticket_url: "#", sold_out: false,
  },
  {
    _uid: "t2", date: "2026-06-20", venue: "Vic Theatre",
    city: "Chicago", country: "USA", ticket_url: "#", sold_out: false,
  },
  {
    _uid: "t3", date: "2026-06-27", venue: "Bowery Ballroom",
    city: "New York", country: "USA", ticket_url: "#", sold_out: true,
  },
  {
    _uid: "t4", date: "2026-07-05", venue: "Electric Ballroom",
    city: "London", country: "UK", ticket_url: "#", sold_out: false,
  },
  {
    _uid: "t5", date: "2026-07-12", venue: "Paradiso",
    city: "Amsterdam", country: "Netherlands", ticket_url: "#", sold_out: false,
  },
  {
    _uid: "t6", date: "2026-07-19", venue: "Pavillons Sauvages",
    city: "Paris", country: "France", ticket_url: "#", sold_out: false,
  },
  // Past shows
  {
    _uid: "t7", date: "2025-11-08", venue: "The Fillmore",
    city: "San Francisco", country: "USA", ticket_url: null, sold_out: false,
  },
  {
    _uid: "t8", date: "2025-10-25", venue: "9:30 Club",
    city: "Washington D.C.", country: "USA", ticket_url: null, sold_out: true,
  },
];

export default async function TourPage() {
  const story = await fetchStory("tour").catch(() => null);

  if (!story) {
    return (
      <div className="pt-20">
        <SbTourList
          blok={{
            _uid: "tour-fallback",
            component: "tour_list",
            heading: "Tour Dates",
            dates: FALLBACK_DATES,
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
