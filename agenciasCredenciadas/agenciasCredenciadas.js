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
      window.location.href = '../galeria/galeria.html';
  });