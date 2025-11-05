import { buildWhatsAppLink, CONTACT } from "@/lib/utils";
import { Phone } from "lucide-react";

export default function WhatsAppFAB() {
  const href = buildWhatsAppLink(CONTACT.phoneE164, "Olá! Gostaria de falar com a BalanceAI.");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-60 inline-flex items-center gap-2 px-4 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:opacity-90 transition"
      aria-label="Falar no WhatsApp"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
