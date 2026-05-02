import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Shows", href: "/shows" },
  { label: "Music", href: "/music" },
  { label: "Merch", href: "/merch" },
  { label: "Instagram", href: "https://www.instagram.com/johnnydevilsband/", external: true },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-smoke border-t border-brand-amber/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="group outline-none flex flex-col leading-tight">
              <span className="label-accent text-brand-amber text-lg tracking-widest group-hover:text-brand-black transition-colors duration-200">
                Johnny
              </span>
              <span className="label-accent text-brand-amber text-lg tracking-widest group-hover:text-brand-black transition-colors duration-200">
                Devils
              </span>
            </Link>
            <Image
              src="/horseshoe.png"
              alt="Good luck horseshoe"
              width={72}
              height={72}
              className="object-contain"
            />
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="label-accent text-brand-amber text-xs tracking-widest mb-5">
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2" role="list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-muted text-sm hover:text-brand-black transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-brand-muted text-sm hover:text-brand-black transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
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
              New releases &amp; show dates straight to your inbox.
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
              href="mailto:my@jubel.se"
              className="text-brand-amber hover:text-brand-black transition-colors duration-200"
            >
              my@jubel.se
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
