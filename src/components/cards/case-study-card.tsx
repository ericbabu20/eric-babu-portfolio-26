import { LogoBadge } from "@/components/logo-badge";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { CaseStudy } from "@/data/types";
import { PROJECT_TYPE_LABELS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-200 hover:ring-2 hover:ring-muted"
      aria-labelledby={`case-study-${study.slug}`}
    >
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        {study.logo && (
          <div className="flex items-center gap-2.5">
            <LogoBadge src={study.logo} alt="" size="sm" shape="square" />
            <span className="text-sm font-medium text-muted-foreground">
              {study.subject}
            </span>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{PROJECT_TYPE_LABELS[study.projectType]}</Badge>
        </div>

        <div className="flex flex-col gap-2">
          <h3
            id={`case-study-${study.slug}`}
            className="text-lg font-semibold tracking-tight"
          >
            {study.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {study.summary}
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5" aria-label="Topics">
          {study.topics.map((topic) => (
            <li key={topic}>
              <Badge variant="outline" className="h-6 px-2 text-[11px] font-medium">
                {topic}
              </Badge>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Link
            href={`/case-studies/${study.slug}`}
            className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
          >
            Read summary
            <span className="sr-only">: {study.title}</span>
            <ArrowRightIcon className="size-3.5" aria-hidden />
          </Link>
          {study.documentUrl && (
            <a
              href={study.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-1.5")}
            >
              Read full case study
              <span className="sr-only">: {study.title} (opens in a new tab)</span>
              <ArrowUpRightIcon className="size-3.5" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
