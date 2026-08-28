import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="bg-cream px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="label-tag">Our Story</span>
          <h2 className="font-serif-display mt-4 text-[36px] leading-[1.1] text-forest-900 sm:text-[48px]">
            From Our Farm to Your Family
          </h2>
          <p className="mt-6 text-[16px] leading-relaxed text-forest-900/70">
            Mann Organiculture is an established farming business rooted in Salodi, Punjab,
            with years of hands-on farming experience. The farm grows seasonal
            vegetables, fruits and pulses while also offering families the opportunity to
            grow their own food through rented farm plots.
          </p>
          <p className="mt-4 text-[16px] leading-relaxed text-forest-900/70">
            Spread across 50 acres, our farm is part of Punjab's long-standing agricultural
            ecosystem — a place where land, seasons and tradition continue to shape the way
            we grow.
          </p>
          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <p className="font-serif-display text-4xl text-forest-900">50</p>
              <p className="mt-1 text-[13px] uppercase tracking-wide text-forest-900/55">
                Acre Farm
              </p>
            </div>
            <div>
              <p className="font-serif-display text-4xl text-forest-900">Years</p>
              <p className="mt-1 text-[13px] uppercase tracking-wide text-forest-900/55">
                Of Farming Experience
              </p>
            </div>
            <div>
              <p className="font-serif-display text-4xl text-forest-900">Salodi</p>
              <p className="mt-1 text-[13px] uppercase tracking-wide text-forest-900/55">
                Punjab, India
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <img
              src="/WhatsApp Image 2026-08-21 at 2.27.01 PM.png"
              alt="Farmer holding freshly harvested radishes in a field"
              className="h-[420px] w-full rounded-[20px] object-cover sm:h-[520px]"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
