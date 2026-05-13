# ARRUMAR_PASTA_IMAGENS.ps1
# Use este script DENTRO da pasta album

$ErrorActionPreference = "Stop"

Write-Host "Organizando imagens dentro da pasta album..." -ForegroundColor Yellow

$raizAlbum = Get-Location
$imgAtual = Join-Path $raizAlbum "img"
$destino = Join-Path $raizAlbum "img\album\grupos"

if (!(Test-Path $imgAtual)) {
    Write-Host "ERRO: pasta img não encontrada dentro de album." -ForegroundColor Red
    pause
    exit
}

if (!(Test-Path $destino)) {
    New-Item -ItemType Directory -Path $destino -Force | Out-Null
}

$grupos = Get-ChildItem -Path $imgAtual -Directory | Where-Object {
    $_.Name -like "grupo-*"
}

if ($grupos.Count -eq 0) {
    Write-Host "Nenhuma pasta grupo-* encontrada diretamente em img." -ForegroundColor Yellow
    Write-Host "Talvez já esteja organizado." -ForegroundColor Yellow
    pause
    exit
}

foreach ($grupo in $grupos) {
    $novoCaminho = Join-Path $destino $grupo.Name

    Write-Host "Movendo $($grupo.Name) para img\album\grupos\" -ForegroundColor Cyan

    if (Test-Path $novoCaminho) {
        Get-ChildItem -Path $grupo.FullName -Recurse | ForEach-Object {
            $relativo = $_.FullName.Substring($grupo.FullName.Length).TrimStart("\")
            $alvo = Join-Path $novoCaminho $relativo

            if ($_.PSIsContainer) {
                if (!(Test-Path $alvo)) {
                    New-Item -ItemType Directory -Path $alvo -Force | Out-Null
                }
            } else {
                $pastaAlvo = Split-Path $alvo
                if (!(Test-Path $pastaAlvo)) {
                    New-Item -ItemType Directory -Path $pastaAlvo -Force | Out-Null
                }
                Copy-Item $_.FullName $alvo -Force
            }
        }
    } else {
        Move-Item $grupo.FullName $novoCaminho
    }
}

Write-Host ""
Write-Host "ORGANIZADO COM SUCESSO!" -ForegroundColor Green
Write-Host ""
Write-Host "Caminho correto criado:" -ForegroundColor Cyan
Write-Host "img\album\grupos\grupo-c\haiti\01.webp"
Write-Host ""
Write-Host "Agora volte no GitHub Desktop e faça Commit + Push." -ForegroundColor Yellow
pause