function menuShow(){
    let menuMobile = document.querySelector(".mobile-menu");
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
}

var path = "../aCidade/aCidade.html"
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