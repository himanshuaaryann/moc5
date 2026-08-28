import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Save, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductsContext";
import { PRODUCTS, type ProductCategory } from "../../data/products";

interface RowState {
  rate: string;
  unit: string;
}

const CATEGORY_LABEL: Record<ProductCategory, string> = {
  vegetable: "Vegetables",
  fruit: "Fruits",
  pulse: "Pulses & Other Produce",
};

export default function AdminDashboard() {
  const { logout } = useAuth();
  const { getRate, saveAll } = useProducts();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const [rows, setRows] = useState<Record<string, RowState>>(() => {
    const initial: Record<string, RowState> = {};
    PRODUCTS.forEach((p) => {
      const existing = getRate(p.id);
      initial[p.id] = {
        rate: existing?.rate != null ? String(existing.rate) : "",
        unit: existing?.unit || p.unit,
      };
    });
    return initial;
  });

  const grouped = useMemo(() => {
    const map: Record<ProductCategory, typeof PRODUCTS> = {
      vegetable: [],
      fruit: [],
      pulse: [],
    };
    PRODUCTS.forEach((p) => map[p.category].push(p));
    return map;
  }, []);

  const updateRow = (id: string, field: keyof RowState, value: string) => {
    setRows((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  };

  const handleSave = () => {
    const updates: Record<string, { rate: number | null; unit: string }> = {};
    Object.entries(rows).forEach(([id, val]) => {
      const num = val.rate.trim() === "" ? null : Number(val.rate);
      updates[id] = { rate: Number.isNaN(num) ? null : num, unit: val.unit };
    });
    saveAll(updates);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-offwhite">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-forest-900/10 bg-cream px-6 py-4 sm:px-10">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest-900 text-cream">
            <ShieldCheck className="h-4.5 w-4.5" />
          </span>
          <h1 className="font-serif-display text-[22px] text-forest-900">
            Mann Organiculture Admin
          </h1>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="hidden items-center gap-1.5 text-[13px] text-[#159a4f] sm:flex">
              <CheckCircle2 className="h-4 w-4" /> Saved
            </span>
          )}
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-full bg-forest-900 px-5 py-2.5 text-[14px] font-semibold text-cream hover:bg-forest-700"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-forest-900/25 px-5 py-2.5 text-[14px] font-medium text-forest-900 hover:bg-forest-900/5"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-5 py-10 sm:px-8">
        <p className="text-[14px] text-forest-900/60">
          Update rates for each product below. Leave the rate blank to show
          <span className="font-medium text-forest-900"> “Rate on enquiry” </span>
          on the website instead of a price.
        </p>

        {(Object.keys(grouped) as ProductCategory[]).map((cat) => (
          <section key={cat} className="mt-10">
            <h2 className="label-tag">{CATEGORY_LABEL[cat]}</h2>
            <div className="mt-4 overflow-hidden rounded-[18px] border border-forest-900/10 bg-white">
              <table className="w-full text-left text-[14px]">
                <thead className="bg-sage/40 text-forest-900/70">
                  <tr>
                    <th className="px-5 py-3 font-medium">Product Name</th>
                    <th className="px-5 py-3 font-medium">Rate (₹)</th>
                    <th className="px-5 py-3 font-medium">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {grouped[cat].map((p) => (
                    <tr key={p.id} className="border-t border-forest-900/8">
                      <td className="px-5 py-3.5 font-medium text-forest-900">{p.name}</td>
                      <td className="px-5 py-3.5">
                        <input
                          type="number"
                          min={0}
                          value={rows[p.id]?.rate ?? ""}
                          onChange={(e) => updateRow(p.id, "rate", e.target.value)}
                          placeholder="e.g. 50"
                          className="w-28 rounded-lg border border-forest-900/15 px-3 py-2 focus:border-forest-700 focus:outline-none"
                        />
                      </td>
                      <td className="px-5 py-3.5">
                        <input
                          value={rows[p.id]?.unit ?? p.unit}
                          onChange={(e) => updateRow(p.id, "unit", e.target.value)}
                          placeholder="kg"
                          className="w-24 rounded-lg border border-forest-900/15 px-3 py-2 focus:border-forest-700 focus:outline-none"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        <div className="mt-10 flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-[15px] font-semibold text-cream hover:bg-forest-700"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </main>
    </div>
  );
}
