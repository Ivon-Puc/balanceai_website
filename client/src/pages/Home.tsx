import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Database, Cog, Shield, CheckCircle, Search, Settings, TestTube, Rocket } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title="BalanceAI: IA para Atendimento 24/7 | Soberania de Dados"
        description="Plataforma de IA para atendimento ao cliente com soberania de dados. Qualifique leads, automatize respostas e aumente vendas em 40%."
        path="/"
        type="website"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BalanceAI",
            url: typeof window !== "undefined" ? window.location.origin : "https://balanceai.com.br",
            email: CONTACT.email,
            telephone: CONTACT.phoneE164,
            contactPoint: [{
              "@type": "ContactPoint",
              telephone: CONTACT.phoneE164,
              contactType: "customer service",
              areaServed: "BR",
              availableLanguage: ["Portuguese", "English"],
            }],
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "BalanceAI",
            applicationCategory: "CustomerServiceApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              priceCurrency: "BRL",
              price: "249",
            },
          },
        ]}
      />
      {/* Header */}
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="flex-1 relative overflow-hidden">
  <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-[600px] text-center gap-8">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full text-sm text-destructive animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
            </span>
            🔥 Últimas 3 vagas para Beta com 40% OFF
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-accent leading-tight max-w-4xl">
            O Cérebro de IA que Conecta
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Uma plataforma de inteligência de atendimento que lê, ouve e entende todo o histórico do seu cliente, 24/7. Não é apenas um chatbot, é um agente de vendas e suporte completo.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero garantir minha vaga no Beta com 40% de desconto!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 relative">
                  Garantir Vaga no Beta
                  <div className="absolute -top-2 -right-2 bg-destructive text-white text-xs px-2 py-1 rounded-full font-bold">
                    -40%
                  </div>
                </Button>
              </a>
              <a href="/simulador" className="inline-flex">
                <Button size="lg" variant="outline" className="border-border hover:bg-card">
                  Calcular Meu ROI
                </Button>
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              ⏰ Oferta válida até <strong className="text-accent">30/Nov/2025</strong> · Apenas 3 vagas restantes
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 w-full max-w-2xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">80%</div>
              <p className="text-sm text-muted-foreground">Consultas Automatizadas</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <p className="text-sm text-muted-foreground">Disponibilidade</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">100%</div>
              <p className="text-sm text-muted-foreground">Soberania de Dados</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 border-t border-border bg-background">
        <div className="container">
          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Consultas Processadas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">95%</div>
              <p className="text-muted-foreground">Satisfação de Clientes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">70%</div>
              <p className="text-muted-foreground">Redução de Tempo</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <p className="text-muted-foreground">Operação Contínua</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-4">O Que Nossos Clientes Dizem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empresas que transformaram seu atendimento com BalanceAI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">DC</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Dr. Carlos Mendes</div>
                  <div className="text-sm text-muted-foreground">Clínica Saúde+</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Reduzimos 70% do tempo de resposta e aumentamos agendamentos em 40%. A conformidade HIPAA foi o diferencial decisivo para nossa clínica."
              </p>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Saúde</div>
                <div className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">+40% Conversão</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">AS</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Ana Silva</div>
                  <div className="text-sm text-muted-foreground">Advocacia Silva & Associados</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Conformidade LGPD garantida sem dor de cabeça. Triagem automática de casos economizou 15h/semana da nossa equipe."
              </p>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Advocacia</div>
                <div className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">-15h/semana</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-accent">JR</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">João Rodrigues</div>
                  <div className="text-sm text-muted-foreground">Contabilidade Rodrigues</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "ROI em 2 meses! Nossa equipe agora foca em casos complexos enquanto o BalanceAI responde consultas fiscais 24/7."
              </p>
              <div className="flex gap-2">
                <div className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Contabilidade</div>
                <div className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">ROI 2 meses</div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-12 border-t border-border">
            <p className="text-center text-muted-foreground mb-8">Empresas que Confiam no BalanceAI</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="px-6 py-3 bg-card border border-border rounded text-foreground font-semibold">Saúde+</div>
              <div className="px-6 py-3 bg-card border border-border rounded text-foreground font-semibold">Silva & Associados</div>
              <div className="px-6 py-3 bg-card border border-border rounded text-foreground font-semibold">Contabilidade Rodrigues</div>
              <div className="px-6 py-3 bg-card border border-border rounded text-foreground font-semibold">TechMed</div>
              <div className="px-6 py-3 bg-card border border-border rounded text-foreground font-semibold">Jurídico Plus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="solucao" className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">A Solução BalanceAI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma completa que se conecta a todos os seus canais de atendimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-accent/50 transition">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Resposta Imediata</h3>
              <p className="text-muted-foreground mb-4">
                Gerencia 80% das consultas comuns, qualifica leads e agenda reuniões automaticamente.
              </p>
              <div className="text-accent font-semibold text-sm">80% de Automação</div>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-accent/50 transition">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Memória Perfeita</h3>
              <p className="text-muted-foreground mb-4">
                RAG Multimodal: lê FAQs, ouve gravações de chamadas e vê fotos de produtos.
              </p>
              <div className="text-secondary font-semibold text-sm">Multimodal</div>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 bg-background border border-border rounded-lg hover:border-accent/50 transition">
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <Cog className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Automação de Workflows</h3>
              <p className="text-muted-foreground mb-4">
                Dispara follow-ups e transfere para o agente humano certo com resumo completo.
              </p>
              <div className="text-destructive font-semibold text-sm">24/7 Operacional</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison Section */}
      <section className="py-20 border-t border-border bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">O Impacto Real do BalanceAI</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja como empresas transformaram seus resultados
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="p-4 text-left font-bold text-foreground">Métrica</th>
                  <th className="p-4 text-center font-bold text-muted-foreground">Antes (Manual)</th>
                  <th className="p-4 text-center font-bold text-accent">Depois (BalanceAI)</th>
                  <th className="p-4 text-center font-bold text-secondary">Melhoria</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-card/50 transition">
                  <td className="p-4 font-medium text-foreground">Tempo de Resposta</td>
                  <td className="p-4 text-center text-destructive">15-30 minutos</td>
                  <td className="p-4 text-center text-accent font-bold">&lt; 10 segundos</td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full font-bold">
                      ↓ 98%
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-card/50 transition">
                  <td className="p-4 font-medium text-foreground">Disponibilidade</td>
                  <td className="p-4 text-center text-destructive">8h/dia útil</td>
                  <td className="p-4 text-center text-accent font-bold">24/7</td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full font-bold">
                      3x
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-card/50 transition">
                  <td className="p-4 font-medium text-foreground">Custo por Atendimento</td>
                  <td className="p-4 text-center text-destructive">R$ 12,50</td>
                  <td className="p-4 text-center text-accent font-bold">R$ 0,80</td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full font-bold">
                      ↓ 94%
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-card/50 transition">
                  <td className="p-4 font-medium text-foreground">Taxa de Conversão</td>
                  <td className="p-4 text-center text-destructive">15%</td>
                  <td className="p-4 text-center text-accent font-bold">28%</td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full font-bold">
                      ↑ 87%
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-card/50 transition">
                  <td className="p-4 font-medium text-foreground">Satisfação Cliente (CSAT)</td>
                  <td className="p-4 text-center text-destructive">72%</td>
                  <td className="p-4 text-center text-accent font-bold">94%</td>
                  <td className="p-4 text-center">
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full font-bold">
                      ↑ 22pp
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Stats Highlight */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Redução no Tempo de Resposta</p>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">R$ 11,70</div>
              <p className="text-sm text-muted-foreground">Economia por Atendimento</p>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-4xl font-bold text-accent mb-2">87%</div>
              <p className="text-sm text-muted-foreground">Aumento em Conversão</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Como Funciona</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Implante BalanceAI em 4 passos simples - da análise ao go-live em 4 semanas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mb-4 relative z-10">
                  <Search className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border hidden md:block"></div>
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mb-3">1</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Análise</h3>
                <p className="text-sm text-muted-foreground mb-2">Dia 1</p>
                <p className="text-sm text-muted-foreground">
                  Reunião de 1h para entender seu fluxo atual e objetivos de negócio
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 border-2 border-secondary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <Settings className="w-8 h-8 text-secondary" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border hidden md:block"></div>
                <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mb-3">2</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Configuração</h3>
                <p className="text-sm text-muted-foreground mb-2">Semana 1-2</p>
                <p className="text-sm text-muted-foreground">
                  Upload de FAQs, configuração de canais e treinamento do modelo de IA
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-accent/10 border-2 border-accent rounded-full flex items-center justify-center mb-4 relative z-10">
                  <TestTube className="w-8 h-8 text-accent" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border hidden md:block"></div>
                <div className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mb-3">3</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Testes</h3>
                <p className="text-sm text-muted-foreground mb-2">Semana 3</p>
                <p className="text-sm text-muted-foreground">
                  Período beta com equipe selecionada e ajustes finos no comportamento
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-secondary/10 border-2 border-secondary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <Rocket className="w-8 h-8 text-secondary" />
                </div>
                <div className="bg-secondary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mb-3">4</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">Go-Live</h3>
                <p className="text-sm text-muted-foreground mb-2">Semana 4</p>
                <p className="text-sm text-muted-foreground">
                  Ativação completa com suporte dedicado 24/7 e monitoramento contínuo
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-accent mb-4">Tempo médio de implementação: 4 semanas</p>
            <a
              href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero começar a implementação do BalanceAI.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Começar Agora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section id="diferenciais" className="py-20 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Soberania de Dados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A vantagem decisiva que diferencia o BalanceAI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Conformidade Regulatória</h3>
                  <p className="text-muted-foreground">Atende LGPD, HIPAA, PCI-DSS e outras regulamentações que exigem dados locais.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Controle Total</h3>
                  <p className="text-muted-foreground">Cliente mantém propriedade e controle completo sobre seus dados e infraestrutura.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Privacidade Garantida</h3>
                  <p className="text-muted-foreground">Nenhum dado é compartilhado com terceiros ou plataformas externas de IA.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-linear-to-br from-accent/10 to-secondary/10 rounded-lg p-8 border border-border">
              <Shield className="w-16 h-16 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Auto-Hospedada</h3>
              <p className="text-muted-foreground mb-6">
                Via Ollama e Chatwoot. Seus dados permanecem na sua infraestrutura, garantindo LGPD, HIPAA e PCI-DSS.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle className="w-4 h-4" />
                  <span>Setores: Saúde, Finanças, Direito</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Compliance Badges */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Conformidade e Segurança</h3>
            <div className="grid md:grid-cols-6 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition">
                <Shield className="w-8 h-8 text-accent" />
                <div className="text-center">
                  <div className="font-bold text-sm text-foreground">LGPD</div>
                  <div className="text-xs text-muted-foreground">Compliant</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition">
                <Shield className="w-8 h-8 text-accent" />
                <div className="text-center">
                  <div className="font-bold text-sm text-foreground">HIPAA</div>
                  <div className="text-xs text-muted-foreground">Ready</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition">
                <Shield className="w-8 h-8 text-accent" />
                <div className="text-center">
                  <div className="font-bold text-sm text-foreground">PCI-DSS</div>
                  <div className="text-xs text-muted-foreground">Level 1</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition">
                <Shield className="w-8 h-8 text-accent" />
                <div className="text-center">
                  <div className="font-bold text-sm text-foreground">ISO 27001</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition">
                <Shield className="w-8 h-8 text-accent" />
                <div className="text-center">
                  <div className="font-bold text-sm text-foreground">SSL 256-bit</div>
                  <div className="text-xs text-muted-foreground">Encrypted</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition">
                <Database className="w-8 h-8 text-accent" />
                <div className="text-center">
                  <div className="font-bold text-sm text-foreground">Dados BR</div>
                  <div className="text-xs text-muted-foreground">100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">
              Respondemos as dúvidas mais comuns sobre o BalanceAI
            </p>
          </div>

          <div className="space-y-4">
            <details className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
              <summary className="font-bold cursor-pointer text-foreground flex items-center justify-between">
                Quanto tempo leva para implementar o BalanceAI?
                <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Em média 4 semanas completas, desde a análise inicial até o go-live. Isso inclui: Dia 1 - análise de requisitos, 
                Semanas 1-2 - configuração e treinamento do modelo, Semana 3 - testes em ambiente beta, 
                Semana 4 - ativação completa com suporte dedicado.
              </p>
            </details>

            <details className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
              <summary className="font-bold cursor-pointer text-foreground flex items-center justify-between">
                Meus dados ficam realmente seguros?
                <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                100% seguros. O BalanceAI é auto-hospedado na SUA infraestrutura via Ollama e Chatwoot. 
                Seus dados NUNCA saem dos seus servidores, garantindo conformidade com LGPD, HIPAA, PCI-DSS e sigilo profissional. 
                Você mantém controle e propriedade total dos dados.
              </p>
            </details>

            <details className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
              <summary className="font-bold cursor-pointer text-foreground flex items-center justify-between">
                Funciona com WhatsApp Business?
                <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Sim! O BalanceAI integra nativamente com WhatsApp Business, Website (chat widget), Telefone (IVR) e outros canais via API. 
                Um único agente gerencia todos os canais com contexto unificado, lembrando de todas as interações anteriores.
              </p>
            </details>

            <details className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
              <summary className="font-bold cursor-pointer text-foreground flex items-center justify-between">
                Preciso de conhecimento técnico para usar?
                <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Não. Nossa equipe cuida de toda configuração técnica, treinamento do modelo e integração com seus sistemas. 
                Você só precisa fornecer as FAQs e informações do negócio. Oferecemos treinamento completo para sua equipe 
                operar a plataforma sem necessidade de programação.
              </p>
            </details>

            <details className="group p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition">
              <summary className="font-bold cursor-pointer text-foreground flex items-center justify-between">
                Posso cancelar a qualquer momento?
                <span className="text-accent group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Sim, sem multas ou taxas de cancelamento. Trabalhamos com contratos mensais e cancelamento livre. 
                Estamos confiantes de que os resultados (redução de 80% no tempo de resposta e aumento de 50% em conversão) 
                vão fazer você querer continuar.
              </p>
            </details>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-accent hover:underline font-semibold">
              Ver todas as 12 perguntas →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Planos e Preços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para o tamanho do seu negócio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="p-8 bg-background border border-border rounded-lg hover:border-accent/50 transition">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Starter</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-accent">R$ 249</div>
                <div className="text-sm text-muted-foreground">/mês</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Até 1.000 conversas/mês</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>1 canal (WhatsApp ou Web)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>RAG básico (FAQ)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Suporte por email</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Relatórios básicos</span>
                </li>
              </ul>
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero contratar o plano Starter do BalanceAI.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full" variant="outline">
                  Começar Teste Grátis
                </Button>
              </a>
            </div>
            
            {/* Professional Plan - Popular */}
            <div className="p-8 bg-background border-2 border-accent rounded-lg relative shadow-lg shadow-accent/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Professional</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-accent">R$ 749</div>
                <div className="text-sm text-muted-foreground">/mês</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Até 5.000 conversas/mês</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>3 canais integrados</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>RAG Multimodal completo</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Suporte prioritário (24/7)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Relatórios avançados + Analytics</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Workflows personalizados</span>
                </li>
              </ul>
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero contratar o plano Professional do BalanceAI.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Agendar Demo
                </Button>
              </a>
            </div>
            
            {/* Enterprise Plan */}
            <div className="p-8 bg-background border border-border rounded-lg hover:border-accent/50 transition">
              <h3 className="text-2xl font-bold mb-2 text-foreground">Enterprise</h3>
              <div className="mb-6">
                <div className="text-4xl font-bold text-accent">Custom</div>
                <div className="text-sm text-muted-foreground">sob consulta</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Conversas ilimitadas</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Todos os canais</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Auto-hospedagem dedicada</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>SLA 99.9% garantido</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Gerente de conta dedicado</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Integrações customizadas</span>
                </li>
              </ul>
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero saber mais sobre o plano Enterprise do BalanceAI.")}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full" variant="outline">
                  Falar com Vendas
                </Button>
              </a>
            </div>
          </div>

          {/* Pricing FAQ */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Dúvidas sobre Preços?</h3>
            <div className="space-y-4">
              <details className="p-4 bg-background border border-border rounded-lg">
                <summary className="font-semibold cursor-pointer text-foreground">Posso mudar de plano depois?</summary>
                <p className="mt-2 text-muted-foreground text-sm">Sim! Você pode fazer upgrade ou downgrade a qualquer momento. Ajustes são proporcionais.</p>
              </details>
              <details className="p-4 bg-background border border-border rounded-lg">
                <summary className="font-semibold cursor-pointer text-foreground">Tem período de teste gratuito?</summary>
                <p className="mt-2 text-muted-foreground text-sm">Sim, oferecemos 14 dias de teste grátis em todos os planos, sem necessidade de cartão de crédito.</p>
              </details>
              <details className="p-4 bg-background border border-border rounded-lg">
                <summary className="font-semibold cursor-pointer text-foreground">Posso cancelar a qualquer momento?</summary>
                <p className="mt-2 text-muted-foreground text-sm">Sim, sem multas ou taxas. Contratos mensais com cancelamento livre.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Urgency */}
      <section className="py-20 border-t border-border bg-linear-to-r from-accent/10 to-secondary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 border border-destructive/30 rounded-full text-sm text-destructive mb-6">
              🔥 Oferta Especial Early Adopter
            </div>
            <h2 className="text-4xl font-bold text-accent mb-4">40% OFF nos Primeiros 3 Meses</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Seja um dos primeiros clientes e garanta condições exclusivas
            </p>
          </div>

          <div className="bg-card border-2 border-accent/30 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">O Que Está Incluído:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Setup gratuito (valor R$ 2.500)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Treinamento personalizado da equipe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Suporte prioritário vitalício</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Atualizações gratuitas por 1 ano</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Garantias:</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>30 dias de garantia - 100% reembolso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Dados 100% seguros (LGPD/HIPAA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Sem contratos de longo prazo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Cancelamento livre a qualquer momento</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-6 mb-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground line-through">R$ 749/mês</div>
                  <div className="text-3xl font-bold text-accent">R$ 449/mês</div>
                  <div className="text-xs text-muted-foreground">nos primeiros 3 meses</div>
                </div>
                <div className="text-center px-6 py-3 bg-secondary/10 rounded-lg">
                  <div className="text-sm text-muted-foreground">Você Economiza</div>
                  <div className="text-2xl font-bold text-secondary">R$ 900</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero garantir minha vaga no Beta com 40% OFF!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-lg px-8">
                  Ativar Desconto Agora <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                ⏰ Oferta válida até <strong className="text-destructive">30/Nov/2025</strong> · Apenas 3 vagas restantes
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-sm">Garantia 30 Dias</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm">Dados 100% Seguros</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm">Sem Contratos Longos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BA</span>
                </div>
                <span className="font-bold text-accent">BalanceAI</span>
              </div>
              <p className="text-sm text-muted-foreground">Plataforma de IA para atendimento 24/7 com soberania de dados.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#solucao" className="hover:text-accent transition">Solução</a></li>
                <li><a href="/#diferenciais" className="hover:text-accent transition">Diferenciais</a></li>
                <li><a href="/#precos" className="hover:text-accent transition">Preços</a></li>
                <li><a href="/simulador" className="hover:text-accent transition">Simulador ROI</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contato" className="hover:text-accent transition">Sobre</a></li>
                <li><a href="/blog" className="hover:text-accent transition">Blog</a></li>
                <li><a href="/faq" className="hover:text-accent transition">FAQ</a></li>
                <li><a href="/contato" className="hover:text-accent transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contato" className="hover:text-accent transition">Privacidade (Em breve)</a></li>
                <li><a href="/contato" className="hover:text-accent transition">Termos (Em breve)</a></li>
                <li><a href="/contato" className="hover:text-accent transition">Cookies (Em breve)</a></li>
                <li><a href="/#diferenciais" className="hover:text-accent transition">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground space-y-2">
            <p>&copy; 2025 BalanceAI. Todos os direitos reservados.</p>
            <p>
              Contato: <a className="text-accent hover:underline" href="mailto:contato@balanceai.com.br">contato@balanceai.com.br</a> ·
              <a className="text-accent hover:underline ml-1" href={buildWhatsAppLink(CONTACT.phoneE164)} target="_blank" rel="noopener noreferrer">WhatsApp {CONTACT.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
