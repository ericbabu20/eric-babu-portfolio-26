import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function AboutSection() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="flex flex-col gap-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {DATA.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}
