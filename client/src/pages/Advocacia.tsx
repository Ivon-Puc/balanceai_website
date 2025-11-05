import VerticalLanding from "@/components/VerticalLanding";

const advocaciaData = {
  slug: "advocacia",
  h1: "Qualifique Leads Jurídicos 24/7 com IA Treinada em Direito",
  metaTitle: "IA para Escritórios de Advocacia | Qualificação Automática de Leads",
  metaDescription: "Chatbot inteligente para advogados. Qualifique consultas jurídicas 24/7, mantenha sigilo profissional (OAB) e aumente conversão em 107%. Conformidade LGPD.",
  subheadline: "Automatize triagem de consultas jurídicas, qualifique leads por valor de causa e agende consultas enquanto mantém 100% de conformidade com sigilo profissional da OAB.",
  painPoints: [
    {
      title: "60% das Consultas Iniciais Sem Potencial",
      description: "Advogados gastam horas em consultas gratuitas com casos de baixo valor ou fora da área de atuação."
    },
    {
      title: "Leads Perdidos Fora do Horário Comercial",
      description: "38% dos potenciais clientes entram em contato após as 18h ou fins de semana e nunca retornam."
    },
    {
      title: "Risco de Quebra de Sigilo com ChatGPT",
      description: "Usar ChatGPT ou Gemini para atendimento viola código de ética da OAB (Art. 34, VII) e pode resultar em suspensão."
    },
    {
      title: "Dificuldade em Escalar Atendimento",
      description: "Contratar mais secretárias é caro (R$ 3.500/mês cada) e não resolve o problema de qualificação técnica."
    }
  ],
  benefits: [
    {
      icon: "⚖️",
      title: "Qualificação Jurídica Automática",
      description: "IA faz 15 perguntas estratégicas (valor da causa, urgência, documentos disponíveis) e pontua leads antes da consulta com advogado."
    },
    {
      icon: "🔒",
      title: "Sigilo Profissional Garantido",
      description: "Dados processados no Brasil, em servidor dedicado. Zero envio para OpenAI/Google. Conformidade total com OAB e LGPD."
    },
    {
      icon: "📈",
      title: "Conversão de 15% → 31%",
      description: "Advogados atendem apenas leads qualificados (valor > R$ 5 mil), dobrando taxa de contratação e aumentando ticket médio."
    }
  ],
  stats: [
    { value: "+107%", label: "Conversão" },
    { value: "24/7", label: "Disponível" },
    { value: "100%", label: "Conformidade OAB" }
  ],
  cta: {
    primary: "Olá! Sou advogado(a) e quero testar o BalanceAI para qualificar consultas.",
    secondary: "Agendar demo para escritório de advocacia"
  },
  testimonial: {
    name: "Dr. Carlos Mendes",
    company: "Mendes & Associados (SP)",
    text: "Reduzi consultas sem potencial de 60% para 15%. Agora atendo apenas casos acima de R$ 8 mil e minha taxa de contratação dobrou. O melhor: nunca mais tive preocupação com vazamento de dados de clientes."
  }
};

export default function Advocacia() {
  return <VerticalLanding vertical={advocaciaData} />;
}
