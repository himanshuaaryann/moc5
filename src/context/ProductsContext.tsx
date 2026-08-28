import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { PRODUCTS, type Product } from "../data/products";

interface RateEntry {
  rate: number | null;
  unit: string;
}

type RateMap = Record<string, RateEntry>;

const DEFAULT_RATES: RateMap = {
  "veg-potato": { rate: 35, unit: "kg" },
  "veg-tomato": { rate: 30, unit: "kg" },
  "veg-bhindi": { rate: 45, unit: "kg" },
  "veg-cauliflower": { rate: 50, unit: "kg" },
  "veg-carrot": { rate: 60, unit: "kg" },
  "veg-broccoli": { rate: 100, unit: "kg" },
  "fruit-apple": { rate: 200, unit: "kg" },
  "fruit-mango": { rate: 250, unit: "kg" },
  "fruit-pomegranate": { rate: 350, unit: "kg" },
  "fruit-grapes": { rate: 200, unit: "kg" },
  "pulse-black-chana": { rate: 190, unit: "kg" },
  "pulse-white-chana": { rate: 220, unit: "kg" },
  "pulse-masoor-dal": { rate: 180, unit: "kg" },
  "pulse-turmeric": { rate: 500, unit: "kg" },
  "pulse-moringa": { rate: 1200, unit: "kg" },
  "grain-wheat": { rate: 450, unit: "10 KG" },
  "grain-corn": { rate: 90, unit: "KG" },
  "grain-rice": { rate: 95, unit: "KG" },
};

const STORAGE_KEY = "mann_org_rates_v1";

function loadRates(): RateMap {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as RateMap;
  } catch {
    return {};
  }
}

interface ProductsContextValue {
  products: Product[];
  getRate: (id: string) => RateEntry | undefined;
  setRate: (id: string, rate: number | null, unit: string) => void;
  saveAll: (updates: Record<string, RateEntry>) => void;
}

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [rates, setRates] = useState<RateMap>(() => loadRates());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rates));
  }, [rates]);

  const products = useMemo(() => PRODUCTS, []);

  const getRate = (id: string) => rates[id] ?? DEFAULT_RATES[id];

  const setRate = (id: string, rate: number | null, unit: string) => {
    setRates((prev) => ({ ...prev, [id]: { rate, unit } }));
  };

  const saveAll = (updates: Record<string, RateEntry>) => {
    setRates((prev) => ({ ...prev, ...updates }));
  };

  return (
    <ProductsContext.Provider value={{ products, getRate, setRate, saveAll }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductsContext);
  if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
  return ctx;
}
