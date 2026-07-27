import type { MetadataRoute } from "next";
import { posts } from "./data/posts.generated";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://devjoowon.github.io";
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/posts/${post.slug}/`,
      lastModified: new Date(`${post.date}T00:00:00+09:00`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
