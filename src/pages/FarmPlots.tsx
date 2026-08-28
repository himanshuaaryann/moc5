import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { ArrowRight, HandHeart, Leaf, Users, Sprout } from "lucide-react";
import { waLink, waMessages } from "../lib/whatsapp";

const BENEFITS = [
  {
    icon: Sprout,
    title: "Grow Your Own Vegetables",
    text: "Plant and grow seasonal vegetables on your own plot, at your own pace.",
  },
  {
    icon: Leaf,
    title: "Grow Fruits & Kitchen Gardens",
    text: "Set up a kitchen garden or grow fruit-bearing plants suited to the season.",
  },
  {
    icon: Users,
    title: "Spend Time on the Farm",
    text: "Bring your family and experience real farm life across our 50-acre land.",
  },
  {
    icon: HandHeart,
    title: "Guided Farming Experience",
    text: "Learn hands-on farming with support available whenever you need it.",
  },
];

export default function FarmPlots() {
  return (
    <Layout>
      <PageHero
        image="/WhatsApp Image 2026-08-24 at 3.10.13 PM.png"
        label="Farm Plots · 50-Acre Farm"
        heading="Grow Your Own Food."
        subtitle="Your own piece of the farm. Your own kitchen garden. Your own harvest."
      />

      <section className="bg-cream px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <SectionHeading
            label="Farm Plot Rentals"
            heading="A Piece of Our 50-Acre Farm, For You"
            subtitle="Mann Organiculture offers farm plots for families and individuals who want to grow their own vegetables, fruits or kitchen garden — and experience real farming on real land."
          />

          <div className="mt-12 border-y border-gold/30 py-8 sm:py-10">
            <p className="label-tag">Rent Your Own Farm Plot</p>
            <h3 className="font-serif-display mt-3 text-[28px] text-forest-900 sm:text-[34px]">
              Available Plot Sizes
            </h3>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {['1 Biswa', '2 Biswas', 'Larger Plots'].map((size) => (
                <div
                  key={size}
                  className="flex min-h-[92px] items-center justify-center rounded-[16px] border border-gold/60 bg-white px-4 py-5 text-center shadow-[0_6px_20px_rgba(15,47,33,0.05)]"
                >
                  <span className="font-serif-display text-[25px] font-semibold uppercase leading-tight text-forest-900 sm:text-[28px]">
                    {size}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="h-full rounded-[20px] bg-white p-7 shadow-[0_6px_24px_rgba(15,47,33,0.06)]">
                  <b.icon className="h-8 w-8 text-forest-700" strokeWidth={1.4} />
                  <h3 className="font-serif-display mt-5 text-[21px] text-forest-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-forest-900/65">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-950 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/14007005/pexels-photo-14007005.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1300"
              alt="Farm helper assisting with a kitchen garden plot"
              className="h-[380px] w-full rounded-[26px] object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="label-tag">Support On Site</span>
            <h2 className="font-serif-display mt-4 text-[34px] leading-[1.15] text-cream sm:text-[44px]">
              Need a Helping Hand?
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-cream/75">
              Our farm helpers can assist and guide you with farming activities, planting,
              maintenance and day-to-day work on your plot. Whether you are new to farming
              or simply need occasional support, help is available on the farm.
            </p>
            <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-cream/50">
              Exact plot sizes, availability and rental terms are discussed directly — reach
              out to us on WhatsApp or by phone to know current details.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink(waMessages.farmPlots)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[15px] font-semibold text-forest-950"
              >
                Enquire About Farm Plots
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={waLink(waMessages.farmPlots)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-[15px] font-semibold text-cream hover:bg-cream/10"
              >
                WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
