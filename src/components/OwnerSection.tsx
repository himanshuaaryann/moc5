import Reveal from "./Reveal";

export default function OwnerSection() {
  return (
    <section className="bg-offwhite px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="label-tag">The Team</span>
          <h2 className="font-serif-display mt-4 max-w-2xl text-[36px] leading-[1.1] text-forest-900 sm:text-[48px]">
            The People Behind Mann Organiculture
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12">
          <div className="grid items-center gap-12 rounded-[28px] bg-cream p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px]">
                <img
                  src="/farmer.png"
                  alt="Sardar Kirpal Singh Mann"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="label-tag">Owner / Founder</p>
              <h3 className="font-serif-display mt-3 text-[30px] text-forest-900">
                Sardar Kirpal Singh Mann
              </h3>
              <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-forest-900/70">
                The founder of Mann Organiculture brings over 50 years of farming wisdom,
                dedication and hands-on experience to build a sustainable and self-reliant
                organic ecosystem.
              </p>
            </Reveal>
          </div>

          <div className="grid items-center gap-12 rounded-[28px] bg-cream p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px]">
                <img
                  src="/ChatGPT%20Image%20Aug%2019,%202026,%2002_26_15%20AM.png"
                  alt="Owner of Mann Organiculture"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="label-tag">Team</p>
              <h3 className="font-serif-display mt-3 text-[30px] text-forest-900">
                Sardar Bhupinder Singh Mann
              </h3>
              <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-forest-900/70">
                The founder of Mann Organiculture brings years of hands-on
                farming experience to the 50-acre farm in Salodi, Punjab, overseeing daily
                operations, crop planning and the farm plot rental program.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
