import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import NaturalFarming from "../components/NaturalFarming";
import Gallery from "../components/Gallery";
import VisitFarm from "../components/VisitFarm";

const STEPS = [
  {
    step: "01",
    title: "Preparing the Land",
    text: "Each season begins with preparing the soil across our 50 acres, respecting the natural growing cycle of the land.",
  },
  {
    step: "02",
    title: "Planting & Growing",
    text: "Vegetables, fruits and pulses are planted according to season, with care taken at every stage of growth.",
  },
  {
    step: "03",
    title: "Tending the Fields",
    text: "Our farm team tends to the fields daily — watering, weeding and monitoring crop health.",
  },
  {
    step: "04",
    title: "Harvesting",
    text: "Produce is harvested when ready, so that it reaches you as close to its natural state as possible.",
  },
];

export default function OurFarm() {
  return (
    <Layout>
      <PageHero
        image="/pexels-sanket-sawale-62949595-29536718%20(1)%20(1)%20(1)%20(1)%20(1)%20(1).png"
        label="Our Farm"
        heading="50 Acres in Salodi, Punjab"
        subtitle="A working farm rooted in tradition, land and years of hands-on experience."
      />

      <section className="bg-cream px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            label="How We Farm"
            heading="Our Farming Process"
            subtitle="From soil to harvest, every step is carried out with attention to the land and the season."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1}>
                <div className="h-full rounded-[20px] bg-white p-7">
                  <span className="font-serif-display text-3xl text-gold">{s.step}</span>
                  <h3 className="font-serif-display mt-4 text-[21px] text-forest-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-forest-900/65">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NaturalFarming />
      <Gallery />
      <VisitFarm />
    </Layout>
  );
}
