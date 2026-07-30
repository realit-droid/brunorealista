#!/usr/bin/env bash
set -e

# 1. Instalar o uv, se ainda não existir
if ! command -v uv &> /dev/null; then
    echo "→ uv não encontrado. A instalar..."
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex" 2>/dev/null \
        || curl -LsSf https://astral.sh/uv/install.sh | sh
    echo "⚠ Reabre o terminal e corre este script outra vez para continuar."
    exit 0
fi

# 2. Instalar o Graphify
echo "→ A instalar o Graphify (CLI graphifyy via uv)..."
uv tool install graphifyy

# 3. Registar a skill neste projeto
echo "→ A registar a skill Graphify neste projeto..."
graphify install --project

# 4. Integração profunda com o Claude Code
echo "→ A instalar a integração com o Claude Code..."
graphify claude install

# 5. Ativar os git hooks (grafo constrói-se sozinho a partir do 1º commit)
echo "→ A ativar os git hooks..."
graphify hook install

echo "✓ Graphify pronto. Ainda sem grafo — constrói-se automaticamente no primeiro commit."
echo "  Uso: graphify query \"...\" no terminal, ou /graphify dentro do Claude Code."
