import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ShieldCheck } from "lucide-react";
import { cn } from "../utils/cn";
import { waLink, waMessages } from "../lib/whatsapp";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Vegetables", to: "/vegetables" },
  { label: "Fruits", to: "/fruits" },
  { label: "Pulses", to: "/pulses" },
  { label: "Farm Plots", to: "/farm-plots" },
  { label: "About Us", to: "/about" },
  { label: "Our Farm", to: "/our-farm" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        solid ? "bg-offwhite/95 shadow-[0_2px_24px_rgba(15,47,33,0.08)] backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="flex items-center gap-2.5 pr-2 sm:pr-4">
          <img
            src="/mann-organiculture-logo.png"
            alt="Mann Organiculture logo"
            className="h-10 w-10 shrink-0 scale-[1.06] rounded-full object-cover sm:h-12 sm:w-12"
          />
          <span
            className={cn(
              "font-serif-display text-[20px] leading-none tracking-wide sm:text-[22px]",
              solid ? "text-forest-900" : "text-cream"
            )}
          >
            Mann Organiculture
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              state={{ pageTransition: true }}
              className={({ isActive }) =>
                cn(
                  "relative text-[15px] font-medium tracking-wide transition-colors",
                  solid ? "text-forest-900/80 hover:text-forest-900" : "text-cream/85 hover:text-cream",
                  isActive && (solid ? "text-forest-900" : "text-cream")
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to="/admin/login"
            className={cn(
              "flex items-center gap-1.5 text-[13px] font-medium opacity-70 transition-opacity hover:opacity-100",
              solid ? "text-forest-900" : "text-cream"
            )}
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Admin Panel
          </Link>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest-900 px-5 py-2.5 text-[14px] font-medium text-cream transition-colors hover:bg-forest-700"
          >
            WhatsApp / Enquire
          </a>
        </div>

        <button
          className={cn("lg:hidden", solid ? "text-forest-900" : "text-cream")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-forest-900/10 bg-offwhite px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                state={{ pageTransition: true }}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-[16px] font-medium text-forest-900/85",
                    isActive && "bg-sage/60 text-forest-900"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/admin/login"
              className="mt-2 flex items-center gap-1.5 px-3 py-2 text-[13px] text-forest-900/60"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> Admin Panel
            </Link>
          </nav>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-forest-900 px-5 py-3.5 text-center text-[15px] font-medium text-cream"
          >
            WhatsApp / Enquire
          </a>
        </div>
      )}
    </header>
  );
}
