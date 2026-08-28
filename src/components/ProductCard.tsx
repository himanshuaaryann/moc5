import { ArrowRight } from "lucide-react";
import type { Product } from "../data/products";
import { useProducts } from "../context/ProductsContext";
import { waLink, waMessages } from "../lib/whatsapp";
import { cn } from "../utils/cn";
import { useCart } from "../context/CartContext";

const STATUS_STYLE: Record<string, string> = {
  AVAILABLE: "bg-forest-900 text-cream",
  SEASONAL: "bg-gold text-forest-950",
  COMING_SOON: "bg-sage text-forest-900",
  UNAVAILABLE: "bg-beige text-forest-900/60",
};

const STATUS_TEXT: Record<string, string> = {
  AVAILABLE: "Available Now",
  SEASONAL: "Seasonal",
  COMING_SOON: "Coming Soon",
  UNAVAILABLE: "Not Currently Available",
};

export default function ProductCard({ product }: { product: Product }) {
  const { getRate } = useProducts();
  const { getQuantity, addItem, removeItem } = useCart();
  const rateEntry = getRate(product.id);
  const quantity = getQuantity(product.id);
  const quantityStep = product.quantityStep ?? 1;

  return (
    <div className="group flex flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_6px_28px_rgba(15,47,33,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,47,33,0.14)]">
      <div className="relative h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
            STATUS_STYLE[product.status]
          )}
        >
          {STATUS_TEXT[product.status]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif-display text-[26px] leading-tight text-forest-900">
            {product.name}
          </h3>
          {rateEntry && rateEntry.rate ? (
            <span className="whitespace-nowrap font-serif-display text-xl text-forest-900">
              ₹{rateEntry.rate}{" "}
              <span className="font-sans text-[13px] font-medium text-forest-900/55">
                / {rateEntry.unit || product.unit}
              </span>
            </span>
          ) : null}
        </div>
        {product.seasonInfo && (
          <p className="mt-1 text-[12px] font-medium uppercase tracking-wider text-forest-700/70">
            {product.seasonInfo}
          </p>
        )}
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-forest-900/65">
          {product.description}
        </p>

        {!rateEntry?.rate && (
          <div className="mt-5 flex items-center justify-between border-t border-beige pt-4">
            <span className="text-[13px] text-forest-900/45">Rate on enquiry</span>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-[13px] font-medium text-forest-900/60">
            {quantity > 0 ? `${quantity} kg selected` : "Add to cart"}
          </span>
          <div className="inline-flex shrink-0 items-center rounded-full border border-forest-900/20">
            <button
              type="button"
              onClick={() => removeItem(product.id)}
              disabled={quantity === 0}
              className="p-2 text-forest-900/70 transition-colors hover:text-forest-900 disabled:cursor-not-allowed disabled:opacity-35"
              aria-label={`Decrease ${product.name} quantity`}
            >
              <span aria-hidden="true" className="text-[17px] leading-none">−</span>
            </button>
            <span className="min-w-[30px] text-center text-[13px] font-semibold text-forest-900">
              {quantity / quantityStep}
            </span>
            <button
              type="button"
              onClick={() => addItem(product.id)}
              className="p-2 text-forest-900/70 transition-colors hover:text-forest-900"
              aria-label={`Increase ${product.name} quantity`}
            >
              <span aria-hidden="true" className="text-[17px] leading-none">+</span>
            </button>
          </div>
        </div>

        <a
          href={waLink(waMessages.product(product.name))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-forest-900 transition-colors hover:text-[#159a4f]"
        >
          Enquire on WhatsApp
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
