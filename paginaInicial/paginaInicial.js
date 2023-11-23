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
    { titulo: "Venha viver essa experiência", subtitulo: "Agências credenciadas" }
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
  

  document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        
        if (window.scrollY > 100) {
            backToTopButton.style.opacity = "1";
            backToTopButton.style.pointerEvents = "auto";
        } else {
            
            backToTopButton.style.opacity = "0";
            backToTopButton.style.pointerEvents = "none";
        }
    });

    
    backToTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Verifica se há um hash na URL
    if (window.location.hash) {
        // Selecione a seção com base no hash da URL
        var targetSection = document.querySelector(window.location.hash);

        // Role suavemente para a seção
        if (targetSection) {
            var targetOffset = targetSection.offsetTop;
            var scrollDuration = 1200; // Ajuste conforme necessário para a velocidade desejada
            var startTime;
            var originalY = window.scrollY;

            function scrollToTarget(timestamp) {
                if (!startTime) startTime = timestamp;

                var elapsed = timestamp - startTime;
                var progress = Math.min(elapsed / scrollDuration, 1);
                var newY = originalY + (targetOffset * progress);

                window.scroll(0, newY);

                if (progress < 1) {
                    requestAnimationFrame(scrollToTarget);
                }
            }

            requestAnimationFrame(scrollToTarget);
        }
    }
});