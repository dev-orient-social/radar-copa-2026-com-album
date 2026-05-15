const FALLBACK = "assets/radar-copa-banner.png";

const noticiasCopa = [
  {
    tag:"Copa 2026",
    titulo:"Copa de 2026 terá 48 seleções",
    texto:"Guia permanente com formato, grupos, sedes e novidades do torneio.",
    img:"https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    tag:"Sedes",
    titulo:"Canadá, México e Estados Unidos recebem a Copa",
    texto:"Três países-sede, mais jogos e uma edição histórica para acompanhar.",
    img:"https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1200"
  },
  {
    tag:"Álbum",
    titulo:"História em Campo 2026 conecta Copa e educação",
    texto:"Colecione figurinhas, conheça personagens históricos e ganhe pacotes estudando.",
    img:"assets/radar-copa-banner.png"
  },
  {
    tag:"Redação ENEM",
    titulo:"Estudar também pode render pacotes",
    texto:"Treinos, simulados e preparação podem virar recompensas no álbum.",
    img:"https://cincoregioes-star.github.io/DB-ENEM/professor-geografia-enem-aula.jpg"
  },
  {
    tag:"Concursos",
    titulo:"Gabarito Max leva visitantes para simulados",
    texto:"Simulados e áreas premium conectadas à campanha do álbum.",
    img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200"
  },
  {
    tag:"Radar",
    titulo:"Radar Conservador integra o ecossistema",
    texto:"Notícias e campanhas ajudam na circulação do Radar Copa.",
    img:"https://cincoregioes-star.github.io/radar-conservador-brasil/radar-conservador-brasil-logo.png"
  }
];

const figurinhasDestaque = [
  ["México","Guardião histórico","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-a/mexico/01.webp"],
  ["Brasil","Herói cultural","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-c/brasil/01.webp"],
  ["França","Ícone histórico","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-i/franca/01.webp"],
  ["Japão","Lenda oriental","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-f/japao/01.webp"],
  ["Argentina","Personagem nacional","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-j/argentina/01.webp"],
  ["Egito","Legado antigo","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-g/egito/01.webp"],
  ["Canadá","Força do norte","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-b/canada/01.webp"],
  ["Portugal","Navegador lendário","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-k/portugal/01.webp"],
  ["Alemanha","Lenda europeia","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-e/alemanha/01.webp"],
  ["Espanha","Memória ibérica","https://dev-orient-social.github.io/radar-copa-2026-com-album/album/img/album/grupos/grupo-h/espanha/01.webp"]
];

const parceiros = [
  {
    nome:"Gabarito Max",
    tag:"Simulados e concursos",
    texto:"Portal de simulados, revisão e preparação digital.",
    link:"https://cincoregioes-star.github.io/oficial-portal-gabaritomax/?origem=radar_copa",
    img:"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200"
  },
  {
    nome:"DB ENEM",
    tag:"ENEM e vitalício",
    texto:"Data Bank ENEM com testes, premium por disciplina e acesso vitalício.",
    link:"https://cincoregioes-star.github.io/DB-ENEM/?origem=radar_copa",
    img:"https://cincoregioes-star.github.io/DB-ENEM/professor-geografia-enem-aula.jpg"
  },
  {
    nome:"Matriz Educacional",
    tag:"Redação e qualificação",
    texto:"Preparação com foco em redação, repertório e estudo direcionado.",
    link:"https://cincoregioes-star.github.io/matriz-educacional/?origem=radar_copa",
    img:"https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    nome:"Radar Conservador",
    tag:"Notícias e campanhas",
    texto:"Portal parceiro de notícias, campanhas e divulgação do Radar Copa.",
    link:"https://cincoregioes-star.github.io/radar-conservador-brasil/?origem=radar_copa",
    img:"https://cincoregioes-star.github.io/radar-conservador-brasil/radar-conservador-brasil-logo.png"
  }
];

function imgFallback(img){
  img.onerror = null;
  img.src = FALLBACK;
}

function renderNoticias(){
  const grid=document.getElementById("gridNoticias");
  if(!grid)return;
  grid.innerHTML=noticiasCopa.map(n=>`
    <article class="noticia">
      <img src="${n.img}" alt="${n.titulo}" onerror="imgFallback(this)">
      <div><small>${n.tag}</small><h3>${n.titulo}</h3><p>${n.texto}</p></div>
    </article>
  `).join("");
}

function renderFigurinhas(){
  const grid=document.getElementById("lequeFigurinhas");
  if(!grid)return;
  grid.innerHTML=figurinhasDestaque.map(([pais,nome,img])=>`
    <article class="fig-destaque">
      <img src="${img}" alt="${pais} - ${nome}" onerror="imgFallback(this)">
      <div><strong>${pais}</strong><span>${nome}</span></div>
    </article>
  `).join("");
}

function renderParceiros(){
  const grid=document.getElementById("gridParceiros");
  if(!grid)return;
  grid.innerHTML=parceiros.map(p=>`
    <a class="parceiro-real" href="${p.link}" target="_blank" rel="noopener noreferrer">
      <img src="${p.img}" alt="${p.nome}" onerror="imgFallback(this)">
      <div><small>${p.tag}</small><h3>${p.nome}</h3><p>${p.texto}</p></div>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded",()=>{renderNoticias();renderFigurinhas();renderParceiros();});
