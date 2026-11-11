import type { CoverIconName, CoverImage } from "@/data/types";
import { cn } from "@/lib/utils";
import { CoverVideo } from "./cover-video";
import {
  BarChart3Icon,
  BotMessageSquareIcon,
  FileSearchIcon,
  LayoutDashboardIcon,
  type LucideIcon,
  MapPinIcon,
  MegaphoneIcon,
  PenToolIcon,
  RepeatIcon,
  ShieldCheckIcon,
  ShoppingBasketIcon,
  UserPlusIcon,
  CompassIcon,
} from "lucide-react";
import Image from "next/image";

const ICONS: Record<CoverIconName, LucideIcon> = {
  onboarding: UserPlusIcon,
  portal: LayoutDashboardIcon,
  assistant: BotMessageSquareIcon,
  compliance: ShieldCheckIcon,
  analytics: BarChart3Icon,
  retention: RepeatIcon,
  basket: ShoppingBasketIcon,
  location: MapPinIcon,
  communication: MegaphoneIcon,
  ux: PenToolIcon,
  research: CompassIcon,
};

interface CoverProps {
  cover?: CoverImage;
  /** Looping thumbnail. Falls back to the image, then the neutral placeholder. */
  video?: string;
  icon: CoverIconName;
  /** Text shown on the neutral cover when there is no image. */
  label: string;
  className?: string;
  /** Pass true for the first image on a page. */
  priority?: boolean;
  sizes?: string;
}

/**
 * Shows a supplied screenshot, or an intentionally neutral cover.
 * The neutral cover is decorative only: it never imitates a screenshot.
 */
export function Cover({
  cover,
  video,
  icon,
  label,
  className,
  priority,
  sizes = "(min-width: 1024px) 480px, (min-width: 768px) 45vw, 100vw",
}: CoverProps) {
  if (video) {
    return (
      <div
        className={cn("relative aspect-[2/1] w-full overflow-hidden", className)}
        style={{ backgroundColor: "#141412" }}
      >
        <CoverVideo src={video} />
      </div>
    );
  }

  if (cover) {
    return (
      <div className={cn("relative aspect-[2/1] w-full overflow-hidden bg-muted", className)}>
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    );
  }

  const Icon = ICONS[icon];
  return (
    <div
      aria-hidden
      className={cn(
        "relative aspect-[2/1] w-full overflow-hidden bg-muted flex flex-col items-center justify-center gap-3 text-muted-foreground",
        className
      )}
    >
      {/* Subtle grid, in keeping with the template's flickering-grid header */}
      <div
        className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div className="relative flex size-12 items-center justify-center rounded-full border bg-background shadow-sm">
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <span className="relative text-sm font-medium tracking-tight">{label}</span>
    </div>
  );
}
