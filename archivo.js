$(document).ready(function() {
    function animateCartas(cartas) {
        cartas.each(function(index) {
            var carta = $(this);
            setTimeout(function() {
                carta.addClass('mostrar');
            }, 300 * index);
        });
    }

    

    function checkVisibility() {
        $('.seccion2 ').each(function() {
            if (elementInViewport(this) && !$(this).hasClass('mostrar')) {
                $(this).addClass('mostrar');
                animateCartas($(this).find('.carta-experiencia'));
            }
        });

        $('.carta-experiencia', ).each(function(index) {
            if (elementInViewport(this) && !$(this).hasClass('mostrar')) {
                var carta = $(this);
                setTimeout(function() {
                    carta.addClass('mostrar');
                }, 300 * index);
            }
        });
    }

    function elementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    checkVisibility();

    $(window).on('scroll resize', function() {
        checkVisibility();
    });

});

document.getElementById('contactBtn').addEventListener('click', function() {
    var form = document.getElementById('contactForm');
    if (form.style.display === 'none') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });
  