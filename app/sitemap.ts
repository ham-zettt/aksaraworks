import type { MetadataRoute } from "next";
import { branches, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...Object.values(branches).map((branch) => ({
      url: `${site.url}${branch.path}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
