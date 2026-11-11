import BlurFade from "@/components/magicui/blur-fade";
import { ProductCard } from "@/components/cards/product-card";
import { SectionHeading } from "@/components/section/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { getFeaturedShippedProducts, getShippedProducts } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

export default function ShippedProductsSection() {
  const products = getFeaturedShippedProducts();
  const total = getShippedProducts().length;

  return (
    <div className="flex w-full min-w-0 flex-col gap-y-8">
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <SectionHeading
          label="Shipped Products"
          title="Products and features I've delivered"
          description="What each product does, who it serves, what I contributed and what was delivered. Professional team work and independently built products are labelled separately."
        />
      </BlurFade>
      <ul aria-label="Shipped products" className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {products.map((product) => (
          <li key={product.slug} className="min-w-0">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {total > 0 && (
        <div className="flex justify-center">
          <Link
            href="/products"
            className={cn(buttonVariants({ variant: "outline" }), "gap-1.5")}
          >
            View all shipped products ({total})
            <ArrowRightIcon className="size-4" aria-hidden />
          </Link>
        </div>
      )}
    </div>
  );
}
