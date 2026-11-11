import BlurFade from "@/components/magicui/blur-fade";
import { ProductCard } from "@/components/cards/product-card";
import { DraftPreviewNotice } from "@/components/cards/draft-badge";
import { SectionHeading } from "@/components/section/section-heading";
import { getShippedProducts } from "@/lib/content";

const BLUR_FADE_DELAY = 0.04;

export default function ShippedProductsSection() {
  const products = getShippedProducts();

  return (
    <div className="flex min-h-0 flex-col gap-y-8">
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <SectionHeading
          label="Shipped Products"
          title="Products and features I've delivered"
          description="What each product does, who it serves, what I contributed and what was delivered. Professional team work and independently built products are labelled separately."
        />
      </BlurFade>
      <DraftPreviewNotice show={products.some((p) => p.status === "draft")} />
      <ul className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
        {products.map((product, i) => (
          <li key={product.slug} className="h-full">
            <BlurFade delay={BLUR_FADE_DELAY * 5 + i * 0.05} className="h-full">
              <ProductCard product={product} />
            </BlurFade>
          </li>
        ))}
      </ul>
    </div>
  );
}
