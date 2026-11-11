import { ProductCard } from "@/components/cards/product-card";
import { BackLink } from "@/components/detail-layout";
import BlurFade from "@/components/magicui/blur-fade";
import { getShippedProducts } from "@/lib/content";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

const description =
  "Shipped products by Eric Babu, a Product Owner: what each product does, who it serves, what he contributed and what was delivered.";

export const metadata: Metadata = {
  title: "Shipped Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: { title: "Shipped Products", description },
  twitter: { card: "summary_large_image", title: "Shipped Products", description },
};

export default function ProductsPage() {
  const products = getShippedProducts();

  return (
    <div className="flex flex-col gap-8">
      <div className="mx-auto w-full max-w-3xl">
        <BackLink href="/#shipped-products">Back to home</BackLink>
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="mb-2 text-3xl font-semibold tracking-tighter md:text-4xl">
            Shipped Products
          </h1>
          <p className="max-w-2xl text-muted-foreground text-pretty">
            What each product does, who it serves, what I contributed and what
            was delivered. Professional team work and independently built
            products are labelled separately.
          </p>
        </BlurFade>
      </div>

      <ul className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2">
        {products.map((product, i) => (
          <li key={product.slug} className="h-full">
            <BlurFade delay={BLUR_FADE_DELAY * 2 + i * 0.05} className="h-full">
              <ProductCard product={product} />
            </BlurFade>
          </li>
        ))}
      </ul>
    </div>
  );
}
