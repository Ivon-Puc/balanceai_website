import { useState, useEffect } from "react";
import { TrendingUp, Users, DollarSign, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

interface SimulationResult {
  monthlySetup: number;
  monthlySoftware: number;
  monthlySupport: number;
  totalMonthly: number;
  annualCost: number;
  estimatedSavings: number;
  paybackMonths: number;
  roi: number;
}

export default function Simulador() {
  const [employees, setEmployees] = useState(10);
  const [avgCostPerEmployee, setAvgCostPerEmployee] = useState(3000);
  const [automationRate, setAutomationRate] = useState(80);
  const [result, setResult] = useState<SimulationResult | null>(null);

  useEffect(() => {
    calculateROI();
  }, [employees, avgCostPerEmployee, automationRate]);

  const calculateROI = () => {
    // Custos do BalanceAI
    const monthlySetup = 2500; // Setup inicial amortizado
    const monthlySoftware = employees * 500; // R$ 500 por usuário
    const monthlySupport = employees * 200; // R$ 200 por usuário
    const totalMonthly = monthlySetup + monthlySoftware + monthlySupport;
    const annualCost = totalMonthly * 12;

    // Economia estimada
    const currentAnnualCost = employees * avgCostPerEmployee * 12;
    const savingsRate = automationRate / 100;
    const estimatedSavings = currentAnnualCost * savingsRate * 0.3; // 30% de redução de custos

    // ROI
    const netSavings = estimatedSavings - annualCost;
    const roi = (netSavings / annualCost) * 100;
    const paybackMonths = annualCost / (estimatedSavings / 12);

    setResult({
      monthlySetup,
      monthlySoftware,
      monthlySupport,
      totalMonthly,
      annualCost,
      estimatedSavings,
      paybackMonths: Math.max(1, Math.round(paybackMonths)),
      roi: Math.max(0, Math.round(roi)),
    });
  };

  const projections = result
    ? [
        { month: 1, cost: result.annualCost / 12, savings: result.estimatedSavings / 12 },
        { month: 3, cost: (result.annualCost / 12) * 3, savings: (result.estimatedSavings / 12) * 3 },
        { month: 6, cost: (result.annualCost / 12) * 6, savings: (result.estimatedSavings / 12) * 6 },
        { month: 12, cost: result.annualCost, savings: result.estimatedSavings },
      ]
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title="Simulador de ROI | BalanceAI"
        description="Simule investimento, economia e payback da plataforma BalanceAI. Ajuste variáveis e estime o ROI anual."
        path="/simulador"
        type="website"
      />
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-8 h-8 bg-linear-to-br from-accent to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">BA</span>
            </div>
            <span className="font-bold text-lg text-accent">BalanceAI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm hover:text-accent transition">Home</a>
            <a href="/blog" className="text-sm hover:text-accent transition">Blog</a>
            <a href="/faq" className="text-sm hover:text-accent transition">FAQ</a>
            <a href="/contato" className="text-sm hover:text-accent transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-accent mb-4">Simulador de Investimento</h1>
            <p className="text-lg text-muted-foreground">
              Calcule o ROI e veja quanto você pode economizar com o BalanceAI.
            </p>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-16 flex-1">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Controls */}
            <div className="space-y-8">
              <div className="border border-border rounded-lg p-8 bg-card/30">
                <h2 className="text-2xl font-bold text-accent mb-8">Dados da Sua Empresa</h2>

                <div className="space-y-6">
                  {/* Employees */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-accent" />
                        Número de Agentes de Atendimento
                      </div>
                      <span className="text-2xl font-bold text-accent">{employees}</span>
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>1</span>
                      <span>100</span>
                    </div>
                  </div>

                  {/* Cost per Employee */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-accent" />
                        Custo Mensal por Agente
                      </div>
                      <span className="text-2xl font-bold text-accent">
                        R$ {avgCostPerEmployee.toLocaleString("pt-BR")}
                      </span>
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="10000"
                      step="100"
                      value={avgCostPerEmployee}
                      onChange={(e) => setAvgCostPerEmployee(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>R$ 1.000</span>
                      <span>R$ 10.000</span>
                    </div>
                  </div>

                  {/* Automation Rate */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-accent" />
                        Taxa de Automação
                      </div>
                      <span className="text-2xl font-bold text-accent">{automationRate}%</span>
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      step="5"
                      value={automationRate}
                      onChange={(e) => setAutomationRate(Number(e.target.value))}
                      className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>20%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="border border-border rounded-lg p-6 bg-accent/5">
                <h3 className="font-bold text-foreground mb-3">Como funciona?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Ajuste o número de agentes de atendimento</li>
                  <li>✓ Defina o custo mensal atual por agente</li>
                  <li>✓ Veja a economia estimada com BalanceAI</li>
                  <li>✓ Calcule o payback e ROI</li>
                </ul>
              </div>
            </div>

            {/* Results */}
            {result && (
              <div className="space-y-8">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-border rounded-lg p-6 bg-card/30">
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Investimento Anual</p>
                    <p className="text-3xl font-bold text-accent">
                      R$ {result.annualCost.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card/30">
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Economia Anual</p>
                    <p className="text-3xl font-bold text-success">
                      R$ {result.estimatedSavings.toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card/30">
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">Payback</p>
                    <p className="text-3xl font-bold text-accent">{result.paybackMonths} meses</p>
                  </div>

                  <div className="border border-border rounded-lg p-6 bg-card/30">
                    <p className="text-xs text-muted-foreground uppercase font-semibold mb-2">ROI Anual</p>
                    <p className="text-3xl font-bold text-success">{result.roi}%</p>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="border border-border rounded-lg p-6 bg-card/30">
                  <h3 className="font-bold text-foreground mb-4">Custos Mensais do BalanceAI</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Setup Inicial (amortizado)</span>
                      <span className="font-semibold text-foreground">
                        R$ {result.monthlySetup.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Licença de Software</span>
                      <span className="font-semibold text-foreground">
                        R$ {result.monthlySoftware.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Suporte & Knowledge Ops</span>
                      <span className="font-semibold text-foreground">
                        R$ {result.monthlySupport.toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3">
                      <span className="font-bold text-foreground">Total Mensal</span>
                      <span className="text-xl font-bold text-accent">
                        R$ {result.totalMonthly.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Projection Chart */}
                <div className="border border-border rounded-lg p-6 bg-card/30">
                  <h3 className="font-bold text-foreground mb-4">Projeção de 12 Meses</h3>
                  <div className="space-y-4">
                    {projections.map((proj, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">{proj.month} mês{proj.month > 1 ? "es" : ""}</span>
                          <span className="font-semibold text-foreground">
                            Economia: R$ {(proj.savings - proj.cost).toLocaleString("pt-BR", { maximumFractionDigits: 0 })}
                          </span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-success h-full rounded-full transition-all"
                            style={{
                              width: `${Math.min(100, ((proj.savings - proj.cost) / (result.estimatedSavings / 2)) * 100)}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a href="/contato" className="block w-full">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base">
                    Agendar Demonstração
                  </Button>
                </a>

                <a
                  href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Acabei de simular o ROI e quero uma demonstração do BalanceAI.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full bg-[#25D366] text-white hover:opacity-90 h-12 text-base">
                    Falar no WhatsApp
                  </Button>
                </a>
              </div>
            )}
          </div>
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
