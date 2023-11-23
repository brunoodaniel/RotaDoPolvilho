function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}

var botao = document.getElementById('saibamais-botao');

botao.addEventListener('click', function() {
    window.open('https://www.olhebemasmontanhas.com.br/', '_blank');
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