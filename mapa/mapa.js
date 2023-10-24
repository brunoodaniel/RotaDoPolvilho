function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}

var botao = document.getElementById('consultar-mapa');
  botao.addEventListener('click', function() {
    var urlDaImagem = '../imagens/Imagens gerais/Mapa Rota do Polvilho.png';
    window.open(urlDaImagem, '_blank');
  });
  