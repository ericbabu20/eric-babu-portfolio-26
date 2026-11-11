import { CaseStudyCard } from "@/components/cards/case-study-card";
import { DraftPreviewNotice } from "@/components/cards/draft-badge";
import { BackLink } from "@/components/detail-layout";
import BlurFade from "@/components/magicui/blur-fade";
import { getCaseStudies } from "@/lib/content";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

const description =
  "Case studies by Eric Babu, a Product Owner: problems, research, prioritisation, decisions and trade-offs, each labelled as coursework, an independent concept or professional work.";

export const metadata: Metadata = {
  title: "Case Studies",
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: { title: "Case Studies", description },
  twitter: { card: "summary_large_image", title: "Case Studies", description },
};

export default function CaseStudiesPage() {
  const studies = getCaseStudies();

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto w-full max-w-3xl">
        <BackLink href="/#case-studies">Back to home</BackLink>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="mb-2 text-3xl font-semibold tracking-tighter md:text-4xl">
            Case Studies
          </h1>
          <p className="max-w-2xl text-muted-foreground text-pretty">
            Explorations of problems, research, prioritisation, decisions and
            trade-offs. Each is labelled as coursework, an independent concept
            or professional work, and keeps proposed metrics separate from
            measured results.
          </p>
        </BlurFade>
        <DraftPreviewNotice className="mt-6" show={studies.some((s) => s.status === "draft")} />
      </div>

      {studies.length > 0 ? (
        <ul className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
          {studies.map((study, i) => (
            <li key={study.slug} className="h-full">
              <BlurFade delay={BLUR_FADE_DELAY * 2 + i * 0.05} className="h-full">
                <CaseStudyCard study={study} />
              </BlurFade>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-border p-8 text-center">
          <p className="font-medium">Case studies are being written up.</p>
          <p className="mt-2 text-sm text-muted-foreground text-balance">
            I only publish case studies once the research, decisions and
            evidence are complete. Please see the shipped products on the home
            page for what I have delivered.
          </p>
        </div>
      )}
    </div>
  );
}
