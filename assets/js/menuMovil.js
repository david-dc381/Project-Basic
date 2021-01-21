(function() {
  // Propiedades
  let propiedadesMenu = {
    burgerMenu:     document.getElementById('burger-menu'),
    slideMenu:      document.getElementById('slide-menu'),
    menu_activo:    false,
    elementos_menu: document.querySelectorAll('#slide-menu .menu-principal a'),
  }

  // Métodos
  let metodosMenu = {
 
    inicio: () => {
      propiedadesMenu.burgerMenu.addEventListener("click", metodosMenu.toggleMenu);

      for (let i = 0; i < propiedadesMenu.elementos_menu.length; i++) {
        propiedadesMenu.elementos_menu[i].addEventListener("click", metodosMenu.ocultarMenu
        );
      }
    },

    toggleMenu: () => {
      // si es falso
      if (propiedadesMenu.menu_activo == false) {
        propiedadesMenu.menu_activo = true;
        
        propiedadesMenu.slideMenu.className = propiedadesMenu.slideMenu.className + 'active';
      propiedadesMenu.slideMenu.style.transition = "all .5s ease-out";
        
      } else {
        propiedadesMenu.menu_activo = false;
        propiedadesMenu.slideMenu.className = propiedadesMenu.slideMenu.className.replace("active", '');
      propiedadesMenu.slideMenu.style.transition = "all .5s ease-out";
        
      }
    },


    ocultarMenu: () => {
      propiedadesMenu.menu_activo = false;
      propiedadesMenu.slideMenu.className = propiedadesMenu.slideMenu.className.replace("active", "");
      propiedadesMenu.slideMenu.style.transition = 'all .5s ease-out';
    }
  }

  metodosMenu.inicio();
}())