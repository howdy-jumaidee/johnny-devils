import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbAbout from "@/components/sections/SbAbout";

export const metadata = {
  title: "About the Band",
  description:
    "The story of Johnny Devils — four road-worn musicians who forged their sound in the back rooms of Detroit and never looked back.",
};

const FALLBACK_BLOK = {
  _uid: "about-fallback",
  component: "about",
  heading: "About the Band",
  body_text: null,
  band_photo: null,
  members: [
    { _uid: "m1", name: "Johnny \"Devil\" Marrano", role: "Lead Vocals & Harmonica" },
    { _uid: "m2", name: "Sal Cortez", role: "Lead Guitar" },
    { _uid: "m3", name: "Benji \"Big Bear\" Wallace", role: "Bass Guitar" },
    { _uid: "m4", name: "Ray Odum", role: "Drums & Percussion" },
  ],
};

export default async function AboutPage() {
  const story = await fetchStory("about").catch(() => null);

  if (!story) {
    return (
      <div className="pt-20">
        <SbAbout blok={FALLBACK_BLOK} />
        <section className="py-16 border-t border-brand-amber/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="label-accent text-brand-amber text-xs tracking-widest mb-4">The Story</p>
            <div className="text-brand-black/75 leading-relaxed space-y-5 text-lg">
              <p>
                Johnny Devils came together in the smoke-filled back rooms of
                Detroit in 1978. Singer and harmonica player Johnny Marrano had
                been drifting through the Mississippi Delta for two years,
                soaking up Robert Johnson records and Muddy Waters shows before
                returning north with fire in his chest and a voice that sounded
                like gravel being dragged over hot coals.
              </p>
              <p>
                He found guitarist Sal Cortez busking outside a Tiger Stadium
                gate after a game, coaxed bassist Benji Wallace out of retirement
                with a phone call and a bottle of bourbon, and spotted drummer
                Ray Odum behind the kit at a church social in Dearborn — playing
                gospel like he was summoning something dangerous.
              </p>
              <p>
                Their debut EP, <em>Dogs of August</em>, was recorded live in a
                converted auto-body shop and sold two thousand copies out of the
                back of a van. By 1982, they were headlining the Roxy in Los
                Angeles. By 1985, they were selling out arenas in Europe. The fire
                never went out.
              </p>
              <p>
                Eleven studio albums. Hundreds of festival slots. A reputation
                as one of the most electrifying live acts of their generation.
                Johnny Devils don&apos;t make music for the charts — they make
                music for the road, for the night, for the feeling you get when
                the guitar hits the right note and everything else falls away.
              </p>
            </div>
          </div>
        </section>
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
