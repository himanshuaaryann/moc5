import { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { waLink } from "../lib/whatsapp";

const formatPrice = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export default function CartDrawer() {
  const {
    cartLines,
    itemCount,
    total,
    hasUnavailableRates,
    addItem,
    removeItem,
    removeProduct,
    clearCart,
  } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const orderMessage = [
    "Hello Mann Organiculture, I would like to place an order:",
    "",
    ...cartLines.map((line) => {
      const quantityStep = line.product.quantityStep ?? 1;
      const lineTotal = line.rate == null
        ? "Rate on enquiry"
        : formatPrice(line.rate * (line.quantity / quantityStep));
      const rate = line.rate == null ? "Rate on enquiry" : `${formatPrice(line.rate)} / ${line.unit}`;
      return `${line.product.name} — ${line.quantity} kg × ${rate} = ${lineTotal}`;
    }),
    "",
    `Total: ${hasUnavailableRates ? "Rate on enquiry" : formatPrice(total)}`,
    "",
    "Please confirm availability and delivery details.",
  ].join("\n");
  return (
    <>
      {itemCount > 0 && (
        <>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="fixed bottom-24 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-forest-900 px-5 py-3 text-[14px] font-semibold text-cream shadow-[0_8px_24px_rgba(15,47,33,0.24)] transition-transform hover:-translate-y-0.5 hover:bg-forest-700 sm:right-8"
            aria-label={`Open cart with ${itemCount} items`}
          >
            <ShoppingCart className="h-4 w-4" />
            Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
          </button>
        </>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-forest-950/35 sm:p-5" onClick={() => setIsOpen(false)}>
          <aside
            className="flex max-h-[90vh] w-full flex-col rounded-t-[24px] bg-cream shadow-[0_18px_60px_rgba(15,47,33,0.28)] sm:max-w-[440px] sm:rounded-[24px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-forest-900/10 px-5 py-4 sm:px-6">
              <div>
                <p className="label-tag">Your Order</p>
                <h2 id="cart-title" className="font-serif-display mt-1 text-[28px] text-forest-900">
                  Cart ({itemCount})
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-forest-900/65 hover:bg-forest-900/8 hover:text-forest-900"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-4 sm:px-6">
              {cartLines.length === 0 ? (
                <p className="py-10 text-center text-[15px] text-forest-900/55">Your cart is empty.</p>
              ) : (
                <div className="space-y-3">
                  {cartLines.map((line) => (
                    <div key={line.product.id} className="border-b border-forest-900/10 pb-3 last:border-0">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="font-serif-display text-[21px] leading-tight text-forest-900">
                            {line.product.name}
                          </h3>
                          <p className="mt-1 text-[13px] text-forest-900/60">
                            {line.rate == null ? "Rate on enquiry" : `${formatPrice(line.rate)} / ${line.unit}`}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeProduct(line.product.id)}
                          className="shrink-0 rounded-full p-1.5 text-forest-900/45 hover:bg-forest-900/8 hover:text-forest-900"
                          aria-label={`Remove ${line.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <div className="inline-flex items-center rounded-full border border-forest-900/20">
                          <button
                            type="button"
                            onClick={() => removeItem(line.product.id)}
                            className="p-2 text-forest-900/70 hover:text-forest-900"
                            aria-label={`Decrease ${line.product.name} quantity`}
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="min-w-[58px] text-center text-[13px] font-semibold text-forest-900">
                            {line.quantity} kg
                          </span>
                          <button
                            type="button"
                            onClick={() => addItem(line.product.id)}
                            className="p-2 text-forest-900/70 hover:text-forest-900"
                            aria-label={`Increase ${line.product.name} quantity`}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-serif-display text-[20px] text-forest-900">
                          {line.rate == null
                            ? "Rate on enquiry"
                            : formatPrice(line.rate * (line.quantity / (line.product.quantityStep ?? 1)))}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartLines.length > 0 && (
              <div className="border-t border-forest-900/10 px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[14px] font-medium text-forest-900/65">Grand total</span>
                  <span className="font-serif-display text-[24px] text-forest-900">
                    {hasUnavailableRates ? "Rate on enquiry" : formatPrice(total)}
                  </span>
                </div>
                <a
                  href={waLink(orderMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#20D66B] px-5 py-3.5 text-[14px] font-semibold text-forest-950 hover:bg-[#35e47d]"
                >
                  Place Order on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={clearCart}
                  className="mt-3 inline-flex w-full items-center justify-center text-[13px] font-medium text-forest-900/55 hover:text-forest-900"
                >
                  Clear cart
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
