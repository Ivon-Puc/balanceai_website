import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import Seo from "@/components/Seo";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-accent/5 to-secondary/10">
      <Seo
        title="Página não encontrada | BalanceAI"
        description="A página que você tentou acessar não existe. Volte para a página inicial."
        path="/404"
      />
      <Card className="w-full max-w-lg mx-4 shadow-lg border border-border bg-card/80 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/10 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-destructive" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>

          <h2 className="text-xl font-semibold text-foreground mb-4">
            Página não encontrada
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            A página que você procura não existe ou foi movida.
            <br />
            Use o botão abaixo para voltar ao início.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 mr-2" />
              Voltar para a Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
