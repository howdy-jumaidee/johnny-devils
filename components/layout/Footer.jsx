
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const BG = "#EDE8DE"; // brand smoke (tan)
const CREAM = "#F9F8F2"; // brand cream — page content bg on inner pages
const TICKER_TEXT = "JOHNNY DEVILS · ";
const SCROLL_SPEED = 140; // px per second (frame-rate independent)

export default function Footer() {
  // Home ends on a brand-smoke section that already matches the footer, so it
  // needs no blend. Inner pages end on brand-cream — feather the seam there.
  const isHome = usePathname() === "/";
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const lastTimeRef = useRef(null);
  const stateRef = useRef({ W: 0, H: 0, fontSize: 0, unitWidth: 0, fullText: "" });

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const ctx = canvas.getContext("2d");

    const measure = () => {
      const { W, H } = stateRef.current;
      const fontSize = Math.round(H * 1.5);
      ctx.font = `${fontSize}px "Bad Gringo"`;
      const unitWidth = ctx.measureText(TICKER_TEXT).width;
      if (!unitWidth) return; // not measurable yet (zero-size or font unready)
      const repeats = Math.ceil((W * 3) / unitWidth) + 2;
      stateRef.current = {
        W,
        H,
        fontSize,
        unitWidth,
        fullText: TICKER_TEXT.repeat(repeats),
      };
    };

    const resize = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      stateRef.current = { ...stateRef.current, W, H };
      measure();
    };

    const draw = (now) => {
      const { W, H, fontSize, unitWidth, fullText } = stateRef.current;

      // Frame-rate independent advance: px/sec * elapsed seconds
      const last = lastTimeRef.current;
      const dt = last == null ? 0 : Math.min((now - last) / 1000, 0.05);
      lastTimeRef.current = now;
      offsetRef.current += SCROLL_SPEED * dt;

      // Tan fill — letters get punched out of this to reveal the video
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);

      // Punch text out so video shows through
      ctx.globalCompositeOperation = "destination-out";
      ctx.font = `${fontSize}px "Bad Gringo"`;
      ctx.fillStyle = "rgba(0,0,0,1)";
      ctx.textBaseline = "middle";

      const x = -(offsetRef.current % unitWidth);
      ctx.fillText(fullText, x, H * 0.54);

      rafRef.current = requestAnimationFrame(draw);
    };

    // Start immediately — don't gate the whole effect on font loading.
    resize();
    video.play().catch(() => {});
    rafRef.current = requestAnimationFrame(draw);

    // Re-measure once the custom font is ready so glyph widths are correct.
    document.fonts.load(`1em "Bad Gringo"`).then(measure).catch(() => {});

    // ResizeObserver on the canvas already catches viewport changes
    // (canvas is w-full/h-full in a vh-sized box), so no window listener needed.
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <footer>
      {/* Ticker mask section */}
      <div className="relative overflow-hidden" style={{ height: "55vh" }}>
        <video
          ref={videoRef}
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* Soft top fade so the tan footer emerges from the cream page content
            instead of meeting it with a hard line. Skipped on home, whose
            preceding section is already brand-smoke. */}
        {!isHome && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 pointer-events-none"
            style={{
              // Full cream at the very top to meet the page seamlessly, then a
              // quicker falloff so the wash stays subtle (less bright) lower down.
              background: `linear-gradient(to bottom, ${CREAM} 0%, rgba(249,248,242,0.45) 30%, rgba(249,248,242,0) 85%)`,
            }}
          />
        )}
      </div>

      {/* Bottom strip */}
      <div className="bg-brand-smoke px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-brand-muted text-xs tracking-wide">
          © {new Date().getFullYear()} Johnny Devils. All rights reserved.
        </p>
        <a
          href="mailto:my@jubel.se"
          className="text-brand-muted text-xs tracking-wide hover:text-brand-amber transition-colors duration-200"
        >
          Booking: my@jubel.se
        </a>
      </div>
    </footer>
  );
}
