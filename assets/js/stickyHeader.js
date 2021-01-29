const scroll = document.getElementById('menu-pc');
const links  = document.getElementById('pc');
const logo = document.querySelectorAll('.logo > img');
// para el menu movil
const movil = document.getElementById('menu-mobile');
const movilLogo = document.querySelectorAll('.logo-movil > img');
// para el boton que nos ahce volver hasta arriba
const btnArriba = document.getElementById('btnVolverArriba');

window.onscroll = () => {
  // documnetElement, hace referencia al elemento raiz como el html
  if ( document.documentElement.scrollTop > 140 ) {
    scroll.style.backgroundColor = "#fff";
    scroll.style.boxShadow = "0px 20px 50px 0px rgba(0, 0, 0, 0.05)";
    scroll.style.transition = "all .2s ease-in";
    links.classList.add('pc');
    logo[0].setAttribute("src", "assets/img/logo-2.svg");

    // para el menu móvil
    movil.classList.add('menu-mobile__black');
    movilLogo[0].setAttribute("src", "assets/img/logo-2.svg");

    if ( document.documentElement.scrollTop >= 1080 ) {
      btnArriba.style.right = "1.5rem";
    } else {
      btnArriba.style.right = "-4rem";
    }

  } else {
    scroll.style.backgroundColor = "";
    links.classList.remove('pc');
    logo[0].setAttribute("src", "assets/img/logo.svg");
    scroll.style.boxShadow = "none";

    // para el menu móvil
    movil.classList.remove("menu-mobile__black");
    movilLogo[0].setAttribute("src", "assets/img/logo.svg");
  }
}