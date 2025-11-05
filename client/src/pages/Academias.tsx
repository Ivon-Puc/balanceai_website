import VerticalLanding from "@/components/VerticalLanding";

const academiasData = {
  slug: "academias",
  h1: "Retenha Alunos com Lembretes Inteligentes e Personalizados",
  metaTitle: "IA para Academias | Retenção de Alunos e Automação de Atendimento",
  metaDescription: "Chatbot para academias. Envie lembretes de treino, recupere alunos inativos e automatize matrículas. Reduza churn de 8% para 3%.",
  subheadline: "Automatize matrículas via WhatsApp, envie lembretes personalizados de treino, recupere alunos inativos e reduza churn de 8% para 3%. Aumente lifetime value em 50%.",
  painPoints: [
    {
      title: "Churn de 8% ao Mês (96% ao Ano)",
      description: "De 500 alunos, 40 cancelam todo mês. Lifetime value cai de 12 para 4 meses. Receita recorrente não cresce."
    },
    {
      title: "50% dos Leads Não Convertem em Matrícula",
      description: "Pessoa faz tour, gosta, mas não volta para fechar. Atendente esquece de fazer follow-up. Lead esfria e assina com concorrente."
    },
    {
      title: "Alunos Ficam Inativos Sem Avisar",
      description: "Pessoa para de ir há 15 dias e ninguém percebe. Quando academia liga, ela já cancelou mentalidade. Perdeu janela de reativação."
    },
    {
      title: "Atendimento Sobrecarregado em Horários de Pico",
      description: "18h-21h: 30 pessoas querendo falar com atendente (matrícula, dúvida sobre treino, trocar plano). Fila de espera de 20 minutos. Frustração."
    }
  ],
  benefits: [
    {
      icon: "💪",
      title: "Lembretes Inteligentes de Treino",
      description: "IA envia: 'Faz 3 dias que você não treina pernas. Que tal hoje às 19h? Seu personal está disponível.' Engajamento sobe de 2,1 para 3,8 treinos/semana."
    },
    {
      icon: "🔄",
      title: "Recuperação Automática de Inativos",
      description: "Aluno não aparece há 7 dias. IA envia: 'Sentimos sua falta! Que tal voltar hoje? Separei treino novo para você.' Reativação sobe de 15% para 34%."
    },
    {
      icon: "📉",
      title: "Churn de 8% → 3% ao Mês",
      description: "De 500 alunos × R$ 150/mês, economizar 25 cancelamentos = R$ 3.750/mês recuperados. Lifetime value sobe de 4 para 12 meses = R$ 1.200 → R$ 3.600/aluno."
    }
  ],
  stats: [
    { value: "-63%", label: "Churn" },
    { value: "+80%", label: "Engajamento" },
    { value: "+127%", label: "Reativação" }
  ],
  cta: {
    primary: "Olá! Tenho academia e quero reduzir churn com IA.",
    secondary: "Agendar demo para academia"
  },
  testimonial: {
    name: "Rafael Costa",
    company: "FitPower Academia (BH)",
    text: "Meu churn caiu de 8% para 3%. Isso significa 25 alunos a mais por mês que não cancelaram = R$ 3.750/mês recuperados. A IA manda lembrete personalizado, o aluno sente que é especial e continua treinando."
  }
};

export default function Academias() {
  return <VerticalLanding vertical={academiasData} />;
}
