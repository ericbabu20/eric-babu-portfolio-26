import { CoverVideo } from "@/components/cards/cover-video";
import { DraftBadge, DraftPreviewNotice } from "@/components/cards/draft-badge";
import { BackLink } from "@/components/detail-layout";
import BlurFade from "@/components/magicui/blur-fade";
import { LogoBadge } from "@/components/logo-badge";
import { DATA } from "@/data/resume";
import { getShippedProduct } from "@/lib/content";
import {
  FileSearchIcon,
  LockIcon,
  MessageSquareQuoteIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

const SLUG = "compliance-analyst-ai";
const BLUR_FADE_DELAY = 0.04;
const PURPLE = "#7100F1";
const EYEBROW = "text-xs font-semibold uppercase tracking-wider text-[#5B1BB3] dark:text-[#D2B4FF]";

const title = "Outfox Compliance Analyst";
const description =
  "An internal review aid for Ofgem-sensitive documents. React frontend, Azure backend, Ollama as the local language model. Under review by management.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/products/${SLUG}` },
  robots: { index: false, follow: false },
  openGraph: {
    title: `${title} | ${DATA.name}`,
    description,
    type: "article",
    url: `${DATA.url}/products/${SLUG}`,
  },
  twitter: { card: "summary_large_image", title: `${title} | ${DATA.name}`, description },
};

const PAGE_LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#architecture", label: "Architecture" },
  { href: "#customer-problem", label: "Customer problem" },
  { href: "#my-contribution", label: "My contribution" },
  { href: "#delivered-capabilities", label: "Capabilities" },
  { href: "#outcomes", label: "Outcomes" },
];

const CAPABILITY_ICONS: Record<string, LucideIcon> = {
  "Local-first RAG": LockIcon,
  "Cited Q&A": MessageSquareQuoteIcon,
  "Gap analysis and regulatory change monitoring": FileSearchIcon,
  "Audit logging and privacy controls": ShieldCheckIcon,
};

function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-8">
      {children}
    </section>
  );
}

function Heading({ id, eyebrow, children }: { id: string; eyebrow: string; children: ReactNode }) {
  return (
    <div className="mb-5 flex max-w-3xl flex-col gap-2">
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 id={`${id}-heading`} className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

export default function ComplianceAnalystPage() {
  const product = getShippedProduct(SLUG);
  if (!product) notFound();

  return (
    <article className="mx-auto flex w-full flex-col gap-16 sm:gap-20">
      <header className="flex flex-col gap-8">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
          <BackLink href="/products">Back to projects</BackLink>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-5">
              {product.logo && (
                <div className="flex items-center gap-2.5">
                  <LogoBadge src={product.logo} alt="" size="md" />
                  <span className="text-base font-medium text-muted-foreground">{product.company}</span>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2">
                <DraftBadge status={product.status} />
                <span className="rounded-full border border-amber-600/40 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
                  Under review by management
                </span>
              </div>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter text-balance sm:text-5xl">
                A review aid for Ofgem-sensitive documents.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                {product.overview[0]}
              </p>
              <dl className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-4">
                  <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <UsersIcon className="size-4" style={{ color: PURPLE }} aria-hidden />
                    Proposed users
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Compliance and governance team. Proposed, not a live rollout.
                  </dd>
                </div>
                <div className="rounded-2xl border border-border bg-card p-4">
                  <dt className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <ScaleIcon className="size-4" style={{ color: PURPLE }} aria-hidden />
                    What it does not do
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    It does not guarantee compliance, and it is not endorsed by Ofgem.
                  </dd>
                </div>
              </dl>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <figure className="flex flex-col gap-3">
            <div className="relative aspect-[2/1] overflow-hidden rounded-3xl border border-border bg-[#141412] shadow-sm">
              <CoverVideo src="/videos/outfox-compliance-analyst-demo.mp4" />
            </div>
            <figcaption className="text-sm leading-relaxed text-muted-foreground">
              A short loop of the Compliance Analyst interface. The same clip plays on the product card.
            </figcaption>
          </figure>
        </BlurFade>

        <nav aria-label="On this page">
          <ul className="flex flex-wrap gap-2">
            {PAGE_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <DraftPreviewNotice />

      <Section id="overview">
        <Heading id="overview" eyebrow="The product">
          Overview
        </Heading>
        <div className="flex max-w-3xl flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
          {product.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="architecture">
        <Heading id="architecture" eyebrow="The build">
          Architecture
        </Heading>
        <figure className="flex flex-col gap-3">
          <Image
            src="/compliance/architecture-narrow.jpg"
            alt="Compliance Analyst AI system architecture. A compliance and governance user uses the React frontend. That connects to Microsoft Azure. Local data in Azure pairs the Ollama language model with compliance and regulatory documents. The result is an AI review with analysis, gaps and recommendations."
            width={576}
            height={1024}
            className="h-auto w-full rounded-3xl border border-border md:hidden"
          />
          <Image
            src="/compliance/architecture-wide.jpg"
            alt="Compliance Analyst AI system architecture. A compliance and governance user uses the React frontend, which connects to Microsoft Azure. Local data in Azure pairs Ollama with compliance and regulatory documents, and returns an AI review with analysis, gaps and recommendations. A side panel repeats the same flow."
            width={1024}
            height={576}
            className="hidden h-auto w-full rounded-3xl border border-border md:block"
          />
          <figcaption className="text-sm leading-relaxed text-muted-foreground">
            System architecture for this build. The project is still under review by management.
          </figcaption>
        </figure>
      </Section>

      <Section id="customer-problem">
        <Heading id="customer-problem" eyebrow="The work">
          Customer problem
        </Heading>
        <div className="grid gap-3">
          {product.customerProblem.map((paragraph, index) => (
            <p
              key={paragraph}
              className="rounded-2xl border border-border bg-card p-5 leading-relaxed text-muted-foreground text-pretty"
            >
              <span className="mb-2 block font-mono text-xs font-semibold tabular-nums text-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section id="my-contribution">
        <Heading id="my-contribution" eyebrow="What I did">
          My contribution
        </Heading>
        <ol className="grid gap-3">
          {product.contribution.map((item, index) => (
            <li key={item} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <span
                className="flex size-8 flex-none items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: PURPLE }}
              >
                {index + 1}
              </span>
              <p className="leading-relaxed text-muted-foreground text-pretty">{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="delivered-capabilities">
        <Heading id="delivered-capabilities" eyebrow="What it does">
          Delivered capabilities
        </Heading>
        <ul className="grid gap-3 sm:grid-cols-2">
          {product.deliveredCapabilities.map((capability) => {
            const Icon = CAPABILITY_ICONS[capability.title] ?? ShieldCheckIcon;
            return (
              <li key={capability.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
                <span
                  className="flex size-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "#F1E8FE" }}
                >
                  <Icon className="size-4" strokeWidth={1.75} color={PURPLE} aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">{capability.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section id="outcomes">
        <Heading id="outcomes" eyebrow="What is claimed">
          Delivered outcomes
        </Heading>
        <div className="rounded-2xl border border-border bg-card p-5">
          <ul className="flex flex-col gap-3">
            {product.qualitativeOutcomes?.map((item) => (
              <li key={item} className="leading-relaxed text-muted-foreground text-pretty">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
            The project is under review by management. That is a status, not a measured result.
          </p>
        </div>
        {product.notes && product.notes.length > 0 && (
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{product.notes[0]}</p>
        )}
      </Section>

    </article>
  );
}
