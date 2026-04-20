/**
 * Button — outlined amber variant (default) + filled amber variant.
 * Usage:
 *   <Button href="/tour">Tour Dates</Button>           ← renders <a>
 *   <Button variant="filled" onClick={fn}>Buy</Button> ← renders <button>
 */

import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "outlined",
  size = "md",
  className = "",
  external = false,
  disabled = false,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 label-accent tracking-widest transition-all duration-200 focus-visible:outline-2 focus-visible:outline-brand-amber focus-visible:outline-offset-3 disabled:opacity-40 disabled:cursor-not-allowed";

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    outlined:
      "border border-brand-amber text-brand-amber hover:bg-brand-amber hover:text-brand-black",
    filled:
      "bg-brand-amber text-brand-black border border-brand-amber hover:bg-transparent hover:text-brand-amber",
    ghost:
      "border border-brand-black/20 text-brand-black/70 hover:border-brand-amber hover:text-brand-amber",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} className={classes} {...externalProps} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
