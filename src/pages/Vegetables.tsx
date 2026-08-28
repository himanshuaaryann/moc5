import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import CategoryCatalogue from "../components/CategoryCatalogue";
import Reveal from "../components/Reveal";
import { waLink, waMessages } from "../lib/whatsapp";

export default function Vegetables() {
  return (
    <Layout>
      <PageHero
        image="https://images.pexels.com/photos/18121431/pexels-photo-18121431.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=2000"
        label="Vegetables"
        heading="Fresh From Our Fields"
        subtitle="Seasonal vegetables, naturally grown and harvested with care."
      />

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[16px] leading-relaxed text-forest-900/70">
              Our vegetable catalogue reflects what is actually growing on our 50-acre farm
              at any given time. Availability changes with the seasons — some vegetables are
              harvested year-round, while others follow the natural rhythm of Punjab's
              growing calendar.
            </p>
            <a
              href={waLink(waMessages.vegetables)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-forest-900 px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-forest-700"
            >
              Enquire About Vegetables
            </a>
          </div>
        </Reveal>
      </section>

      <CategoryCatalogue category="vegetable" />
    </Layout>
  );
}
