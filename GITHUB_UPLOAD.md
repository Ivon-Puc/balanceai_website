# 📤 Guia: Como Fazer Upload do BalanceAI Website no GitHub

Este guia fornece instruções passo a passo para fazer upload do projeto BalanceAI Website no seu repositório GitHub.

## 📋 Pré-requisitos

1. **Conta GitHub** - Crie uma em [github.com](https://github.com) se não tiver
2. **Git instalado** - Baixe em [git-scm.com](https://git-scm.com)
3. **Acesso ao projeto** - O projeto está em `/home/ubuntu/balanceai_website`

## 🚀 Passos para Upload

### Passo 1: Criar um novo repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Preencha os campos:
   - **Repository name**: `balanceai-website` (ou o nome que preferir)
   - **Description**: "Site profissional da plataforma BalanceAI - Inteligência de Atendimento"
   - **Visibility**: Escolha `Public` (para compartilhar) ou `Private` (privado)
   - **Initialize repository**: Deixe desmarcado (não adicione README, .gitignore, license)
3. Clique em **Create repository**

Você verá uma página com instruções. Copie a URL do repositório (algo como `https://github.com/seu-usuario/balanceai-website.git`)

### Passo 2: Configurar Git localmente

Abra o terminal/prompt de comando e navegue até o diretório do projeto:

```bash
cd /home/ubuntu/balanceai_website
```

### Passo 3: Inicializar o repositório Git (se ainda não estiver)

```bash
git init
```

### Passo 4: Adicionar o repositório remoto

Substitua `SEU_USUARIO` e `NOME_REPO` pelos seus dados:

```bash
git remote add origin https://github.com/SEU_USUARIO/NOME_REPO.git
```

**Exemplo:**
```bash
git remote add origin https://github.com/joao-silva/balanceai-website.git
```

### Passo 5: Verificar a configuração

```bash
git remote -v
```

Você deve ver:
```
origin  https://github.com/SEU_USUARIO/NOME_REPO.git (fetch)
origin  https://github.com/SEU_USUARIO/NOME_REPO.git (push)
```

### Passo 6: Adicionar todos os arquivos

```bash
git add .
```

### Passo 7: Criar o primeiro commit

```bash
git commit -m "Initial commit: BalanceAI website with Home and FAQ pages"
```

### Passo 8: Fazer push para o GitHub

```bash
git branch -M main
git push -u origin main
```

Na primeira vez, você pode ser solicitado a autenticar. Use uma das opções:

**Opção A: Autenticação com Token (Recomendado)**

1. Acesse [github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em **Generate new token** → **Generate new token (classic)**
3. Dê um nome (ex: "git-push-token")
4. Selecione os escopos: `repo` (acesso completo a repositórios)
5. Clique em **Generate token**
6. Copie o token
7. Quando solicitado a senha no terminal, cole o token

**Opção B: SSH (Avançado)**

Se preferir usar SSH, configure as chaves SSH no GitHub:
1. Gere uma chave SSH: `ssh-keygen -t ed25519 -C "seu-email@example.com"`
2. Adicione a chave pública em [github.com/settings/keys](https://github.com/settings/keys)
3. Use a URL SSH: `git@github.com:SEU_USUARIO/NOME_REPO.git`

### Passo 9: Verificar o upload

Acesse seu repositório no GitHub: `https://github.com/SEU_USUARIO/NOME_REPO`

Você deve ver todos os arquivos do projeto listados!

## 📝 Comandos Úteis para Futuras Atualizações

Depois que o repositório estiver no GitHub, use estes comandos para fazer updates:

```bash
# Ver status dos arquivos
git status

# Adicionar arquivos modificados
git add .

# Criar um commit
git commit -m "Descrição das mudanças"

# Fazer push para GitHub
git push origin main

# Ver histórico de commits
git log --oneline
```

## 🔄 Workflow Recomendado

1. **Faça mudanças** no código
2. **Teste localmente** com `npm run dev`
3. **Adicione ao Git** com `git add .`
4. **Crie um commit** com `git commit -m "descrição"`
5. **Faça push** com `git push origin main`

## 🌳 Branches (Opcional)

Para trabalhar de forma mais profissional, considere usar branches:

```bash
# Criar uma nova branch para uma feature
git checkout -b feature/nova-funcionalidade

# Fazer commits nesta branch
git add .
git commit -m "Adicionar nova funcionalidade"

# Fazer push da branch
git push origin feature/nova-funcionalidade

# No GitHub, criar um Pull Request para mesclar com main
```

## 🆘 Solução de Problemas

### Erro: "fatal: not a git repository"

**Solução**: Execute `git init` no diretório do projeto

### Erro: "fatal: 'origin' does not appear to be a 'git' repository"

**Solução**: Verifique se adicionou o remote corretamente com `git remote -v`

### Erro: "Permission denied (publickey)"

**Solução**: Use autenticação com token em vez de SSH, ou configure as chaves SSH corretamente

### Erro: "fatal: The current branch main has no upstream branch"

**Solução**: Use `git push -u origin main` na primeira vez

## 📚 Recursos Adicionais

- [Documentação Git](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Git configurado localmente
- [ ] Remote adicionado
- [ ] Arquivos adicionados com `git add .`
- [ ] Primeiro commit criado
- [ ] Push feito com sucesso
- [ ] Repositório visível no GitHub

---

**Pronto! Seu site BalanceAI está no GitHub! 🎉**

Agora você pode compartilhar o link do repositório com investidores, colegas e colaboradores.
