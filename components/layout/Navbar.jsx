"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Music",  href: "/music" },
  { label: "Shows",  href: "/shows" },
  { label: "Merch",  href: "/merch" },
  // { label: "Press",  href: "/press" },   // re-enable when press assets are ready
  { label: "About",  href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Cream/dark text: dark on sub-pages always; on homepage only after scrolling past hero
  const isLight = pathname !== "/" || scrolled;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isLight
            ? "bg-brand-cream/95 backdrop-blur-sm border-b border-brand-black/10"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group"
            aria-label="Johnny Devils — Home"
          >
            <span className={`label-accent text-brand-amber text-xl tracking-widest transition-colors duration-200 ${isLight ? "group-hover:text-brand-black" : "group-hover:text-brand-cream"}`}>
              Johnny Devils
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 group ${
                      active
                        ? "text-brand-amber"
                        : isLight
                        ? "text-brand-black/70 hover:text-brand-black"
                        : "text-brand-cream/80 hover:text-brand-cream"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-px bg-brand-amber transition-transform duration-200 origin-left ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA — desktop */}
          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center px-5 py-2 border text-sm font-medium label-accent tracking-widest transition-all duration-200 ${
              isLight
                ? "border-brand-black text-brand-black hover:bg-brand-black hover:text-brand-cream"
                : "border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-black"
            }`}
            aria-label="Booking inquiry"
          >
            Book Us
          </Link>

          {/* Hamburger — mobile */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span className={`block w-6 h-px transition-colors duration-200 group-hover:bg-brand-amber ${isLight ? "bg-brand-black" : "bg-brand-cream"}`} />
            <span className={`block w-4 h-px transition-colors duration-200 group-hover:bg-brand-amber ${isLight ? "bg-brand-black" : "bg-brand-cream"}`} />
            <span className={`block w-6 h-px transition-colors duration-200 group-hover:bg-brand-amber ${isLight ? "bg-brand-black" : "bg-brand-cream"}`} />
          </button>
        </nav>
      </header>

      <MobileMenu
        links={NAV_LINKS}
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
