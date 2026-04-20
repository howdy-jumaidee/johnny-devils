import { fetchStory } from "@/lib/storyblok";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import SbContactForm from "@/components/sections/SbContactForm";

export const metadata = {
  title: "Contact & Booking",
  description:
    "Book Johnny Devils for your venue or festival. Send a message for booking inquiries, press, and general questions.",
};

const FALLBACK_BLOK = {
  _uid: "contact-fallback",
  component: "contact_form",
  heading: "Contact & Booking",
  subtext:
    "For bookings, press inquiries, or anything else — use the form below or reach us directly at booking@johnnydevils.com. We respond within 48 hours.",
  booking_email: "booking@johnnydevils.com",
};

export default async function ContactPage() {
  const story = await fetchStory("contact").catch(() => null);

  if (!story) {
    return (
      <div className="pt-20">
        <SbContactForm blok={FALLBACK_BLOK} />
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
