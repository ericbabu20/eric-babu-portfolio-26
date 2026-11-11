import BlurFade from "@/components/magicui/blur-fade";
import { LogoBadge } from "@/components/logo-badge";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsEducationSection() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-y-12">
      <div className="flex flex-col gap-y-6">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="grid gap-6 sm:grid-cols-2">
          {DATA.skillGroups.map((group, i) => (
            <BlurFade
              key={group.title}
              delay={BLUR_FADE_DELAY * 8 + i * 0.05}
              className="rounded-xl border border-border p-5"
            >
              <h3 className="mb-3 text-sm font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge
                      variant="outline"
                      className="h-auto whitespace-normal px-2 py-1 text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  </li>
                ))}
              </ul>
            </BlurFade>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-6" id="education">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <h2 className="text-xl font-bold">Education and certifications</h2>
        </BlurFade>
        <ul className="flex flex-col gap-6">
          {DATA.education.map((item, i) => (
            <li key={item.qualification}>
              <BlurFade delay={BLUR_FADE_DELAY * 13 + i * 0.05}>
                <div className="flex items-start gap-x-3">
                  {item.logo && (
                    <LogoBadge src={item.logo} alt={`${item.institution} logo`} />
                  )}
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <p className="font-semibold leading-snug">{item.qualification}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.institution}, {item.location}
                    </p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  <p className="flex-none text-xs tabular-nums text-muted-foreground">
                    {item.start === item.end ? item.start : `${item.start} - ${item.end}`}
                  </p>
                </div>
              </BlurFade>
            </li>
          ))}
        </ul>
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <h3 className="mb-3 text-sm font-semibold">Certifications</h3>
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground marker:text-muted-foreground/60">
            {DATA.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </BlurFade>
      </div>
    </div>
  );
}
