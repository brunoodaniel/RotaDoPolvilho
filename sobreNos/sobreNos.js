var frases = [
    { titulo: "Título 1", subtitulo: "Subtítulo 1" },
    { titulo: "Título 2", subtitulo: "Subtítulo 2" },
    { titulo: "Título 3", subtitulo: "Subtítulo 3" }
  ];
  
  $(document).ready(function(){
    var tituloExterno = document.getElementById('tituloExterno');
    var subtituloExterno = document.getElementById('subtituloExterno');
  
    $('#carouselExampleIndicators').on('slid.bs.carousel', function () {
      var slideIndex = $('.carousel-item.active').index();
      tituloExterno.textContent = frases[slideIndex].titulo;
      subtituloExterno.textContent = frases[slideIndex].subtitulo;
    });
  });
  