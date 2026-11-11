import { Badge } from "@/components/ui/badge";
import { isDraftPreviewEnabled } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Visible only in local preview, and only for drafts. */
export function DraftBadge({
  status,
  className,
}: {
  status: "published" | "draft";
  className?: string;
}) {
  if (status !== "draft") return null;
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-dashed border-amber-600 text-amber-700 dark:border-amber-400 dark:text-amber-300",
        className
      )}
    >
      Draft preview: not public
    </Badge>
  );
}

/** Banner explaining why drafts are visible. Renders nothing in public builds. */
export function DraftPreviewNotice({
  className,
  show = true,
}: {
  className?: string;
  /** Pass false when the page has no drafts to explain. */
  show?: boolean;
}) {
  if (!show || !isDraftPreviewEnabled()) return null;
  return (
    <p
      role="note"
      className={cn(
        "rounded-lg border border-dashed border-amber-600 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-400 dark:bg-amber-950/40 dark:text-amber-100",
        className
      )}
    >
      <strong>Local draft preview.</strong> Items labelled &ldquo;Draft preview&rdquo;
      are visible only on your machine. They are excluded from the public site and
      the sitemap.
    </p>
  );
}
