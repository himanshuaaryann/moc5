import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CARDS = [
  {
    number: "01",
    title: "Organic Vegetables",
    description: "Fresh seasonal vegetables grown at Mann Organiculture.",
    cta: "Explore Vegetables",
    to: "/vegetables",
    image:
      "https://images.pexels.com/photos/18121431/pexels-photo-18121431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=900",
  },
  {
    number: "02",
    title: "Organic Fruits",
    description: "Seasonal fruits grown and harvested from our farm.",
    cta: "Explore Fruits",
    to: "/fruits",
    image:
      "/pexels-mrcoolhitman-38008357.jpg",
  },
  {
    number: "03",
    title: "Organic Pulses",
    description: "Farm-grown pulses including chana, dal and other seasonal produce.",
    cta: "Explore Pulses",
    to: "/pulses",
    image:
      "/pexels-enginakyurt-10111851.jpg",
  },
  {
    number: "04",
    title: "Organic Grains",
    description: "Wholesome grains including wheat and seasonal corn from our farm.",
    cta: "Explore Grains",
    to: "/grains",
    image:
      "/pexels-alleksana-4224259.jpg",
  },
  {
    number: "05",
    title: "Organic Powders",
    description:
      "Natural powders and spices made from farm-grown produce, carefully dried and prepared close to the source.",
    cta: "Explore Powders",
    to: "/powders",
    image:
      "https://images.pexels.com/photos/30688214/pexels-photo-30688214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=900",
  },
  {
    number: "06",
    title: "Rent Your Own Farm Plot",
    description: "Grow your own vegetables, fruits or kitchen garden on a plot at our farm.",
    cta: "Explore Farm Plots",
    to: "/farm-plots",
    image:
      "/WhatsApp Image 2026-08-24 at 3.10.13 PM.png",
  },
];

export default function LookingForSection() {
  return (
    <section className="bg-offwhite px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading label="Start Here" heading="What Are You Looking For?" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.to} delay={i * 0.1}>
              <Link
                to={card.to}
                className="group relative flex h-[420px] flex-col justify-end overflow-hidden rounded-[26px] shadow-[0_10px_30px_rgba(15,47,33,0.12)]"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/35 to-transparent" />
                <span className="absolute right-5 top-5 font-serif-display text-2xl text-cream/60">
                  {card.number}
                </span>
                <div className="relative z-10 p-6">
                  <h3 className="font-serif-display text-[26px] leading-tight text-cream">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-cream/75">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-wide text-gold">
                    {card.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
