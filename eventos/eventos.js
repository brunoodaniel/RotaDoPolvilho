function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}

document.querySelectorAll('.image-container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';

}

var path = "../eventos/eventos.html";
document.querySelectorAll('.navbar-list ul li a').forEach(function(link) {
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
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