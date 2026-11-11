import { Cover } from "@/components/cards/cover";
import { DraftBadge, DraftPreviewNotice } from "@/components/cards/draft-badge";
import {
  BackLink,
  BulletList,
  DetailSection,
  Divider,
} from "@/components/detail-layout";
import BlurFade from "@/components/magicui/blur-fade";
import { LogoBadge } from "@/components/logo-badge";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import type { ProductOutcome } from "@/data/types";
import {
  DELIVERY_LABELS,
  getRelatedCaseStudies,
  getShippedProduct,
  getShippedProducts,
  isDraftPreviewEnabled,
  PROJECT_TYPE_LABELS,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamicParams = false;

const BLUR_FADE_DELAY = 0.04;

type Params = { slug: string };

export async function generateStaticParams() {
  return getShippedProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const product = getShippedProduct(slug);
  if (!product) return undefined;

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    robots: product.status === "draft" ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${product.name} | ${DATA.name}`,
      description: product.summary,
      type: "article",
      url: `${DATA.url}/products/${product.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${DATA.name}`,
      description: product.summary,
    },
  };
}

function OutcomeCard({ outcome }: { outcome: ProductOutcome }) {
  return (
    <li className="rounded-xl border border-border bg-card p-5 text-card-foreground">
      <p className="text-2xl font-semibold tracking-tight">{outcome.headline}</p>
      <p className="mt-1 text-foreground">{outcome.statement}</p>
      <dl className="mt-3 grid gap-2 text-sm text-muted-foreground">
        <div>
          <dt className="inline font-medium text-foreground">Scope: </dt>
          <dd className="inline">{outcome.scope}</dd>
        </div>
        {outcome.measurementPeriod && (
          <div>
            <dt className="inline font-medium text-foreground">Period: </dt>
            <dd className="inline">{outcome.measurementPeriod}</dd>
          </div>
        )}
      </dl>
    </li>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getShippedProduct(slug);
  if (!product) notFound();

  const relatedStudies = getRelatedCaseStudies(product);

  return (
    <article className="mx-auto w-full max-w-3xl">
      <BackLink href="/#shipped-products">Back to Shipped Products</BackLink>

      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="flex flex-col gap-4">
          {product.logo && (
            <div className="flex items-center gap-2.5">
              <LogoBadge src={product.logo} alt="" size="md" />
              <span className="text-base font-medium text-muted-foreground">
                {product.company}
              </span>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{product.contextLabel}</Badge>
            <Badge variant="outline">{DELIVERY_LABELS[product.delivery]}</Badge>
            <DraftBadge status={product.status} />
          </div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
            {product.name}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground text-pretty">
            {product.summary}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: product.urlLabel ? "outline" : "default" }),
                  "gap-1.5",
                )}
              >
                {product.urlLabel ?? "Visit website"}
                <span className="sr-only"> for {product.name} (opens in a new tab)</span>
                <ArrowUpRightIcon className="size-4" aria-hidden />
              </a>
            )}
            {product.accessNote && (
              <span className="text-sm text-muted-foreground">{product.accessNote}</span>
            )}
          </div>
        </header>
      </BlurFade>

      <DraftPreviewNotice className="mt-6" show={product.status === "draft"} />

      {isDraftPreviewEnabled() && product.editorNotes && product.editorNotes.length > 0 && (
        <div role="note" className="mt-4 rounded-lg border border-dashed border-amber-600 px-4 py-3 text-sm text-amber-800 dark:border-amber-400 dark:text-amber-200">
          <p className="font-semibold">Editor notes (local preview only)</p>
          <ul className="mt-1 list-disc pl-5">
            {product.editorNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      )}

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <Cover
          cover={product.cover}
          video={product.mediaVideo}
          icon={product.coverIcon}
          label={product.coverLabel}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="mt-8 rounded-xl border"
        />
      </BlurFade>

      <dl className="mt-8 grid gap-4 rounded-xl border border-border p-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Release status
          </dt>
          <dd className="mt-1">{product.releaseStatus}</dd>
        </div>
        <div>
          <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Context
          </dt>
          <dd className="mt-1">
            {product.contextLabel}. {DELIVERY_LABELS[product.delivery]}.
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            My role
          </dt>
          <dd className="mt-1">{product.role}</dd>
        </div>
      </dl>

      {product.notes && product.notes.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
          {product.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      )}

      <Divider />

      <div className="flex flex-col gap-12">
        <DetailSection id="overview" title="Overview">
          {product.overview.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </DetailSection>

        <DetailSection id="customer-problem" title="Customer problem">
          {product.customerProblem.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </DetailSection>

        {product.built && (
          <DetailSection id="what-i-built" title="What I built">
            <p>{product.built}</p>
          </DetailSection>
        )}

        {product.stack && (
          <DetailSection id="stack" title="Stack">
            <p>{product.stack}</p>
          </DetailSection>
        )}

        {product.inProgress && (
          <DetailSection id="in-progress" title="In progress">
            <p>{product.inProgress}</p>
          </DetailSection>
        )}

        <DetailSection id="my-contribution" title="My contribution">
          <BulletList items={product.contribution} />
        </DetailSection>

        <DetailSection id="delivered-capabilities" title="Delivered capabilities">
          <ul className="grid gap-3 sm:grid-cols-2">
            {product.deliveredCapabilities.map((c) => (
              <li key={c.title} className="rounded-xl border border-border p-4">
                <p className="font-medium text-foreground">{c.title}</p>
                <p className="mt-1 text-sm">{c.description}</p>
              </li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection id="outcomes" title="Delivered outcomes">
          {product.outcomes.length > 0 && (
            <ul className="grid gap-3">
              {product.outcomes.map((o) => (
                <OutcomeCard key={o.headline + o.statement} outcome={o} />
              ))}
            </ul>
          )}
          {product.qualitativeOutcomes && product.qualitativeOutcomes.length > 0 && (
            <BulletList items={product.qualitativeOutcomes} />
          )}
          {product.outcomes.length === 0 &&
            !product.qualitativeOutcomes?.length && (
              <p>No outcome measures are published for this product yet.</p>
            )}
        </DetailSection>

        {relatedStudies.length > 0 && (
          <DetailSection id="related" title="Related case studies">
            <ul className="space-y-2">
              {relatedStudies.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/case-studies/${s.slug}`}
                    className="font-medium text-foreground underline underline-offset-4"
                  >
                    {s.title}
                  </Link>{" "}
                  <span className="text-sm">({PROJECT_TYPE_LABELS[s.projectType]})</span>
                </li>
              ))}
            </ul>
          </DetailSection>
        )}
      </div>
    </article>
  );
}
