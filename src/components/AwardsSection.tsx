import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function AwardsSection() {
  return (
    <section className="bg-sage/40 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading label="Recognition" heading="Awards & Recognition" />

        <Reveal>
          <figure className="mx-auto mt-14 max-w-4xl rounded-[20px] bg-white/60 p-3 sm:p-5">
            <img
              src="/ChatGPT%20Image%20Aug%2019,%202026,%2001_11_36%20AM.png"
              alt="Award plaque presented by Punjab University"
              className="h-auto max-h-[720px] w-full rounded-[14px] object-contain"
              loading="lazy"
            />
            <figcaption className="pt-4 text-center text-[14px] text-forest-900/60">
              Award presented by Punjab University
              <br />
              Honouring the Progressive Farmers
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
