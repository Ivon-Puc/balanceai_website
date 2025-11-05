# 📝 Como Publicar Artigos no Blog BalanceAI

## Estrutura do Blog

O blog é completamente funcional com:

- ✅ Lista de artigos com filtro por categoria
- ✅ Páginas individuais para cada post
- ✅ Sistema de compartilhamento
- ✅ SEO otimizado
- ✅ Design responsivo

## Como Adicionar um Novo Post

### Passo 1: Editar o arquivo de dados

Abra o arquivo: `client/src/data/blogPosts.ts`

### Passo 2: Adicionar novo post ao array

Adicione um novo objeto ao array `blogPosts`:

```typescript
{
  slug: "seu-artigo-aqui", // URL amigável (sem espaços, use hífens)
  title: "Título do Seu Artigo",
  excerpt: "Resumo curto do artigo (1-2 frases)",
  content: `
# Título Principal

Seu conteúdo aqui em **Markdown**.

## Subtítulo

- Item 1
- Item 2

### Outro subtítulo

Mais conteúdo com **negrito** e *itálico*.
  `,
  author: "Equipe BalanceAI", // ou nome do autor
  date: "2025-11-05", // formato YYYY-MM-DD
  category: "IA", // IA, Segurança, Negócios, Tecnologia, Conformidade, Produtividade
  readTime: "5 min", // estimativa de tempo de leitura
}
```

### Passo 3: Formatar o conteúdo

O conteúdo suporta Markdown básico:

```markdown
# Título H1

## Título H2

### Título H3

**Negrito**
_Itálico_

- Lista não ordenada
- Item 2

1. Lista ordenada
2. Item 2

[Link](https://exemplo.com)
```

### Passo 4: Testar localmente

```bash
npm run dev
```

Acesse: `http://localhost:5173/blog`

### Passo 5: Fazer Deploy

```bash
git add .
git commit -m "feat(blog): adiciona novo artigo sobre [tema]"
git push
```

O Vercel fará deploy automático!

## Categorias Disponíveis

- **IA** - Inteligência Artificial e tecnologias
- **Segurança** - Soberania de dados, privacidade
- **Negócios** - ROI, estratégia, crescimento
- **Tecnologia** - Arquiteturas, frameworks
- **Conformidade** - LGPD, HIPAA, regulamentações
- **Produtividade** - Automação, eficiência

## Exemplo Completo

```typescript
{
  slug: "como-reduzir-custos-atendimento",
  title: "5 Formas de Reduzir Custos no Atendimento com IA",
  excerpt: "Descubra estratégias práticas para reduzir custos operacionais mantendo qualidade no atendimento ao cliente.",
  content: `
# 5 Formas de Reduzir Custos no Atendimento com IA

Reduzir custos sem comprometer a qualidade é o desafio de toda empresa. Com IA, isso é possível.

## 1. Automatize Consultas Comuns

**80% das consultas** são repetitivas. Automatize-as e libere sua equipe para casos complexos.

## 2. Atendimento 24/7 Sem Custo Extra

IA não precisa de folgas ou turnos noturnos. Atendimento contínuo sem aumentar a folha de pagamento.

## 3. Qualificação Automática de Leads

Direcione leads qualificados para vendas e economize tempo do time comercial.

## 4. Redução de Erros Humanos

Erros custam caro. IA segue processos consistentemente.

## 5. Escalabilidade Instantânea

Picos de demanda não exigem contratação temporária.

## Conclusão

A IA é investimento, não custo. ROI em 3-6 meses é realidade.
  `,
  author: "Equipe BalanceAI",
  date: "2025-11-05",
  category: "Negócios",
  readTime: "4 min",
}
```

## Dicas de SEO

1. **Slug**: Use palavras-chave relevantes separadas por hífen
2. **Título**: Máximo 60 caracteres, inclua palavra-chave principal
3. **Excerpt**: 150-160 caracteres, atrativo e informativo
4. **Content**: Use H2 e H3 para estruturar, inclua palavras-chave naturalmente
5. **Data**: Mantenha atualizada para melhor ranking

## Suporte

Dúvidas? Entre em contato: contato@balanceai.com.br
