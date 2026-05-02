import Image from "next/image";
import { ShoppingBag } from "lucide-react";

export default function MerchCard({ name, image, price, external_url, cta_label, sold_out }) {
  return (
    <article className="group bg-brand-smoke border border-brand-amber/20 hover:border-brand-amber/50 transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-brand-black/40">
        {image?.filename ? (
          <Image
            src={image.filename}
            alt={image.alt || name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover transition-transform duration-500 ${
              sold_out ? "grayscale opacity-60" : "group-hover:scale-105"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag size={36} className="text-brand-amber/30" />
          </div>
        )}

        {sold_out && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="label-accent text-xs px-3 py-1.5 bg-brand-black/90 border border-brand-rust/60 text-brand-rust tracking-widest">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="heading-serif text-brand-black leading-tight">{name}</h3>
          {price && (
            <p className="label-accent text-brand-amber text-sm mt-1 tracking-widest">
              {price}
            </p>
          )}
        </div>

        {external_url && !sold_out ? (
          <a
            href={external_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto block w-full text-center py-2.5 border border-brand-amber text-brand-amber label-accent text-xs tracking-widest hover:bg-brand-amber hover:text-brand-black transition-all duration-200"
          >
            {cta_label ?? "Buy Now"}
          </a>
        ) : (
          <span
            className="mt-auto block w-full text-center py-2.5 border border-brand-muted/30 text-brand-muted label-accent text-xs tracking-widest cursor-not-allowed"
            aria-disabled="true"
          >
            {sold_out ? "Unavailable" : "View Item"}
          </span>
        )}
      </div>
    </article>
  );
}
