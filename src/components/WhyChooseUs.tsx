import { Leaf, Sprout, CalendarDays, Recycle, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: Leaf,
    title: "Naturally Grown",
    text: "Produce grown with care and natural farming practices.",
  },
  {
    icon: Sprout,
    title: "Farm Fresh",
    text: "Produce sourced directly from our own farm.",
  },
  {
    icon: CalendarDays,
    title: "Seasonal Produce",
    text: "Products based around what is naturally available.",
  },
  {
    icon: Recycle,
    title: "Sustainable Farming",
    text: "Responsible farming practices with respect for the land.",
  },
  {
    icon: Award,
    title: "Years of Experience",
    text: "An established farming business with years of hands-on farming experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-forest-950 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading label="Our Promise" heading="Why Choose Mann Organiculture?" light />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-[20px] border border-cream/12 bg-cream/[0.04] p-7 transition-colors hover:bg-cream/[0.08]">
                <item.icon className="h-8 w-8 text-gold" strokeWidth={1.4} />
                <h3 className="font-serif-display mt-5 text-[22px] text-cream">{item.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-cream/65">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
