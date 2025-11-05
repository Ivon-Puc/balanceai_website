import { buildWhatsAppLink, CONTACT } from "@/lib/utils";
import { Phone, Sparkles } from "lucide-react";
import { useWhatsAppContext } from "@/hooks/useWhatsAppContext";
import { useState, useEffect } from "react";

export default function WhatsAppFAB() {
  const { message, isEngaged, timeOnPage } = useWhatsAppContext();
  const [showTooltip, setShowTooltip] = useState(false);
  const href = buildWhatsAppLink(CONTACT.phoneE164, message);

  // Mostrar tooltip quando usuário estiver engajado
  useEffect(() => {
    if (isEngaged && timeOnPage > 45 && timeOnPage < 48) {
      setShowTooltip(true);
      const timer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isEngaged, timeOnPage]);

  return (
    <div className="fixed bottom-6 right-6 z-60">
      {/* Tooltip Contextual */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 w-64 p-4 bg-card border border-accent/30 rounded-lg shadow-xl animate-in slide-in-from-bottom-2">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground mb-1">
                Posso ajudar?
              </p>
              <p className="text-xs text-muted-foreground">
                Fale conosco no WhatsApp para tirar dúvidas ou agendar uma demo!
              </p>
            </div>
          </div>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-card border-r border-b border-accent/30 rotate-45"></div>
        </div>
      )}

      {/* Botão WhatsApp */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center gap-2 px-4 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:opacity-90 hover:scale-105 transition-all group"
        aria-label="Falar no WhatsApp"
        onMouseEnter={() => isEngaged && setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp</span>
        
        {/* Badge de usuário engajado */}
        {isEngaged && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-300"></span>
          </span>
        )}
      </a>
    </div>
  );
}
