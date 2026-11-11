import BlurFade from "@/components/magicui/blur-fade";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { HorizontalShelf } from "@/components/section/horizontal-shelf";
import { SectionHeading } from "@/components/section/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { getCaseStudies, getFeaturedCaseStudies } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function CaseStudiesSection() {
  const featured = getFeaturedCaseStudies(4);
  const total = getCaseStudies().length;

  return (
    <div className="flex w-full min-w-0 flex-col gap-y-8">
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <SectionHeading
          label="Case Studies"
          title="How I think through problems"
          description="Explorations of problems, research, prioritisation, decisions and trade-offs. Each one is labelled as coursework, an independent concept or professional work, and separates proposed metrics from measured results."
        />
      </BlurFade>

      {featured.length > 0 ? (
        <>
          <HorizontalShelf label="Case studies" pageOnWheel autoplay>
            {featured.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </HorizontalShelf>
          <div className="flex justify-center">
            <Link
              href="/case-studies"
              className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
            >
              View all case studies ({total})
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </div>
        </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-border p-8 text-center">
            <p className="font-medium">Case studies are being written up.</p>
            <p className="mt-2 text-sm text-muted-foreground text-balance">
              I only publish case studies once the research, decisions and
              evidence are complete. In the meantime, the shipped products above
              show what I have delivered, and my experience is below.
            </p>
          </div>
        </BlurFade>
      )}
    </div>
  );
}
