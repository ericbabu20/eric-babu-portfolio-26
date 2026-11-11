import BlurFade from "@/components/magicui/blur-fade";
import WorkSection from "@/components/section/work-section";

const BLUR_FADE_DELAY = 0.04;

export default function ExperienceSection() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">Experience</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <WorkSection />
      </BlurFade>
    </div>
  );
}
