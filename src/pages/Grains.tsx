import Layout from "../components/Layout";
import PageHero from "../components/PageHero";
import CategoryCatalogue from "../components/CategoryCatalogue";
import Reveal from "../components/Reveal";
import { waLink, waMessages } from "../lib/whatsapp";

export default function Grains() {
  return (
    <Layout>
      <PageHero
        image="/pexels-alleksana-4224259.jpg"
        label="Grains"
        heading="Wholesome Produce From Our Farm"
        subtitle="Wheat and seasonal corn, grown and harvested with care."
      />

      <section className="bg-cream px-5 py-14 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[16px] leading-relaxed text-forest-900/70">
              Our grains are grown with the same farm-first approach as everything else we
              offer. Wheat is available in 10 kg increments, while corn follows its natural
              seasonal availability.
            </p>
            <a
              href={waLink(waMessages.grains)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-forest-900 px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-forest-700"
            >
              Enquire About Grains
            </a>
          </div>
        </Reveal>
      </section>

      <CategoryCatalogue category="grain" />
    </Layout>
  );
}
