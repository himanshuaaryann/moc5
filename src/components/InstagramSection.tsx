import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import InstagramIcon from "./icons/InstagramIcon";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../lib/whatsapp";

const INSTAGRAM_IMAGES = [
  {
    src: "https://images.pexels.com/photos/20527467/pexels-photo-20527467.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1300&w=900",
    alt: "Farm workers harvesting leafy greens",
  },
  {
    src: "https://images.pexels.com/photos/18135422/pexels-photo-18135422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    alt: "Tractor working in a Punjab field",
  },
  {
    src: "https://images.pexels.com/photos/5451692/pexels-photo-5451692.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1100&w=900",
    alt: "Ripe tomatoes on the vine",
  },
  {
    src: "https://images.pexels.com/photos/20458054/pexels-photo-20458054.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1300&w=900",
    alt: "Farmer in the field",
  },
  {
    src: "https://images.pexels.com/photos/20339279/pexels-photo-20339279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    alt: "Greenhouse interior",
  },
];

export default function InstagramSection() {
  const images = INSTAGRAM_IMAGES;

  return (
    <section className="bg-sage/40 px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading
          label="Follow the Farm"
          heading="Follow Life at the Farm"
          subtitle={`Real moments from the fields — ${INSTAGRAM_HANDLE}`}
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.06}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-forest-950/0 opacity-0 transition-all group-hover:bg-forest-950/40 group-hover:opacity-100">
                  <InstagramIcon className="h-6 w-6 text-cream" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-forest-700"
            >
              Follow Us on Instagram
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
