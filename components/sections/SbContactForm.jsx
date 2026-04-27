"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const SUBJECTS = ["Booking", "Press", "General"];

export default function SbContactForm({ blok }) {
  const { heading, subtext, booking_email } = blok;

  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section
      className="py-20 lg:py-32"
      aria-label="Contact form"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="label-accent text-brand-amber text-xs tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="heading-display text-brand-black text-4xl sm:text-5xl">
            {heading ?? "Contact & Booking"}
          </h2>
          {subtext && (
            <p className="text-brand-muted text-base mt-4 leading-relaxed">
              {subtext}
            </p>
          )}
          <hr className="divider-amber mt-6" />
        </motion.div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-16 text-center border border-brand-amber/30 bg-brand-smoke"
          >
            <CheckCircle size={48} className="text-brand-amber" />
            <p className="heading-serif text-brand-black text-xl">Message sent!</p>
            <p className="text-brand-muted text-sm max-w-xs">
              We&apos;ll get back to you as soon as possible. If it&apos;s
              urgent, reach us at{" "}
              <a
                href={`mailto:${booking_email ?? "my@jubel.se"}`}
                className="text-brand-amber hover:underline"
              >
                {booking_email ?? "my@jubel.se"}
              </a>
              .
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block label-accent text-brand-muted text-xs tracking-widest mb-2"
              >
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={fields.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full bg-brand-smoke border border-brand-amber/20 text-brand-black placeholder:text-brand-muted/40 px-4 py-3 text-sm focus:outline-none focus:border-brand-amber transition-colors duration-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block label-accent text-brand-muted text-xs tracking-widest mb-2"
              >
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={fields.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-brand-smoke border border-brand-amber/20 text-brand-black placeholder:text-brand-muted/40 px-4 py-3 text-sm focus:outline-none focus:border-brand-amber transition-colors duration-200"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block label-accent text-brand-muted text-xs tracking-widest mb-2"
              >
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={fields.subject}
                onChange={handleChange}
                className="w-full bg-brand-smoke border border-brand-amber/20 text-brand-black px-4 py-3 text-sm focus:outline-none focus:border-brand-amber transition-colors duration-200 appearance-none"
              >
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block label-accent text-brand-muted text-xs tracking-widest mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={fields.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind…"
                className="w-full bg-brand-smoke border border-brand-amber/20 text-brand-black placeholder:text-brand-muted/40 px-4 py-3 text-sm focus:outline-none focus:border-brand-amber transition-colors duration-200 resize-none"
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="flex items-center gap-2 text-brand-rust text-sm border border-brand-rust/30 px-4 py-3 bg-brand-rust/10">
                <AlertCircle size={16} className="shrink-0" />
                {errorMsg || "Something went wrong. Please try again."}
              </div>
            )}

            <Button
              type="submit"
              variant="filled"
              size="lg"
              disabled={status === "loading"}
              className="w-full justify-center"
            >
              {status === "loading" ? (
                "Sending…"
              ) : (
                <>
                  Send Message
                  <Send size={15} />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
