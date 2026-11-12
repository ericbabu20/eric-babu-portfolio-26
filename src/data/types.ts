/**
 * Shared types for the portfolio's editable content.
 *
 * Content lives in:
 *   - src/data/resume.tsx           (profile, experience, education, skills)
 *   - src/data/shipped-products.ts  (the "Shipped Products" collection)
 *   - src/data/case-studies.ts      (the "Case Studies" collection)
 *
 * Both collections have their own, independent publication status.
 * Nothing marked "draft" appears on the public site or in the sitemap.
 */

export type PublicationStatus = "published" | "draft";

export interface CoverImage {
  /** Path inside /public, e.g. "/covers/outfox-portal.png". */
  src: string;
  /** Describe what the image shows, not that it is an image. */
  alt: string;
  /**
   * Which part of the image stays visible when the card crops it.
   * Defaults to the top, which suits interface screenshots.
   */
  position?: "top" | "center";
}

/** Icon used on the neutral cover shown when no screenshot has been supplied. */
export type CoverIconName =
  | "onboarding"
  | "portal"
  | "website"
  | "assistant"
  | "compliance"
  | "analytics"
  | "retention"
  | "basket"
  | "location"
  | "communication"
  | "ux"
  | "research";

/** Illustrative covers drawn in code. They are always labelled as illustrative. */
export type CoverIllustrationName = "aura-portal";

/** A block of prose and/or bullet points. Both parts are optional. */
export interface TextBlock {
  paragraphs?: string[];
  bullets?: string[];
}

/* ------------------------------------------------------------------ */
/* Shipped products                                                    */
/* ------------------------------------------------------------------ */

export type ProductContext = "professional" | "independent" | "internal";

/** Who did the work. "unconfirmed" is shown honestly on the page. */
export type ProductDelivery = "team" | "independent" | "unconfirmed";

export type ProductAccess =
  | "public" //            Public website, no sign-in needed to view
  | "sign-in-required" //  Live, but customers must sign in
  | "no-public-link" //    Deployed, but no public link to share
  | "not-confirmed"; //    Release status not confirmed

export interface ProductOutcome {
  /** Short figure shown prominently, e.g. "Up to 60%". */
  headline: string;
  /** What the figure refers to, e.g. "reduction in support contacts". */
  statement: string;
  /** The exact scope of the claim. Never widen this. */
  scope: string;
  /**
   * Internal evidence marker. It is never shown to visitors. Only add an
   * outcome here once the supporting evidence is confirmed; unverified
   * figures stay in private/CONTENT-CHECKLIST.md instead.
   */
  basis: "cv-reported" | "measured";
  /**
   * Measurement period, if known. Leave undefined if not supplied; the
   * missing detail is tracked in private/CONTENT-CHECKLIST.md instead of
   * being invented.
   */
  measurementPeriod?: string;
}

export interface ProductCapability {
  title: string;
  description: string;
}

export interface ShippedProduct {
  slug: string;
  status: PublicationStatus;
  name: string;
  /** One or two sentences. Used on the product page and as card fallback. */
  summary: string;
  /**
   * Short card description, about 15–22 words. The product page keeps
   * `summary`, so the card can stay brief without shortening the page.
   */
  cardSummary?: string;
  /** One small category label for the card, e.g. "AI · COMPLIANCE". */
  cardCategory?: string;
  /**
   * Small card badge. Set only when the product record already supports
   * the claim, such as live, independent or not yet released.
   */
  cardStatus?: string;

  context: ProductContext;
  contextLabel: string;
  delivery: ProductDelivery;
  /** Plain-English release status shown on the card. */
  releaseStatus: string;
  access: ProductAccess;
  /** Optional extra access note, e.g. "Customer sign-in required". */
  accessNote?: string;

  /** Optional one-line subtitle shown under the card title. */
  tagline?: string;
  /** Short "My role" line for the card. */
  role: string;
  /** Capability tags for the card. Leave empty to hide them. */
  capabilities: string[];
  /** Optional short list of highlights shown on the card. */
  highlights?: string[];
  /** Label for the internal details link. Defaults to "View product details". */
  detailLabel?: string;
  /**
   * Set when the product has its own page under src/app/products/<slug>,
   * so the generic product template does not also render it.
   */
  dedicatedPage?: boolean;

  /** Optional; omit to hide the external link button entirely. */
  url?: string;
  /** Label for the external link. Defaults to "Visit website". */
  urlLabel?: string;
  /** Optional looping thumbnail under /public, e.g. "/videos/demo.mp4". */
  mediaVideo?: string;
  /** Still frame for the video, shown until it plays, e.g. "/videos/demo.jpg". */
  mediaPoster?: string;
  /** Labelled illustrative cover, used when no genuine screenshot exists. */
  illustration?: CoverIllustrationName;
  cover?: CoverImage;
  coverIcon: CoverIconName;
  /** Company the product was built for; shown next to the logo. */
  company?: string;
  /** Optional logo path under /public, e.g. "/logos/outfox-energy.png". */
  logo?: string;
  /** Name shown on the neutral cover. */
  coverLabel: string;

  /** One factual "delivered" line shown on the card (optional). */
  highlight?: string;

  /* Detail page */
  overview: string[];
  customerProblem: string[];
  contribution: string[];
  /** Shown as "What I built" when set. */
  built?: string;
  /** Shown as "Stack" when set. */
  stack?: string;
  /** Shown as "In progress" when set. */
  inProgress?: string;
  deliveredCapabilities: ProductCapability[];
  outcomes: ProductOutcome[];
  /** Outcomes the CV states without a figure. */
  qualitativeOutcomes?: string[];
  /** Shown near the top of the detail page, e.g. scope disclaimers. */
  notes?: string[];

  relatedCaseStudySlugs?: string[];
  /** Shown only in local draft preview. */
  editorNotes?: string[];
}

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export type CaseStudyProjectType =
  | "coursework"
  | "group-assignment"
  | "independent-concept"
  | "professional"
  | "unconfirmed";

export interface CaseStudyOption {
  name: string;
  description: string;
  /** Why it was or was not taken forward. */
  verdict?: string;
}

export interface ProposedMetric {
  name: string;
  definition: string;
}

export interface MeasuredResult {
  metric: string;
  result: string;
  period?: string;
  source?: string;
}

export interface CaseStudy {
  slug: string;
  status: PublicationStatus;
  title: string;
  summary: string;
  projectType: CaseStudyProjectType;
  /** Company or product the work is about. This is NOT a claim of employment. */
  subject?: string;
  topics: string[];
  cover?: CoverImage;
  coverIcon: CoverIconName;
  /** Optional logo path under /public, e.g. "/logos/outfox-energy.png". */
  logo?: string;
  /** Featured items appear first on the homepage. */
  featured?: boolean;
  timeframe?: string;

  role: {
    title?: string;
    /** Required before a group assignment can be published. */
    individualContribution?: string;
  };

  /* The ten sections, in reading order. */
  executiveSummary?: TextBlock;
  context?: TextBlock;
  problem?: TextBlock;
  targetUsers?: TextBlock;
  evidence?: TextBlock;
  options?: CaseStudyOption[];
  prioritisation?: TextBlock;
  proposedSolution?: TextBlock;
  validationPlan?: TextBlock;
  /** Planned measures. These are NOT results. */
  proposedMetrics?: ProposedMetric[];
  /** Only real, measured results. Leave empty if there are none. */
  measuredResults?: MeasuredResult[];
  reflection?: TextBlock;
  nextSteps?: TextBlock;

  /**
   * Original case study file, served from /public, e.g.
   * "/case-studies/zomato-engagement-retention-strategy.pdf".
   * When set, the card opens this file.
   */
  documentUrl?: string;
  /** Optional links, e.g. a prototype. A link is only shown if it is listed here. */
  links?: { label: string; url: string }[];
  /** Sources cited in the work, shown at the end of the page. */
  references?: string[];

  relatedProductSlugs?: string[];
  /** Shown only in local draft preview. */
  editorNotes?: string[];
}
