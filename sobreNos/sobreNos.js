function menuShow(){
  let menuMobile = document.querySelector(".mobile-menu");
  if(menuMobile.classList.contains('open')){
      menuMobile.classList.remove('open');
  }
  else{
      menuMobile.classList.add('open');
  }
}

var path = "../sobreNos/sobreNos.html";
document.querySelectorAll('.navbar-list ul li a').forEach(function(link) {
  if (link.getAttribute('href') === path) {
    link.classList.add('active');
  }
});



var botao = document.getElementById('visitar-site-polvilho-ourense');

  botao.addEventListener('click', function() {
    window.open('https://ourensealimentos.com.br/', '_blank');
});



var botao = document.getElementById('visitar-site-polvilho-tupguar');

  botao.addEventListener('click', function() {
    window.open('https://tupguar.com.br/', '_blank');
});

