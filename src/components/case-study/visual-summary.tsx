import type { LucideIcon } from "lucide-react";
import {
  ArrowRightIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  FilterIcon,
  FlameIcon,
  MapPinIcon,
  PercentIcon,
  SearchIcon,
  ShieldIcon,
  ShoppingBagIcon,
  SparklesIcon,
  TargetIcon,
  TrophyIcon,
  TruckIcon,
  UserPlusIcon,
  UsersIcon,
  UtensilsIcon,
  WalletIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const VISUAL_SLUGS = new Set([
  "zomato-engagement-retention-strategy",
  "driving-adoption-jtbd-first-principles",
  "vitafit-momentum-prd",
  "twitter-x-aarrr-funnel-analysis",
]);

export function hasCaseStudyVisual(slug: string) {
  return VISUAL_SLUGS.has(slug);
}

export function CaseStudyVisual({ slug }: { slug: string }) {
  switch (slug) {
    case "zomato-engagement-retention-strategy":
      return <ZomatoSummary />;
    case "driving-adoption-jtbd-first-principles":
      return <UberSummary />;
    case "vitafit-momentum-prd":
      return <VitaFitSummary />;
    case "twitter-x-aarrr-funnel-analysis":
      return <XSummary />;
    default:
      return null;
  }
}

function Eyebrow({ children, color }: { children: ReactNode; color: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color }}>
      {children}
    </p>
  );
}

function IconBadge({ icon: Icon, color }: { icon: LucideIcon; color: string }) {
  return (
    <span
      className="flex size-9 shrink-0 items-center justify-center rounded-lg"
      style={{
        backgroundColor: color,
        color: color.startsWith("var(") ? "var(--background)" : "#fff",
      }}
      aria-hidden
    >
      <Icon className="size-4" strokeWidth={2} />
    </span>
  );
}

function Note({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs leading-relaxed text-muted-foreground">{children}</p>
  );
}

function Bar({
  value,
  max,
  color,
  track = "bg-muted",
}: {
  value: number;
  max: number;
  color: string;
  track?: string;
}) {
  const width = `${Math.max(4, Math.round((value / max) * 100))}%`;
  return (
    <div className={`h-2.5 w-full overflow-hidden rounded-full ${track}`}>
      <div className="h-full rounded-full" style={{ width, backgroundColor: color }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Zomato                                                              */
/* ------------------------------------------------------------------ */

const ZOMATO = "#E23744";

const ZOMATO_FUNNEL = [
  { label: "App open", value: 100, drop: "Start" },
  { label: "Discovery", value: 86, drop: "−14%" },
  { label: "Menu view", value: 61, drop: "−29%" },
  { label: "Cart", value: 40, drop: "−34%" },
  { label: "Checkout", value: 30, drop: "−25%" },
  { label: "Order placed", value: 24, drop: "−20%" },
  { label: "Delivered", value: 23, drop: "−4%" },
];

function ZomatoSummary() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col justify-between gap-6 bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-4">
            <Eyebrow color={ZOMATO}>Zomato · Food delivery</Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Making Zomato the <span style={{ color: ZOMATO }}>everyday habit</span>
            </h2>
            <p className="max-w-md text-muted-foreground">
              Optimising the discovery, order and delivery journey so existing users in Tier-1 India order more often, for reasons beyond price.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Workstreams">
            {["OKRs CY2026", "Funnel analysis", "Cohort analysis", "Synthesis"].map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="relative flex min-h-52 items-center justify-center"
          style={{ backgroundColor: ZOMATO }}
          aria-hidden
        >
          <span className="absolute size-40 rounded-full border border-white/25" />
          <span className="absolute size-56 rounded-full border border-white/15" />
          <span className="absolute size-72 rounded-full border border-white/10" />
          <UtensilsIcon className="relative size-16 text-white" strokeWidth={1.5} />
        </div>
      </div>

      <section aria-labelledby="zomato-start">
        <Eyebrow color={ZOMATO}>The starting point</Eyebrow>
        <h3 id="zomato-start" className="mt-2 text-2xl font-semibold tracking-tight">
          The Tier-1 reality shapes the strategy
        </h3>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">
          <Point
            color={ZOMATO}
            icon={UsersIcon}
            title="Mature, not greenfield"
            body="Acquisition in Tier-1 is saturated and costly. The win is getting existing users to order more often."
          />
          <Point
            color={ZOMATO}
            icon={PercentIcon}
            title="Discount fatigue is real"
            body="Users hunt coupons and switch apps. A full-price habit is the durable moat, not another discount spike."
          />
          <Point
            color={ZOMATO}
            icon={ShieldIcon}
            title="Reliability drives retention"
            body="One late or wrong order erodes more loyalty than ten discounts can buy back."
          />
        </ul>
        <p className="mt-4 flex flex-col gap-2 rounded-xl bg-foreground px-4 py-3 text-background sm:flex-row sm:items-center sm:gap-4">
          <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: "#ffb4bc" }}>
            Strategic thesis
          </span>
          <span className="font-medium">
            Growth in Tier-1 means ordering more often, for reasons beyond price.
          </span>
        </p>
      </section>

      <section aria-labelledby="zomato-journey">
        <Eyebrow color={ZOMATO}>How I approached this</Eyebrow>
        <h3 id="zomato-journey" className="mt-2 text-2xl font-semibold tracking-tight">
          One journey, four workstreams
        </h3>
        <ol className="mt-5 grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
          <JourneyStep color={ZOMATO} icon={SearchIcon} label="Discovery" />
          <ArrowRightIcon className="mx-auto hidden size-4 text-muted-foreground sm:block" aria-hidden />
          <JourneyStep color={ZOMATO} icon={ShoppingBagIcon} label="Order" />
          <ArrowRightIcon className="mx-auto hidden size-4 text-muted-foreground sm:block" aria-hidden />
          <JourneyStep color={ZOMATO} icon={TruckIcon} label="Delivery" />
        </ol>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "CY2026 OKRs", "Objective, key results and a metric ladder."],
            ["02", "Funnel analysis", "Seven stages, drop-offs and conversion hypotheses."],
            ["03", "Cohort analysis", "Retention by user type, and how to lift it."],
            ["04", "Synthesis", "Why habit, not more acquisition, is the bet."],
          ].map(([n, title, body]) => (
            <li key={n} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold" style={{ color: ZOMATO }}>
                  {n}
                </span>
                <span className="size-2 rounded-full" style={{ backgroundColor: ZOMATO }} aria-hidden />
              </div>
              <p className="mt-3 font-medium">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="zomato-funnel">
        <Eyebrow color={ZOMATO}>Funnel</Eyebrow>
        <h3 id="zomato-funnel" className="mt-2 text-2xl font-semibold tracking-tight">
          Where the journey leaks
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Indexed to 100 app opens. The steepest drops are discovery to menu, and menu to cart.
        </p>
        <figure className="mt-5 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <figcaption className="sr-only">
            Illustrative funnel: 100 app opens, 86 reach discovery, 61 view a menu, 40 add to cart, 30 reach checkout, 24 place an order, 23 are delivered. Open to delivered is 23 percent.
          </figcaption>
          <ul className="flex flex-col gap-3">
            {ZOMATO_FUNNEL.map((stage) => (
              <li key={stage.label} className="grid grid-cols-[5.5rem_1fr_auto] items-center gap-3 sm:grid-cols-[7rem_1fr_auto]">
                <span className="text-sm">{stage.label}</span>
                <Bar value={stage.value} max={100} color={ZOMATO} />
                <span className="w-14 text-right text-sm tabular-nums">
                  <span className="font-medium text-foreground">{stage.value}</span>
                  <span className="ml-1 text-xs text-muted-foreground">{stage.drop === "Start" ? "" : stage.drop}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm">
            <span className="font-semibold text-foreground">23%</span>
            <span className="text-muted-foreground"> of opens become a delivered order, in this illustration.</span>
          </p>
        </figure>
        <Note>
          These rates are illustrative assumptions made for the exercise. They are not Zomato’s data, and they are hypotheses to test, not findings.
        </Note>
      </section>

      <section aria-labelledby="zomato-krs">
        <Eyebrow color={ZOMATO}>CY2026 key results</Eyebrow>
        <h3 id="zomato-krs" className="mt-2 text-2xl font-semibold tracking-tight">
          From baseline to target
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          <Compare
            color={ZOMATO}
            label="Orders per active user / month"
            from={3.4}
            to={4.6}
            max={6}
            format={(n) => n.toFixed(1)}
          />
          <Compare color={ZOMATO} label="New-user retention at month 3" from={27} to={40} max={100} suffix="%" />
          <Compare color={ZOMATO} label="Orders with no discount" from={46} to={60} max={100} suffix="%" />
          <Compare color={ZOMATO} label="On-time delivery" from={84} to={93} max={100} suffix="%" />
        </ul>
        <div className="mt-4 rounded-2xl border border-border p-5">
          <div className="flex items-start gap-3">
            <IconBadge icon={TargetIcon} color={ZOMATO} />
            <div>
              <p className="text-sm font-medium text-muted-foreground">North Star</p>
              <p className="mt-1 text-lg font-semibold tracking-tight">Monthly Habitual Orders</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Orders placed by users who order four or more times that month. Repeat discounts can inflate it, so full-price share, on-time delivery and contribution margin sit beside it as guardrails.
              </p>
            </div>
          </div>
        </div>
        <Note>Every baseline and target above is an illustrative assumption. None of these figures has been measured.</Note>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Uber Eats                                                           */
/* ------------------------------------------------------------------ */

const UBER = "#14804A";

function UberSummary() {
  return (
    <div className="flex flex-col gap-10">
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex items-center justify-between gap-3 border-b border-border px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          <span>Uber Eats · Group Order</span>
          <span>2025</span>
        </div>
        <div className="flex flex-col gap-4 p-6 sm:p-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Group Order <span style={{ color: UBER }}>feature analysis</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Jobs To Be Done · First principles · Product improvement strategy
          </p>
          <div className="rounded-xl p-4 text-white" style={{ backgroundColor: UBER }}>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Executive summary</p>
            <p className="mt-2 leading-relaxed">
              Group Order has real demand and chronically low adoption. It digitises the coordination problem instead of removing it. The fix is to let each person pay, show the cost before they commit, and put a deadline on the wait.
            </p>
          </div>
        </div>
      </div>

      <section aria-labelledby="uber-friction">
        <Eyebrow color={UBER}>Problem</Eyebrow>
        <h3 id="uber-friction" className="mt-2 text-2xl font-semibold tracking-tight">
          Four kinds of friction
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          <Point color={UBER} icon={UsersIcon} title="Coordination" body="Link sharing is manual. People are not notified. The restaurant has to be chosen before anyone else can join." />
          <Point color={UBER} icon={WalletIcon} title="Payment trust" body="The host pays upfront and chases the money back. The cost per person is not shown before someone joins." />
          <Point color={UBER} icon={ClockIcon} title="Accountability" body="There is no deadline to add items. If the meal goes wrong, the organiser carries the blame." />
          <Point color={UBER} icon={TruckIcon} title="Delivery trust" body="Timing has been overpromised before. That matters more when several people are waiting together." />
        </ul>
        <p className="mt-4 rounded-xl border border-border bg-muted/60 px-4 py-3 text-sm">
          <span className="font-semibold text-foreground">Insight. </span>
          <span className="text-muted-foreground">
            People are not hiring Group Order to place a group order. They are hiring it to avoid looking like the person who got the bill, the judgement, or the blame.
          </span>
        </p>
      </section>

      <section aria-labelledby="uber-choice">
        <Eyebrow color={UBER}>Decision</Eyebrow>
        <h3 id="uber-choice" className="mt-2 text-2xl font-semibold tracking-tight">
          What was taken forward
        </h3>
        <ul className="mt-5 grid gap-3 md:grid-cols-3">
          <li className="rounded-xl border border-dashed border-border p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Rejected</p>
            <p className="mt-2 font-medium">Better UI fixes adoption</p>
            <p className="mt-1 text-sm text-muted-foreground">Payment, trust and timing are structural. Polish does not resolve them.</p>
          </li>
          <li className="rounded-xl border border-dashed border-border p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Rejected</p>
            <p className="mt-2 font-medium">People want to order together</p>
            <p className="mt-1 text-sm text-muted-foreground">They want to eat together and skip the logistics. Group ordering is a means, not the goal.</p>
          </li>
          <li className="rounded-xl border p-4 text-white" style={{ backgroundColor: UBER, borderColor: UBER }}>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Chosen</p>
            <p className="mt-2 font-medium">Atomic individual checkout</p>
            <p className="mt-1 text-sm text-white/90">Each person pays their own share. The order confirms only once everyone has paid. Guests join from a link, with no app download.</p>
          </li>
        </ul>
      </section>

      <section aria-labelledby="uber-sequence">
        <Eyebrow color={UBER}>Sequence</Eyebrow>
        <h3 id="uber-sequence" className="mt-2 text-2xl font-semibold tracking-tight">
          Now, next, later
        </h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <Sequence title="Now" color={UBER} items={["Real-time cost preview", "Order deadline timer", "Savings banner"]} />
          <Sequence title="Next" color={UBER} items={["Rich link preview", "Restaurant vote", "“Start as group?” prompt"]} />
          <Sequence title="Later" color={UBER} items={["Saved group templates", "Calendar integration", "Preference memory"]} />
        </div>
        <Note>
          The recommended payment model is not yet in this sequence. How they fit together, and what happens if a payment fails or the deadline passes, is still open.
        </Note>
      </section>

      <section aria-labelledby="uber-metrics">
        <Eyebrow color={UBER}>Proposed measures</Eyebrow>
        <h3 id="uber-metrics" className="mt-2 text-2xl font-semibold tracking-tight">
          Targets, not results
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ["3×", "Adoption", "Eligible sessions using Group Order, within 6 months."],
            ["70%", "Completion", "Started group orders that are actually placed, within 6 months."],
            ["40%", "Repeat use", "People who use Group Order again within 30 days, within 3 months."],
          ].map(([figure, label, body]) => (
            <li key={label} className="rounded-xl border border-border bg-card p-4">
              <p className="text-3xl font-semibold tracking-tight" style={{ color: UBER }}>{figure}</p>
              <p className="mt-2 font-medium">{label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
        <Note>These are proposals from the analysis. Nothing here has been measured on Uber Eats.</Note>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* VitaFit                                                             */
/* ------------------------------------------------------------------ */

const VITA = "#1D4ED8";

function VitaFitSummary() {
  return (
    <div className="flex flex-col gap-10">
      <div className="overflow-hidden rounded-2xl text-white" style={{ backgroundColor: VITA }}>
        <div className="px-6 py-8 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
            Product requirements document · April 2026
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">VitaFit Momentum</h2>
          <p className="mt-2 max-w-xl text-white/90">
            Rewards and community challenges, meant to turn a passive class library into a habit.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl bg-white/10 p-4">
              <TrophyIcon className="size-5" aria-hidden />
              <p className="mt-3 font-medium">Gamification and rewards</p>
              <p className="mt-1 text-sm text-white/80">Points, streaks and badges for finishing sessions, trying something new, and showing up live.</p>
            </li>
            <li className="rounded-xl bg-white/10 p-4">
              <UsersIcon className="size-5" aria-hidden />
              <p className="mt-3 font-medium">Community challenges</p>
              <p className="mt-1 text-sm text-white/80">Time-bound group goals with a leaderboard, progress, and a check-in from the instructor.</p>
            </li>
          </ul>
        </div>
      </div>

      <section aria-labelledby="vita-problem">
        <Eyebrow color={VITA}>The problem</Eyebrow>
        <h3 id="vita-problem" className="mt-2 text-2xl font-semibold tracking-tight">
          Motivation drops after sign-up
        </h3>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          <Point color={VITA} icon={FlameIcon} title="No reason to return" body="Once the novelty of joining fades, nothing pulls people back on an ordinary day." />
          <Point color={VITA} icon={UserPlusIcon} title="It feels transactional" body="The experience is individual. There is little that is social or emotionally rewarding." />
          <Point color={VITA} icon={SparklesIcon} title="Weak instructor bond" body="People do not feel connected to a teacher, so loyalty to a class does not form." />
          <Point color={VITA} icon={UsersIcon} title="No accountability" body="Someone can disappear and nothing in the product notices." />
        </ul>
      </section>

      <section aria-labelledby="vita-experiment">
        <Eyebrow color={VITA}>How it would be tested</Eyebrow>
        <h3 id="vita-experiment" className="mt-2 text-2xl font-semibold tracking-tight">
          A four-arm experiment
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Four weeks. The recommendation is to ship both features together, and to learn whether rewards, community, or the combination does the work.
        </p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Control", "Today’s experience"],
            ["Arm A", "Rewards only"],
            ["Arm B", "Challenges only"],
            ["Arm C", "Rewards and challenges"],
          ].map(([name, body], i) => (
            <li
              key={name}
              className="rounded-xl border p-4"
              style={i === 3 ? { backgroundColor: VITA, borderColor: VITA, color: "white" } : undefined}
            >
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{name}</p>
              <p className="mt-2 font-medium">{body}</p>
            </li>
          ))}
        </ol>
        <Note>A full 30-day retention reading needs follow-up after the four-week enrolment window. The PRD does not state a sample size.</Note>
      </section>

      <section aria-labelledby="vita-metrics">
        <Eyebrow color={VITA}>Proposed targets</Eyebrow>
        <h3 id="vita-metrics" className="mt-2 text-2xl font-semibold tracking-tight">
          What success was defined as
        </h3>
        <div className="mt-5 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <IconBadge icon={TargetIcon} color={VITA} />
            <div>
              <p className="font-medium">North Star</p>
              <p className="mt-1 text-sm text-muted-foreground">
                More people completing two or more sessions a week.
              </p>
            </div>
          </div>
          <ul className="mt-6 flex flex-col gap-4">
            {[
              ["Weekly active users completing sessions", 15],
              ["Sessions per user per week", 20],
              ["D30 retention", 10],
              ["Return within 7 days of the first session", 15],
              ["Instructor follow rate", 20],
            ].map(([label, value]) => (
              <li key={label as string}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3 text-sm">
                  <span>{label}</span>
                  <span className="font-semibold tabular-nums" style={{ color: VITA }}>+{value}%</span>
                </div>
                <Bar value={value as number} max={25} color={VITA} />
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl bg-muted px-4 py-3">
              <p className="text-2xl font-semibold tracking-tight" style={{ color: VITA }}>25%</p>
              <p className="mt-1 text-sm text-muted-foreground">of active users join at least one challenge</p>
            </li>
            <li className="rounded-xl bg-muted px-4 py-3">
              <p className="text-2xl font-semibold tracking-tight" style={{ color: VITA }}>40%</p>
              <p className="mt-1 text-sm text-muted-foreground">of people who join a challenge finish it</p>
            </li>
          </ul>
        </div>
        <Note>
          The PRD lists behavioural signals but does not include the underlying data. Every target here is a proposal. The hypotheses are untested.
        </Note>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* X / Twitter                                                         */
/* ------------------------------------------------------------------ */

const X = "var(--foreground)";

const X_EPICS = [
  { rank: "1", name: "Account access rescue", score: 3.6, note: "Highest impact, lowest effort." },
  { rank: "2", name: "Intent-led first run", score: 1.95, note: "High reach, larger build." },
  { rank: "3", name: "Feed control centre", score: 1.8, note: "Touches everyone, slower to ship." },
  { rank: "4", name: "Reasons to return", score: 1.6, note: "Valuable once the first run works." },
];

function XSummary() {
  return (
    <div className="flex flex-col gap-10">
      <div className="overflow-hidden rounded-2xl bg-neutral-950 text-white">
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
              AARRR · Product management assignment
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              X does not have an awareness problem. It has a habit problem.
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              People leak out before the product becomes useful: sign-up is brittle, the first session is not relevant, and ordinary days give no reason to come back.
            </p>
          </div>
          <ol className="grid grid-cols-2 gap-2" aria-label="Recommended order">
            {["Fix access", "Fix the first run", "Fix feed control", "Build reasons to return"].map((step, i) => (
              <li key={step} className="rounded-xl bg-white/10 p-3">
                <span className="font-mono text-xs text-white/50">0{i + 1}</span>
                <p className="mt-1 text-sm font-medium">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <section aria-labelledby="x-funnel">
        <Eyebrow color={X}>The funnel</Eyebrow>
        <h3 id="x-funnel" className="mt-2 text-2xl font-semibold tracking-tight dark:text-foreground">
          Where value leaks
        </h3>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          <Point color={X} icon={BellIcon} title="Acquisition" body="The homepage says one thing. The store listing promotes Grok, Spaces, video, DMs, communities and Premium at once." />
          <Point color={X} icon={UserPlusIcon} title="Activation" body="A unique email or phone is required. Reviews describe failed codes, and a new user has not yet given the signals the feed needs." />
          <Point color={X} icon={FilterIcon} title="Retention" body="Feed controls are split across several screens. Reviews say the feed resets to For You." />
          <Point color={X} icon={CreditCardIcon} title="Revenue and referral" body="Premium asks for trust before value is proven. Sharing is strong, but there is no native invite." />
        </ul>
        <Note>Built from public help docs, app store reviews and third-party reports. X publishes no internal funnel data, so this is directional.</Note>
      </section>

      <section aria-labelledby="x-rice">
        <Eyebrow color={X}>RICE</Eyebrow>
        <h3 id="x-rice" className="mt-2 text-2xl font-semibold tracking-tight">
          What to build first
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Score = (Reach × Impact × Confidence) ÷ Effort. Component values were not readable in the source, so only the final scores are shown.
        </p>
        <figure className="mt-5 rounded-2xl border border-border bg-card p-4 sm:p-6">
          <figcaption className="sr-only">
            RICE scores: account access 3.60, first run 1.95, feed control 1.80, reasons to return 1.60.
          </figcaption>
          <ul className="flex flex-col gap-4">
            {X_EPICS.map((epic) => (
              <li key={epic.name}>
                <div className="mb-1.5 flex items-baseline justify-between gap-3">
                  <p className="text-sm">
                    <span className="mr-2 font-mono text-xs text-muted-foreground">{epic.rank}</span>
                    <span className="font-medium text-foreground">{epic.name}</span>
                  </p>
                  <span className="font-semibold tabular-nums">{epic.score.toFixed(2)}</span>
                </div>
                <Bar value={epic.score} max={3.6} color={X} />
                <p className="mt-1 text-xs text-muted-foreground">{epic.note}</p>
              </li>
            ))}
          </ul>
        </figure>
        <Note>
          Revenue and referral were left out of the sequence on purpose. They follow once new arrivals reliably find value. These scores are directional, not a measured result.
        </Note>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function Point({
  color,
  icon,
  title,
  body,
}: {
  color: string;
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-3 rounded-xl border border-border bg-card p-4">
      <IconBadge icon={icon} color={color} />
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </li>
  );
}

function JourneyStep({ color, icon: Icon, label }: { color: string; icon: LucideIcon; label: string }) {
  return (
    <li className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ backgroundColor: `${color}14` }}>
      <span
        className="flex size-8 items-center justify-center rounded-lg text-white"
        style={{ backgroundColor: color }}
        aria-hidden
      >
        <Icon className="size-4" />
      </span>
      <span className="font-medium">{label}</span>
    </li>
  );
}

function Sequence({ title, items, color }: { title: string; items: string[]; color: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color }}>{title}</p>
      <ol className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <MapPinIcon className="mt-0.5 size-3.5 shrink-0" style={{ color }} aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Compare({
  color,
  label,
  from,
  to,
  max,
  suffix = "",
  format = (n: number) => String(n),
}: {
  color: string;
  label: string;
  from: number;
  to: number;
  max: number;
  suffix?: string;
  format?: (n: number) => string;
}) {
  return (
    <li className="rounded-xl border border-border bg-card p-4">
      <p className="font-medium">{label}</p>
      <div className="mt-3 space-y-2">
        <div>
          <div className="mb-1 flex justify-between text-xs text-muted-foreground">
            <span>Illustrative baseline</span>
            <span className="tabular-nums">{format(from)}{suffix}</span>
          </div>
          <Bar value={from} max={max} color="#a3a3a3" />
        </div>
        <div>
          <div className="mb-1 flex justify-between text-xs text-muted-foreground">
            <span>Illustrative target</span>
            <span className="tabular-nums font-medium text-foreground">{format(to)}{suffix}</span>
          </div>
          <Bar value={to} max={max} color={color} />
        </div>
      </div>
    </li>
  );
}
