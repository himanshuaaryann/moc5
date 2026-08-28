import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "../data/products";
import { getFeaturedByCategory } from "../data/products";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function FeaturedSection({
  category,
  label,
  heading,
  subtitle,
  viewAllTo,
  viewAllLabel,
  tint = "cream",
}: {
  category: ProductCategory;
  label: string;
  heading: string;
  subtitle: string;
  viewAllTo: string;
  viewAllLabel: string;
  tint?: "cream" | "sage" | "offwhite";
}) {
  const products = getFeaturedByCategory(category);
  const bg = tint === "sage" ? "bg-sage/50" : tint === "offwhite" ? "bg-offwhite" : "bg-cream";

  return (
    <section className={cn("px-5 py-24 sm:px-8 lg:px-12", bg)}>
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading label={label} heading={heading} subtitle={subtitle} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Link
              to={viewAllTo}
              className="inline-flex items-center gap-2 rounded-full border border-forest-900/25 px-7 py-3.5 text-[15px] font-semibold text-forest-900 transition-colors hover:bg-forest-900 hover:text-cream"
            >
              {viewAllLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
