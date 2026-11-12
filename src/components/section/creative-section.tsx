import BlurFade from "@/components/magicui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { creativeWork } from "@/data/creative";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

/** How many photographs to preview on the homepage. The rest are on /photography. */
const PREVIEW_COUNT = 3;

const INTRO =
  "A selection of my work behind the camera, exploring people, places and the stories within everyday moments.";
const FALLBACK =
  "Photography and filmmaking are part of my creative practice, giving me another way to explore composition, detail and visual storytelling.";

export default function CreativeSection() {
  const featured = creativeWork.photos.filter((photo) => photo.featured);
  const preview = (featured.length > 0 ? featured : creativeWork.photos).slice(0, PREVIEW_COUNT);
  const { portfolioUrl } = creativeWork;
  // The "selection of my work" intro only appears when work is shown.
  const hasWork = creativeWork.photos.length > 0 || Boolean(creativeWork.film);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">Photography &amp; Film</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {hasWork ? INTRO : FALLBACK}
        </p>
      </BlurFade>

      {preview.length > 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <ul className="grid grid-cols-2 items-start gap-3 sm:grid-cols-3">
            {preview.map((photo) => (
              <li key={photo.src} className="overflow-hidden rounded-xl border border-border">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 768px) 240px, 50vw"
                  className="aspect-[3/2] h-auto w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </BlurFade>
      )}

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/photography"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
          >
            View photography
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
          {portfolioUrl && (
            <a
              href={portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
            >
              View my creative work
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRightIcon className="size-4" aria-hidden />
            </a>
          )}
        </div>
      </BlurFade>
    </div>
  );
}
