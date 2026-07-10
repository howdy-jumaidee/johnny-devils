import SbContactForm from "@/components/sections/SbContactForm";
import { CONTACT } from "@/lib/content";

export const metadata = {
  title: "Contact & Booking",
  description:
    "Book Johnny Devils for live shows and events. Contact booking agent My Bergman at Jubel — my@jubel.se.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & Booking | Johnny Devils",
    description:
      "Book Johnny Devils for live shows and events. Contact booking agent My Bergman at Jubel — my@jubel.se.",
    url: "https://johnnydevils.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <SbContactForm
        blok={{
          _uid: "contact",
          component: "contact_form",
          heading: CONTACT.heading,
          subtext: CONTACT.subtext,
          booking_email: CONTACT.booking_email,
        }}
      />
    </div>
  );
}
