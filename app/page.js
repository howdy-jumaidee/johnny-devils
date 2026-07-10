import HomePageFallback from "@/components/sections/HomePageFallback";

export const metadata = {
  title: { absolute: "Johnny Devils — Home" },
  description:
    "Five-piece outlaw country and rock from Stockholm. Stream Ground Rush, catch live shows, and grab merch.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Johnny Devils — Official Site",
    description:
      "Five-piece outlaw country and rock from Stockholm. Stream Ground Rush, catch live shows, and grab merch.",
    url: "https://johnnydevils.com",
  },
};

export default function HomePage() {
  return <HomePageFallback />;
}
