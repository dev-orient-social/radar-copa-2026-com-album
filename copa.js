const noticiasCopa = [
  {tag:"Guia da Copa",titulo:"Copa 2026 será a primeira com 48 seleções",texto:"O torneio aumenta o número de participantes e abre espaço para mais países, histórias e disputas desde a fase de grupos.",icone:"🌎"},
  {tag:"Sedes",titulo:"Canadá, México e Estados Unidos recebem a Copa",texto:"A edição de 2026 será realizada em três países-sede, com cidades espalhadas pela América do Norte.",icone:"🏟️"},
  {tag:"Formato",titulo:"12 grupos, mais jogos e nova fase eliminatória",texto:"O novo modelo tem 12 grupos com quatro seleções, fase de grupos ampliada e mata-mata maior.",icone:"🏆"},
  {tag:"Calendário",titulo:"Torneio vai de junho a julho de 2026",texto:"O Radar Copa acompanha a preparação, os guias permanentes e a reta de lançamento do álbum digital.",icone:"📅"},
  {tag:"Álbum digital",titulo:"História em Campo 2026 reúne 576 figurinhas",texto:"Cada país do álbum traz personagens históricos, trajetórias marcantes e figurinhas especiais para colecionar.",icone:"📚"},
  {tag:"Códigos",titulo:"Sexta rara, domingo de brinde e Brasil em campo",texto:"O site terá chamadas para códigos promocionais, pacotes extras e eventos especiais do álbum.",icone:"🎁"},
  {tag:"Recompensas",titulo:"Ganhe figurinhas em simulados parceiros",texto:"Gabarito Max, DB ENEM, Matriz Educacional e Radar Conservador ajudam a movimentar o ecossistema.",icone:"✅"},
  {tag:"Redação ENEM",titulo:"Estudar também pode render pacotes",texto:"Treinos de redação, interpretação e simulados ajudam na preparação e podem liberar recompensas no álbum.",icone:"✍️"},
  {tag:"Premium",titulo:"Premium e combo aceleram a coleção",texto:"Versões premium liberam pacotes extras; combos podem oferecer bônus maiores para avançar no álbum.",icone:"⭐"}
];

const figurinhasDestaque = [
  ["México","Guardião histórico","🇲🇽"],
  ["Brasil","Herói cultural","🇧🇷"],
  ["França","Ícone histórico","🇫🇷"],
  ["Japão","Lenda oriental","🇯🇵"],
  ["Inglaterra","Tradição real","🏴"],
  ["Argentina","Personagem nacional","🇦🇷"],
  ["Egito","Legado antigo","🇪🇬"],
  ["Canadá","Força do norte","🇨🇦"],
  ["Espanha","Memória ibérica","🇪🇸"],
  ["Coreia do Sul","Sabedoria e tradição","🇰🇷"],
  ["Alemanha","Lenda europeia","🇩🇪"],
  ["Holanda","Mestre dos mares","🇳🇱"],
  ["Portugal","Navegador lendário","🇵🇹"],
  ["Cabo Verde","Atlântico cultural","🇨🇻"],
  ["Panamá","Ponte histórica","🇵🇦"]
];

function renderNoticias(){
  const grid=document.getElementById("gridNoticias");
  if(!grid)return;
  grid.innerHTML=noticiasCopa.map(n=>`
    <article class="noticia noticia-sem-img">
      <div class="noticia-icone">${n.icone}</div>
      <div>
        <small>${n.tag}</small>
        <h3>${n.titulo}</h3>
        <p>${n.texto}</p>
      </div>
    </article>
  `).join("");
}

function renderFigurinhas(){
  const grid=document.getElementById("lequeFigurinhas");
  if(!grid)return;
  grid.innerHTML=figurinhasDestaque.map(([pais,nome,icone])=>`
    <article class="fig-destaque fig-sem-img">
      <div class="fig-placeholder">
        <span>${icone}</span>
        <b>HISTÓRIA<br>EM CAMPO</b>
      </div>
      <div>
        <strong>${pais}</strong>
        <span>${nome}</span>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded",()=>{renderNoticias();renderFigurinhas();});
