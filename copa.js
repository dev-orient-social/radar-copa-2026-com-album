const noticiasCopa = [
  {
    tag: "Guia oficial",
    titulo: "Copa de 2026 será a primeira com 48 seleções",
    texto: "O novo formato amplia o torneio e aumenta a disputa por vagas, grupos e mata-mata.",
    img: "radar-copa-figurinhas-leque.png"
  },
  {
    tag: "Sedes",
    titulo: "Canadá, México e Estados Unidos recebem a Copa",
    texto: "A edição será compartilhada por três países-sede, com cobertura especial no Radar da Copa.",
    img: "album/img/album/grupos/grupo-a/mexico/01.webp"
  },
  {
    tag: "Formato",
    titulo: "12 grupos, fase eliminatória maior e caminho até a final",
    texto: "O Radar da Copa acompanha grupos, classificados, terceiros colocados e chaveamento.",
    img: "album/img/album/grupos/grupo-b/canada/01.webp"
  },
  {
    tag: "Álbum",
    titulo: "História em Campo 2026 tem 576 figurinhas",
    texto: "Cada seleção traz personagens históricos e culturais em formato de coleção digital.",
    img: "album/img/album/grupos/grupo-c/brasil/01.webp"
  },
  {
    tag: "Recompensas",
    titulo: "Ganhe figurinhas em sites parceiros",
    texto: "Gabarito Max, DB ENEM, Matriz Educacional e Radar Conservador liberam missões.",
    img: "album/img/album/grupos/grupo-i/franca/01.webp"
  },
  {
    tag: "Premium",
    titulo: "Qualquer versão premium libera +10 pacotes",
    texto: "O bônus premium acelera a coleção e leva o leitor aos parceiros do ecossistema.",
    img: "album/img/album/grupos/grupo-j/argentina/01.webp"
  }
];

const figurinhasDestaque = [
  ["México", "Guardião histórico", "album/img/album/grupos/grupo-a/mexico/01.webp"],
  ["Brasil", "Herói cultural", "album/img/album/grupos/grupo-c/brasil/01.webp"],
  ["França", "Ícone histórico", "album/img/album/grupos/grupo-i/franca/01.webp"],
  ["Japão", "Lenda oriental", "album/img/album/grupos/grupo-f/japao/01.webp"],
  ["Inglaterra", "Tradição real", "album/img/album/grupos/grupo-l/inglaterra/01.webp"],
  ["Argentina", "Personagem nacional", "album/img/album/grupos/grupo-j/argentina/01.webp"],
  ["Egito", "Legado antigo", "album/img/album/grupos/grupo-g/egito/01.webp"],
  ["Canadá", "Força do norte", "album/img/album/grupos/grupo-b/canada/01.webp"],
  ["Espanha", "Memória ibérica", "album/img/album/grupos/grupo-h/espanha/01.webp"],
  ["Coreia do Sul", "Sabedoria e tradição", "album/img/album/grupos/grupo-a/coreia-do-sul/01.webp"],
  ["Alemanha", "Lenda europeia", "album/img/album/grupos/grupo-e/alemanha/01.webp"],
  ["Holanda", "Mestre dos mares", "album/img/album/grupos/grupo-f/holanda/01.webp"],
  ["Portugal", "Navegador lendário", "album/img/album/grupos/grupo-k/portugal/01.webp"],
  ["Cabo Verde", "Atlântico cultural", "album/img/album/grupos/grupo-h/cabo-verde/01.webp"],
  ["Panamá", "Ponte histórica", "album/img/album/grupos/grupo-l/panama/01.webp"]
];

function renderNoticias() {
  const grid = document.getElementById("gridNoticias");
  if (!grid) return;
  grid.innerHTML = noticiasCopa.map(n => `
    <article class="noticia">
      <img src="${n.img}" alt="${n.titulo}" onerror="this.src='radar-copa-figurinhas-leque.png'">
      <div>
        <small>${n.tag}</small>
        <h3>${n.titulo}</h3>
        <p>${n.texto}</p>
      </div>
    </article>
  `).join("");
}

function renderFigurinhas() {
  const grid = document.getElementById("lequeFigurinhas");
  if (!grid) return;
  grid.innerHTML = figurinhasDestaque.map(([pais, nome, img]) => `
    <article class="fig-destaque">
      <img src="${img}" alt="${pais} - ${nome}" onerror="this.src='radar-copa-figurinhas-leque.png'">
      <div>
        <strong>${pais}</strong>
        <span>${nome}</span>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderNoticias();
  renderFigurinhas();
});
