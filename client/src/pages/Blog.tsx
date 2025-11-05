import { useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import { CONTACT } from "@/lib/utils";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Como a IA está transformando o atendimento ao cliente",
    excerpt: "Descubra como a inteligência artificial está revolucionando a forma como as empresas interagem com seus clientes.",
    content: "A inteligência artificial está mudando fundamentalmente o cenário do atendimento ao cliente. Com tecnologias como Multimodal RAG, as empresas podem agora oferecer respostas imediatas, personalizadas e contextualmente relevantes 24/7. Isso não apenas melhora a satisfação do cliente, mas também reduz significativamente os custos operacionais.",
    author: "João Silva",
    date: "2025-11-04",
    category: "IA",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Soberania de dados: Por que é crucial para seu negócio",
    excerpt: "Entenda a importância de manter seus dados sob controle e como a auto-hospedagem protege sua empresa.",
    content: "A soberania de dados não é apenas uma questão de conformidade regulatória, é uma vantagem competitiva. Empresas que mantêm controle total sobre seus dados conseguem inovar mais rapidamente, proteger informações sensíveis e garantir conformidade com legislações locais como LGPD, HIPAA e PCI-DSS.",
    author: "Maria Santos",
    date: "2025-10-28",
    category: "Segurança",
    readTime: "7 min",
  },
  {
    id: "3",
    title: "ROI de plataformas de atendimento inteligente",
    excerpt: "Análise detalhada do retorno sobre investimento ao implementar soluções de IA para atendimento.",
    content: "Empresas que implementam plataformas de atendimento inteligente como BalanceAI relatam: redução de 80% no tempo de resposta, aumento de 50% em conversão de leads, redução de 20-30% em custos operacionais e satisfação de cliente acima de 95%. O payback típico ocorre em 3-6 meses.",
    author: "Carlos Oliveira",
    date: "2025-10-15",
    category: "Negócios",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "Multimodal RAG: A tecnologia por trás do BalanceAI",
    excerpt: "Entenda como a arquitetura Multimodal RAG permite que o BalanceAI processe texto, áudio, imagens e vídeos.",
    content: "A arquitetura Multimodal RAG (Retrieval-Augmented Generation) é o coração do BalanceAI. Ela combina a capacidade de processar múltiplos tipos de dados (texto, áudio, imagens, vídeos) com a busca inteligente de informações relevantes na base de conhecimento da empresa. Isso resulta em respostas mais precisas e contextualizadas.",
    author: "Ana Costa",
    date: "2025-10-01",
    category: "Tecnologia",
    readTime: "8 min",
  },
  {
    id: "5",
    title: "Setores regulados: Como BalanceAI garante conformidade",
    excerpt: "Saúde, Finanças e Direito exigem conformidade rigorosa. Veja como BalanceAI atende esses requisitos.",
    content: "Setores como Saúde (HIPAA, LGPD), Finanças (PCI-DSS, Banco Central) e Direito (Sigilo Profissional) têm requisitos rigorosos de conformidade. O BalanceAI oferece auto-hospedagem via Ollama e Chatwoot, garantindo que dados sensíveis permaneçam sob controle total da empresa.",
    author: "Roberto Ferreira",
    date: "2025-09-20",
    category: "Conformidade",
    readTime: "6 min",
  },
  {
    id: "6",
    title: "Automação de workflows: Aumentando produtividade",
    excerpt: "Como a automação inteligente de workflows pode aumentar a produtividade da sua equipe em até 300%.",
    content: "A automação de workflows não é apenas sobre fazer mais com menos pessoas. É sobre liberar sua equipe para trabalhar em tarefas de maior valor agregado. BalanceAI automatiza 80% das consultas comuns, qualifica leads, agenda reuniões e transfere casos complexos para agentes humanos com contexto completo.",
    author: "Patricia Gomes",
    date: "2025-09-05",
    category: "Produtividade",
    readTime: "5 min",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", ...Array.from(new Set(blogPosts.map((post) => post.category)))];
  const filteredPosts = selectedCategory === "Todos" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title="Blog BalanceAI | IA, Atendimento e Transformação Digital"
        description="Insights sobre IA aplicada a atendimento, soberania de dados, ROI e automação. Conteúdo prático e atualizado."
        path="/blog"
        type="website"
      />

      {/* Header */}
      <Header currentPage="blog" />

      {/* Hero Section */}
      <section className="py-16 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-accent mb-4">Blog BalanceAI</h1>
            <p className="text-lg text-muted-foreground">
              Artigos, insights e tendências sobre IA, atendimento ao cliente e transformação digital.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border bg-card/30">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-background border border-border text-foreground hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 flex-1">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 transition group"
              >
                <div className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-accent uppercase bg-accent/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm flex-1">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </div>
                    </div>
                    <button className="text-accent hover:text-accent/80 transition" aria-label={`Ler mais sobre ${post.title}`}>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="py-16 border-t border-border bg-linear-to-r from-accent/10 to-secondary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-accent mb-4">Quer publicar um artigo?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Compartilhe seus insights sobre IA, atendimento e transformação digital com nossa comunidade.
          </p>
          <a
            href="mailto:contato@balanceai.com.br?subject=Publicar artigo no Blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
          >
            Entre em Contato
          </a>
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
