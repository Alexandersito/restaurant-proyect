//========================================
//BARRA DE MENU
//========================================
var openIcon = document.getElementById('open-icon');
var closeIcon = document.getElementById('close-icon');

openIcon.addEventListener('click', function () {
    $('#menu-celular').slideToggle(300);
    document.getElementById('header').style.backgroundColor = '#121618';
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    closeIcon.classList.add('rotacion');
});

closeIcon.addEventListener('click', function () {
    $('#menu-celular').slideToggle(300);
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block';
    openIcon.classList.add('rotacion');

    setTimeout(function () {
        document.getElementById('header').style.backgroundColor = 'transparent';
    }, 300);

});

//========================================
//MENU PARA CELULARES
//========================================
$(document).ready(function () {
    $('.ri-arrow-right-s-line').click(function () {
        $(this).closest('li').find('.submenu').slideToggle(300);
        $(this).toggleClass('rotated');
    });
});

//=======================================================================================================================================
//CARRUSEL
//=======================================================================================================================================
$(document).ready(function () {
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        $('.owl-prev').click(function () {
            $('.owl-carousel').trigger('prev.owl.carousel');
        });

        $('.owl-next').click(function () {
            $('.owl-carousel').trigger('next.owl.carousel');
        });
    });

});




