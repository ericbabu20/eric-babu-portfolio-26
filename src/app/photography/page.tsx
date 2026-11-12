import { BackLink } from "@/components/detail-layout";
import BlurFade from "@/components/magicui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { creativeWork, type CreativePhoto } from "@/data/creative";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon, ImageIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;
const EMPTY_FRAMES = 6;

const SPAN_CLASS: Record<NonNullable<CreativePhoto["span"]>, string> = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  12: "md:col-span-12",
};

const description =
  "Photography and film by Eric Babu, a Product Owner: a selection of work behind the camera, exploring people, places and the stories within everyday moments.";

export const metadata: Metadata = {
  title: "Photography & Film",
  description,
  alternates: { canonical: "/photography" },
  openGraph: { title: "Photography & Film", description },
  twitter: { card: "summary_large_image", title: "Photography & Film", description },
};

export default function PhotographyPage() {
  const photos = creativeWork.photos;
  const { film, portfolioUrl } = creativeWork;

  return (
    <div className="flex w-full flex-col gap-8">
      <div className="max-w-3xl">
        <BackLink href="/#creative">Back to home</BackLink>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="mb-2 text-3xl font-semibold tracking-tighter md:text-4xl">
            Photography &amp; Film
          </h1>
          <p className="max-w-2xl text-muted-foreground text-pretty">
            A selection of my work behind the camera, exploring people, places
            and the stories within everyday moments.
          </p>
        </BlurFade>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        {photos.length > 0 ? (
          <ul className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
            {photos.map((photo, index) => (
              <li
                key={photo.src}
                className={cn("min-w-0", SPAN_CLASS[photo.span ?? 6])}
              >
                <figure className="overflow-hidden rounded-xl border border-border bg-muted">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    priority={index === 0}
                    sizes={
                      photo.span === 12
                        ? "(min-width: 768px) 960px, 100vw"
                        : "(min-width: 768px) 50vw, 100vw"
                    }
                    className="h-auto w-full"
                  />
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="grid grid-cols-2 items-start gap-3 sm:grid-cols-3">
            {Array.from({ length: EMPTY_FRAMES }, (_, i) => (
              <li key={`slot-${i + 1}`}>
                <div className="flex aspect-[3/2] w-full flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-border bg-muted/40 text-muted-foreground">
                  <ImageIcon className="size-5" aria-hidden />
                  <p className="text-xs font-medium">Photograph {i + 1}</p>
                  <p className="text-[11px]">Coming soon</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </BlurFade>

      {film?.kind === "file" && (
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <figure className="flex flex-col gap-2">
            <video
              controls
              preload="none"
              poster={film.poster}
              className="w-full rounded-xl border border-border"
              aria-label={film.title}
            >
              <source src={film.src} />
            </video>
            <figcaption className="text-sm text-muted-foreground">{film.title}</figcaption>
          </figure>
        </BlurFade>
      )}

      {(film?.kind === "link" || portfolioUrl) && (
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-wrap items-center gap-3">
            {film?.kind === "link" && (
              <a
                href={film.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
              >
                Watch: {film.title}
                <span className="sr-only"> (opens in a new tab)</span>
                <ArrowUpRightIcon className="size-4" aria-hidden />
              </a>
            )}
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
      )}
    </div>
  );
}
