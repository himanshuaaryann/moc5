import { MessageCircle } from "lucide-react";
import { waLink, waMessages } from "../lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Mann Organiculture on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#20D66B] px-4 py-3.5 text-white shadow-[0_8px_24px_rgba(32,214,107,0.45)] transition-all hover:pr-5 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6 fill-white/10" strokeWidth={2} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px] group-hover:pl-0.5">
        WhatsApp Us
      </span>
    </a>
  );
}
