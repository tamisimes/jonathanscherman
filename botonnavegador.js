document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al botón
  var boton = document.getElementById("boton-say-hello");

  // Manejar el evento scroll
  window.addEventListener("scroll", function() {
      // Obtener las coordenadas del botón
      var botonRect = boton.getBoundingClientRect();
      var botonY = botonRect.top + window.scrollY;

      // Obtener todas las secciones
      var secciones = document.querySelectorAll("section");

      // Iterar sobre las secciones
      secciones.forEach(function(seccion) {
          // Obtener las coordenadas de la sección
          var seccionRect = seccion.getBoundingClientRect();

          // Verificar si la sección está visible en la ventana
          if (seccionRect.top <= botonY && seccionRect.bottom >= botonY) {
              // Obtener el nombre de la clase correspondiente a la sección
              var claseSeccion = seccion.className.split(" ")[0];

              // Remover todas las clases del botón
              boton.className = "btn btn-outline my-2 my-sm-0 ml-auto";

              // Agregar la clase correspondiente a la sección al botón
              boton.classList.add("botones-color-" + claseSeccion);
          }
      });
  });
});
