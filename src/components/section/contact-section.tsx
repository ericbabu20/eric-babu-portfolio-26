import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { LinkedinIcon, MailIcon, MapPinIcon } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="mx-auto w-full max-w-3xl border rounded-xl p-6 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div
        aria-hidden
        className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden"
      >
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          I&apos;m open to Product Owner and Product Manager roles. The best way
          to reach me is by email or LinkedIn.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${DATA.contact.email}`}
            className={cn(buttonVariants(), "gap-2")}
          >
            <MailIcon className="size-4" aria-hidden />
            {DATA.contact.email}
          </a>
          <a
            href={DATA.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2 bg-background")}
          >
            <LinkedinIcon className="size-4" aria-hidden />
            LinkedIn
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPinIcon className="size-4" aria-hidden />
          {DATA.contact.location}
        </p>
      </div>
    </div>
  );
}
