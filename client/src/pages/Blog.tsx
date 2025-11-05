import { useState } from "react";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import { blogPosts, getCategories } from "@/data/blogPosts";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = getCategories();
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
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block"
              >
                <article className="border border-border rounded-lg overflow-hidden bg-background hover:border-accent/50 hover:shadow-lg transition-all group h-full cursor-pointer">
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
                      <div className="text-accent group-hover:translate-x-1 transition-transform" aria-label={`Ler mais sobre ${post.title}`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
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
