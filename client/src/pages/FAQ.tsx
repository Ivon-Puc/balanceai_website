import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    category: "Produto",
    question: "O que é o BalanceAI?",
    answer: "BalanceAI é uma plataforma de inteligência de atendimento que utiliza IA com arquitetura Multimodal RAG para conectar múltiplos canais (WhatsApp, Website, Telefone) em um único super-agente. A plataforma oferece resposta imediata (80% de automação), memória perfeita do cliente e automação de workflows 24/7.",
  },
  {
    id: "2",
    category: "Produto",
    question: "Como o BalanceAI se diferencia de outros chatbots?",
    answer: "O BalanceAI oferece três diferenciais principais: (1) Soberania de dados - auto-hospedagem via Ollama e Chatwoot, não depende de servidores de terceiros; (2) Multimodal RAG - processa texto, áudio, imagens e vídeos; (3) Memória perfeita - lembra de cada interação e contexto do cliente para respostas personalizadas.",
  },
  {
    id: "3",
    category: "Produto",
    question: "Quais canais o BalanceAI suporta?",
    answer: "O BalanceAI se conecta nativamente a WhatsApp Business, Website (chat widget), Telefone (IVR inteligente) e pode ser integrado a outros canais via API. Um único agente gerencia todos os canais com contexto unificado.",
  },
  {
    id: "4",
    category: "Soberania de Dados",
    question: "Por que a soberania de dados é importante?",
    answer: "Setores como Saúde (HIPAA, LGPD), Finanças (PCI-DSS, Banco Central) e Direito (Sigilo Profissional) exigem que dados sensíveis permaneçam sob controle da empresa. BalanceAI oferece auto-hospedagem, garantindo conformidade regulatória e privacidade total.",
  },
  {
    id: "5",
    category: "Soberania de Dados",
    question: "Como funciona a auto-hospedagem do BalanceAI?",
    answer: "BalanceAI utiliza Ollama (modelos de IA open-source) e Chatwoot (plataforma de atendimento open-source) rodando na infraestrutura do cliente. Os dados nunca saem dos servidores da empresa, garantindo conformidade com regulações locais.",
  },
  {
    id: "6",
    category: "Modelo de Negócio",
    question: "Qual é o modelo de preço do BalanceAI?",
    answer: "BalanceAI oferece três fontes de receita: (1) Setup Inicial (R$ 15K-50K) - implementação e customização; (2) Licença de Software (R$ 2K-10K/mês) - assinatura SaaS recorrente; (3) Suporte e Knowledge Ops (R$ 1K-5K/mês) - serviços profissionais.",
  },
  {
    id: "7",
    category: "Modelo de Negócio",
    question: "Qual é o ROI esperado para clientes?",
    answer: "Clientes típicos veem: (1) Redução de 80% no tempo de resposta; (2) Redução de 20-30% em custos operacionais; (3) Aumento de 50% em conversão de leads; (4) Satisfação de cliente acima de 95%. O payback geralmente ocorre em 3-6 meses.",
  },
  {
    id: "8",
    category: "Investimento",
    question: "Quanto de investimento seed o BalanceAI está buscando?",
    answer: "Estamos buscando investimento seed para: (1) Finalizar o MVP e estabilizar para produção; (2) Contratar equipe inicial (DevOps, Vendedor Técnico); (3) Realizar 3-5 provas de conceito com empresas beta. O valor específico será discutido em reunião.",
  },
  {
    id: "9",
    category: "Investimento",
    question: "Qual é o TAM (Total Addressable Market) do BalanceAI?",
    answer: "O mercado de atendimento ao cliente é estimado em US$ 15 bilhões globalmente. Focando em setores com conformidade regulatória (Saúde, Finanças, Direito) na América Latina, o TAM inicial é de US$ 2-3 bilhões, com crescimento de 25% ao ano.",
  },
  {
    id: "10",
    category: "Investimento",
    question: "Qual é a visão de longo prazo do BalanceAI?",
    answer: "Nossa visão é se tornar a plataforma padrão de IA para atendimento em setores regulados. Objetivos: (1) Atingir 100+ clientes em 2 anos; (2) Expandir para mercados europeus e asiáticos; (3) Integrar com mais canais e serviços; (4) Desenvolver marketplace de integrações.",
  },
  {
    id: "11",
    category: "Conformidade",
    question: "O BalanceAI está em conformidade com LGPD?",
    answer: "Sim. Como a plataforma oferece auto-hospedagem, o cliente mantém controle total sobre seus dados. BalanceAI não armazena dados em servidores de terceiros, atendendo aos requisitos de LGPD, HIPAA, PCI-DSS e outras regulações.",
  },
  {
    id: "12",
    category: "Conformidade",
    question: "Quais setores são o foco principal do BalanceAI?",
    answer: "Os setores-alvo são: (1) Saúde - hospitais, clínicas, laboratórios, seguradoras; (2) Finanças - bancos, fintechs, gestoras, seguradoras; (3) Direito - escritórios de advocacia, notários, cartórios. Todos exigem soberania de dados como requisito obrigatório.",
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", ...Array.from(new Set(faqItems.map((item) => item.category)))];
  const filteredItems = selectedCategory === "Todos" ? faqItems : faqItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title="Perguntas Frequentes | BalanceAI"
        description="Tire suas dúvidas sobre a plataforma BalanceAI: soberania de dados, integrações, preços, ROI e setores atendidos."
        path="/faq"
        type="website"
      />

      {/* Header */}
      <Header currentPage="faq" />

      {/* Hero Section */}
      <section className="py-16 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-accent mb-4">Perguntas Frequentes</h1>
            <p className="text-lg text-muted-foreground">
              Respostas às dúvidas mais comuns de investidores, clientes e parceiros sobre o BalanceAI.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border bg-card/30">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-background border border-border text-foreground hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 flex-1">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 transition"
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/50 transition text-left"
                >
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-accent mb-2 uppercase">{item.category}</div>
                    <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-accent shrink-0 ml-4 transition-transform ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedId === item.id && (
                  <div className="px-6 py-4 bg-card/50 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-16 border-t border-border bg-linear-to-r from-accent/10 to-secondary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-accent mb-4">Não encontrou sua resposta?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para esclarecer dúvidas específicas sobre o BalanceAI.
          </p>
          <a
            href="mailto:contato@balanceai.com.br"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
          >
            Enviar Mensagem
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2025 BalanceAI. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
