import { useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const GALLERY_IMAGES = [
  {
    src: "/WhatsApp202026-08-172012.30.52%2520PM.png",
    alt: "Growing organic vegetables",
  },
  {
    src: "/WhatsApp202026-08-172012.28.23%2520PM.png",
    alt: "Organic farm landscape",
  },
  {
    src: "/WhatsApp202026-08-172012.28.11%2520PM.png",
    alt: "Fresh produce from the farm",
  },
  {
    src: "/WhatsApp202026-08-172012.28.24%2520PM.png",
    alt: "Organic crops growing in the field",
  },
  {
    src: "/WhatsApp202026-08-172012.28.26%2520PM.png",
    alt: "Harvest from Mann Organiculture",
  },
  {
    src: "/WhatsApp202026-08-172012.30.53%2520PM.png",
    alt: "Farm produce ready for harvest",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-offwhite px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label="Gallery"
          heading="Life at Mann Organiculture"
          subtitle="Real moments from the fields, the people and the farm."
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-4 [&>*]:mb-4">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={(i % 4) * 0.08}>
              <button
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-[18px]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-forest-950/0 transition-colors group-hover:bg-forest-950/10" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/92 p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute right-6 top-6 text-cream/80 hover:text-cream"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={GALLERY_IMAGES[active].src}
            alt={GALLERY_IMAGES[active].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
