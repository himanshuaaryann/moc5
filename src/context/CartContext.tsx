import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { useProducts } from "./ProductsContext";
import type { Product } from "../data/products";

export interface CartLine {
  product: Product;
  quantity: number;
  rate: number | null;
  unit: string;
}

interface CartContextValue {
  cartLines: CartLine[];
  itemCount: number;
  total: number;
  hasUnavailableRates: boolean;
  getQuantity: (productId: string) => number;
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  removeProduct: (productId: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const { products, getRate } = useProducts();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const getQuantity = (productId: string) => quantities[productId] ?? 0;

  const getQuantityStep = (productId: string) =>
    products.find((product) => product.id === productId)?.quantityStep ?? 1;

  const addItem = (productId: string) => {
    const step = getQuantityStep(productId);
    setQuantities((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + step,
    }));
  };

  const removeItem = (productId: string) => {
    const step = getQuantityStep(productId);
    setQuantities((current) => {
      const nextQuantity = (current[productId] ?? 0) - step;
      if (nextQuantity <= 0) {
        const { [productId]: _, ...remaining } = current;
        return remaining;
      }
      return { ...current, [productId]: nextQuantity };
    });
  };

  const removeProduct = (productId: string) => {
    setQuantities((current) => {
      const { [productId]: _, ...remaining } = current;
      return remaining;
    });
  };

  const clearCart = () => setQuantities({});

  const cartLines = useMemo(
    () =>
      products
        .filter((product) => (quantities[product.id] ?? 0) > 0)
        .map((product) => {
          const rateEntry = getRate(product.id);
          return {
            product,
            quantity: quantities[product.id],
            rate: rateEntry?.rate ?? null,
            unit: rateEntry?.unit || product.unit,
          };
        }),
    [getRate, products, quantities]
  );

  const itemCount = cartLines.reduce((count, line) => count + line.quantity, 0);
  const hasUnavailableRates = cartLines.some((line) => line.rate == null);
  const total = cartLines.reduce(
    (sum, line) =>
      sum +
      (line.rate == null
        ? 0
        : line.rate * (line.quantity / (line.product.quantityStep ?? 1))),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartLines,
        itemCount,
        total,
        hasUnavailableRates,
        getQuantity,
        addItem,
        removeItem,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
