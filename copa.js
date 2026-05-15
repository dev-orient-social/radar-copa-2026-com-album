const noticiasCopa = [
  {tag:"Guia da Copa",titulo:"Copa 2026 será a primeira com 48 seleções",texto:"O torneio aumenta o número de participantes e abre espaço para mais países, histórias e disputas desde a fase de grupos.",img:"radar-copa-figurinhas-leque.png"},
  {tag:"Sedes",titulo:"Canadá, México e Estados Unidos recebem a Copa",texto:"A edição de 2026 será realizada em três países-sede, com cidades espalhadas pela América do Norte.",img:"album/img/album/grupos/grupo-b/canada/01.webp"},
  {tag:"Formato",titulo:"12 grupos, mais jogos e nova fase eliminatória",texto:"O novo modelo tem 12 grupos com quatro seleções, fase de grupos ampliada e mata-mata maior.",img:"album/img/album/grupos/grupo-a/mexico/01.webp"},
  {tag:"Calendário",titulo:"Torneio vai de junho a julho de 2026",texto:"O Radar Copa acompanha a preparação, os guias permanentes e a reta de lançamento do álbum digital.",img:"album/img/album/grupos/grupo-d/estados-unidos/01.webp"},
  {tag:"Álbum digital",titulo:"História em Campo 2026 reúne 576 figurinhas",texto:"Cada país do álbum traz personagens históricos, trajetórias marcantes e figurinhas especiais para colecionar.",img:"album/img/album/grupos/grupo-c/brasil/01.webp"},
  {tag:"Códigos",titulo:"Sexta rara, domingo de brinde e Brasil em campo",texto:"O site terá chamadas para códigos promocionais, pacotes extras e eventos especiais do álbum.",img:"album/img/album/grupos/grupo-j/argentina/01.webp"},
  {tag:"Recompensas",titulo:"Ganhe figurinhas em simulados parceiros",texto:"Gabarito Max, DB ENEM, Matriz Educacional e Radar Conservador ajudam a movimentar o ecossistema.",img:"album/img/album/grupos/grupo-i/franca/01.webp"},
  {tag:"Redação ENEM",titulo:"Estudar também pode render pacotes",texto:"Treinos de redação, interpretação e simulados ajudam na preparação e podem liberar recompensas no álbum.",img:"album/img/album/grupos/grupo-k/portugal/01.webp"},
  {tag:"Premium",titulo:"Premium e combo aceleram a coleção",texto:"Versões premium liberam pacotes extras; combos podem oferecer bônus maiores para avançar no álbum.",img:"album/img/album/grupos/grupo-l/inglaterra/01.webp"}
];

const figurinhasDestaque = [
  ["México","Guardião histórico","album/img/album/grupos/grupo-a/mexico/01.webp"],
  ["Brasil","Herói cultural","album/img/album/grupos/grupo-c/brasil/01.webp"],
  ["França","Ícone histórico","album/img/album/grupos/grupo-i/franca/01.webp"],
  ["Japão","Lenda oriental","album/img/album/grupos/grupo-f/japao/01.webp"],
  ["Inglaterra","Tradição real","album/img/album/grupos/grupo-l/inglaterra/01.webp"],
  ["Argentina","Personagem nacional","album/img/album/grupos/grupo-j/argentina/01.webp"],
  ["Egito","Legado antigo","album/img/album/grupos/grupo-g/egito/01.webp"],
  ["Canadá","Força do norte","album/img/album/grupos/grupo-b/canada/01.webp"],
  ["Espanha","Memória ibérica","album/img/album/grupos/grupo-h/espanha/01.webp"],
  ["Coreia do Sul","Sabedoria e tradição","album/img/album/grupos/grupo-a/coreia-do-sul/01.webp"],
  ["Alemanha","Lenda europeia","album/img/album/grupos/grupo-e/alemanha/01.webp"],
  ["Holanda","Mestre dos mares","album/img/album/grupos/grupo-f/holanda/01.webp"],
  ["Portugal","Navegador lendário","album/img/album/grupos/grupo-k/portugal/01.webp"],
  ["Cabo Verde","Atlântico cultural","album/img/album/grupos/grupo-h/cabo-verde/01.webp"],
  ["Panamá","Ponte histórica","album/img/album/grupos/grupo-l/panama/01.webp"]
];

function renderNoticias(){
  const grid=document.getElementById("gridNoticias");
  if(!grid)return;
  grid.innerHTML=noticiasCopa.map(n=>`<article class="noticia"><img src="${n.img}" alt="${n.titulo}" onerror="this.src='radar-copa-figurinhas-leque.png'"><div><small>${n.tag}</small><h3>${n.titulo}</h3><p>${n.texto}</p></div></article>`).join("");
}
function renderFigurinhas(){
  const grid=document.getElementById("lequeFigurinhas");
  if(!grid)return;
  grid.innerHTML=figurinhasDestaque.map(([pais,nome,img])=>`<article class="fig-destaque"><img src="${img}" alt="${pais} - ${nome}" onerror="this.src='radar-copa-figurinhas-leque.png'"><div><strong>${pais}</strong><span>${nome}</span></div></article>`).join("");
}
document.addEventListener("DOMContentLoaded",()=>{renderNoticias();renderFigurinhas();});
