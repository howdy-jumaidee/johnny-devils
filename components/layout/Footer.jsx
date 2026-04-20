import Link from "next/link";
import { Camera, Globe, Play, X } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: Camera },
  { label: "Facebook", href: "#", Icon: Globe },
  { label: "YouTube", href: "#", Icon: Play },
  { label: "Twitter / X", href: "#", Icon: X },
];

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Discography", href: "/discography" },
  { label: "Tour", href: "/tour" },
  { label: "Music", href: "/music" },
  { label: "Gallery", href: "/gallery" },
  { label: "Merch", href: "/merch" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-smoke border-t border-brand-amber/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="group w-fit">
              <span className="label-accent text-brand-amber text-lg tracking-widest group-hover:text-brand-black transition-colors duration-200">
                Johnny Devils
              </span>
            </Link>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 border border-brand-amber/30 text-brand-muted hover:text-brand-amber hover:border-brand-amber transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="label-accent text-brand-amber text-xs tracking-widest mb-5">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-muted text-sm hover:text-brand-black transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mailing list teaser */}
          <div>
            <p className="label-accent text-brand-amber text-xs tracking-widest mb-5">
              Stay in the loop
            </p>
            <p className="text-brand-muted text-sm mb-4 leading-relaxed">
              New releases, tour announcements, and backstage access — straight
              to your inbox.
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 border border-brand-amber text-brand-amber text-sm label-accent tracking-widest hover:bg-brand-amber hover:text-brand-black transition-all duration-200"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brand-amber/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-xs">
            © {new Date().getFullYear()} Johnny Devils. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs">
            Booking inquiries:{" "}
            <a
              href="mailto:booking@johnnydevils.com"
              className="text-brand-amber hover:text-brand-black transition-colors duration-200"
            >
              booking@johnnydevils.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
