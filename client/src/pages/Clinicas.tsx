import VerticalLanding from "@/components/VerticalLanding";

const clinicasData = {
  slug: "clinicas",
  h1: "Reduza No-Shows em 40% com Confirmação Automática",
  metaTitle: "IA para Clínicas | Agendamento e Confirmação Automática HIPAA/LGPD",
  metaDescription: "Chatbot para clínicas e consultórios. Agende, confirme e reduza no-shows em 40%. Conformidade total LGPD/HIPAA com soberania de dados.",
  subheadline: "Automatize agendamento 24/7, envie lembretes inteligentes e confirme consultas via WhatsApp. Reduza no-shows de 40% para 12% e aumente faturamento sem contratar recepcionistas.",
  painPoints: [
    {
      title: "40% de No-Show (Paciente Falta)",
      description: "200 no-shows/mês × R$ 150 consulta = R$ 30 mil perdidos. Impossível preencher agenda porque não sabe quem vai faltar."
    },
    {
      title: "25% dos Agendamentos Fora do Horário",
      description: "Paciente trabalha até 18h, só consegue ligar às 20h. Recepção fechada. Ele agenda com concorrente que tem WhatsApp."
    },
    {
      title: "Recepcionistas Sobrecarregadas",
      description: "3 recepcionistas × R$ 2.500 = R$ 7.500/mês. Passam 80% do tempo agendando, confirmando e remarcando. Não sobra tempo para pós-consulta."
    },
    {
      title: "Risco de Violação LGPD com ChatGPT",
      description: "Usar ChatGPT para responder pacientes envia prontuários para servidor nos EUA. Multa de até R$ 50 milhões + processos individuais."
    }
  ],
  benefits: [
    {
      icon: "🏥",
      title: "Agendamento Inteligente 24/7",
      description: "Paciente: 'Quero agendar limpeza dental'. IA verifica agenda, sugere 3 horários, confirma e envia no Google Calendar. 90 segundos vs 15 minutos no telefone."
    },
    {
      icon: "✅",
      title: "Confirmação Automática com Lembretes",
      description: "IA envia: 3 dias antes (confirmar), 1 dia antes (lembrete), 2h antes (último aviso). Taxa de confirmação sobe de 60% para 88%."
    },
    {
      icon: "🔒",
      title: "Conformidade LGPD/HIPAA Total",
      description: "Dados de pacientes processados em servidor dedicado no Brasil. Zero trânsito por EUA/Europa. Auditoria completa para fiscalização."
    }
  ],
  stats: [
    { value: "-70%", label: "No-Shows" },
    { value: "+40%", label: "Agendamentos Noturnos" },
    { value: "100%", label: "LGPD/HIPAA" }
  ],
  cta: {
    primary: "Olá! Tenho clínica e quero reduzir no-shows com IA.",
    secondary: "Agendar demo para clínica/consultório"
  },
  testimonial: {
    name: "Dra. Ana Paula Ferreira",
    company: "Clínica OdontoVida (São Paulo)",
    text: "Meu no-show caiu de 40% para 12%. Isso significa 140 consultas a mais por mês = R$ 21 mil recuperados. Reduzi de 3 para 1 recepcionista e consegui atender 40% mais agendamentos noturnos."
  }
};

export default function Clinicas() {
  return <VerticalLanding vertical={clinicasData} />;
}
