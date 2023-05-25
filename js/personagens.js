fetch('https://api.jikan.moe/v4/manga/7/characters')
  .then(response => response.json())
  .then(data => {
    const personagens = data.data;

    personagens.forEach(personagem => {
      criarCardPersonagem(personagem.character);
    });
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });

function criarCardPersonagem(personagem) {
  const card = document.createElement('div');
  const nome = document.createElement('h2');
  const imagem = document.createElement('img');

  nome.textContent = personagem.name;
  imagem.src = personagem.images.jpg.image_url;

  card.classList.add('card');
  nome.classList.add('nome');
  imagem.classList.add('imagem');

  card.appendChild(nome);
  card.appendChild(imagem);
  document.getElementById('container').appendChild(card);
}