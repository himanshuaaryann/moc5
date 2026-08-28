import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import CategoryCatalogue from "../components/CategoryCatalogue";
import Reveal from "../components/Reveal";
import { waLink, waMessages } from "../lib/whatsapp";

export default function Powders() {
  return (
    <Layout>
      <PageHero
        image="https://images.pexels.com/photos/30688214/pexels-photo-30688214.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=1300"
        label="Organic Powders"
        heading="Naturally Prepared, Close To The Source"
        subtitle="Farm-grown produce carefully dried and prepared into natural powders and spices."
      />

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[16px] leading-relaxed text-forest-900/70">
              Our powders and spices are made from farm-grown produce, carefully dried and
              prepared close to the source.
            </p>
            <a
              href={waLink(waMessages.pulses)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-forest-900 px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-forest-700"
            >
              Enquire About Powders
            </a>
          </div>
        </Reveal>
      </section>

      <CategoryCatalogue category="powder" />
    </Layout>
  );
}