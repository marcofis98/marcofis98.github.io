const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = '***Nostalgia Game***';
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function(){
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/codigo.jpeg') {
      minhaImagem.setAttribute ('src','imagens/codigo2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/codigo.jpeg');
    }
}



let time = 1500,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)
