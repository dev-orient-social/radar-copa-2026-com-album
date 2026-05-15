const noticiasCopa = [
  {tag:"Guia da Copa",titulo:"Copa 2026 será a primeira com 48 seleções",texto:"O torneio aumenta o número de participantes e abre espaço para mais países, histórias e disputas desde a fase de grupos.",sigla:"48"},
  {tag:"Sedes",titulo:"Canadá, México e Estados Unidos recebem a Copa",texto:"A edição de 2026 será realizada em três países-sede, com cidades espalhadas pela América do Norte.",sigla:"3"},
  {tag:"Formato",titulo:"12 grupos, mais jogos e nova fase eliminatória",texto:"O novo modelo tem 12 grupos com quatro seleções, fase de grupos ampliada e mata-mata maior.",sigla:"12"},
  {tag:"Calendário",titulo:"Torneio vai de junho a julho de 2026",texto:"O Radar Copa acompanha a preparação, os guias permanentes e a reta de lançamento do álbum digital.",sigla:"26"},
  {tag:"Álbum digital",titulo:"História em Campo 2026 reúne 576 figurinhas",texto:"Cada país do álbum traz personagens históricos, trajetórias marcantes e figurinhas especiais para colecionar.",sigla:"576"},
  {tag:"Códigos",titulo:"Sexta rara, domingo de brinde e Brasil em campo",texto:"O site terá chamadas para códigos promocionais, pacotes extras e eventos especiais do álbum.",sigla:"VIP"},
  {tag:"Recompensas",titulo:"Ganhe figurinhas em simulados parceiros",texto:"Gabarito Max, DB ENEM, Matriz Educacional e Radar Conservador ajudam a movimentar o ecossistema.",sigla:"+"},
  {tag:"Redação ENEM",titulo:"Estudar também pode render pacotes",texto:"Treinos de redação, interpretação e simulados ajudam na preparação e podem liberar recompensas no álbum.",sigla:"ENEM"},
  {tag:"Premium",titulo:"Premium e combo aceleram a coleção",texto:"Versões premium liberam pacotes extras; combos podem oferecer bônus maiores para avançar no álbum.",sigla:"PRO"}
];

const figurinhasDestaque = [
  ["México","Guardião histórico","MX"],["Brasil","Herói cultural","BR"],["França","Ícone histórico","FR"],["Japão","Lenda oriental","JP"],["Inglaterra","Tradição real","EN"],
  ["Argentina","Personagem nacional","AR"],["Egito","Legado antigo","EG"],["Canadá","Força do norte","CA"],["Espanha","Memória ibérica","ES"],["Coreia do Sul","Sabedoria e tradição","KR"],
  ["Alemanha","Lenda europeia","DE"],["Holanda","Mestre dos mares","NL"],["Portugal","Navegador lendário","PT"],["Cabo Verde","Atlântico cultural","CV"],["Panamá","Ponte histórica","PA"]
];

function renderNoticias(){
  const grid=document.getElementById("gridNoticias");
  if(!grid)return;
  grid.innerHTML=noticiasCopa.map(n=>`
    <article class="noticia">
      <div class="noticia-visual"><span>${n.sigla}</span></div>
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
  grid.innerHTML=figurinhasDestaque.map(([pais,nome,sigla])=>`
    <article class="fig-destaque">
      <div class="fig-card-visual">
        <span>${sigla}</span>
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
