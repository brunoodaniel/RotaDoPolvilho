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
document.querySelectorAll('ul li a').forEach(function(link) {
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
});