export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ia-transformando-atendimento",
    title: "Como a IA está transformando o atendimento ao cliente",
    excerpt: "Descubra como a inteligência artificial está revolucionando a forma como as empresas interagem com seus clientes.",
    content: `
# Como a IA está transformando o atendimento ao cliente

A inteligência artificial está mudando fundamentalmente o cenário do atendimento ao cliente. Com tecnologias como **Multimodal RAG**, as empresas podem agora oferecer respostas imediatas, personalizadas e contextualmente relevantes 24/7.

## Benefícios da IA no Atendimento

### 1. Disponibilidade 24/7
Os clientes não precisam mais esperar pelo horário comercial para ter suas dúvidas respondidas. A IA está sempre disponível.

### 2. Respostas Instantâneas
Com o processamento em tempo real, os clientes recebem respostas em segundos, não em horas ou dias.

### 3. Personalização em Escala
A IA consegue personalizar cada interação com base no histórico e contexto do cliente, mesmo atendendo milhares simultaneamente.

### 4. Redução de Custos
Estudos mostram redução de **20-30% nos custos operacionais** ao automatizar consultas comuns.

## O Futuro do Atendimento

A tendência é que a IA se torne cada vez mais sofisticada, compreendendo não apenas texto, mas também áudio, imagens e vídeos. O BalanceAI já está preparado para esse futuro com sua arquitetura Multimodal RAG.

## Conclusão

A transformação digital do atendimento não é mais uma opção, é uma necessidade competitiva. Empresas que adotarem IA agora terão vantagem significativa sobre a concorrência.
    `,
    author: "Equipe BalanceAI",
    date: "2025-11-04",
    category: "IA",
    readTime: "5 min",
  },
  {
    slug: "soberania-dados-crucial",
    title: "Soberania de dados: Por que é crucial para seu negócio",
    excerpt: "Entenda a importância de manter seus dados sob controle e como a auto-hospedagem protege sua empresa.",
    content: `
# Soberania de dados: Por que é crucial para seu negócio

A **soberania de dados** não é apenas uma questão de conformidade regulatória, é uma vantagem competitiva estratégica.

## O que é Soberania de Dados?

Soberania de dados refere-se ao conceito de que dados digitais estão sujeitos às leis do país onde são armazenados. Para empresas brasileiras, isso significa:

- Controle total sobre onde e como os dados são armazenados
- Conformidade com LGPD e outras regulamentações locais
- Proteção contra acesso não autorizado por governos estrangeiros

## Por que é Crucial?

### 1. Conformidade Regulatória
Setores como Saúde (HIPAA), Finanças (PCI-DSS) e Advocacia exigem controle rigoroso sobre dados sensíveis.

### 2. Segurança Empresarial
Dados auto-hospedados não passam por servidores de terceiros, reduzindo riscos de vazamento.

### 3. Vantagem Competitiva
Clientes confiam mais em empresas que demonstram controle sobre seus dados.

### 4. Inovação Ágil
Com dados próprios, você pode inovar sem depender de APIs de terceiros ou restrições de plataforma.

## Como BalanceAI Garante Soberania

O BalanceAI utiliza **Ollama** (modelo de IA local) e **Chatwoot** (plataforma auto-hospedável), garantindo que todos os dados permaneçam em sua infraestrutura.

## Conclusão

Em um mundo cada vez mais regulado e consciente de privacidade, soberania de dados não é luxo - é essencial.
    `,
    author: "Equipe BalanceAI",
    date: "2025-10-28",
    category: "Segurança",
    readTime: "7 min",
  },
  {
    slug: "roi-atendimento-inteligente",
    title: "ROI de plataformas de atendimento inteligente",
    excerpt: "Análise detalhada do retorno sobre investimento ao implementar soluções de IA para atendimento.",
    content: `
# ROI de plataformas de atendimento inteligente

Implementar uma plataforma de atendimento inteligente é um investimento que se paga rapidamente. Veja os números.

## Métricas Reais de ROI

### Redução de Custos
- **80% de redução** no tempo de resposta
- **20-30% de economia** em custos operacionais
- **50% menos** escalações para supervisores

### Aumento de Receita
- **50% de aumento** em conversão de leads
- **35% de crescimento** em upsell/cross-sell
- **25% de redução** em churn de clientes

### Melhoria de Eficiência
- **70% das consultas** resolvidas automaticamente
- **3-6 meses** de payback típico
- **95%+ de satisfação** do cliente

## Exemplo Prático

**Empresa de Advocacia com 1000 clientes/mês:**

**Antes do BalanceAI:**
- 5 atendentes × R$ 3.500/mês = R$ 17.500
- 40 horas/semana respondendo consultas comuns
- Taxa de conversão de consulta para contratação: 15%

**Depois do BalanceAI:**
- 3 atendentes × R$ 3.500/mês = R$ 10.500
- 10 horas/semana em consultas (80% automatizadas)
- Taxa de conversão: 22% (qualificação automática)
- **Economia mensal: R$ 7.000 + aumento de receita**

## Retorno em 3 Meses

Com investimento inicial de R$ 5.000 (setup) + R$ 249/mês, o payback ocorre em:
- Economia: R$ 7.000/mês
- ROI: **1.400% no primeiro ano**

## Conclusão

O ROI de plataformas de atendimento inteligente é mensurável, rápido e sustentável.
    `,
    author: "Equipe BalanceAI",
    date: "2025-10-15",
    category: "Negócios",
    readTime: "6 min",
  },
];

// Função helper para buscar post por slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Função helper para buscar posts por categoria
export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "Todos") return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

// Função helper para obter todas as categorias
export function getCategories(): string[] {
  return ["Todos", ...Array.from(new Set(blogPosts.map(post => post.category)))];
}
