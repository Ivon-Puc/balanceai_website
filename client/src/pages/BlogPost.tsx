import { useRoute } from "wouter";
import { Calendar, User, ArrowLeft, Share2, ArrowUp, Link as LinkIcon, Check } from "lucide-react";
import { Link } from "wouter";
import { marked, type TokensList, type Tokens } from "marked";
import { useState, useEffect } from "react";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import { getPostBySlug } from "@/data/blogPosts";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

// Configurar marked para renderizar corretamente
marked.setOptions({
  breaks: true,
  gfm: true,
});

// Utils simples para gerar slugs estáveis (âncoras)
function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

type TocItem = { id: string; text: string; level: number; number: string };

function buildTocFromTokens(tokens: TokensList): TocItem[] {
  const toc: TocItem[] = [];
  let h2 = 0;
  let h3 = 0;
  let h4 = 0;

  tokens.forEach((tk) => {
    if ((tk as Tokens.Heading).type === "heading") {
      const heading = tk as Tokens.Heading;
      const level = heading.depth;
      if (level >= 2 && level <= 4) {
        if (level === 2) {
          h2 += 1; h3 = 0; h4 = 0;
        } else if (level === 3) {
          h3 += 1; h4 = 0;
        } else if (level === 4) {
          h4 += 1;
        }
        const number = level === 2 ? `${h2}` : level === 3 ? `${h2}.${h3}` : `${h2}.${h3}.${h4}`;
        const base = slugify(heading.text);
        const id = `${base}-${number.replace(/\./g, "-")}`;
        toc.push({ id, text: heading.text, level, number });
      }
    }
  });
  return toc;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? getPostBySlug(params.slug) : undefined;
  const [activeSection, setActiveSection] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scrollspy: detecta seção ativa durante scroll
  useEffect(() => {
    const handleScroll = () => {
      // Mostra botão "voltar ao topo" após 300px
      setShowScrollTop(window.scrollY > 300);

      // Detecta heading visível
      const headings = document.querySelectorAll("h2[id], h3[id], h4[id]");
      let current = "";
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 120 && rect.top >= -rect.height) {
          current = heading.id;
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyLinkToClipboard = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(""), 2000);
    });
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header currentPage="blog" />
        <div className="container flex-1 flex items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-accent mb-4">Post não encontrado</h1>
            <p className="text-muted-foreground mb-8">O artigo que você está procurando não existe.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-accent hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const shareOnWhatsApp = () => {
    const url = `https://balanceai.com.br/blog/${post.slug}`;
    const text = `${post.title} - ${post.excerpt}`;
    window.open(buildWhatsAppLink(CONTACT.phoneE164, `${text}\n\n${url}`), '_blank');
  };

  // Gera TOC a partir dos tokens
  const tokens = marked.lexer(post.content);
  const tocItems = buildTocFromTokens(tokens);

  // Hook para adicionar numeração e botões após renderização
  useEffect(() => {
    const addNumberingAndButtons = () => {
      let h2 = 0, h3 = 0, h4 = 0;
      
      // Adiciona IDs e numeração aos headings
      document.querySelectorAll('h2, h3, h4').forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1));
        if (level >= 2 && level <= 4) {
          if (level === 2) { h2 += 1; h3 = 0; h4 = 0; }
          if (level === 3) { h3 += 1; h4 = 0; }
          if (level === 4) { h4 += 1; }
          
          const number = level === 2 ? `${h2}` : level === 3 ? `${h2}.${h3}` : `${h2}.${h3}.${h4}`;
          const id = `${slugify(heading.textContent || '')}-${number.replace(/\./g, "-")}`;
          
          heading.id = id;
          heading.className = 'group relative';
          heading.innerHTML = `
            <span class="mr-2 text-muted-foreground">${number}</span>${heading.textContent}
            <button 
              onclick="copyLinkToSection('${id}')"
              class="ml-2 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center justify-center w-6 h-6 text-muted-foreground hover:text-accent"
              aria-label="Copiar link"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
            </button>
          `;
        }
      });
    };

    // Adiciona função global para copiar link
    (window as any).copyLinkToSection = (id: string) => {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      navigator.clipboard.writeText(url).then(() => {
        // Feedback visual temporário seria adicionado aqui
      });
    };

    // Executa após um pequeno delay para garantir que o conteúdo foi renderizado
    const timer = setTimeout(addNumberingAndButtons, 100);
    return () => clearTimeout(timer);
  }, [post.content]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title={`${post.title} | Blog BalanceAI`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
      />

      <Header currentPage="blog" />

      {/* Back Button */}
      <div className="border-b border-border bg-card/30">
        <div className="container py-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="flex-1">
        <header className="py-16 border-b border-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="container relative z-10 max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold text-accent uppercase bg-accent/10 px-4 py-1.5 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground">{post.readTime} de leitura</span>
            </div>
            
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("pt-BR", { 
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    })}
                  </time>
                </div>
              </div>
              
              <button
                onClick={shareOnWhatsApp}
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition"
                aria-label="Compartilhar no WhatsApp"
              >
                <Share2 className="w-5 h-5" />
                Compartilhar
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <section className="py-16">
          <div className="container max-w-4xl">
            {/* Sumário (TOC) */}
            {tocItems.length > 0 && (
              <div className="mb-10 p-5 bg-card border border-border rounded-lg">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Sumário</h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {tocItems.map((item) => (
                    <li key={item.id} className="text-muted-foreground">
                      <a
                        href={`#${item.id}`}
                        className={`hover:text-accent transition ${
                          activeSection === item.id ? "text-accent font-semibold" : ""
                        }`}
                        style={{ paddingLeft: `${(item.level - 2) * 16}px` }}
                      >
                        <span className="mr-2 text-foreground/70">{item.number}</span>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-10 prose-h1:text-accent
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-10 prose-h2:pt-8 prose-h2:border-b prose-h2:border-border
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-8 prose-h3:pt-6 prose-h3:border-b prose-h3:border-border
                prose-h4:text-xl prose-h4:mt-10 prose-h4:mb-6
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-8 prose-p:mt-6
                prose-strong:text-accent prose-strong:font-semibold prose-strong:block prose-strong:mb-4 prose-strong:mt-6
                prose-b:text-accent prose-b:font-semibold prose-b:block prose-b:mb-4 prose-b:mt-6
                prose-ul:my-8 prose-ul:text-muted-foreground
                prose-ol:my-8 prose-ol:text-muted-foreground
                prose-li:my-4 prose-li:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-table:w-full prose-table:border-collapse prose-table:my-10
                prose-th:border prose-th:border-border prose-th:bg-accent/10 prose-th:p-3 prose-th:text-left prose-th:font-semibold
                prose-td:border prose-td:border-border prose-td:p-3
                prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-8
                prose-hr:my-16 prose-hr:border-border
              "
              dangerouslySetInnerHTML={{ __html: marked(post.content) }}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-border bg-linear-to-r from-accent/10 to-secondary/10">
          <div className="container max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Gostou deste conteúdo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Descubra como o BalanceAI pode transformar o atendimento da sua empresa.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, `Olá! Li o artigo "${post.title}" e gostaria de saber mais sobre o BalanceAI.`)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-lg font-semibold hover:opacity-90 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition"
              >
                Agendar Demonstração
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; 2025 BalanceAI. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Botão Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 transition-all z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
