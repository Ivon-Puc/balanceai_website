# BalanceAI - Plataforma de Inteligência de Atendimento

Site profissional para apresentação da plataforma BalanceAI, construído com React 19, Tailwind CSS 4 e shadcn/ui.

## 🎯 Sobre o BalanceAI

BalanceAI é uma plataforma de inteligência de atendimento que utiliza IA com arquitetura Multimodal RAG para conectar múltiplos canais (WhatsApp, Website, Telefone) em um único super-agente. Oferece resposta imediata (80% de automação), memória perfeita do cliente e automação de workflows 24/7, com foco em soberania de dados para setores regulados.

## 🚀 Funcionalidades

- **Home Page** - Apresentação profissional com Hero section, Features, Soberania de Dados, Investimento e CTA
- **Página FAQ** - 12 perguntas frequentes organizadas em 5 categorias com filtro por categoria
- **Design Responsivo** - Totalmente otimizado para mobile, tablet e desktop
- **Paleta de Cores Profissional** - Verde-azulado (#159A9C), Mint, Cinzas neutros e cores de destaque
- **Navegação Intuitiva** - Menu principal com links para todas as seções

## 📋 Estrutura do Projeto

```
balanceai_website/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── pages/           # Páginas React
│   │   │   ├── Home.tsx     # Página principal
│   │   │   ├── FAQ.tsx      # Página de FAQ
│   │   │   └── NotFound.tsx # Página 404
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── contexts/        # React Contexts
│   │   ├── hooks/           # Custom Hooks
│   │   ├── lib/             # Utilitários
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   ├── index.html
│   ├── package.json
│   └── tsconfig.json
├── server/                  # Placeholder para backend
├── shared/                  # Tipos compartilhados
├── README.md
├── todo.md                  # Checklist de funcionalidades
└── package.json
```

## 🛠️ Tecnologias

- **React 19** - Framework UI
- **Tailwind CSS 4** - Utilitários CSS
- **shadcn/ui** - Componentes UI profissionais
- **TypeScript** - Type safety
- **Wouter** - Roteamento client-side
- **Lucide React** - Ícones
- **Vite** - Build tool

## 📦 Instalação

### Pré-requisitos

- Node.js 18+
- npm ou pnpm

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/balanceai-website.git
cd balanceai-website
```

2. **Instale as dependências**

```bash
npm install
# ou
pnpm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
# ou
pnpm dev
```

O site estará disponível em `http://localhost:5173`

## 🎨 Paleta de Cores

| Elemento    | Cor           | Código  |
| ----------- | ------------- | ------- |
| Primária    | Verde-azulado | #159A9C |
| Fundo       | Branco        | #FFFFFF |
| Fundo Sutil | Cinza 50      | #F3F4F6 |
| Destaque    | Mint          | #DEEFE7 |
| Sucesso     | Verde         | #10B981 |
| Aviso       | Laranja       | #F59E0B |
| Erro        | Vermelho      | #EF4444 |
| Informações | Azul          | #3B82F6 |

## 📄 Páginas

### Home (`/`)

Página principal com:

- Hero section com proposta de valor
- Três capacidades principais (Resposta Imediata, Memória Perfeita, Automação)
- Seção de Soberania de Dados
- Oportunidade de Investimento
- Chamada para ação (CTA)

### FAQ (`/faq`)

Página de perguntas frequentes com:

- 12 perguntas organizadas em 5 categorias
- Filtro por categoria
- Accordion expansível
- CTA para contato

## 🔧 Desenvolvimento

### Adicionar uma nova página

1. Crie um novo arquivo em `client/src/pages/NomePagina.tsx`
2. Implemente o componente React
3. Adicione a rota em `client/src/App.tsx`
4. Atualize a navegação em `client/src/pages/Home.tsx`

### Customizar cores

Edite as variáveis CSS em `client/src/index.css`:

```css
:root {
  --primary: rgb(21 154 156); /* Verde-azulado */
  --accent: rgb(21 154 156);
  /* ... outras cores */
}
```

### Adicionar componentes shadcn/ui

```bash
npx shadcn-ui@latest add nome-do-componente
```

## 🚀 Build e Deployment

### Build para produção

```bash
npm run build
# ou
pnpm build
```

Os arquivos otimizados estarão em `dist/`

### Deploy no Vercel (recomendado)

1. Faça push do código para GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente em **Settings → Environment Variables**:

   **Necessárias:**
   - `VITE_CLOUDINARY_CLOUD_NAME` = `ivon-matos-analista`

   **Opcionais (Branding):**
   - `VITE_APP_TITLE` = `BalanceAI - IA para Atendimento`
   - `VITE_APP_LOGO` = `/favicon.png`

   **Opcionais (Analytics):**
   - `VITE_ANALYTICS_ENDPOINT` = URL do seu Umami/Analytics
   - `VITE_ANALYTICS_WEBSITE_ID` = UUID do seu site

   **Avançadas (se necessário):**
   - `VITE_OAUTH_PORTAL_URL` = URL de autenticação externa
   - `VITE_APP_ID` = ID da aplicação
   - `VITE_FRONTEND_FORGE_API_KEY` = Chave para Forge API
   - `VITE_FRONTEND_FORGE_API_URL` = URL da Forge API

4. Clique em "Deploy"

**Importante:** Nunca exponha API Secret do Cloudinary no front-end. Apenas `VITE_CLOUDINARY_CLOUD_NAME` (não é segredo). Uploads devem ser assinados no backend.

### Deploy em outros serviços

O site é um SPA estático e pode ser deployado em qualquer serviço que suporte hosting estático:

- **Netlify** - Conecte o repositório GitHub
- **GitHub Pages** - Configure em Settings > Pages
- **AWS S3 + CloudFront**
- **Firebase Hosting**
- **Cloudflare Pages**

## 📝 Variáveis de Ambiente

### Desenvolvimento Local

Crie `client/.env.local` baseado em `client/.env.example`:

```env
# Necessário
VITE_CLOUDINARY_CLOUD_NAME=ivon-matos-analista

# Opcional (Branding)
VITE_APP_TITLE=BalanceAI - IA para Atendimento
VITE_APP_LOGO=/favicon.png

# Opcional (Analytics)
# VITE_ANALYTICS_ENDPOINT=https://analytics.seudominio.com
# VITE_ANALYTICS_WEBSITE_ID=00000000-0000-0000-0000-000000000000
```

### Produção (Vercel)

Configure em **Settings → Environment Variables** as mesmas chaves listadas acima.

## 🧪 Testes

```bash
npm run test
# ou
pnpm test
```

## 📊 Performance

- ⚡ Vite para build rápido
- 🎯 Tree-shaking automático
- 📦 Code splitting por rota
- 🖼️ Otimização de imagens
- 🎨 CSS purging com Tailwind

## 🔒 Segurança

- TypeScript para type safety
- Componentes shadcn/ui auditados
- Sem dependências desnecessárias
- HTTPS recomendado em produção

## 📞 Contato e Suporte

- **Email**: contato@balanceai.com.br
- **GitHub**: Issues neste repositório
- **Website**: https://balanceai.com.br

## 📄 Licença

Este projeto é propriedade do BalanceAI. Todos os direitos reservados.

## 🤝 Contribuindo

Para sugestões ou melhorias, entre em contato através dos canais acima.

---

**Desenvolvido com ❤️ para transformar o atendimento ao cliente**
