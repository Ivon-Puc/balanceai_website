# ⚙️ Guia Rápido: Configurar Variáveis de Ambiente no Vercel

## 📌 Acesse o Painel do Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login (conecte com sua conta GitHub)
3. Importe o repositório `Ivon-Puc/balanceai_website`

## 🔑 Configurar Environment Variables

### Passo a Passo

1. No dashboard do projeto, clique em **Settings** (menu superior)
2. No menu lateral, clique em **Environment Variables**
3. Adicione as variáveis abaixo:

### ✅ Variáveis Necessárias

| Key | Value | Ambiente |
|-----|-------|----------|
| `VITE_CLOUDINARY_CLOUD_NAME` | `ivon-matos-analista` | Production, Preview, Development |

### 🎨 Variáveis Opcionais (Branding)

| Key | Value | Ambiente |
|-----|-------|----------|
| `VITE_APP_TITLE` | `BalanceAI - IA para Atendimento` | Production, Preview, Development |
| `VITE_APP_LOGO` | `/favicon.png` | Production, Preview, Development |

### 📊 Variáveis Opcionais (Analytics - se usar Umami)

| Key | Value | Ambiente |
|-----|-------|----------|
| `VITE_ANALYTICS_ENDPOINT` | `https://analytics.seudominio.com` | Production |
| `VITE_ANALYTICS_WEBSITE_ID` | `00000000-0000-0000-0000-000000000000` | Production |

## 🚀 Como Adicionar

Para cada variável:

1. Clique em **Add New**
2. Digite o **Key** (ex: `VITE_CLOUDINARY_CLOUD_NAME`)
3. Digite o **Value** (ex: `ivon-matos-analista`)
4. Selecione os ambientes:
   - ✅ Production
   - ✅ Preview (opcional)
   - ✅ Development (opcional)
5. Clique em **Save**

## 🔄 Fazer Redeploy

Depois de adicionar as variáveis:

1. Vá para a aba **Deployments**
2. Encontre o último deployment
3. Clique nos 3 pontos (⋯)
4. Selecione **Redeploy**
5. Confirme **Redeploy**

Pronto! O site será rebuildeado com as variáveis de ambiente configuradas.

## 📝 Notas Importantes

- **NUNCA** adicione `VITE_CLOUDINARY_API_SECRET` no front-end
- Variáveis com prefixo `VITE_` são expostas ao navegador
- Para uploads seguros, configure Upload Presets no Cloudinary
- `.env.local` é apenas para desenvolvimento local (não commitar)

## 🔗 Links Úteis

- [Vercel Environment Variables Docs](https://vercel.com/docs/projects/environment-variables)
- [Cloudinary Upload Presets](https://cloudinary.com/documentation/upload_presets)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
