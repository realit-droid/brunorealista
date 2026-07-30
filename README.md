# brunorealista

Página pessoal de Bruno Realista — portefólio com secções de Ator, Fotógrafo e Programador (Projetos).

## Como começar

1. Clona este repositório
2. Copia o ficheiro `.env.example` e renomeia a cópia para `.env`
3. Preenche o `.env` com os valores reais (chaves de API, etc.)
4. Instala as dependências (ex: `npm install`)
5. Corre o projeto (ex: `npm run dev`)

## ⚠️ Segurança

- Nunca commitar o ficheiro `.env`
- Nunca colocar chaves/segredos diretamente no código
- Verificar sempre o `.gitignore` antes do primeiro commit

## Graphify — Grafo de Conhecimento do Projeto

Este template já vem preparado para o Graphify: transforma o projeto (código,
docs, esquemas, etc.) num grafo de conhecimento que o Claude Code consulta
antes de fazer pesquisas por ficheiros (Glob/Grep).

### Setup (uma vez, após clonar)

PowerShell:

    .\scripts\setup-graphify.ps1

Git Bash / macOS / Linux:

    bash scripts/setup-graphify.sh

Isto instala o CLI (`uv`, se necessário), regista a skill, liga a integração
com o Claude Code e ativa os git hooks. O grafo constrói-se sozinho a partir
do primeiro commit — não há necessidade de o construir manualmente num
projeto vazio.

### Uso no dia a dia

- `/graphify query "pergunta"` — dentro do Claude Code
- `graphify query "pergunta"` — no terminal
- `graphify path "A" "B"` — traçar caminho entre dois nós
- `graphify explain "Nome"` — explicar um nó específico

O grafo fica em `graphify-out/` e pode ser commitado.
