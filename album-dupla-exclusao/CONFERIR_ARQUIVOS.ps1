# ORGANIZADOR - ÁLBUM DUPLA EXCLUSÃO
# Uso opcional: coloque suas 72 figurinhas nesta pasta e rode este script se precisar conferir nomes.

Write-Host "Conferindo figurinhas 01.webp até 72.webp..." -ForegroundColor Yellow
$faltando = @()
for ($i = 1; $i -le 72; $i++) {
  $n = $i.ToString("00")
  if (!(Test-Path "figurinhas/$n.webp")) { $faltando += "$n.webp" }
}
if ($faltando.Count -eq 0) {
  Write-Host "OK: todas as 72 figurinhas existem." -ForegroundColor Green
} else {
  Write-Host "Faltando:" -ForegroundColor Red
  $faltando | ForEach-Object { Write-Host $_ }
}

Write-Host "Conferindo páginas pagina-01.png até pagina-16.png..." -ForegroundColor Yellow
$faltandoPaginas = @()
for ($i = 1; $i -le 16; $i++) {
  $n = $i.ToString("00")
  if (!(Test-Path "img/paginas/pagina-$n.png")) { $faltandoPaginas += "pagina-$n.png" }
}
if ($faltandoPaginas.Count -eq 0) {
  Write-Host "OK: todas as 16 páginas existem." -ForegroundColor Green
} else {
  Write-Host "Faltando páginas:" -ForegroundColor Red
  $faltandoPaginas | ForEach-Object { Write-Host $_ }
}
Pause
