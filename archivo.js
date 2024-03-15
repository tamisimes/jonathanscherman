  document.addEventListener('DOMContentLoaded', function () {
    const botonSayHello = document.getElementById('boton-say-hello');
    const contactForm = document.getElementById('contactForm');
    const overlay = document.getElementById('overlay');

    botonSayHello.addEventListener('click', function () {
      contactForm.style.display = 'block';
      overlay.style.display = 'block';
    });

    overlay.addEventListener('click', function () {
      contactForm.style.display = 'none';
      overlay.style.display = 'none';
    });
  });
