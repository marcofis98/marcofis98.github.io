const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = '***Nostalgia Game***';
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/codigo.jpeg') {
      minhaImagem.setAttribute ('src','imagens/codigo2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/codigo.jpeg');
    }
}