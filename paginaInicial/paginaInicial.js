function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}
  
var frases = [
    { titulo: "Rota Turística do Polvilho", subtitulo: "Tradição Ourense" },
    { titulo: "O caminho fala por si", subtitulo: "A rota e seus mais belos atrativos" },
    { titulo: "Venha viver essa experiencia", subtitulo: "Agências credenciadas" }
  ];
  
  $(document).ready(function(){
    var tituloExterno = document.getElementById('tituloExterno');
    var subtituloExterno = document.getElementById('subtituloExterno');
  
    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
      var slideIndex = $('.carousel-item.active').index();
      tituloExterno.textContent = frases[slideIndex].titulo;
      subtituloExterno.textContent = frases[slideIndex].subtitulo;

      switch(slideIndex) {
        case 0:
            saibaMaisBtn.setAttribute('onclick', 'window.location.href = "../sobreNos/sobreNos.html";');
            break;
        case 1:
            saibaMaisBtn.setAttribute('onclick', 'window.location.href = "../galeria/galeria.html";');
            break;
        case 2:
            saibaMaisBtn.setAttribute('onclick', 'window.location.href = "../agenciasCredenciadas/agenciasCredenciadas.html";');
            break;
        default:
            saibaMaisBtn.removeAttribute('onclick');
    }
    });
  });

  var botao = document.getElementById('saibamais-panorama');
    
  botao.addEventListener('click', function() {
      window.location.href = '../galeria/galeria.html#id-pontos-turisticos';
  });
  