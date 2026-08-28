import Reveal from "./Reveal";
import { cn } from "../utils/cn";

export default function SectionHeading({
  label,
  heading,
  subtitle,
  align = "center",
  light = false,
  className,
}: {
  label?: string;
  heading: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {label && (
        <Reveal>
          <span className="label-tag">{label}</span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-serif-display mt-4 text-[38px] leading-[1.08] font-medium sm:text-[46px] md:text-[56px]",
            light ? "text-cream" : "text-forest-900"
          )}
        >
          {heading}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-[16px] leading-relaxed sm:text-[18px]",
              light ? "text-sage/90" : "text-forest-900/70"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
