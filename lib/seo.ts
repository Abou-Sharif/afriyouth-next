import type { Metadata } from "next";
import { programs } from "@/content/programs";
import { mainNav } from "@/content/site";

export const siteUrl = "https://afriyouth-next.vercel.app";
export const siteName = "AfriYouth Innovation Labs";
export const siteDescription =
  "Evidence, innovation and entrepreneurship programs for young people across Africa.";

/** Share image used by every page, 1200x630. */
export const shareImage = { url: "/og.jpg", width: 1200, height: 630, alt: siteName };

/** Every public page path, in sitemap order. The paths come from the nav and the program content. */
export const pagePaths = [
  "/",
  "/programs/",
  ...programs.map((p) => `/programs/${p.slug}/`),
  ...mainNav.map((link) => link.href),
  "/contact/",
];

/** Social tags shared by every page. A page's own openGraph replaces the layout's, so pages repeat these. */
export const socialDefaults = {
  openGraph: { type: "website", siteName, locale: "en", images: [shareImage] },
  twitter: { card: "summary_large_image", images: [shareImage] },
} as const satisfies Pick<Metadata, "openGraph" | "twitter">;

type PageMetadataInput = { title: string; description: string; path: string };

/** Title, description, canonical URL and social tags for one page. */
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...socialDefaults.openGraph, title, description, url: path },
    twitter: { ...socialDefaults.twitter, title, description },
  };
}
