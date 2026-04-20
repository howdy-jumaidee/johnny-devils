import { storyblokEditable } from "@storyblok/react/rsc";
import MerchCard from "@/components/ui/MerchCard";

export default function SbMerchItem({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      <MerchCard
        name={blok.name}
        image={blok.image}
        price={blok.price}
        external_url={blok.external_url}
        sold_out={blok.sold_out}
      />
    </div>
  );
}
