var tituloExterno = document.getElementById("tituloExterno");
var subtituloExterno = document.getElementById("subtituloExterno");

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    var activeIndex = $('#carouselExampleIndicators .carousel-item.active').index();
    var titulo = $('#carouselExampleIndicators .carousel-item').eq(activeIndex).data('titulo');
    var subtitulo = $('#carouselExampleIndicators .carousel-item').eq(activeIndex).data('subtitulo');

    // Atualize o título e o subtítulo externos com base no índice atual do carrossel
    tituloExterno.textContent = titulo;
    subtituloExterno.textContent = subtitulo;
});