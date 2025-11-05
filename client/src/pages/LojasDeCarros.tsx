import VerticalLanding from "@/components/VerticalLanding";

const lojasCarrosData = {
  slug: "lojas-de-carros",
  h1: "Feche Mais Vendas Respondendo em Segundos",
  metaTitle: "IA para Lojas de Carros | Atendimento Instantâneo de Leads",
  metaDescription: "Chatbot para revendas de veículos. Responda perguntas sobre estoque, financiamento e test-drive em segundos. Aumente conversão em 68%.",
  subheadline: "Qualifique leads instantaneamente, responda dúvidas sobre estoque e financiamento 24/7, e agende test-drives automaticamente. Feche vendas enquanto concorrentes dormem.",
  painPoints: [
    {
      title: "Leads Perdidos em Horários Nobres",
      description: "Cliente vê anúncio no Instagram às 23h, entra no WhatsApp e não é atendido. No dia seguinte, já comprou na concorrência."
    },
    {
      title: "Vendedores Sobrecarregados",
      description: "Equipe passa 60% do tempo respondendo 'qual o valor?', 'aceita troca?', 'tem financiamento?'. Sobra pouco para fechar vendas."
    },
    {
      title: "Taxa de Conversão Baixa (8-12%)",
      description: "De 100 leads que entram no WhatsApp, apenas 10 viram vendas. Falta qualificação e follow-up estruturado."
    },
    {
      title: "Dificuldade em Recuperar Propostas",
      description: "Cliente pede proposta, some por 3 dias. Vendedor não lembra de fazer follow-up. Venda esfria."
    }
  ],
  benefits: [
    {
      icon: "⚡",
      title: "Resposta em < 10 Segundos",
      description: "Lead pergunta sobre Corolla 2022. IA busca no estoque, envia fotos, vídeo, ficha técnica e proposta de financiamento instantaneamente."
    },
    {
      icon: "🎯",
      title: "Qualificação Automática",
      description: "IA pergunta: orçamento, preferência (sedan/SUV), tem carro para troca, urgência de compra. Pontua de 1-10 e prioriza hot leads."
    },
    {
      icon: "📈",
      title: "Conversão de 10% → 19%",
      description: "Vendedores focam apenas em leads pontuação 8+. Ciclo de venda cai de 12 para 5 dias. 95 vendas extras/ano = R$ 1,9 milhão."
    }
  ],
  stats: [
    { value: "+90%", label: "Conversão" },
    { value: "< 10s", label: "Tempo Resposta" },
    { value: "24/7", label: "Disponível" }
  ],
  cta: {
    primary: "Olá! Tenho loja de carros e quero vender mais com IA.",
    secondary: "Agendar demo para revenda de veículos"
  },
  testimonial: {
    name: "Roberto Alves",
    company: "Alves Motors (Campinas)",
    text: "Aumentei de 18 para 34 vendas/mês sem contratar vendedor. A IA responde às 2h da manhã, qualifica o cliente e manda direto para o vendedor de plantão. ROI foi de 1.200% no primeiro ano."
  }
};

export default function LojasDeCarros() {
  return <VerticalLanding vertical={lojasCarrosData} />;
}
