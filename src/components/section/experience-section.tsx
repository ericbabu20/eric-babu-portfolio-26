import BlurFade from "@/components/magicui/blur-fade";
import { LogoBadge } from "@/components/logo-badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

function initialsFor(name: string) {
  return name
    .replace(/[^A-Za-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function CompanyMark({
  name,
  logo,
  large = false,
}: {
  name: string;
  logo?: string;
  large?: boolean;
}) {
  if (logo) {
    return (
      <LogoBadge
        src={logo}
        alt=""
        className={large ? "size-12" : "size-8 md:size-10"}
      />
    );
  }

  return (
    <div
      aria-hidden
      className="flex size-8 flex-none items-center justify-center rounded-full border bg-muted text-xs font-semibold text-muted-foreground shadow ring-2 ring-border md:size-10"
    >
      {initialsFor(name)}
    </div>
  );
}

function MetaLine({
  title,
  start,
  end,
  location,
}: {
  title: string;
  start: string;
  end: string;
  location: string;
}) {
  return (
    <p className="text-sm text-muted-foreground">
      <span>{title}</span>
      <span className="whitespace-nowrap">
        <span aria-hidden> · </span>
        <span className="sr-only">, </span>
        {start} to {end}
      </span>
      <span className="whitespace-nowrap">
        <span aria-hidden> · </span>
        <span className="sr-only">, </span>
        {location}
      </span>
    </p>
  );
}

function CompanyHeading({
  name,
  as,
  className,
}: {
  name: string;
  as: "h2" | "h3";
  className: string;
}) {
  const Tag = as;
  return (
    <Tag className={className}>
      <span className="font-medium text-muted-foreground">At </span>
      <span className="text-primary">{name}.</span>
    </Tag>
  );
}

export default function ExperienceSection() {
  const featured = DATA.work.find((role) => "stats" in role);
  const earlier = DATA.work.filter((role) => !("stats" in role));

  if (!featured || !("stats" in featured)) return null;

  return (
    <div className="flex w-full min-w-0 flex-col gap-y-8">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <header className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <CompanyMark name={featured.shortName} logo={featured.logo} large />
            <div className="min-w-0">
              <p className="text-sm font-medium text-muted-foreground">Experience</p>
              <CompanyHeading
                as="h2"
                name={featured.headingName}
                className="text-3xl font-bold tracking-tighter text-balance sm:text-4xl"
              />
            </div>
          </div>
          <MetaLine
            title={featured.title}
            start={featured.start}
            end={featured.end}
            location={featured.location}
          />
          <p className="max-w-[65ch] text-base leading-relaxed text-pretty">
            {featured.summary}
          </p>
        </header>
      </BlurFade>

      <ul
        aria-label="Results at Outfox Energy"
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
      >
        {featured.stats.map((stat, index) => (
          <li key={stat.spoken} className="min-w-0">
            <BlurFade inView delay={0.05 * index} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-xl border border-border bg-card p-4 motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1 hover:shadow-sm">
                <p className="sr-only">{stat.spoken}</p>
                <p aria-hidden className="text-4xl font-semibold tracking-tighter tabular-nums">
                  {stat.figure}
                </p>
                <p aria-hidden className="text-sm font-semibold leading-snug">
                  {stat.title}
                </p>
                <p className="text-sm leading-snug text-muted-foreground">{stat.detail}</p>
              </div>
            </BlurFade>
          </li>
        ))}
      </ul>

      <BlurFade inView delay={BLUR_FADE_DELAY * 4}>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold tracking-tight">What I shipped</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featured.shipped.map((group) => (
              <div key={group.heading} className="min-w-0">
                <h4 className="text-sm font-semibold">{group.heading}</h4>
                <ul className="mt-3 flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1.5 text-sm leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </BlurFade>

      <BlurFade inView delay={BLUR_FADE_DELAY * 5}>
        <p className="rounded-xl border border-border bg-muted px-4 py-3 text-sm leading-relaxed">
          <span className="font-semibold">Now building: </span>
          {featured.nowBuilding.replace(/^Now building:\s*/, "")}
        </p>
      </BlurFade>

      <div className="flex flex-col gap-6">
        <h3 className="text-sm font-semibold tracking-tight text-muted-foreground">
          Before product
        </h3>
        <div className="flex flex-col gap-6">
          {earlier.map((role) => (
            <article key={role.company} className="flex min-w-0 items-start gap-3">
              <CompanyMark name={role.shortName} logo={role.logo} />
              <div className="min-w-0 flex flex-col gap-1">
                <CompanyHeading
                  as="h3"
                  name={role.headingName}
                  className="text-lg font-semibold tracking-tight text-balance"
                />
                <MetaLine
                  title={role.title}
                  start={role.start}
                  end={role.end}
                  location={role.location}
                />
                <p className="max-w-[65ch] text-sm leading-relaxed text-pretty">
                  {role.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
