import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { waLink, waMessages } from "../lib/whatsapp";

const VIDEO_SRC = "/262900_mediumvideo.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    let attempts = 0;
    const startPlayback = () => {
      const playPromise = video.play();
      if (playPromise) {
        playPromise.catch(() => {
          if (attempts < 3) {
            attempts += 1;
            window.setTimeout(startPlayback, 300);
          }
        });
      }
    };

    startPlayback();
  }, []);

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-forest-950">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        controls={false}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/45 to-forest-950/85" />
      <div className="absolute inset-0 bg-forest-950/10" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-full border border-gold/60 bg-forest-950/30 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-gold backdrop-blur-sm"
        >
          Years of Farming
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif-display mt-7 text-[42px] leading-[1.08] font-medium text-cream sm:text-[58px] md:text-[76px]"
        >
          Grown Naturally.
          <br />
          Fresh From Our Farm.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 max-w-xl text-[16px] leading-relaxed text-cream/85 sm:text-[19px]"
        >
          Seasonal vegetables, fruits, pulses and farm-grown produce from our 50-acre farm
          in Punjab.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/vegetables"
            className="rounded-full bg-cream px-7 py-3.5 text-[15px] font-semibold text-forest-950 transition-transform hover:-translate-y-0.5 hover:bg-white"
          >
            Explore Our Produce
          </Link>
          <Link
            to="/farm-plots"
            className="rounded-full border border-gold/70 px-7 py-3.5 text-[15px] font-semibold text-gold transition-colors hover:bg-gold hover:text-forest-950"
          >
            Rent a Farm Plot
          </Link>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/50 px-7 py-3.5 text-[15px] font-semibold text-cream transition-colors hover:bg-cream/10"
          >
            Order / Enquire on WhatsApp
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/80"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </motion.div>
    </section>
  );
}
