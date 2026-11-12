import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { ShippedProduct } from "@/data/types";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Cover } from "./cover";

export function ProductCard({ product }: { product: ShippedProduct }) {
  const detailHref = `/products/${product.slug}`;
  const category = product.cardCategory ?? product.contextLabel;
  const description = product.cardSummary ?? product.summary;

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-200 hover:ring-2 hover:ring-muted"
      aria-labelledby={`product-${product.slug}`}
    >
      <Cover
        cover={product.cover}
        video={product.mediaVideo}
        videoPoster={product.mediaPoster}
        illustration={product.illustration}
        icon={product.coverIcon}
        label={product.coverLabel}
      />
      <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {category}
          </p>
          {product.cardStatus && (
            <Badge variant="outline" className="h-5 px-1.5 text-[11px] font-medium">
              {product.cardStatus}
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <h3
            id={`product-${product.slug}`}
            className="text-lg font-semibold tracking-tight"
          >
            {product.name}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
          <Link
            href={detailHref}
            className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
          >
            View project
            <span className="sr-only"> for {product.name}</span>
            <ArrowUpRightIcon className="size-3.5" aria-hidden />
          </Link>
          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm", variant: "outline" }), "gap-1.5")}
            >
              {product.urlLabel ?? "Visit website"}
              <span className="sr-only"> for {product.name} (opens in a new tab)</span>
              <ArrowUpRightIcon className="size-3.5" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
