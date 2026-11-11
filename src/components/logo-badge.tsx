import { cn } from "@/lib/utils";
import Image from "next/image";

const SIZES = {
  sm: "size-7",
  md: "size-8 md:size-10",
} as const;

/**
 * A logo in a small round badge, used for employers, schools and the
 * companies that case studies are about.
 *
 * Pass `alt=""` when the company name is already written next to the logo,
 * so screen readers do not read it twice.
 */
export function LogoBadge({
  src,
  alt,
  size = "md",
  shape = "round",
  className,
}: {
  src: string;
  alt: string;
  size?: keyof typeof SIZES;
  /** Use "square" for app-style icons that have their own rounded corners. */
  shape?: "round" | "square";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-none items-center justify-center overflow-hidden border bg-white shadow ring-2 ring-border",
        shape === "round" ? "rounded-full p-1" : "rounded-lg p-0.5",
        SIZES[size],
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        loading="eager"
        className="size-full object-contain"
      />
    </div>
  );
}
