RADAR DA COPA 2026 — ETAPA 4: SUPABASE PREPARADO

O que mudou nesta etapa:

1. album/album.html agora carrega a biblioteca Supabase.
2. supabase/supabase-config.js está pronto para você colar Project URL e anon public key.
3. album/album.js tenta salvar online:
   - torcedor;
   - figurinhas ganhas;
   - figurinhas coladas;
   - trocas;
   - ranking.
4. Se o Supabase não estiver configurado, o álbum continua funcionando no modo local.

COMO USAR:

1. Extraia o ZIP.
2. Copie tudo para a pasta radar-copa-2026.
3. No Supabase, abra SQL Editor.
4. Cole todo o conteúdo de:
   supabase/sql-album.sql
5. Clique em Run.
6. Depois abra:
   supabase/supabase-config.js
7. Cole sua Project URL e anon public key.
8. Abra album/album.html e teste.

IMPORTANTE:

Enquanto o Supabase não estiver configurado, o site mostrará "Modo local".
Depois de configurar corretamente, deverá aparecer "Online".

PRÓXIMA ETAPA:

Criar os códigos de integração com:
- Gabarito Max;
- DB ENEM;
- Simulado Copa Teste.

Regra dos simulados:
- abriu = 1 figurinha;
- acertou metade = 3 figurinhas no total;
- gabaritou = 5 figurinhas no total.
