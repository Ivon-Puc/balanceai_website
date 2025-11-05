import { useLocation } from "wouter";
import { useEffect, useState } from "react";

interface PageContext {
  route: string;
  message: string;
  intent: string;
}

const PAGE_CONTEXTS: Record<string, PageContext> = {
  "/": {
    route: "/",
    message: "Olá! Vi o site do BalanceAI e gostaria de saber mais sobre como a IA pode transformar meu atendimento.",
    intent: "descoberta_inicial"
  },
  "/blog": {
    route: "/blog",
    message: "Olá! Estava lendo os artigos do blog e gostaria de entender melhor como o BalanceAI funciona na prática.",
    intent: "interesse_conteudo"
  },
  "/faq": {
    route: "/faq",
    message: "Olá! Tenho algumas dúvidas sobre o BalanceAI. Podemos conversar?",
    intent: "esclarecimento_duvidas"
  },
  "/simulador": {
    route: "/simulador",
    message: "Olá! Fiz uma simulação de ROI e fiquei impressionado com os resultados. Gostaria de agendar uma demonstração.",
    intent: "alta_intencao_compra"
  },
  "/contato": {
    route: "/contato",
    message: "Olá! Estou na página de contato e gostaria de falar sobre o BalanceAI para minha empresa.",
    intent: "contato_direto"
  },
};

export function useWhatsAppContext() {
  const [location] = useLocation();
  const [context, setContext] = useState<PageContext>(PAGE_CONTEXTS["/"]);
  const [visitedPages, setVisitedPages] = useState<string[]>([]);
  const [timeOnPage, setTimeOnPage] = useState(0);

  // Rastrear páginas visitadas
  useEffect(() => {
    if (!visitedPages.includes(location)) {
      setVisitedPages(prev => [...prev, location]);
    }
  }, [location]);

  // Rastrear tempo na página
  useEffect(() => {
    setTimeOnPage(0);
    const timer = setInterval(() => {
      setTimeOnPage(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [location]);

  // Determinar contexto inteligente
  useEffect(() => {
    const baseRoute = location.split("/").slice(0, 2).join("/") || "/";
    
    // Contexto para posts do blog
    if (location.startsWith("/blog/") && location !== "/blog") {
      const postSlug = location.split("/")[2];
      setContext({
        route: location,
        message: `Olá! Li o artigo no blog e gostaria de saber mais sobre como o BalanceAI pode ajudar minha empresa.`,
        intent: "interesse_pos_leitura"
      });
      return;
    }

    // Contexto padrão por rota
    const pageContext = PAGE_CONTEXTS[baseRoute] || PAGE_CONTEXTS["/"];
    
    // Personalizar mensagem baseado no comportamento
    if (visitedPages.length >= 3 && timeOnPage > 30) {
      // Usuário engajado - visitou várias páginas e está há 30+ segundos
      setContext({
        ...pageContext,
        message: `Olá! Já explorei o site e estou muito interessado. Podemos agendar uma conversa para entender como o BalanceAI se encaixa no meu negócio?`,
        intent: "alta_engajamento"
      });
    } else if (location === "/simulador" && timeOnPage > 15) {
      // Passou tempo no simulador - alta intenção
      setContext({
        ...pageContext,
        message: `Olá! Acabei de ver o potencial de ROI do BalanceAI. Gostaria de discutir uma implementação personalizada.`,
        intent: "muito_alta_intencao"
      });
    } else {
      setContext(pageContext);
    }
  }, [location, visitedPages, timeOnPage]);

  return {
    message: context.message,
    intent: context.intent,
    visitedPages,
    timeOnPage,
    isEngaged: visitedPages.length >= 3 || timeOnPage > 30,
  };
}
