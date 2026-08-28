import { useState } from "react";
import type { ProductCategory, AvailabilityStatus } from "../data/products";
import { getProductsByCategory, STATUS_LABEL } from "../data/products";
import ProductCard from "./ProductCard";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const FILTERS: (AvailabilityStatus | "ALL")[] = [
  "ALL",
  "AVAILABLE",
  "SEASONAL",
  "COMING_SOON",
];

export default function CategoryCatalogue({ category }: { category: ProductCategory }) {
  const [filter, setFilter] = useState<AvailabilityStatus | "ALL">("ALL");
  const products = getProductsByCategory(category).filter(
    (p) => filter === "ALL" || p.status === filter
  );

  return (
    <section className="bg-offwhite px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors",
                filter === f
                  ? "border-forest-900 bg-forest-900 text-cream"
                  : "border-forest-900/20 text-forest-900/70 hover:border-forest-900/50"
              )}
            >
              {f === "ALL" ? "All Products" : STATUS_LABEL[f]}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        {products.length === 0 && (
          <p className="mt-10 text-center text-forest-900/50">
            No products found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
