import { Cover } from "@/components/cards/cover";
import { CaseStudyVisual, hasCaseStudyVisual } from "@/components/case-study/visual-summary";
import {
  BackLink,
  BulletList,
  DetailSection,
  Divider,
  PendingNote,
} from "@/components/detail-layout";
import BlurFade from "@/components/magicui/blur-fade";
import { LogoBadge } from "@/components/logo-badge";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import type { CaseStudy, TextBlock } from "@/data/types";
import {
  getCaseStudies,
  getCaseStudy,
  getRelatedProducts,
  isDraftPreviewEnabled,
  PROJECT_TYPE_LABELS,
} from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export const dynamicParams = false;

const BLUR_FADE_DELAY = 0.04;

type Params = { slug: string };

export async function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return undefined;

  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/case-studies/${study.slug}` },
    robots: study.status === "draft" ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${study.title} | ${DATA.name}`,
      description: study.summary,
      type: "article",
      url: `${DATA.url}/case-studies/${study.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} | ${DATA.name}`,
      description: study.summary,
    },
  };
}

function hasText(block?: TextBlock) {
  return Boolean(block?.paragraphs?.length || block?.bullets?.length);
}

function Block({ block }: { block: TextBlock }) {
  return (
    <>
      {block.paragraphs?.map((p) => <p key={p}>{p}</p>)}
      {block.bullets && block.bullets.length > 0 && <BulletList items={block.bullets} />}
    </>
  );
}

/** Renders a block, or (in draft preview only) a clear "pending" note. */
function BlockOrPending({ block, preview }: { block?: TextBlock; preview: boolean }) {
  if (hasText(block)) return <Block block={block!} />;
  return preview ? <PendingNote /> : null;
}

function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="mt-2 text-base font-semibold text-foreground">{children}</h3>;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const preview = isDraftPreviewEnabled() && study.status === "draft";
  const relatedProducts = getRelatedProducts(study);
  const visual = hasCaseStudyVisual(study.slug);

  // A section is shown if it has content, or when previewing a draft.
  const show = (...blocks: (TextBlock | undefined | unknown[])[]) =>
    preview ||
    blocks.some((b) => (Array.isArray(b) ? b.length > 0 : hasText(b as TextBlock)));

  const sections = buildSections(study, preview, show);

  return (
    <article className={visual ? "mx-auto w-full" : "mx-auto w-full max-w-3xl"}>
      <BackLink href="/case-studies">Back to Case Studies</BackLink>

      <BlurFade delay={BLUR_FADE_DELAY}>
        <header className="flex flex-col gap-4">
          {study.logo && (
            <div className="flex items-center gap-2.5">
              <LogoBadge src={study.logo} alt="" size="md" shape="square" />
              <span className="text-base font-medium text-muted-foreground">
                {study.subject}
              </span>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{PROJECT_TYPE_LABELS[study.projectType]}</Badge>
          </div>
          <h1 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
            {study.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground text-pretty">
            {study.summary}
          </p>
          {study.topics.length > 0 && (
            <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
              {study.topics.map((t) => (
                <li key={t}>
                  <Badge variant="outline" className="h-6 px-2 text-[11px] font-medium">
                    {t}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
          {(study.documentUrl || (study.links && study.links.length > 0)) && (
            <div className="flex flex-wrap gap-3">
              {study.documentUrl && (
                <a
                  href={study.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
                >
                  Read full case study
                  <span className="sr-only"> (opens in a new tab)</span>
                  <ArrowUpRightIcon className="size-4" aria-hidden />
                </a>
              )}
              {study.links?.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
                >
                  {l.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                  <ArrowUpRightIcon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          )}
        </header>
      </BlurFade>

      {study.cover && !visual && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <Cover
            cover={study.cover}
            icon={study.coverIcon}
            label={study.subject ?? "Case study"}
            priority
            sizes="(min-width: 768px) 768px, 100vw"
            className="mt-8 rounded-xl border"
          />
        </BlurFade>
      )}

      {visual && (
        <div className="mt-8">
          <CaseStudyVisual slug={study.slug} />
        </div>
      )}

      {visual && study.references && study.references.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-3 text-xl font-semibold tracking-tight">Sources cited</h2>
          <BulletList items={study.references} />
        </div>
      )}

      {!visual && <Divider />}

      {!visual && (
      <div className="flex flex-col gap-12">
        {sections.map((section, i) => (
          <DetailSection key={section.id} id={section.id} title={section.title} number={i + 1}>
            {section.content}
          </DetailSection>
        ))}

        {study.references && study.references.length > 0 && (
          <DetailSection id="sources" title="Sources cited">
            <BulletList items={study.references} />
          </DetailSection>
        )}

        {relatedProducts.length > 0 && (
          <DetailSection id="related" title="Related shipped products">
            <ul className="space-y-2">
              {relatedProducts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="font-medium text-foreground underline underline-offset-4"
                  >
                    {p.name}
                  </Link>{" "}
                  <span className="text-sm">({p.contextLabel})</span>
                </li>
              ))}
            </ul>
          </DetailSection>
        )}
      </div>
      )}
    </article>
  );
}

/* ------------------------------------------------------------------ */

function buildSections(
  study: CaseStudy,
  preview: boolean,
  show: (...blocks: (TextBlock | undefined | unknown[])[]) => boolean
) {
  const out: { id: string; title: string; content: ReactNode }[] = [];

  // 1. Executive summary
  if (show(study.executiveSummary)) {
    out.push({
      id: "executive-summary",
      title: "Executive summary",
      content: <BlockOrPending block={study.executiveSummary} preview={preview} />,
    });
  }

  // 2. Context, role and project type (always shown: it labels the work honestly)
  out.push({
    id: "context-role",
    title: "Context, role and project type",
    content: (
      <>
        <dl className="grid gap-4 rounded-xl border border-border p-5 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Project type
            </dt>
            <dd className="mt-1 text-foreground">{PROJECT_TYPE_LABELS[study.projectType]}</dd>
          </div>
          {study.subject && (
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Subject
              </dt>
              <dd className="mt-1 text-foreground">{study.subject}</dd>
            </div>
          )}
          {study.timeframe && (
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Timeframe
              </dt>
              <dd className="mt-1 text-foreground">{study.timeframe}</dd>
            </div>
          )}
          <div className={study.timeframe || study.subject ? "" : "sm:col-span-2"}>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              My role
            </dt>
            <dd className="mt-1 text-foreground">
              {study.role.title ?? (preview ? "Pending" : "Not specified")}
            </dd>
          </div>
          {study.projectType === "group-assignment" && (
            <div className="sm:col-span-2">
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                My individual contribution
              </dt>
              <dd className="mt-1 text-foreground">
                {study.role.individualContribution ?? "Pending: to be supplied."}
              </dd>
            </div>
          )}
        </dl>
        {study.subject && study.projectType !== "professional" && (
          <p className="text-sm">
            {study.subject} is the subject of this analysis. It is not a claim
            of employment or of a product I launched.
          </p>
        )}
        <BlockOrPending block={study.context} preview={preview} />
      </>
    ),
  });

  // 3. Problem and target users
  if (show(study.problem, study.targetUsers)) {
    out.push({
      id: "problem-users",
      title: "Problem and target users",
      content: (
        <>
          <SubHeading>Problem</SubHeading>
          <BlockOrPending block={study.problem} preview={preview} />
          <SubHeading>Target users</SubHeading>
          <BlockOrPending block={study.targetUsers} preview={preview} />
        </>
      ),
    });
  }

  // 4. Evidence and research
  if (show(study.evidence)) {
    out.push({
      id: "evidence",
      title: "Evidence and research",
      content: <BlockOrPending block={study.evidence} preview={preview} />,
    });
  }

  // 5. Options considered
  if (show(study.options)) {
    out.push({
      id: "options",
      title: "Options considered",
      content: study.options?.length ? (
        <ul className="grid gap-3">
          {study.options.map((o) => (
            <li key={o.name} className="rounded-xl border border-border p-4">
              <p className="font-medium text-foreground">{o.name}</p>
              <p className="mt-1 text-sm">{o.description}</p>
              {o.verdict && (
                <p className="mt-2 text-sm">
                  <span className="font-medium text-foreground">Decision: </span>
                  {o.verdict}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <PendingNote />
      ),
    });
  }

  // 6. Prioritisation and trade-offs
  if (show(study.prioritisation)) {
    out.push({
      id: "prioritisation",
      title: "Prioritisation and trade-offs",
      content: <BlockOrPending block={study.prioritisation} preview={preview} />,
    });
  }

  // 7. Proposed solution
  if (show(study.proposedSolution)) {
    out.push({
      id: "proposed-solution",
      title: "Proposed solution",
      content: <BlockOrPending block={study.proposedSolution} preview={preview} />,
    });
  }

  // 8. Validation or measurement plan (proposed metrics live here)
  if (show(study.validationPlan, study.proposedMetrics)) {
    out.push({
      id: "validation-plan",
      title: "Validation or measurement plan",
      content: (
        <>
          <BlockOrPending block={study.validationPlan} preview={preview} />
          <SubHeading>Proposed success metrics (planned, not measured)</SubHeading>
          {study.proposedMetrics?.length ? (
            <ul className="grid gap-3 sm:grid-cols-2">
              {study.proposedMetrics.map((m) => (
                <li key={m.name} className="rounded-xl border border-dashed border-border p-4">
                  <p className="font-medium text-foreground">{m.name}</p>
                  <p className="mt-1 text-sm">{m.definition}</p>
                </li>
              ))}
            </ul>
          ) : preview ? (
            <PendingNote />
          ) : (
            <p>No success metrics have been proposed.</p>
          )}
        </>
      ),
    });
  }

  // 9. Outcomes (measured only). Always shown, so absence is explicit.
  out.push({
    id: "outcomes",
    title: "Outcomes (measured)",
    content: study.measuredResults?.length ? (
      <ul className="grid gap-3">
        {study.measuredResults.map((r) => (
          <li key={r.metric} className="rounded-xl border border-border bg-card p-4">
            <p className="font-medium text-foreground">{r.metric}</p>
            <p className="mt-1 text-foreground">{r.result}</p>
            {(r.period || r.source) && (
              <p className="mt-2 text-sm">
                {r.period && <>Period: {r.period}. </>}
                {r.source && <>Source: {r.source}.</>}
              </p>
            )}
          </li>
        ))}
      </ul>
    ) : (
      <p>
        No measured results are reported. Any metrics above are proposals, not
        outcomes.
      </p>
    ),
  });

  // 10. Reflection and next steps
  if (show(study.reflection, study.nextSteps)) {
    out.push({
      id: "reflection",
      title: "Reflection and next steps",
      content: (
        <>
          <SubHeading>Reflection</SubHeading>
          <BlockOrPending block={study.reflection} preview={preview} />
          <SubHeading>Next steps</SubHeading>
          <BlockOrPending block={study.nextSteps} preview={preview} />
        </>
      ),
    });
  }

  return out;
}
