import SbRelease from "@/components/sections/SbRelease";
import Button from "@/components/ui/Button";
import { RELEASES } from "@/lib/content";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return RELEASES.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }) {
  const release = RELEASES.find((r) => r.slug === params.slug);
  if (!release) return { title: "Release Not Found" };
  return {
    title: release.title,
    description: `${release.title} by Johnny Devils`,
  };
}

export default function ReleasePage({ params }) {
  const release = RELEASES.find((r) => r.slug === params.slug);
  if (!release) notFound();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <Button href="/discography" variant="ghost" size="sm">
          <ArrowLeft size={14} />
          Back to Discography
        </Button>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SbRelease blok={release} />
      </div>
    </div>
  );
}
