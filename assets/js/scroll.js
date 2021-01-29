(function() {
  
  // Propiedades
  let propiedadesScroll = {
    posicionActual:   window.pageYOffset,
    scrollSuave:      document.getElementsByClassName('scroll-suave'),
    volverArriba:     document.getElementsByClassName('volver-arriba'),
    destino:          null,
    seccionDistancia: null,
    intervalo:        null,
  }

  // Métodos
  let metodosScroll = {
    inicio: () => {
      for (let i = 0; i < propiedadesScroll.scrollSuave.length; i++) {
        propiedadesScroll.scrollSuave[i].addEventListener(
          "click",
          metodosScroll.moverse
        );
      }

      for (let i = 0; i < propiedadesScroll.volverArriba.length; i++) {
        propiedadesScroll.volverArriba[i].addEventListener(
          "click",
          metodosScroll.subir
        );
      }
    },

    moverse: function(e) {
      e.preventDefault();
      clearInterval(propiedadesScroll.intervalo);

      // obtenemos el atributo del elemento clickeado
      propiedadesScroll.destino = this.getAttribute('href');
      propiedadesScroll.seccionDistancia = document.querySelector(propiedadesScroll.destino).offsetTop - 130;

      // obtenemos la distancia del tope hasta donde esta el sroll
      propiedadesScroll.posicionActual = window.pageYOffset;
      // función que se hace el recorrido de distancias más lento
      propiedadesScroll.intervalo = setInterval(() => {
        // si la posicion actual es menor a la posicion donde queremos llegar, lo recorremos de 60 en 60 px
        if (
          propiedadesScroll.posicionActual < propiedadesScroll.seccionDistancia
        ) {
          propiedadesScroll.posicionActual += 60;

          // si es mayor o igual la posicion actual usamos clearInterval que detiene la ejecución de setInterval
          if (
            propiedadesScroll.posicionActual >=
            propiedadesScroll.seccionDistancia
          ) {
            clearInterval(propiedadesScroll.intervalo);
          }
        } else {
          // si no es menor entonces quiere decir es mayor y restamos el recorrido
          propiedadesScroll.posicionActual -= 60;

          // si es menor o igual la posicion actual a la distancia del elemento al llegar, limpiamos el intervalo
          if (
            propiedadesScroll.posicionActual <=
            propiedadesScroll.seccionDistancia
          ) {
            clearInterval(propiedadesScroll.intervalo);
          }
        }
        // window.scroll(x,y).- x en cero, a y le damos la posición del elemento que hacemos click, esta función
        // nos permite recorrer el scroll en la ventana hasta el elemento que damos click.
        window.scroll(0, propiedadesScroll.posicionActual);
      }, 15);
    },

    subir: function (e) {
      e.preventDefault();
      clearInterval(propiedadesScroll.intervalo);

      propiedadesScroll.posicionActual = window.pageYOffset;

      propiedadesScroll.intervalo = setInterval(function() {
        // si la posicion es mayo a cero retorcedemos
        if (propiedadesScroll.posicionActual > 0) {
          propiedadesScroll.posicionActual -= 60;

          // si es igual a cero limpiamos el intervalo
          if (propiedadesScroll.posicionActual <= 0) {
            clearInterval(propiedadesScroll.intervalo);
          }
        
        } else { // si no es mayor a 0, de igual manera detenemos la ejecución
          return;
        }
        window.scroll(0, propiedadesScroll.posicionActual);
      }, 15);
    },
  };
  metodosScroll.inicio();
}())