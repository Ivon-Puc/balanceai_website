import VerticalLanding from "@/components/VerticalLanding";

const imobiliariasData = {
  slug: "imobiliarias",
  h1: "Qualifique e Agende Visitas 24/7 Automaticamente",
  metaTitle: "IA para Imobiliárias | Qualificação de Leads e Agendamento Automático",
  metaDescription: "Chatbot para corretores de imóveis. Qualifique leads, agende visitas e envie propostas automaticamente. Feche mais negócios com IA 24/7.",
  subheadline: "Atenda interessados instantaneamente, qualifique por orçamento e urgência, envie fotos/vídeos de imóveis e agende visitas automaticamente. Aumente conversão em 50%.",
  painPoints: [
    {
      title: "Leads Perdidos em Finais de Semana",
      description: "Cliente vê anúncio no sábado às 14h, entra no WhatsApp e não é atendido. Segunda-feira ele já fechou com concorrente."
    },
    {
      title: "Corretores Gastam 70% do Tempo Respondendo",
      description: "Interessados perguntam sempre o mesmo: valor, localização, metragem, aceita financiamento. Corretor passa dia no WhatsApp e não visita imóveis."
    },
    {
      title: "Taxa de Conversão Baixa (5-8%)",
      description: "De 100 leads, apenas 6 viram visitas agendadas e 1 fecha negócio. Falta filtrar por orçamento e urgência real."
    },
    {
      title: "Follow-Up Manual Ineficiente",
      description: "Cliente visitou, gostou, mas disse 'vou pensar'. Corretor esquece de fazer follow-up em 3 dias. Negócio esfria."
    }
  ],
  benefits: [
    {
      icon: "🏠",
      title: "Envio Automático de Imóveis",
      description: "Lead: 'Procuro apto 2 quartos, Perdizes, até R$ 500 mil'. IA filtra 8 opções no CRM, envia fotos, vídeo 360°, ficha e localização no Maps."
    },
    {
      icon: "🎯",
      title: "Qualificação por Orçamento",
      description: "IA pergunta: orçamento, tem imóvel para venda, financiamento ou à vista, quando precisa. Pontua de 1-10 e prioriza hot leads para corretor."
    },
    {
      icon: "📅",
      title: "Agendamento de Visitas 24/7",
      description: "Lead confirma interesse em 3 imóveis. IA verifica agenda do corretor, sugere horários e confirma visita. Taxa de conversão sobe de 6% para 14%."
    }
  ],
  stats: [
    { value: "+133%", label: "Conversão" },
    { value: "24/7", label: "Atendimento" },
    { value: "-50%", label: "Tempo Qualificação" }
  ],
  cta: {
    primary: "Olá! Sou corretor(a) e quero automatizar qualificação de leads.",
    secondary: "Agendar demo para imobiliária"
  },
  testimonial: {
    name: "Paulo Henrique Santos",
    company: "Santos Imóveis (RJ)",
    text: "Passei de 6 para 14 visitas agendadas por semana. A IA qualifica, manda fotos, agenda visita e eu só apareço no horário marcado. Fechei 3 vendas a mais por mês = R$ 45 mil em comissões extras."
  }
};

export default function Imobiliarias() {
  return <VerticalLanding vertical={imobiliariasData} />;
}
