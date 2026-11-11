import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { getCaseStudies } from "@/lib/content";
import { NotebookIcon } from "lucide-react";
import { allPosts } from "content-collections";
import Link from "next/link";

const tooltipClass =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";

const iconClass =
  "rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

export default function Navbar() {
  // The blog stays hidden until at least one post exists in /content.
  // The Case Studies link appears only when its homepage section does.
  const hasCaseStudies = getCaseStudies().length > 0;
  const items = [
    ...DATA.navbar.filter(
      (item) => item.href !== "/#case-studies" || hasCaseStudies,
    ),
    ...(allPosts.length > 0
      ? [{ href: "/blog", icon: NotebookIcon, label: "Blog" }]
      : []),
  ];

  return (
    <nav
      aria-label="Main"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-30"
    >
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit max-w-[calc(100vw-1rem)] mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {items.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link href={item.href} aria-label={item.label}>
                <DockIcon className={iconClass}>
                  <item.icon
                    className="size-full rounded-sm overflow-hidden object-contain"
                    aria-hidden
                  />
                </DockIcon>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
              <p>{item.label}</p>
              <TooltipArrow className="fill-primary" />
            </TooltipContent>
          </Tooltip>
        ))}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={iconClass}>
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </nav>
  );
}
