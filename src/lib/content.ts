import { caseStudies } from "@/data/case-studies";
import { creativeWork, MAX_CREATIVE_PHOTOS } from "@/data/creative";
import { shippedProducts } from "@/data/shipped-products";
import type {
  CaseStudy,
  CaseStudyProjectType,
  ProductContext,
  ShippedProduct,
} from "@/data/types";

/* ------------------------------------------------------------------ */
/* Draft preview                                                       */
/* ------------------------------------------------------------------ */

/**
 * Drafts stay off the site, including local preview. Unfinished items are
 * excluded from pages, the sitemap and search. Set SHOW_DRAFTS=true to
 * preview them on a machine that is not a Vercel production deployment.
 */
export function isDraftPreviewEnabled(): boolean {
  if (process.env.VERCEL_ENV === "production") return false;
  return process.env.SHOW_DRAFTS === "true";
}

/* ------------------------------------------------------------------ */
/* Labels                                                              */
/* ------------------------------------------------------------------ */

export const PROJECT_TYPE_LABELS: Record<CaseStudyProjectType, string> = {
  coursework: "Coursework",
  "group-assignment": "Group assignment",
  "independent-concept": "Independent concept",
  professional: "Professional case study",
  unconfirmed: "Project type to be confirmed",
};

export const PRODUCT_CONTEXT_LABELS: Record<ProductContext, string> = {
  professional: "Professional work",
  independent: "Independent product",
  internal: "Internal AI tool",
};

export const DELIVERY_LABELS = {
  team: "Team delivery",
  independent: "Independently built",
  unconfirmed: "Delivery model to be confirmed",
} as const;

/* ------------------------------------------------------------------ */
/* Queries                                                             */
/* ------------------------------------------------------------------ */

function visible<T extends { status: "published" | "draft" }>(items: T[]) {
  const showDrafts = isDraftPreviewEnabled();
  return items.filter((item) => item.status === "published" || showDrafts);
}

/**
 * The four products shown on the homepage, in display order.
 * Everything else is reached from "View all shipped products".
 */
const FEATURED_PRODUCT_SLUGS = [
  "compliance-analyst-ai",
  "aura-energy-portal",
  "outfox-energy-sign-up-journey",
  "outfox-energy-website",
];

export function getShippedProducts(): ShippedProduct[] {
  return visible(shippedProducts);
}

export function getFeaturedShippedProducts(): ShippedProduct[] {
  const bySlug = new Map(getShippedProducts().map((product) => [product.slug, product]));
  return FEATURED_PRODUCT_SLUGS.flatMap((slug) => {
    const product = bySlug.get(slug);
    return product ? [product] : [];
  });
}

export function getShippedProduct(slug: string): ShippedProduct | undefined {
  return getShippedProducts().find((p) => p.slug === slug);
}

/**
 * The four case studies that have a source document, in the same order as
 * the files in "Desktop/case studys". They are shown first.
 */
const SOURCE_DOCUMENT_ORDER = [
  "zomato-engagement-retention-strategy",
  "driving-adoption-jtbd-first-principles",
  "vitafit-momentum-prd",
  "twitter-x-aarrr-funnel-analysis",
];

export function getCaseStudies(): CaseStudy[] {
  return visible(caseStudies)
    .map((study, index) => ({ study, index }))
    .sort((a, b) => {
      const ai = SOURCE_DOCUMENT_ORDER.indexOf(a.study.slug);
      const bi = SOURCE_DOCUMENT_ORDER.indexOf(b.study.slug);
      const ar = ai === -1 ? SOURCE_DOCUMENT_ORDER.length + a.index : ai;
      const br = bi === -1 ? SOURCE_DOCUMENT_ORDER.length + b.index : bi;
      return ar - br;
    })
    .map(({ study }) => study);
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((c) => c.slug === slug);
}

/** Featured case studies for the homepage. */
export function getFeaturedCaseStudies(limit = 4): CaseStudy[] {
  const all = getCaseStudies();
  const featured = all.filter((c) => c.featured);
  // If fewer than `limit` are flagged, fill from the rest in order.
  const rest = all.filter((c) => !c.featured);
  return [...featured, ...rest].slice(0, limit);
}

/** Published items only. Used by the sitemap. */
export function getPublishedProducts(): ShippedProduct[] {
  return shippedProducts.filter((p) => p.status === "published");
}

export function getPublishedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((c) => c.status === "published");
}

/** Related content, restricted to what is currently visible. */
export function getRelatedCaseStudies(product: ShippedProduct): CaseStudy[] {
  return (product.relatedCaseStudySlugs ?? [])
    .map(getCaseStudy)
    .filter((c): c is CaseStudy => Boolean(c));
}

export function getRelatedProducts(study: CaseStudy): ShippedProduct[] {
  return (study.relatedProductSlugs ?? [])
    .map(getShippedProduct)
    .filter((p): p is ShippedProduct => Boolean(p));
}

/* ------------------------------------------------------------------ */
/* Safety checks                                                       */
/* ------------------------------------------------------------------ */

function hasText(block?: { paragraphs?: string[]; bullets?: string[] }) {
  return Boolean(block?.paragraphs?.length || block?.bullets?.length);
}

function isValidHttpUrl(value: string) {
  try {
    const u = new URL(value);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

/**
 * Fails the build if something publishable is incomplete, so unfinished
 * content cannot reach the public site by accident.
 */
export function validateContent(): void {
  const errors: string[] = [];

  const slugs = new Set<string>();
  for (const p of shippedProducts) {
    if (slugs.has(`p:${p.slug}`)) errors.push(`Duplicate product slug: ${p.slug}`);
    slugs.add(`p:${p.slug}`);
    if (p.url && !isValidHttpUrl(p.url)) {
      errors.push(`Product "${p.slug}" has an invalid url.`);
    }
    if (p.status === "published") {
      if (!p.overview.length) errors.push(`Product "${p.slug}" needs an overview.`);
      if (p.access === "not-confirmed") {
        errors.push(`Product "${p.slug}" cannot be published with an unconfirmed release status.`);
      }
    }
    for (const rel of p.relatedCaseStudySlugs ?? []) {
      if (!caseStudies.some((c) => c.slug === rel)) {
        errors.push(`Product "${p.slug}" links to unknown case study "${rel}".`);
      }
    }
  }

  for (const c of caseStudies) {
    if (slugs.has(`c:${c.slug}`)) errors.push(`Duplicate case study slug: ${c.slug}`);
    slugs.add(`c:${c.slug}`);
    if (c.status === "published") {
      if (c.projectType === "unconfirmed") {
        errors.push(`Case study "${c.slug}" needs a confirmed projectType before publishing.`);
      }
      if (!hasText(c.executiveSummary)) {
        errors.push(`Case study "${c.slug}" needs an executiveSummary before publishing.`);
      }
      if (!hasText(c.problem)) {
        errors.push(`Case study "${c.slug}" needs a problem section before publishing.`);
      }
      if (c.projectType === "group-assignment" && !c.role.individualContribution) {
        errors.push(`Group assignment "${c.slug}" needs role.individualContribution before publishing.`);
      }
    }
    for (const rel of c.relatedProductSlugs ?? []) {
      if (!shippedProducts.some((p) => p.slug === rel)) {
        errors.push(`Case study "${c.slug}" links to unknown product "${rel}".`);
      }
    }
  }

  // Creative work: only genuine, complete entries may be listed.
  if (creativeWork.photos.length > MAX_CREATIVE_PHOTOS) {
    errors.push(`Photography & Film: list at most ${MAX_CREATIVE_PHOTOS} photographs.`);
  }
  for (const photo of creativeWork.photos) {
    if (!photo.alt.trim()) errors.push(`Photograph "${photo.src}" needs alt text.`);
    if (!photo.src.startsWith("/") || !photo.width || !photo.height) {
      errors.push(`Photograph "${photo.src}" needs a /public path, width and height.`);
    }
  }
  if (creativeWork.film?.kind === "link" && !isValidHttpUrl(creativeWork.film.url)) {
    errors.push("Photography & Film: the film link is not a valid URL.");
  }
  if (creativeWork.portfolioUrl && !isValidHttpUrl(creativeWork.portfolioUrl)) {
    errors.push("Photography & Film: portfolioUrl is not a valid URL.");
  }

  if (errors.length) {
    throw new Error(`Content validation failed:\n- ${errors.join("\n- ")}`);
  }
}

validateContent();
