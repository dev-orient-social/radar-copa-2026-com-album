# CORRIGIR_LINK_REDACAO_DB_ENEM.ps1
# Use na pasta RAIZ do site radar-copa-2026-com-album
# Corrige o botão "Conhecer Simulados" do card Redação ENEM para DB ENEM.

$arquivo = Join-Path (Get-Location) "index.html"

if (!(Test-Path $arquivo)) {
    Write-Host "ERRO: index.html nao encontrado nesta pasta." -ForegroundColor Red
    Write-Host "Coloque este arquivo PS1 dentro da pasta raiz: radar-copa-2026-com-album"
    Pause
    exit
}

$backup = Join-Path (Get-Location) ("index_backup_antes_db_enem_" + (Get-Date -Format "yyyyMMdd_HHmmss") + ".html")
Copy-Item $arquivo $backup -Force

$html = Get-Content $arquivo -Raw -Encoding UTF8

$linkDB = "https://cincoregioes-star.github.io/DB-ENEM/?origem=radar_copa_redacao"
$linkAntigo = "https://cincoregioes-star.github.io/oficial-portal-gabaritomax/?origem=radar_copa"

# 1) Corrige especificamente o botao Conhecer Simulados, mesmo se a ordem dos atributos variar pouco.
$html = [regex]::Replace(
    $html,
    'href="https://cincoregioes-star\.github\.io/oficial-portal-gabaritomax/\?origem=radar_copa"([^>]*>\s*Conhecer Simulados\s*</a>)',
    'href="' + $linkDB + '"$1',
    'IgnoreCase'
)

# 2) Garantia extra: se existir um bloco de redacao com Gabarito Max, troca por DB ENEM.
$html = [regex]::Replace(
    $html,
    '(<section[^>]*(?:redacao|Redação|enem|ENEM)[\s\S]{0,2500}?)https://cincoregioes-star\.github\.io/oficial-portal-gabaritomax/\?origem=radar_copa',
    '$1' + $linkDB,
    'IgnoreCase'
)

# 3) Se o texto do botao estiver em uma linha simples, tambem garante.
$html = $html.Replace(
    '<a class="btn btn-dourado" href="' + $linkAntigo + '" target="_blank">Conhecer Simulados</a>',
    '<a class="btn btn-dourado" href="' + $linkDB + '" target="_blank">Conhecer Simulados</a>'
)

Set-Content $arquivo $html -Encoding UTF8

Write-Host ""
Write-Host "OK: Link do card Redacao ENEM corrigido para DB ENEM." -ForegroundColor Green
Write-Host "Backup criado em:" -ForegroundColor Yellow
Write-Host $backup
Write-Host ""
Write-Host "Agora faca Commit to main e Push origin no GitHub Desktop."
Write-Host "Teste:"
Write-Host "https://dev-orient-social.github.io/radar-copa-2026-com-album/?v=5160"
Pause
