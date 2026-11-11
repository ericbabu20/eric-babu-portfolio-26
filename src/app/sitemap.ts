import { DATA } from "@/data/resume";
import {
  getPublishedCaseStudies,
  getPublishedProducts,
} from "@/lib/content";
import { allPosts } from "content-collections";
import type { MetadataRoute } from "next";

/**
 * Lists published pages only. Drafts are never included, even in preview.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = DATA.url.replace(/\/$/, "");
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/case-studies`, lastModified: now },
    { url: `${base}/photography`, lastModified: now },
    ...getPublishedProducts().map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: now,
    })),
    ...getPublishedCaseStudies().map((c) => ({
      url: `${base}/case-studies/${c.slug}`,
      lastModified: now,
    })),
    ...(allPosts.length > 0
      ? [
          { url: `${base}/blog`, lastModified: now },
          ...allPosts.map((post) => ({
            url: `${base}/blog/${post._meta.path.replace(/\.mdx$/, "")}`,
            lastModified: new Date(post.updatedAt ?? post.publishedAt),
          })),
        ]
      : []),
  ];
}
