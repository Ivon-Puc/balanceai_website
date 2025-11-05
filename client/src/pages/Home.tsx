import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Database, Cog, Shield, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BA</span>
            </div>
            <span className="font-bold text-lg text-accent">BalanceAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#solucao" className="text-sm hover:text-accent transition">Solução</a>
            <a href="/#diferenciais" className="text-sm hover:text-accent transition">Diferenciais</a>
            <a href="/#investimento" className="text-sm hover:text-accent transition">Investimento</a>
            <a href="/blog" className="text-sm hover:text-accent transition">Blog</a>
            <a href="/faq" className="text-sm hover:text-accent transition">FAQ</a>
            <a href="/simulador" className="text-sm hover:text-accent transition">Simulador</a>
            <a href="/contato" className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 py-2 rounded-lg text-sm font-medium transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-[600px] text-center gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Plataforma de IA em Produção
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-accent leading-tight max-w-4xl">
            O Cérebro de IA que Conecta
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Uma plataforma de inteligência de atendimento que lê, ouve e entende todo o histórico do seu cliente, 24/7. Não é apenas um chatbot, é um agente de vendas e suporte completo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              Solicitar Demo <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-card">
              Saiba Mais
            </Button>
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
                <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Conformidade Regulatória</h3>
                  <p className="text-muted-foreground">Atende LGPD, HIPAA, PCI-DSS e outras regulamentações que exigem dados locais.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Controle Total</h3>
                  <p className="text-muted-foreground">Cliente mantém propriedade e controle completo sobre seus dados e infraestrutura.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Privacidade Garantida</h3>
                  <p className="text-muted-foreground">Nenhum dado é compartilhado com terceiros ou plataformas externas de IA.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent/10 to-secondary/10 rounded-lg p-8 border border-border">
              <Shield className="w-16 h-16 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">Auto-Hospedada</h3>
              <p className="text-muted-foreground mb-6">
                Via Ollama e Chatwoot. Seus dados permanecem na sua infraestrutura, não em servidores de terceiros.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle className="w-4 h-4" />
                  <span>Setores: Saúde, Finanças, Direito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investimento" className="py-20 border-t border-border bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Oportunidade de Investimento</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Buscamos um investimento seed para acelerar o crescimento
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Investment 1 */}
            <div className="p-8 bg-background border border-border rounded-lg">
              <div className="text-4xl font-bold text-destructive mb-4">1</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Finalizar o Produto</h3>
              <p className="text-muted-foreground mb-4">
                Transformar a arquitetura em um pacote de implantação estável e pronto para produção.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Estabilizar MVP</li>
                <li>✓ Documentação completa</li>
                <li>✓ Testes de produção</li>
              </ul>
            </div>
            
            {/* Investment 2 */}
            <div className="p-8 bg-background border border-border rounded-lg">
              <div className="text-4xl font-bold text-secondary mb-4">2</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Equipe Inicial</h3>
              <p className="text-muted-foreground mb-4">
                Contratar profissionais especializados para escalar operações e vendas.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 1 Engenheiro DevOps</li>
                <li>✓ 1 Vendedor Técnico</li>
                <li>✓ Infraestrutura escalável</li>
              </ul>
            </div>
            
            {/* Investment 3 */}
            <div className="p-8 bg-background border border-border rounded-lg">
              <div className="text-4xl font-bold text-accent mb-4">3</div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Provas de Conceito</h3>
              <p className="text-muted-foreground mb-4">
                Implantar em 3-5 empresas beta para validar o modelo e coletar métricas de ROI.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ 3-5 empresas beta</li>
                <li>✓ Métricas de ROI</li>
                <li>✓ Redução 90% tempo resposta</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-border bg-gradient-to-r from-accent/10 to-secondary/10">
        <div className="container text-center">
          <h2 className="text-4xl font-bold text-accent mb-4">Próximos Passos</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende uma demonstração técnica do MVP e conheça como o BalanceAI pode transformar seu atendimento.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
            Solicitar Demonstração <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BA</span>
                </div>
                <span className="font-bold text-accent">BalanceAI</span>
              </div>
              <p className="text-sm text-muted-foreground">Inteligência de atendimento para empresas modernas.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Solução</a></li>
                <li><a href="#" className="hover:text-accent transition">Diferenciais</a></li>
                <li><a href="#" className="hover:text-accent transition">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Sobre</a></li>
                <li><a href="#" className="hover:text-accent transition">Blog</a></li>
                <li><a href="#" className="hover:text-accent transition">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-accent transition">Termos</a></li>
                <li><a href="#" className="hover:text-accent transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 BalanceAI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
