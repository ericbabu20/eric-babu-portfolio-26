import {
  ExpoIcon,
  GeminiIcon,
  OctopusIcon,
  ReactIcon,
  SupabaseIcon,
  VercelIcon,
} from "@/components/aura/stack-icons";
import type { ReactNode } from "react";
import { AURA } from "./illustrations";

function DiagramNode({
  icons,
  title,
  detail,
}: {
  icons: ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div
      className="flex min-w-0 items-start gap-3 rounded-2xl border p-4"
      style={{ backgroundColor: AURA.surface, borderColor: AURA.line, color: AURA.ink }}
    >
      <span className="flex flex-none items-center gap-1.5">{icons}</span>
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-xs leading-relaxed" style={{ color: AURA.muted }}>
          {detail}
        </span>
      </span>
    </div>
  );
}

function IconChip({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex size-9 flex-none items-center justify-center rounded-lg border"
      style={{ backgroundColor: "#fff", borderColor: AURA.line }}
    >
      {children}
    </span>
  );
}

function FlowLabel({ children }: { children: string }) {
  return (
    <div aria-hidden className="flex flex-col items-center gap-1.5 py-3">
      <span className="h-4 w-px" style={{ backgroundColor: AURA.accent }} />
      <span
        className="rounded-full px-3 py-1 text-center text-xs font-medium"
        style={{ backgroundColor: AURA.accentSoft, color: AURA.accentInk }}
      >
        {children}
      </span>
      <span className="h-4 w-px" style={{ backgroundColor: AURA.accent }} />
    </div>
  );
}

/** Simplified Phase 1 architecture: frontend, backend and two external services. */
export function AuraArchitecture() {
  return (
    <figure className="flex flex-col gap-4">
      <div
        role="img"
        aria-label="Architecture diagram. The Expo and React Native frontend is hosted on Vercel and has a two-way connection with Supabase. Supabase calls Gemini for the assistant, and the Octopus Energy API for consumption and tariff data. Each service is called on its own. Vercel only hosts the frontend."
        className="rounded-3xl border px-4 py-6 sm:px-8 sm:py-8"
        style={{ backgroundColor: AURA.bg, borderColor: AURA.line }}
      >
        <div aria-hidden className="mx-auto flex w-full max-w-2xl flex-col">
          <div
            className="rounded-2xl border border-dashed p-3 sm:p-4"
            style={{ borderColor: AURA.accent }}
          >
            <p
              className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide"
              style={{ color: AURA.accentInk }}
            >
              <span
                className="flex size-6 items-center justify-center rounded-md border"
                style={{ backgroundColor: "#fff", borderColor: AURA.line }}
              >
                <VercelIcon className="size-3.5" />
              </span>
              Hosted on Vercel
            </p>
            <DiagramNode
              icons={
                <>
                  <IconChip>
                    <ExpoIcon />
                  </IconChip>
                  <IconChip>
                    <ReactIcon />
                  </IconChip>
                </>
              }
              title="Frontend"
              detail="Expo, React Native and Expo Router"
            />
          </div>

          <FlowLabel>Two-way connection</FlowLabel>

          <DiagramNode
            icons={
              <IconChip>
                <SupabaseIcon />
              </IconChip>
            }
            title="Backend"
            detail="Supabase: authentication, household data and server functions"
          />

          <FlowLabel>Each service is called on its own</FlowLabel>

          <div className="grid gap-3 sm:grid-cols-2">
            <DiagramNode
              icons={
                <IconChip>
                  <GeminiIcon />
                </IconChip>
              }
              title="Gemini"
              detail="Conversational assistant"
            />
            <DiagramNode
              icons={
                <IconChip>
                  <OctopusIcon />
                </IconChip>
              }
              title="Octopus Energy API"
              detail="Consumption and tariff data"
            />
          </div>
        </div>
      </div>
      <figcaption className="text-sm leading-relaxed text-muted-foreground">
        Simplified view of the hosted path. Vercel hosts the frontend; it is not a
        separate data-processing step. Express is a supporting and local API, so it
        sits in the tech stack below and is not part of this path.
      </figcaption>
    </figure>
  );
}
