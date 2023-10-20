
// REVELADO 1

function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.remove("mystyle");
  } 



// REVELADO 2

  function FadeOut() {
    const tapa = document.getElementById('tapa1');

    tapa.style.opacity = '0';
 }


 // BARRA DE PROGRESO DE LECTURA

window.onscroll = function() {progressbar()};

function progressbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// BARRA DE PROGRESO EN MODAL

