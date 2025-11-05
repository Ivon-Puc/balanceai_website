import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

interface VerticalLandingProps {
  vertical: {
    slug: string;
    h1: string;
    metaTitle: string;
    metaDescription: string;
    subheadline: string;
    painPoints: { title: string; description: string }[];
    benefits: { icon: string; title: string; description: string }[];
    stats: { value: string; label: string }[];
    cta: { primary: string; secondary: string };
    testimonial?: { name: string; company: string; text: string };
  };
}

export default function VerticalLanding({ vertical }: VerticalLandingProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title={vertical.metaTitle}
        description={vertical.metaDescription}
        path={`/${vertical.slug}`}
        type="website"
      />

      <Header currentPage={vertical.slug as any} />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 border-b border-border">
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card/30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-accent leading-tight mb-6">
              {vertical.h1}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              {vertical.subheadline}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
              {vertical.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, vertical.cta.primary)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Teste Grátis por 14 Dias
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href="/simulador">
                <Button size="lg" variant="outline">
                  Calcular Meu ROI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 border-b border-border bg-card/30">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4">Desafios Comuns no Setor</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {vertical.painPoints.map((point, idx) => (
              <div key={idx} className="p-6 bg-background border border-border rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-2">❌ {point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4">Como o BalanceAI Resolve</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vertical.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 bg-background border border-border rounded-lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial (if provided) */}
      {vertical.testimonial && (
        <section className="py-20 border-b border-border bg-card/30">
          <div className="container max-w-4xl">
            <div className="p-8 bg-background border border-accent rounded-lg">
              <p className="text-lg text-muted-foreground italic mb-6">
                "{vertical.testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                  {vertical.testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{vertical.testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{vertical.testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-20 bg-linear-to-r from-accent/10 to-secondary/10">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-accent mb-4">
            Pronto para Automatizar seu Atendimento?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Teste grátis por 14 dias sem precisar de cartão de crédito. Setup em menos de 10 minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={buildWhatsAppLink(CONTACT.phoneE164, vertical.cta.primary)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Começar Teste Grátis
              </Button>
            </a>
            <Link href="/contato">
              <Button size="lg" variant="outline">
                Agendar Demonstração
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            ✅ Sem compromisso · ✅ Cancele quando quiser · ✅ Suporte em português
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
