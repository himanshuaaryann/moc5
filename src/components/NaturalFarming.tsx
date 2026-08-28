import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const POINTS = [
  {
    title: "Natural Growing Practices",
    text: "We follow natural farming methods that work with the land, rather than against it, focusing on healthy soil and balanced crop cycles.",
  },
  {
    title: "Soil Health First",
    text: "Healthy soil is the foundation of every crop we grow. We pay close attention to soil condition across our 50 acres.",
  },
  {
    title: "Seasonal by Design",
    text: "We grow according to season, so what you receive is closer to how nature intended it to grow.",
  },
  {
    title: "Freshness From Farm to Family",
    text: "Produce is harvested with the intention of reaching you as fresh as possible, straight from our fields.",
  },
];

export default function NaturalFarming() {
  return (
    <section className="bg-sage/40 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            label="Our Philosophy"
            heading="Why Naturally Grown Food Matters"
            align="left"
            className="mx-0"
          />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-forest-900/70">
              Natural farming, to us, means growing food the way it has been grown for
              generations in Punjab — with care for the soil, respect for the seasons, and
              honesty about what the land can responsibly provide. It is not about shortcuts
              or promises; it is about consistent, responsible farming practices carried
              out every single day on our farm.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.1}>
              <div className="h-full rounded-[20px] bg-white/70 p-6">
                <h3 className="font-serif-display text-[21px] text-forest-900">{point.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-forest-900/65">{point.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
