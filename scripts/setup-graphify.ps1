$ErrorActionPreference = "Stop"

# 1. Instalar o uv, se ainda não existir
if (-not (Get-Command uv -ErrorAction SilentlyContinue)) {
    Write-Host "-> uv nao encontrado. A instalar..."
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    Write-Host "AVISO: Reabre o terminal e corre este script outra vez para continuar."
    exit 0
}

# 2. Instalar o Graphify
Write-Host "-> A instalar o Graphify (CLI graphifyy via uv)..."
uv tool install graphifyy

# 3. Registar a skill neste projeto
Write-Host "-> A registar a skill Graphify neste projeto..."
graphify install --project

# 4. Integração profunda com o Claude Code
Write-Host "-> A instalar a integracao com o Claude Code..."
graphify claude install

# 5. Ativar os git hooks
Write-Host "-> A ativar os git hooks..."
graphify hook install

Write-Host "OK: Graphify pronto. Ainda sem grafo -- constroi-se automaticamente no primeiro commit."
Write-Host "  Uso: graphify query '...' no terminal, ou /graphify dentro do Claude Code."
