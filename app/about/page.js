import SbAbout from "@/components/sections/SbAbout";
import { MEMBERS, ABOUT } from "@/lib/content";

export const metadata = {
  title: "About the Band",
  description:
    "Johnny Devils formed in Stockholm in February 2024 — five musicians driven by country, blues, and 1960s rock. Ground Rush out now.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Johnny Devils",
    description:
      "Johnny Devils formed in Stockholm in February 2024 — five musicians driven by country, blues, and 1960s rock. Ground Rush out now.",
    url: "https://johnnydevils.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <SbAbout
        blok={{
          _uid: "about",
          component: "about",
          heading: ABOUT.heading,
          body_text: null,
          band_photo: null,
          members: MEMBERS,
        }}
      />
      <section className="py-16 border-t border-brand-amber/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="label-accent text-brand-amber text-xs tracking-widest mb-4">
            The Story
          </p>
          <div className="text-brand-black/75 leading-relaxed space-y-5 text-lg">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
