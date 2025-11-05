import VerticalLanding from "@/components/VerticalLanding";

const contabilidadeData = {
  slug: "contabilidade",
  h1: "Automatize 70% do Atendimento Sem Perder Personalização",
  metaTitle: "IA para Contadores | Atendimento Automatizado 24/7",
  metaDescription: "Chatbot para escritórios de contabilidade. Responda dúvidas sobre prazos, documentos e impostos automaticamente. Retenha 96% dos clientes com IA.",
  subheadline: "Libere contadores de 400 consultas repetitivas por mês sobre prazos, impostos e documentos. IA responde instantaneamente mantendo tom personalizado e captando leads noturnos.",
  painPoints: [
    {
      title: "400 Consultas Repetitivas por Mês",
      description: "Clientes perguntam sempre o mesmo: prazo do IRPF, documentos para abertura de empresa, valor de impostos. Contador perde 32h/mês respondendo."
    },
    {
      title: "30% das Consultas Fora do Horário",
      description: "Empresários trabalham até tarde e enviam dúvidas após 18h. Sem resposta, procuram outro contador."
    },
    {
      title: "Churn de 12% ao Ano",
      description: "Clientes cancelam porque sentem falta de atenção. Perdem R$ 800/mês × 12 meses = R$ 9.600 de lifetime value."
    },
    {
      title: "Dificuldade em Escalar Base de Clientes",
      description: "Atender mais de 200 clientes exige contratar, mas margem não permite. Contador fica preso no mesmo faturamento."
    }
  ],
  benefits: [
    {
      icon: "🤖",
      title: "75% de Automação em Consultas",
      description: "IA responde 300 das 400 consultas mensais automaticamente: prazos tributários, documentos necessários, status de processos."
    },
    {
      icon: "🌙",
      title: "Captação Noturna de 40 Clientes/Ano",
      description: "Lead entra às 22h perguntando sobre abertura de empresa. IA qualifica, agenda reunião e envia proposta. ROI de R$ 384 mil/ano."
    },
    {
      icon: "📊",
      title: "Retenção de 88% → 96%",
      description: "Cliente sente que tem atenção 24/7. Churn cai de 24 para 8 clientes/ano, economizando R$ 153 mil em receita perdida."
    }
  ],
  stats: [
    { value: "75%", label: "Automação" },
    { value: "+40", label: "Clientes/ano" },
    { value: "96%", label: "Retenção" }
  ],
  cta: {
    primary: "Olá! Sou contador(a) e quero automatizar consultas repetitivas.",
    secondary: "Agendar demo para escritório contábil"
  },
  testimonial: {
    name: "Márcia Silva, CRC-SP",
    company: "Silva Contabilidade (200 clientes)",
    text: "Passei de 160 horas/mês respondendo emails para 40 horas. Consegui atender 80 clientes a mais sem contratar ninguém. O investimento se pagou em menos de 2 meses."
  }
};

export default function Contabilidade() {
  return <VerticalLanding vertical={contabilidadeData} />;
}
