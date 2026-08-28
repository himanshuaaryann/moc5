import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { waLink, waMessages, ADDRESS, PHONE_DISPLAY, PHONE_TEL, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../lib/whatsapp";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Vegetables", to: "/vegetables" },
  { label: "Fruits", to: "/fruits" },
  { label: "Pulses", to: "/pulses" },
  { label: "Farm Plots", to: "/farm-plots" },
  { label: "About Us", to: "/about" },
  { label: "Our Farm", to: "/our-farm" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream/90">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/40 font-serif-display text-lg">
                M
              </span>
              <span className="font-serif-display text-2xl">Mann Organiculture</span>
            </div>
            <p className="mt-5 font-serif-display text-xl italic text-gold">
              Pure by Nature. Grown with Care.
            </p>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-cream/70">
              An established farming business in Punjab, growing seasonal vegetables, fruits
              and pulses with years of hands-on experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#20D66B] px-5 py-2.5 text-[14px] font-semibold text-forest-950"
              >
                WhatsApp Us
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-full border border-cream/30 px-5 py-2.5 text-[14px] font-medium text-cream hover:bg-cream/10"
              >
                Call Us
              </a>
            </div>
          </div>

          <div>
            <h4 className="label-tag text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    state={{ pageTransition: true }}
                    className="text-[15px] text-cream/75 hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-tag text-gold">Contact</h4>
            <ul className="mt-5 space-y-4 text-[15px] text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="h-4 w-4 shrink-0 text-gold" />
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-7 text-[13px] text-cream/55 sm:flex-row">
          <p>© 2026 Mann Organiculture. All rights reserved.</p>
          <Link to="/admin/login" state={{ pageTransition: true }} className="hover:text-cream/80">
            Admin Panel
          </Link>
        </div>
      </div>
    </footer>
  );
}
