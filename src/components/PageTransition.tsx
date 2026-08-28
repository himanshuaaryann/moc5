import { useEffect, useState } from "react";

const TRANSITION_DURATION = 1700;

export default function PageTransition() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), TRANSITION_DURATION);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-forest-950 transition-opacity duration-500 ${
        visible ? "loader-overlay-enter opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="loader-content flex flex-col items-center">
        <img
          src="/mann-organiculture-logo.png"
          alt="Mann Organiculture logo"
          className="loader-logo h-24 w-24 rounded-full object-cover shadow-[0_8px_32px_rgba(0,0,0,0.22)] sm:h-28 sm:w-28"
        />
        <p className="loader-title font-serif-display mt-6 text-[30px] leading-none text-cream sm:text-[36px]">
          Mann Organiculture
        </p>
        <span
          className="loader-spinner mt-8 h-5 w-5 rounded-full border-2 border-cream/30 border-t-gold"
          aria-label="Loading"
        />
      </div>
    </div>
  );
}