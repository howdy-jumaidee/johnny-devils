import Image from "next/image";
import Link from "next/link";
import { Music, ExternalLink } from "lucide-react";

export default function ReleaseCard({ release }) {
  const {
    title,
    cover_image,
    release_date,
    type,
    spotify_url,
    apple_url,
    bandcamp_url,
    slug,
  } = release;

  const year = release_date ? new Date(release_date).getFullYear() : null;

  return (
    <article className="group bg-brand-smoke border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-200 flex flex-col">
      {/* Cover */}
      <Link
        href={`/discography/${slug?.current ?? slug ?? "#"}`}
        className="block relative aspect-square overflow-hidden"
        aria-label={`View ${title}`}
      >
        {cover_image?.filename ? (
          <Image
            src={cover_image.filename}
            alt={cover_image.alt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-brand-black/60 flex items-center justify-center">
            <Music size={40} className="text-brand-amber/40" />
          </div>
        )}

        {/* Type badge */}
        <span className="absolute top-3 left-3 label-accent text-xs px-2 py-1 bg-brand-black/80 text-brand-amber border border-brand-amber/30">
          {type ?? "Album"}
        </span>
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="heading-serif text-brand-black text-lg leading-tight group-hover:text-brand-amber transition-colors duration-200">
            {title}
          </h3>
          {year && (
            <p className="label-accent text-brand-muted text-xs mt-1 tracking-widest">
              {year}
            </p>
          )}
        </div>

        {/* Streaming links */}
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-brand-amber/10">
          {spotify_url && (
            <a
              href={spotify_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Spotify"
              className="p-1.5 text-brand-muted hover:text-brand-amber transition-colors duration-200"
            >
              <ExternalLink size={14} />
            </a>
          )}
          {apple_url && (
            <a
              href={apple_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Apple Music"
              className="p-1.5 text-brand-muted hover:text-brand-amber transition-colors duration-200"
            >
              <ExternalLink size={14} />
            </a>
          )}
          {bandcamp_url && (
            <a
              href={bandcamp_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Listen on Bandcamp"
              className="p-1.5 text-brand-muted hover:text-brand-amber transition-colors duration-200"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
