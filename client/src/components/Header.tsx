import { Phone } from "lucide-react";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

interface HeaderProps {
  currentPage?: "home" | "blog" | "faq" | "simulador" | "contato";
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-linear-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BA</span>
          </div>
          <span className="font-bold text-lg text-accent">BalanceAI</span>
        </a>
        <nav className="hidden md:flex items-center gap-4">
          <a 
            href="/" 
            className={`text-sm hover:text-accent transition ${currentPage === "home" ? "font-semibold text-accent" : ""}`}
          >
            Home
          </a>
          <a 
            href="/blog" 
            className={`text-sm hover:text-accent transition ${currentPage === "blog" ? "font-semibold text-accent" : ""}`}
          >
            Blog
          </a>
          <a 
            href="/faq" 
            className={`text-sm hover:text-accent transition ${currentPage === "faq" ? "font-semibold text-accent" : ""}`}
          >
            FAQ
          </a>
          <a 
            href="/simulador" 
            className={`text-sm hover:text-accent transition ${currentPage === "simulador" ? "font-semibold text-accent" : ""}`}
          >
            Simulador
          </a>
          <a
            href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Gostaria de saber mais sobre a BalanceAI.")}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white hover:opacity-90 px-3 py-2 rounded-lg text-sm font-medium transition"
            aria-label="WhatsApp"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
          <a 
            href="/contato" 
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              currentPage === "contato" 
                ? "bg-accent text-accent-foreground" 
                : "bg-accent text-accent-foreground hover:bg-accent/90"
            }`}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
