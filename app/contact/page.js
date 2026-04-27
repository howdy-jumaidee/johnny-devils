import SbContactForm from "@/components/sections/SbContactForm";
import { CONTACT } from "@/lib/content";

export const metadata = {
  title: "Contact & Booking",
  description:
    "Book Johnny Devils for your venue or festival. Send a message for booking inquiries, press, and general questions.",
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
