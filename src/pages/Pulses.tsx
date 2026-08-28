import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import CategoryCatalogue from "../components/CategoryCatalogue";
import Reveal from "../components/Reveal";
import { waLink, waMessages } from "../lib/whatsapp";

export default function Pulses() {
  return (
    <Layout>
      <PageHero
        image="/pexels-muhammed-salih-karabag-43718246-36884865.jpg"
        label="Pulses"
        heading="Wholesome Produce From Our Farm"
        subtitle="Black Chana, White Chana and Masoor Dal — grown and prepared close to the source."
      />

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[16px] leading-relaxed text-forest-900/70">
              Beyond fresh vegetables and fruits, our farm also grows pulses that are
              harvested and prepared with the same farm-first approach as everything else we
              offer.
            </p>
            <a
              href={waLink(waMessages.pulses)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-forest-900 px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-forest-700"
            >
              Enquire About Pulses
            </a>
          </div>
        </Reveal>
      </section>

      <CategoryCatalogue category="pulse" />
    </Layout>
  );
}
