import { getStoryblokApi } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

/**
 * Fetch a single Storyblok story by its slug.
 * Automatically uses draft version when Next.js draftMode is active (Visual Editor).
 */
export async function fetchStory(slug) {
  const { isEnabled: preview } = await draftMode();

  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: preview ? "draft" : "published",
    resolve_relations: [
      "SbDiscography.releases",
      "SbTourList.dates",
      "SbMerchGrid.items",
      "SbPressKit.quotes",
    ],
  });

  return data?.story ?? null;
}

/**
 * Fetch all stories matching a given starts_with prefix.
 * Useful for listing pages like /discography/[slug].
 */
export async function fetchStories(startsWith, options = {}) {
  const { isEnabled: preview } = await draftMode();
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get("cdn/stories", {
    version: preview ? "draft" : "published",
    starts_with: startsWith,
    ...options,
  });

  return data?.stories ?? [];
}

/**
 * Fetch the global config singleton (nav, footer).
 */
export async function fetchGlobalConfig() {
  return fetchStory("global-config");
}
