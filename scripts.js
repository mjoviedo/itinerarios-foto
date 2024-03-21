// MENÚ LATERAL

// Setea el ancho de la navegación lateral a 250px y el margen izquierdo de la página a 250px y agrega un fondo al body
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

// retira lo anterior
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}


// REVELADO 2

  function FadeOut() {
    const tapa = document.getElementById('tapa1');

    tapa.style.opacity = '0';
 }

 function FadeOut2() {
  const tapa = document.getElementById('tapa2');

  tapa2.style.opacity = '0';
}

function FadeOut3() {
  const tapa = document.getElementById('tapa3');

  tapa3.style.opacity = '0';
}


 // BARRA DE PROGRESO DE LECTURA

window.onscroll = function() {progressbar()};

function progressbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

