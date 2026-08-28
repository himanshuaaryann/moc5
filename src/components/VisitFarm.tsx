import { MapPin, Navigation, Phone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ADDRESS, PLUS_CODE, PHONE_DISPLAY, PHONE_TEL, waLink, waMessages } from "../lib/whatsapp";

const FARM_MAP_URL = "https://maps.app.goo.gl/1WG492haphhKsLXu8";
const MAP_EMBED_URL = "https://www.google.com/maps?q=30.752804,76.230288&output=embed";

export default function VisitFarm() {
  return (
    <section className="bg-cream px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading label="Come See Us" heading="Visit Our Farm" />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-[24px] bg-forest-900 p-9 text-cream">
              <div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-[16px] leading-relaxed">{ADDRESS}</p>
                    <p className="mt-1 text-[13px] text-cream/60">Plus Code: {PLUS_CODE}</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold" />
                  <a href={`tel:${PHONE_TEL}`} className="text-[16px]">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <a
                  href={FARM_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-[14px] font-semibold text-forest-950 hover:bg-white"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 py-3.5 text-[14px] font-semibold text-cream hover:bg-cream/10"
                >
                  Call the Farm
                </a>
                <a
                  href={waLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#20D66B] px-6 py-3.5 text-[14px] font-semibold text-forest-950"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-[380px] w-full overflow-hidden rounded-[24px] shadow-[0_10px_30px_rgba(15,47,33,0.12)] lg:h-full">
              <iframe
                title="Mann Organiculture Farm Location"
                src={MAP_EMBED_URL}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
