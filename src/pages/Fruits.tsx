import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import CategoryCatalogue from "../components/CategoryCatalogue";
import Reveal from "../components/Reveal";
import { waLink, waMessages } from "../lib/whatsapp";

export default function Fruits() {
  return (
    <Layout>
      <PageHero
        image="https://images.pexels.com/photos/28903096/pexels-photo-28903096.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
        label="Fruits"
        heading="Naturally Sweet, Fresh From The Farm"
        subtitle="Seasonal fruits harvested as they ripen naturally."
      />

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[16px] leading-relaxed text-forest-900/70">
              Fruit availability at Mann Organiculture follows the natural growing season of
              each tree. We do not force fruit availability out of season — the status shown
              on each product reflects what is genuinely available, seasonal, or upcoming.
            </p>
            <a
              href={waLink(waMessages.fruits)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-forest-900 px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-forest-700"
            >
              Enquire About Fruits
            </a>
          </div>
        </Reveal>
      </section>

      <CategoryCatalogue category="fruit" />
    </Layout>
  );
}
