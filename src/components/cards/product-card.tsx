import { LogoBadge } from "@/components/logo-badge";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import type { ShippedProduct } from "@/data/types";
import { DELIVERY_LABELS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ArrowUpRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import { Cover } from "./cover";

/** Short, plain-English access line shown under the status. */
export function accessLine(product: ShippedProduct) {
  return product.accessNote ?? null;
}

export function ProductCard({ product }: { product: ShippedProduct }) {
  const detailHref = `/products/${product.slug}`;
  const access = accessLine(product);

  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow duration-200 hover:ring-2 hover:ring-muted"
      aria-labelledby={`product-${product.slug}`}
    >
      <Cover
        cover={product.cover}
        video={product.mediaVideo}
        illustration={product.illustration}
        icon={product.coverIcon}
        label={product.coverLabel}
      />
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        {product.logo && (
          <div className="flex items-center gap-2.5">
            <LogoBadge src={product.logo} alt="" size="sm" />
            <span className="text-sm font-medium text-muted-foreground">
              {product.company}
            </span>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{product.contextLabel}</Badge>
          <Badge variant="outline">{DELIVERY_LABELS[product.delivery]}</Badge>
        </div>

        <div className="flex flex-col gap-2">
          <h3
            id={`product-${product.slug}`}
            className="text-lg font-semibold tracking-tight"
          >
            {product.name}
          </h3>
          {product.tagline && (
            <p className="text-sm font-medium text-foreground">{product.tagline}</p>
          )}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {product.summary}
          </p>
        </div>

        <dl className="grid gap-3 text-sm">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Status
            </dt>
            <dd>
              {product.releaseStatus}
              {access && (
                <span className="text-muted-foreground"> · {access}</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              My role
            </dt>
            <dd className="leading-relaxed">{product.role}</dd>
          </div>
        </dl>

        {product.highlight && (
          <div className="rounded-lg border border-border bg-muted/50 px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Delivered
            </p>
            <p className="mt-1 text-sm leading-snug">{product.highlight}</p>
          </div>
        )}

        {product.highlights && product.highlights.length > 0 && (
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Highlights
            </p>
            <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-snug">
              {product.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckIcon className="mt-0.5 size-3.5 flex-none text-muted-foreground" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {product.capabilities.length > 0 && (
          <ul className="flex flex-wrap gap-1.5" aria-label="Capabilities">
            {product.capabilities.map((tag) => (
              <li key={tag}>
                <Badge variant="outline" className="h-6 px-2 text-[11px] font-medium">
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        )}

        <div
          className={cn(
            "mt-auto flex flex-wrap items-center gap-2 pt-2",
            product.urlLabel && "flex-col items-stretch sm:flex-row sm:items-center",
          )}
        >
          <Link
            href={detailHref}
            className={cn(
              buttonVariants({ size: "sm" }),
              "gap-1.5",
              product.urlLabel && "w-full sm:w-auto",
            )}
          >
            {product.detailLabel ?? "View product details"}
            <span className="sr-only"> for {product.name}</span>
            <ArrowRightIcon className="size-3.5" aria-hidden />
          </Link>
          {product.url && (
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "sm", variant: "outline" }),
                "gap-1.5",
                product.urlLabel && "w-full sm:w-auto",
              )}
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
