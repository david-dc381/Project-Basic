(function() {
  window.addEventListener('scroll', function() {

    function fade(direction) {
      let contenedor = document.querySelectorAll('.fade_' + direction);
    
      for (let i = 0; i < contenedor.length; i++) {
        // obtenemos el tamaño de la pantalla y lo dividimos para que el efecto surga un poco antes
        let alturaPantalla = window.innerHeight / 1.3;
        // este método nos devuelve el tamaño de un elemento y su posicion con respecto al viewport.
        let distancia = contenedor[i].getBoundingClientRect().top;

        contenedor[i].classList.add("transform_" + direction);

        if (distancia <= alturaPantalla) {
          contenedor[i].classList.add("aparece");
        }
      }
    }

    fade('left');
    fade('right');
    fade('up');
    fade('up2');
    fade('down');

  });
}())