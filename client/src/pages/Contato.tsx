import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { buildWhatsAppLink, CONTACT } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envio de email
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);

    // Resetar formulário após 3 segundos
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Seo
        title="Contato | BalanceAI"
        description="Fale com a BalanceAI: agende uma demonstração, tire dúvidas sobre preços e integrações. Atendimento via e-mail e WhatsApp."
        path="/contato"
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
            <a href="/contato" className="text-sm hover:text-accent transition font-semibold text-accent">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-accent mb-4">Entre em Contato</h1>
            <p className="text-lg text-muted-foreground">
              Tem dúvidas sobre o BalanceAI? Quer agendar uma demonstração? Entre em contato conosco!
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 flex-1">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="border border-border rounded-lg p-6 bg-card/30">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">{CONTACT.email}</p>
              <p className="text-sm text-muted-foreground mt-2">Responderemos em até 24 horas</p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/30">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">{CONTACT.phoneDisplay}</p>
              <a
                href={buildWhatsAppLink(CONTACT.phoneE164, "Olá! Gostaria de falar com a BalanceAI.")}
                className="inline-block mt-3 text-sm bg-[#25D366] text-white px-3 py-2 rounded-lg hover:opacity-90 transition"
                target="_blank"
                rel="noopener noreferrer"
              >Abrir no WhatsApp</a>
              <p className="text-sm text-muted-foreground mt-2">Seg-Sex, 9h às 18h</p>
            </div>

            <div className="border border-border rounded-lg p-6 bg-card/30">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Localização</h3>
              <p className="text-muted-foreground">São Paulo, SP</p>
              <p className="text-sm text-muted-foreground mt-2">Brasil</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="border border-border rounded-lg p-8 bg-card/30">
              <h2 className="text-2xl font-bold text-accent mb-6">Envie sua mensagem</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Mensagem enviada com sucesso!</h3>
                  <p className="text-muted-foreground text-center">
                    Obrigado por entrar em contato. Responderemos em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="(11) 9 0000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Nome da empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="demo">Solicitar Demonstração</option>
                      <option value="pricing">Informações de Preço</option>
                      <option value="partnership">Parceria</option>
                      <option value="support">Suporte Técnico</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Conte-nos mais sobre sua necessidade..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obrigatórios
                  </p>
                </form>
              )}
            </div>
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
