import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { waLink, waMessages } from "../lib/whatsapp";

export default function FarmPlotTeaser() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-[380px] overflow-hidden rounded-[26px] sm:h-[460px]">
            <img
              src="https://images.pexels.com/photos/14007005/pexels-photo-14007005.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1400"
              alt="Kitchen garden plot at Mann Organiculture"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/50 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="label-tag">Grow Your Own</span>
          <h2 className="font-serif-display mt-4 text-[36px] leading-[1.1] text-forest-900 sm:text-[48px]">
            Rent a Farm Plot on Our 50-Acre Farm
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-forest-900/70">
            Grow your own vegetables, fruits or kitchen garden with your own piece of the
            farm. Our farm helpers are available to guide and assist you with planting,
            maintenance and everyday farming activities.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/farm-plots"
              className="inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-forest-700"
            >
              Explore Farm Plots
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={waLink(waMessages.farmPlots)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-[15px] font-semibold text-gold transition-colors hover:bg-gold hover:text-forest-950"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
