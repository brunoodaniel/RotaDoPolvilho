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

var path = "../mapa/mapa.html";
document.querySelectorAll('ul li a').forEach(function(link) {
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
});
  