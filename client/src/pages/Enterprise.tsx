import { Button } from "@/components/ui/button";
import { Check, Shield, Database, Cog, Zap, Building2, Lock, Workflow } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

export default function Enterprise() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title="BalanceAI Enterprise: Soluções Customizadas de IA para Grandes Empresas"
        description="Plataforma enterprise de IA para atendimento com soberania de dados, RAG multimodal e integração profunda. A partir de R$ 1.899/mês."
        path="/enterprise"
        type="website"
      />

      <Header currentPage="enterprise" />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 border-b border-border">
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent mb-6">
              <Building2 className="w-4 h-4" />
              Solução Enterprise
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-accent leading-tight mb-6">
              IA Enterprise com Soberania Total de Dados
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Plataforma de atendimento inteligente para médias e grandes empresas que precisam de 
              <strong className="text-accent"> conformidade LGPD/HIPAA</strong>, 
              <strong className="text-accent"> integração profunda com sistemas legados</strong> e 
              <strong className="text-accent"> IA multimodal de ponta</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero agendar uma demo do BalanceAI Enterprise.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Agendar Demo Personalizada
                </Button>
              </a>
              <Link href="/contato">
                <Button size="lg" variant="outline">
                  Falar com Especialista
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-4xl">
          <div className="p-8 md:p-12 bg-background border-2 border-accent rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Plano Enterprise</h2>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-accent">R$ 1.899</span>
                <span className="text-lg text-muted-foreground">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Valores customizados para +10.000 atendimentos/mês</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground mb-4">Recursos Inclusos</h3>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">50 usuários simultâneos</p>
                    <p className="text-sm text-muted-foreground">Equipes grandes trabalhando em paralelo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Atendimentos ilimitados</p>
                    <p className="text-sm text-muted-foreground">Sem limite de conversas mensais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">5+ WhatsApps conectados</p>
                    <p className="text-sm text-muted-foreground">Múltiplos números para diferentes departamentos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">SLA 99.9% garantido</p>
                    <p className="text-sm text-muted-foreground">Uptime enterprise com penalidades</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Suporte 24/7 prioritário</p>
                    <p className="text-sm text-muted-foreground">Time dedicado via WhatsApp, e-mail e telefone</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground mb-4">Diferenciais Enterprise</h3>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">IA Generativa Full com RAG Multimodal</p>
                    <p className="text-sm text-muted-foreground">Processa texto, áudio e imagens simultaneamente</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Servidor dedicado (soberania total)</p>
                    <p className="text-sm text-muted-foreground">Dados 100% no Brasil, conformidade LGPD/HIPAA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Integração profunda com sistemas legados</p>
                    <p className="text-sm text-muted-foreground">Salesforce, ERPs, CRMs via Modelo Modular</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Gerente de conta dedicado</p>
                    <p className="text-sm text-muted-foreground">Suporte estratégico mensal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Workflows personalizados</p>
                    <p className="text-sm text-muted-foreground">Automações sob medida para seu processo</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-6 border-t border-border">
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero contratar o plano Enterprise do BalanceAI.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Agendar Demo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Técnicos */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-4">Por Que Escolher BalanceAI Enterprise?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Três diferenciais técnicos que nos destacam de Zenvia, Zendesk e Take Blip
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Diferencial 1: Soberania */}
            <div className="p-8 bg-background border border-border rounded-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">1. Soberania Total de Dados</h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-accent">O problema:</strong> ChatGPT, Gemini e Claude enviam seus dados para servidores nos EUA. 
                Isso viola LGPD para clínicas, escritórios de advocacia e fintechs.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-accent">Nossa solução:</strong> IA roda no seu servidor (AWS/Azure/Google Cloud Brasil) ou on-premises. 
                Zero bytes transitam fora do território brasileiro.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                <Lock className="w-4 h-4" />
                Conformidade LGPD/HIPAA garantida
              </div>
            </div>

            {/* Diferencial 2: RAG Multimodal */}
            <div className="p-8 bg-background border border-border rounded-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">2. RAG Multimodal de Ponta</h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-accent">O problema:</strong> Chatbots tradicionais só entendem texto. 
                Cliente envia foto de produto defeituoso ou áudio de reclamação? Não funciona.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-accent">Nossa solução:</strong> Arquitetura RAG com Whisper (áudio) e CLIP (imagens). 
                IA lê PDFs, ouve gravações de chamadas e vê fotos para responder com contexto completo.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                <Zap className="w-4 h-4" />
                Texto + Áudio + Imagem simultâneos
              </div>
            </div>

            {/* Diferencial 3: Integração Profunda */}
            <div className="p-8 bg-background border border-border rounded-lg">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Workflow className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">3. Integração Profunda (Modelo Modular)</h3>
              <p className="text-muted-foreground mb-4">
                <strong className="text-accent">O problema:</strong> Plataformas genéricas oferecem apenas APIs básicas. 
                Integrar com ERP legado, Salesforce customizado ou sistema proprietário? Impossível.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-accent">Nossa solução:</strong> Arquitetura modular com conectores personalizados. 
                IA consulta estoque no SAP, cria ticket no Jira e atualiza CRM em tempo real.
              </p>
              <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                <Cog className="w-4 h-4" />
                APIs + Webhooks + ETL sob medida
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent mb-4">Casos de Uso Enterprise</h2>
            <p className="text-lg text-muted-foreground">
              Empresas que mais se beneficiam da nossa solução
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">🏥 Redes de Clínicas e Hospitais</h3>
              <p className="text-muted-foreground mb-4">
                Atendimento 24/7 com conformidade HIPAA/LGPD. IA processa prontuários em PDF, áudios de consultas 
                e imagens de exames para responder dúvidas de pacientes sem expor dados sensíveis.
              </p>
              <p className="text-sm text-accent font-semibold">
                ROI: Redução de 40% em no-shows + 30% menos ligações
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">⚖️ Escritórios de Advocacia (Médio/Grande Porte)</h3>
              <p className="text-muted-foreground mb-4">
                Qualificação automática de leads jurídicos com sigilo garantido. IA analisa contratos, 
                petições e áudios de consultas sem enviar dados para servidores externos (conformidade OAB).
              </p>
              <p className="text-sm text-accent font-semibold">
                ROI: Taxa de conversão de 15% → 31% (+107%)
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">🏦 Fintechs e Instituições Financeiras</h3>
              <p className="text-muted-foreground mb-4">
                Análise de crédito em tempo real com PCI-DSS. IA integrada ao Banco Central, Serasa e sistemas 
                internos para aprovar crédito em 15 minutos (vs 48 horas manual).
              </p>
              <p className="text-sm text-accent font-semibold">
                ROI: Inadimplência reduzida de 22% → 14%
              </p>
            </div>

            <div className="p-6 bg-background border border-border rounded-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">🏢 Empresas B2B com Vendas Complexas</h3>
              <p className="text-muted-foreground mb-4">
                Qualificação de leads B2B com integração ao Salesforce. IA analisa histórico de compras, 
                propostas e gravações de calls para pontuar leads e sugerir próximos passos.
              </p>
              <p className="text-sm text-accent font-semibold">
                ROI: Ciclo de vendas reduzido de 90 → 45 dias
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-linear-to-r from-accent/10 to-secondary/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Pronto para Transformar seu Atendimento?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Agende uma demo personalizada de 30 minutos com nosso time técnico. 
            Vamos mapear seus desafios e apresentar uma solução sob medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Quero agendar uma demo do BalanceAI Enterprise.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Agendar Demo Agora
              </Button>
            </a>
            <Link href="/contato">
              <Button size="lg" variant="outline">
                Solicitar Proposta Customizada
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            ✅ Sem compromisso · ✅ Análise gratuita de ROI · ✅ Resposta em 24h
          </p>
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
