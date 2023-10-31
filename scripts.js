// MENÚ LATERAL

// Setea el ancho de la navegación lateral a 250px y el margen izquierdo de la página a 250px y agrega un fondo al body
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

// retira lo anterior
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
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

