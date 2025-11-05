import { useRoute } from "wouter";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import { marked } from "marked";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import { getPostBySlug } from "@/data/blogPosts";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

// Configurar marked para renderizar corretamente
marked.setOptions({
  breaks: true,
  gfm: true,
});

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? getPostBySlug(params.slug) : undefined;

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
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mt-16 prose-h1:mb-8 prose-h1:text-accent
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pt-8
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:pt-4
                prose-h4:text-xl prose-h4:mt-10 prose-h4:mb-4
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:mt-4
                prose-strong:text-accent prose-strong:font-semibold
                prose-ul:my-6 prose-ul:text-muted-foreground
                prose-ol:my-6 prose-ol:text-muted-foreground
                prose-li:my-3 prose-li:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-table:w-full prose-table:border-collapse prose-table:my-8
                prose-th:border prose-th:border-border prose-th:bg-accent/10 prose-th:p-3 prose-th:text-left prose-th:font-semibold
                prose-td:border prose-td:border-border prose-td:p-3
                prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:my-6
                prose-hr:my-12 prose-hr:border-border
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
    </div>
  );
}
