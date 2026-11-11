import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export function BackLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group mb-6 inline-flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ChevronLeft
        className="size-3 transition-transform group-hover:-translate-x-px"
        aria-hidden
      />
      {children}
    </Link>
  );
}

/** A numbered or unnumbered h2 section in a long-form detail page. */
export function DetailSection({
  id,
  title,
  number,
  children,
}: {
  id: string;
  title: string;
  number?: number;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-8">
      <h2
        id={`${id}-heading`}
        className="mb-4 flex items-baseline gap-3 text-xl font-semibold tracking-tight"
      >
        {number !== undefined && (
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {String(number).padStart(2, "0")}
          </span>
        )}
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function Divider() {
  return (
    <div className="my-10 flex w-full items-center" aria-hidden>
      <div
        className="h-px flex-1 bg-border"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      />
    </div>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-muted-foreground/60">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/** Quiet note shown when a section has no content yet (draft preview only). */
export function PendingNote({ children }: { children?: ReactNode }) {
  return (
    <p className="rounded-lg border border-dashed border-amber-600 px-4 py-3 text-sm text-amber-800 dark:border-amber-400 dark:text-amber-200">
      {children ?? "Pending: this section has not been written yet."}
    </p>
  );
}
