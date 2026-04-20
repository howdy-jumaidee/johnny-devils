"use client";

import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import { ExternalLink, Music } from "lucide-react";
import Button from "@/components/ui/Button";

export default function SbRelease({ blok }) {
  const {
    title,
    cover_image,
    release_date,
    type,
    spotify_url,
    apple_url,
    bandcamp_url,
    tracklist,
  } = blok;

  const year = release_date ? new Date(release_date).getFullYear() : null;
  const fullDate = release_date
    ? new Date(release_date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const streamingLinks = [
    { label: "Spotify", url: spotify_url },
    { label: "Apple Music", url: apple_url },
    { label: "Bandcamp", url: bandcamp_url },
  ].filter((l) => l.url);

  return (
    <article
      {...storyblokEditable(blok)}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
    >
      {/* Cover */}
      <div className="relative">
        <div className="relative aspect-square overflow-hidden border border-brand-amber/20">
          {cover_image?.filename ? (
            <Image
              src={cover_image.filename}
              alt={cover_image.alt || title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-brand-smoke flex items-center justify-center">
              <Music size={48} className="text-brand-amber/30" />
            </div>
          )}
        </div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-brand-amber/40" />
      </div>

      {/* Details */}
      <div>
        <p className="label-accent text-brand-amber text-xs tracking-widest mb-3">
          {type ?? "Album"} {year ? `· ${year}` : ""}
        </p>
        <h2 className="heading-display text-brand-black text-4xl sm:text-5xl mb-2">
          {title}
        </h2>
        {fullDate && (
          <p className="text-brand-muted text-sm mb-8">{fullDate}</p>
        )}

        <hr className="divider-amber mb-8" />

        {/* Tracklist */}
        {tracklist?.length > 0 && (
          <ol className="mb-10 space-y-2" aria-label="Tracklist">
            {tracklist.map((track, i) => (
              <li
                key={track._uid ?? i}
                className="flex items-center justify-between py-2.5 border-b border-brand-amber/10 gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="label-accent text-brand-muted text-xs w-5 shrink-0">
                    {track.number ?? i + 1}
                  </span>
                  <span className="text-brand-black/90 text-sm">{track.title}</span>
                </div>
                {track.duration && (
                  <span className="label-accent text-brand-muted text-xs shrink-0">
                    {track.duration}
                  </span>
                )}
              </li>
            ))}
          </ol>
        )}

        {/* Streaming buttons */}
        {streamingLinks.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {streamingLinks.map(({ label, url }) => (
              <Button
                key={label}
                href={url}
                variant="outlined"
                size="sm"
                external
              >
                {label}
                <ExternalLink size={12} />
              </Button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
