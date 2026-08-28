import { motion } from "framer-motion";

export default function PageHero({
  image,
  label,
  heading,
  subtitle,
}: {
  image: string;
  label?: string;
  heading: string;
  subtitle?: string;
}) {
  return (
    <section className="relative flex h-[62vh] min-h-[420px] w-full items-center justify-center overflow-hidden bg-forest-950">
      <img src={image} alt={heading} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-forest-950/55 to-forest-950/90" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {label && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="label-tag"
          >
            {label}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif-display mt-4 text-[40px] leading-[1.1] text-cream sm:text-[54px] md:text-[64px]"
        >
          {heading}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 text-[16px] leading-relaxed text-cream/80 sm:text-[18px]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
