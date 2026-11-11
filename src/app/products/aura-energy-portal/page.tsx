import { AuraArchitecture } from "@/components/aura/architecture";
import { AURA } from "@/components/aura/illustrations";
import { CoverVideo } from "@/components/cards/cover-video";
import {
  ExpoIcon,
  ExpressIcon,
  GeminiIcon,
  OctopusIcon,
  ReactIcon,
  SupabaseIcon,
  ToolMark,
  VercelIcon,
  type StackIcon,
} from "@/components/aura/stack-icons";
import { BackLink } from "@/components/detail-layout";
import BlurFade from "@/components/magicui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { getShippedProduct } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  ArrowUpRightIcon,
  BarChart3Icon,
  BotMessageSquareIcon,
  CircleCheckIcon,
  CircleDashedIcon,
  HouseIcon,
  KeyRoundIcon,
  ReceiptTextIcon,
  SlidersHorizontalIcon,
  type LucideIcon,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

const SLUG = "aura-energy-portal";
const BLUR_FADE_DELAY = 0.04;
const EYEBROW =
  "text-xs font-semibold uppercase tracking-wider text-[#9A4522] dark:text-[#E9A27C]";

const title = "Aura Energy Portal: Phase 1 case study";
const description =
  "How I defined, designed, built and deployed Aura, a home energy portal that brings electricity and gas usage, tariff information and an AI assistant into one place.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/products/${SLUG}` },
  openGraph: {
    title: `${title} | ${DATA.name}`,
    description,
    type: "article",
    url: `${DATA.url}/products/${SLUG}`,
  },
  twitter: { card: "summary_large_image", title: `${title} | ${DATA.name}`, description },
};

const FACTS = [
  { term: "Role", detail: "Product definition, UX, development and deployment" },
  { term: "Release status", detail: "Deployed · Phase 1" },
  { term: "Audience", detail: "UK households, initially prepayment customers" },
  { term: "Platform", detail: "Responsive web portal built with Expo and React Native" },
];

const OBJECTIVES = [
  "Make electricity and gas usage easier to read.",
  "Answer energy questions using household context.",
  "Establish the interface for future connected-home features.",
];

const CONTRIBUTION = [
  "Defined the product requirements, user journeys and data rules.",
  "Designed the responsive dashboard, navigation and feature flows.",
  "Built the frontend, integrations and supporting backend functionality.",
  "Implemented household-aware AI chat.",
  "Deployed the portal and handled ongoing feature development.",
];

const EXPERIENCE: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Home overview",
    body: "A central dashboard bringing usage, tariff information, an energy-flow illustration and feature shortcuts together.",
    icon: HouseIcon,
  },
  {
    title: "Electricity and gas usage",
    body: "Day, week and month views in kWh, using connected meter data where available and clearly labelled sample data otherwise.",
    icon: BarChart3Icon,
  },
  {
    title: "Aura AI",
    body: "A conversational assistant using household profile information and recent conversation context to answer energy questions.",
    icon: BotMessageSquareIcon,
  },
  {
    title: "Tariff information",
    body: "An import tariff card with peak and off-peak information, plus an external supplier-comparison link.",
    icon: ReceiptTextIcon,
  },
  {
    title: "Account and connection",
    body: "Sign-in, account settings and an Octopus connection flow for household consumption data.",
    icon: KeyRoundIcon,
  },
  {
    title: "Connected-home interface",
    body: "Device categories, room views, EV charging cards, thermostat controls, schedules and automation screens establish the interface for future live integrations.",
    icon: SlidersHorizontalIcon,
  },
];

const DECISIONS = [
  {
    title: "Make missing data visible",
    body: "Keep the experience usable when readings are unavailable, while clearly identifying sample data.",
  },
  {
    title: "Use complete reporting periods",
    body: "Exclude incomplete recent readings from headline totals rather than presenting partial figures as a full day.",
  },
  {
    title: "Keep units consistent",
    body: "Present electricity and gas in kWh, converting gas readings where required.",
  },
  {
    title: "Respect household context",
    body: "Shape answers around the saved household profile, including payment method and installed equipment. Do not assume the household has solar, a battery or an EV.",
  },
  {
    title: "Separate advice from action",
    body: "Aura can explain information. A chat response never implies that it has operated a physical device.",
  },
];

const DELIVERED = [
  "Deployed responsive portal.",
  "Electricity and gas usage views.",
  "Household-aware AI chat.",
  "Tariff information and an external comparison link.",
  "Account and Octopus connection flows.",
  "Connected-home planning and control interfaces.",
];

const NEXT = [
  "Live device control through Home Assistant.",
  "Execution of schedules and automation rules against connected equipment.",
  "Further validation and refinement of voice interaction.",
];

const STACK: { tool: string; role: string; icons: StackIcon[] }[] = [
  {
    tool: "Expo, React Native and Expo Router",
    role: "Responsive interface",
    icons: [ExpoIcon, ReactIcon],
  },
  { tool: "Vercel", role: "Web deployment", icons: [VercelIcon] },
  {
    tool: "Supabase",
    role: "Authentication, household data and server functions",
    icons: [SupabaseIcon],
  },
  { tool: "Gemini", role: "Conversational assistant", icons: [GeminiIcon] },
  {
    tool: "Octopus Energy API",
    role: "Consumption and tariff integration",
    icons: [OctopusIcon],
  },
  { tool: "Express", role: "Supporting and local API, where applicable", icons: [ExpressIcon] },
];

const PAGE_LINKS = [
  { href: "#brief", label: "The brief" },
  { href: "#contribution", label: "What I did" },
  { href: "#experience", label: "The experience" },
  { href: "#decisions", label: "Decisions" },
  { href: "#screens", label: "Screens" },
  { href: "#status", label: "What's delivered" },
  { href: "#architecture", label: "Architecture" },
  { href: "#stack", label: "Tech stack" },
];

/* ------------------------------------------------------------------ */

function SectionIntro({
  id,
  eyebrow,
  heading,
  children,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex max-w-3xl flex-col gap-3">
      <p className={EYEBROW}>{eyebrow}</p>
      <h2
        id={`${id}-heading`}
        className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        {heading}
      </h2>
      {children && (
        <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground text-pretty">
          {children}
        </div>
      )}
    </div>
  );
}

function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("scroll-mt-8", className)}>
      {children}
    </section>
  );
}

function IconChip({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span
      className="flex size-9 flex-none items-center justify-center rounded-lg"
      style={{ backgroundColor: AURA.accentSoft }}
    >
      <Icon className="size-4" strokeWidth={1.75} color={AURA.accentInk} aria-hidden />
    </span>
  );
}

function Shot({
  title,
  caption,
  alt,
  src,
  width,
  height,
  phone = false,
  focus = "top",
}: {
  title: string;
  caption: string;
  alt: string;
  src: string;
  width: number;
  height: number;
  phone?: boolean;
  focus?: "top" | "bottom";
}) {
  return (
    <figure className="flex h-full flex-col gap-3">
      <div
        className={cn(
          "overflow-hidden rounded-2xl border bg-[#161411]",
          phone && "flex justify-center px-4 py-4 sm:px-6 sm:py-6",
        )}
        style={{ borderColor: AURA.line }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "h-auto w-full",
            phone && "max-w-[240px]",
            phone && focus === "bottom" && "h-[360px] object-cover object-bottom",
          )}
          sizes={phone ? "240px" : "(min-width: 1024px) 960px, 100vw"}
        />
      </div>
      <figcaption className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-foreground">{title}</span>
        <span className="text-sm leading-relaxed text-muted-foreground">{caption}</span>
      </figcaption>
    </figure>
  );
}

function LivePortalLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ size: "lg" }), "gap-1.5")}
    >
      Open live portal
      <span className="sr-only"> (opens in a new tab)</span>
      <ArrowUpRightIcon className="size-4" aria-hidden />
    </a>
  );
}

function BackToProjects() {
  return (
    <Link href="/products" className={cn(buttonVariants({ size: "lg", variant: "outline" }))}>
      Back to projects
    </Link>
  );
}

/* ------------------------------------------------------------------ */

export default function AuraEnergyPortalPage() {
  const product = getShippedProduct(SLUG);
  if (!product?.url) notFound();
  const liveUrl = product.url;

  return (
    <article className="mx-auto flex w-full flex-col gap-20 sm:gap-24">
      {/* Hero */}
      <header className="flex flex-col gap-10">
        <div className="mx-auto w-full max-w-3xl">
          <BackLink href="/products">Back to projects</BackLink>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col gap-5">
              <p className={EYEBROW}>Independent product · Deployed · Phase 1</p>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tighter text-balance sm:text-5xl">
                Making household energy easier to understand.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Aura brings electricity and gas usage, tariff information and an AI
                assistant into one home energy portal. I owned the product
                definition, UX, coding, feature development and deployment.
              </p>
              <p className="text-sm text-muted-foreground">
                A personal product, developed independently of my work at Outfox Energy.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <LivePortalLink url={liveUrl} />
                <BackToProjects />
              </div>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <figure className="flex flex-col gap-3">
            <div
              className="relative aspect-[2/1] overflow-hidden rounded-3xl border shadow-sm"
              style={{ backgroundColor: "#141412", borderColor: AURA.line }}
            >
              <CoverVideo src="/videos/aura-spaces-card-loop-5s.mp4" />
            </div>
            <figcaption className="text-sm leading-relaxed text-muted-foreground">
              A short loop of the Aura portal. The same clip plays on the product card.
            </figcaption>
          </figure>
        </BlurFade>

        <dl className="mx-auto grid w-full max-w-3xl gap-x-6 gap-y-5 border-y border-border py-6 sm:grid-cols-2">
          {FACTS.map(({ term, detail }) => (
            <div key={term}>
              <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {term}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed">{detail}</dd>
            </div>
          ))}
        </dl>

        <nav aria-label="On this page" className="mx-auto w-full max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            On this page
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {PAGE_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* The brief */}
      <Section id="brief">
        <SectionIntro
          id="brief"
          eyebrow="The brief"
          heading="Give households a clearer picture of their energy."
        >
          <p>
            Household energy information is spread across supplier accounts, bills
            and device apps. People can see individual readings without getting a
            clear explanation of their usage or what those readings mean.
          </p>
          <p>
            The Phase 1 brief was to bring consumption, tariff information and
            household questions into one accessible experience, initially shaped
            around a UK prepayment household.
          </p>
        </SectionIntro>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {OBJECTIVES.map((objective, i) => (
            <li key={objective} className="border-t-2 pt-4" style={{ borderColor: AURA.accent }}>
              <span className="font-mono text-sm tabular-nums text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-medium leading-snug">{objective}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* My contribution */}
      <Section id="contribution">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <SectionIntro
            id="contribution"
            eyebrow="My contribution"
            heading="I owned Phase 1 from definition to deployment."
          />
          <ul className="flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
            {CONTRIBUTION.map((item) => (
              <li key={item} className="flex items-start gap-3 px-5 py-4 text-sm leading-relaxed">
                <CircleCheckIcon
                  className="mt-0.5 size-4 flex-none"
                  strokeWidth={1.75}
                  color={AURA.accent}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Phase 1 experience */}
      <Section id="experience">
        <SectionIntro
          id="experience"
          eyebrow="The Phase 1 experience"
          heading="The core experience in Phase 1."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE.map(({ title, body, icon }) => (
            <li key={title} className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-5">
              <IconChip icon={icon} />
              <h3 className="font-semibold tracking-tight">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Product decisions */}
      <Section id="decisions">
        <SectionIntro id="decisions" eyebrow="Product decisions" heading="Choices that keep the numbers honest.">
          <p>
            These are implementation decisions I made while building Phase 1. They
            are not findings from user research.
          </p>
        </SectionIntro>
        <dl className="mt-8 border-b border-border">
          {DECISIONS.map(({ title, body }, i) => (
            <div
              key={title}
              className="grid gap-2 border-t border-border py-6 md:grid-cols-[3rem_minmax(0,16rem)_minmax(0,1fr)] md:gap-6"
            >
              <span aria-hidden className="font-mono text-sm tabular-nums text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <dt className="text-lg font-semibold leading-snug tracking-tight">{title}</dt>
              <dd className="leading-relaxed text-muted-foreground">{body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Screen gallery */}
      <Section id="screens">
        <SectionIntro id="screens" eyebrow="Screen gallery" heading="The main screens in Phase 1.">
          <p>
            These are screenshots of the live portal while signed in. Where a screen
            says the figures are sample data, that label is part of the screenshot.
            Account keys and meter numbers are not shown.
          </p>
        </SectionIntro>
        <div className="mt-8 flex flex-col gap-10">
          <Shot
            title="Usage and insights"
            src="/aura/insights-desktop.png"
            width={2880}
            height={1800}
            alt="Aura Energy Insights screen with electricity and gas totals, a daily usage chart, usage by time of day, and a note that live meter data is unavailable."
            caption="Electricity and gas totals, a daily chart and usage by time of day. The screen says this is sample data because the live meter is unavailable."
          />

          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            <li>
              <Shot
                phone
                title="Mobile home"
                src="/aura/home-mobile.png"
                width={780}
                height={1688}
                alt="Aura home screen on a phone, with a house graphic, today's electricity total, a savings figure, and a note that the live meter is unavailable."
                caption="The same home screen in one column, with tab navigation along the bottom."
              />
            </li>
            <li>
              <Shot
                phone
                focus="bottom"
                title="Aura AI"
                src="/aura/chat-mobile.png"
                width={780}
                height={1688}
                alt="Aura AI chat with suggested questions and a reply about comparing gas usage."
                caption="Suggested questions and a reply. The reply asks for gas consumption rather than stating a usage figure. A chat reply does not operate a device."
              />
            </li>
            <li>
              <Shot
                phone
                title="Octopus connection"
                src="/aura/octopus-mobile.png"
                width={780}
                height={1688}
                alt="Empty Octopus Energy connection form with fields for an API key and meter numbers, and a verify and connect button."
                caption="The form for connecting an Octopus account. No API key or meter numbers are entered here. Supplier comparison on the home screen is a separate external link."
              />
            </li>
            <li>
              <Shot
                phone
                title="Devices"
                src="/aura/devices-mobile.png"
                width={780}
                height={1688}
                alt="Aura devices screen listing Nest Climate and Philips Hue Lighting, both marked off."
                caption="Both devices are off in this screenshot. The toggles are the interface shown here. This does not show equipment being controlled."
              />
            </li>
          </ul>
        </div>
      </Section>

      {/* Delivered and next */}
      <Section id="status">
        <SectionIntro id="status" eyebrow="Status" heading="What is delivered and what comes next." />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold tracking-tight">Delivered in Phase 1</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {DELIVERED.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <CircleCheckIcon
                    className="mt-0.5 size-4 flex-none"
                    strokeWidth={1.75}
                    color={AURA.accent}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-border p-6">
            <h3 className="font-semibold tracking-tight">Next phase</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NEXT.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <CircleDashedIcon className="mt-0.5 size-4 flex-none" strokeWidth={1.75} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Technical foundation */}
      <Section id="technical">
        <SectionIntro id="technical" eyebrow="Technical foundation" heading="How Phase 1 is put together.">
          <p>
            The diagram is the hosted path: what talks to what when someone uses the
            live portal. The tech stack underneath lists every tool, including the
            local API that is not part of that path.
          </p>
        </SectionIntro>
        <div className="mt-8 flex flex-col gap-12">
          <div id="architecture" className="scroll-mt-8">
            <h3 className="text-lg font-semibold tracking-tight">Architecture</h3>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              The portal is hosted on Vercel and talks to Supabase. Supabase calls
              Gemini for answers, and the Octopus Energy API for consumption and
              tariff data.
            </p>
            <div className="mt-5">
              <AuraArchitecture />
            </div>
          </div>

          <div id="stack" className="scroll-mt-8">
            <h3 className="text-lg font-semibold tracking-tight">Tech stack</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              The tools used to build and run Phase 1.
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {STACK.map(({ tool, role, icons }) => (
                <li
                  key={tool}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <span className="flex flex-none items-center gap-1.5">
                    {icons.map((Icon) => (
                      <ToolMark key={Icon.name} icon={Icon} />
                    ))}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold">{tool}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                      {role}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Outcome */}
      <Section id="outcome" className="rounded-3xl border border-border px-6 py-10 sm:px-10 sm:py-14">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          <p className={EYEBROW}>Outcome</p>
          <h2
            id="outcome-heading"
            className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
          >
            A deployed foundation for a connected energy experience.
          </h2>
          <p className="leading-relaxed text-muted-foreground text-pretty">
            I took Aura from product definition through design, development and
            deployment. Phase 1 brings household energy information and contextual AI
            assistance into one portal, with an interface ready for further
            connected-home integration.
          </p>
          <p className="text-sm text-muted-foreground">
            The screens show the portal as it appears when signed in, including its
            own sample-data label. This case study does not add separate measured
            adoption or savings results.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <LivePortalLink url={liveUrl} />
            <BackToProjects />
          </div>
        </div>
      </Section>
    </article>
  );
}
