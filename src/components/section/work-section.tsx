"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { LogoBadge } from "@/components/logo-badge";

/** Company logo in a round badge, or an initials badge if there is no logo. */
function CompanyMark({ name, logo }: { name: string; logo?: string }) {
  if (logo) return <LogoBadge src={logo} alt={`${name} logo`} />;
  return <Monogram name={name} />;
}

/** Initials badge, used when no logo has been supplied. */
function Monogram({ name }: { name: string }) {
  const initials = name
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
  return (
    <div
      aria-hidden
      className="flex size-8 md:size-10 flex-none items-center justify-center rounded-full border bg-muted text-xs font-semibold text-muted-foreground shadow ring-2 ring-border"
    >
      {initials}
    </div>
  );
}

export default function WorkSection() {
  return (
    <Accordion
      type="multiple"
      defaultValue={[DATA.work[0].company]}
      className="w-full grid gap-6"
    >
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-md group [&>svg]:hidden focus-visible:outline-2 focus-visible:outline-offset-4">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <CompanyMark name={work.shortName} logo={work.logo} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-snug flex items-center gap-2">
                    <span className="min-w-0 wrap-break-word">{work.company}</span>
                    <span className="relative inline-flex items-center w-3.5 h-3.5 flex-none" aria-hidden>
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                          "opacity-0 rotate-0",
                          "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                  <div className="font-sans text-xs text-muted-foreground sm:hidden tabular-nums">
                    {work.start} - {work.end}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {work.start} - {work.end}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 sm:ml-13 text-sm text-muted-foreground">
            <p className="mb-2 text-xs">{work.location}</p>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground/60">
              {work.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
