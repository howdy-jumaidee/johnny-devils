"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function MobileMenu({ links, isOpen, onClose, pathname }) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.nav
            id="mobile-menu"
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-brand-smoke flex flex-col"
            aria-label="Mobile navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-amber/20">
              <span className="label-accent text-brand-amber text-lg tracking-widest">
                Menu
              </span>
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 text-brand-black/70 hover:text-brand-amber transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col flex-1 py-8 px-6 gap-1" role="list">
              {links.map((link, i) => {
                const active = pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block py-3 text-2xl heading-serif border-b border-brand-amber/10 transition-colors duration-200 ${
                        active
                          ? "text-brand-amber"
                          : "text-brand-black hover:text-brand-amber"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="px-6 py-6 border-t border-brand-amber/20">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center py-3 border border-brand-amber text-brand-amber label-accent tracking-widest text-sm hover:bg-brand-amber hover:text-brand-black transition-all duration-200"
              >
                Book Us
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
