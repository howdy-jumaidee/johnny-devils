import { SITE_URL, RELEASES } from "@/lib/content";

export default function sitemap() {
  const base = SITE_URL;
  const now = new Date();

  const releaseEntries = RELEASES.map((r) => ({
    url: `${base}/discography/${r.slug}`,
    lastModified: new Date(r.release_date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [
    { url: base,                         lastModified: now, changeFrequency: "weekly",  priority: 1   },
    { url: `${base}/about`,              lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/music`,              lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shows`,              lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${base}/discography`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...releaseEntries,
    { url: `${base}/merch`,              lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${base}/gallery`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`,            lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
  ];
}
