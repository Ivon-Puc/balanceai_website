import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WhatsAppFAB from "./components/WhatsAppFAB";

// Lazy load páginas secundárias
const FAQ = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contato = lazy(() => import("./pages/Contato"));
const Simulador = lazy(() => import("./pages/Simulador"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Páginas verticais e Enterprise
const Enterprise = lazy(() => import("./pages/Enterprise"));
const Advocacia = lazy(() => import("./pages/Advocacia"));
const Contabilidade = lazy(() => import("./pages/Contabilidade"));
const LojasDeCarros = lazy(() => import("./pages/LojasDeCarros"));
const Clinicas = lazy(() => import("./pages/Clinicas"));
const Imobiliarias = lazy(() => import("./pages/Imobiliarias"));
const Academias = lazy(() => import("./pages/Academias"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/enterprise"} component={Enterprise} />
        <Route path={"/advocacia"} component={Advocacia} />
        <Route path={"/contabilidade"} component={Contabilidade} />
        <Route path={"/lojas-de-carros"} component={LojasDeCarros} />
        <Route path={"/clinicas"} component={Clinicas} />
        <Route path={"/imobiliarias"} component={Imobiliarias} />
        <Route path={"/academias"} component={Academias} />
        <Route path={"/blog"} component={Blog} />
        <Route path={"/blog/:slug"} component={BlogPost} />
        <Route path={"/faq"} component={FAQ} />
        <Route path={"/contato"} component={Contato} />
        <Route path={"/simulador"} component={Simulador} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppFAB />
          <SpeedInsights />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
