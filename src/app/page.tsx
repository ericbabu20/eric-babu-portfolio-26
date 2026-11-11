import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import AboutSection from "@/components/section/about-section";
import CaseStudiesSection from "@/components/section/case-studies-section";
import CreativeSection from "@/components/section/creative-section";
import ContactSection from "@/components/section/contact-section";
import ExperienceSection from "@/components/section/experience-section";
import ShippedProductsSection from "@/components/section/shipped-products-section";
import SkillsEducationSection from "@/components/section/skills-education-section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { getCaseStudies, getPublishedCaseStudies } from "@/lib/content";
import { cn } from "@/lib/utils";
import { DownloadIcon } from "lucide-react";
import fs from "node:fs";
import path from "node:path";

const BLUR_FADE_DELAY = 0.04;

/** The CV button is shown only if the PDF has been added to /public. */
function cvIsAvailable() {
  return fs.existsSync(path.join(process.cwd(), "public", DATA.cvFile));
}

export default function Page() {
  const showCv = cvIsAvailable();
  // The hero shows the case-study button only once a study is published.
  const hasPublishedStudies = getPublishedCaseStudies().length > 0;
  // The homepage section shows published studies, plus drafts in local preview.
  const showCaseStudies = getCaseStudies().length > 0;

  return (
    <main id="main-content" className="min-h-dvh flex flex-col gap-20 relative">
      <section id="hero" aria-labelledby="hero-name">
        <div className="mx-auto w-full max-w-3xl">
          <div className="gap-6 flex flex-col md:flex-row justify-between md:items-center">
            <div className="gap-3 flex flex-col order-2 md:order-1 min-w-0">
              <div id="hero-name">
                <BlurFadeText
                  as="h1"
                  delay={BLUR_FADE_DELAY}
                  className="text-4xl font-semibold tracking-tighter sm:text-5xl"
                  yOffset={8}
                  text={DATA.name}
                />
              </div>
              <BlurFadeText
                as="p"
                className="text-base font-medium text-foreground sm:text-lg"
                delay={BLUR_FADE_DELAY * 2}
                text={DATA.role}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="mt-2 max-w-xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                  {DATA.headline}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="max-w-xl text-muted-foreground md:text-lg text-pretty">
                  {DATA.description}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="#shipped-products"
                    className={cn(buttonVariants({ size: "lg" }))}
                  >
                    Explore shipped products
                  </a>
                  <a
                    href={hasPublishedStudies ? "#case-studies" : "#about"}
                    className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                  >
                    {hasPublishedStudies ? "Read case studies" : "About me"}
                  </a>
                  {showCv && (
                    <a
                      href={DATA.cvFile}
                      download
                      className={cn(
                        buttonVariants({ size: "lg", variant: "link" }),
                        "gap-2 px-2"
                      )}
                    >
                      <DownloadIcon className="size-4" aria-hidden />
                      Download CV (PDF)
                    </a>
                  )}
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2 flex-none">
              <Avatar className="size-24 md:size-36 border rounded-full shadow-lg ring-4 ring-muted">
                {DATA.avatarUrl && (
                  <AvatarImage alt={`Portrait of ${DATA.name}`} src={DATA.avatarUrl} />
                )}
                <AvatarFallback
                  className="text-2xl md:text-4xl font-semibold tracking-tight"
                  aria-label={DATA.name}
                >
                  {DATA.initials}
                </AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about" aria-label="About" className="scroll-mt-8">
        <AboutSection />
      </section>

      <section id="shipped-products" aria-label="Shipped Products" className="scroll-mt-8">
        <ShippedProductsSection />
      </section>

      {showCaseStudies && (
        <section id="case-studies" aria-label="Case Studies" className="scroll-mt-8">
          <CaseStudiesSection />
        </section>
      )}

      <section id="experience" aria-label="Experience" className="scroll-mt-8">
        <ExperienceSection />
      </section>

      <section id="creative" aria-label="Photography and Film" className="scroll-mt-8">
        <CreativeSection />
      </section>

      <section id="skills" aria-label="Skills and education" className="scroll-mt-8">
        <SkillsEducationSection />
      </section>

      <section id="contact" aria-label="Contact" className="scroll-mt-8">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
