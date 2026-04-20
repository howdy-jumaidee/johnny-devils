/**
 * Storyblok component registry.
 * Pass this `components` map to storyblokInit() in app/layout.js.
 * Each key matches the Storyblok component technical name.
 */

import SbHero from "@/components/sections/SbHero";
import SbAbout from "@/components/sections/SbAbout";
import SbRelease from "@/components/sections/SbRelease";
import SbDiscography from "@/components/sections/SbDiscography";
import SbTourDate from "@/components/sections/SbTourDate";
import SbTourList from "@/components/sections/SbTourList";
import SbMusicEmbed from "@/components/sections/SbMusicEmbed";
import SbGallery from "@/components/sections/SbGallery";
import SbMerchItem from "@/components/sections/SbMerchItem";
import SbMerchGrid from "@/components/sections/SbMerchGrid";
import SbPressKit from "@/components/sections/SbPressKit";
import SbContactForm from "@/components/sections/SbContactForm";
import SbTextSection from "@/components/sections/SbTextSection";

const components = {
  hero: SbHero,
  about: SbAbout,
  release: SbRelease,
  discography: SbDiscography,
  tour_date: SbTourDate,
  tour_list: SbTourList,
  music_embed: SbMusicEmbed,
  gallery: SbGallery,
  merch_item: SbMerchItem,
  merch_grid: SbMerchGrid,
  press_kit: SbPressKit,
  contact_form: SbContactForm,
  text_section: SbTextSection,
};

export default components;
