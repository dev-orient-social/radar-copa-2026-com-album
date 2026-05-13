# CORRIGIR_ERRO_ALBUM.ps1
# Corrige erro: verificarRecompensasParceirosAutomatico is not defined

$ErrorActionPreference = "Stop"

$arquivo = Join-Path (Get-Location) "album\index.html"

if (!(Test-Path $arquivo)) {
    Write-Host "ERRO: album\index.html não encontrado." -ForegroundColor Red
    pause
    exit
}

$conteudo = Get-Content $arquivo -Raw -Encoding UTF8

$errado = 'verificarRecompensasParceirosAutomatico();'

$certo = @'
if (typeof verificarRecompensasParceirosAutomatico === "function") {
  verificarRecompensasParceirosAutomatico();
}
'@

if ($conteudo -like "*$errado*") {
    $conteudo = $conteudo.Replace($errado, $certo)
    Set-Content $arquivo $conteudo -Encoding UTF8
    Write-Host "CORRIGIDO COM SUCESSO!" -ForegroundColor Green
} else {
    Write-Host "A linha do erro não foi encontrada. Talvez já esteja corrigido." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Agora volte no GitHub Desktop:" -ForegroundColor Cyan
Write-Host "1. Summary: corrige erro do album"
Write-Host "2. Commit to main"
Write-Host "3. Push origin"
Write-Host ""
pause