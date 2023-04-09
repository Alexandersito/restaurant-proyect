//========================================
//BARRA DE MENU
//========================================
var openIcon = document.getElementById('open-icon');
var closeIcon = document.getElementById('close-icon');

openIcon.addEventListener('click', function () {
    $('#menu-celular').slideToggle(300);
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    closeIcon.classList.add('rotacion');
});

closeIcon.addEventListener('click', function () {
    $('#menu-celular').slideToggle(300);
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block';
    openIcon.classList.add('rotacion');

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
            autoplayTimeout: 5000,
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

//=======================================================================================================================================
//DISCOVER ORU MENU
//=======================================================================================================================================
$(document).ready(function () {
    // Arreglo de nombres de burgers
    var burgers = ["VINCENT", "MARGHERITA", "DIABLO", "VENETIA", "FLORENCE", "ROMA", "VERONA", "MILANO"];
    var burgersImg = ["img/burgers/burger-1.png", "img/burgers/burger-2.png", "img/burgers/burger-3.png", "img/burgers/burger-4.png", "img/burgers/burger-5.png", "img/burgers/burger-6.png", "img/burgers/burger-7.png", "img/burgers/burger-8.png"];
    const burgersBtn = document.getElementById("burgers");

    // Arreglo de nombres de desserts
    var desserts = ["AMARETTI", "BOSTRENGO", "BIGNE", "BUDINO", "BUDINO DI RICOTTA", "BISCOTTI DI AVENA", "COVIGLIA DI CAFFE", "CASADINAS"];
    var dessertsImg = ["img/desserts/dessert-1.png", "img/desserts/dessert-2.png", "img/desserts/dessert-3.png", "img/desserts/dessert-4.png", "img/desserts/dessert-5.png", "img/desserts/dessert-6.png", "img/desserts/dessert-7.png", "img/desserts/dessert-8.png"];
    const dessertsBtn = document.getElementById("desserts");

    // Arreglo de nombres de drinks
    var drinks = ["WINE", "ALE", "BEER", "MARTINI", "LATE VEGETALE", "TÈ CON LIMONE", "FRULLATO DI FRUTTA", "BLUE LAGOON COCKTAIL"];
    var drinksImg = ["img/drinks/drink-1.png", "img/drinks/drink-2.png", "img/drinks/drink-3.png", "img/drinks/drink-4.png", "img/drinks/drink-5.png", "img/drinks/drink-6.png", "img/drinks/drink-7.png", "img/drinks/drink-8.png"];
    const drinksBtn = document.getElementById("drinks");

    // Arreglo de nombres de pasta
    var pasta = ["BUCATINI", "CANNELLONI", "CASUNZIEI", "FARFALLE", "FUSILLI", "GNOCCHI", "CULINGIONIS", "FETTUCCINE"];
    var pastaImg = ["img/pasta/pasta-1.png", "img/pasta/pasta-2.png", "img/pasta/pasta-3.png", "img/pasta/pasta-4.png", "img/pasta/pasta-5.png", "img/pasta/pasta-6.png", "img/pasta/pasta-7.png", "img/pasta/pasta-8.png"];
    const pastaBtn = document.getElementById("pasta");

    // Arreglo de nombres de pizzas
    var pizzas = ["MARGHERITA", "VINCENT", "PEPPERONI", "DIABLO", "CARBONARA", "CAPRICCIOSA", "PROSCIUTTO", "SAPORITA"];
    var pizzasImg = ["img/pizzas/pizza-1.png", "img/pizzas/pizza-2.png", "img/pizzas/pizza-3.png", "img/pizzas/pizza-4.png", "img/pizzas/pizza-5.png", "img/pizzas/pizza-6.png", "img/pizzas/pizza-7.png", "img/pizzas/pizza-8.png"];
    const pizzasBtn = document.getElementById("pizzas");

    // Arreglo de nombres de salads
    var salads = ["INSALATA AI CIPOLLOTTI", "CAESAR", "INSALATA DI CARCIOFI", "INSALATA DI RISO", "INSALATA MARI E MONTI", "PANZANELLA", "INSALATA MISTA", "INSALATA CAPRESE"];
    var saladsImg = ["img/salads/salad-1.png", "img/salads/salad-2.png", "img/salads/salad-3.png", "img/salads/salad-4.png", "img/salads/salad-5.png", "img/salads/salad-6.png", "img/salads/salad-7.png", "img/salads/salad-8.png"];
    const saladsBtn = document.getElementById("salads");

    function cambiarMenu(nombres, boton, imgs) {
        // Recorre cada elemento de la sección de grid
        $(".discover-our-menu-grid-item").each(function (index) {
            // Cambia el texto del elemento h4 correspondiente con el nombre del menú
            $(this).find("h4").text(nombres[index]);
            // Cambia la ruta de la imagen correspondiente al elemento img
            var imgElement = $(this).find("img");
            imgElement.css('opacity', '0');
            setTimeout(function () {
                imgElement.attr("src", imgs[index]);
                imgElement.css('opacity', '1');
            }, 200);
        });

        // Establece el color del botón correspondiente
        boton.style.color = "#FFC84A";

        // Desactiva el color de los otros botones
        const botones = document.querySelectorAll(".discover-our-menu-list ul");
        botones.forEach(function (botonActual) {
            if (botonActual !== boton) {
                botonActual.style.color = "";
            }
        });
    }

    // Controlador de eventos click para el botón de burgers
    burgersBtn.addEventListener("click", function () {
        cambiarMenu(burgers, this, burgersImg);
    });

    // Controlador de eventos click para el botón de desserts
    dessertsBtn.addEventListener("click", function () {
        cambiarMenu(desserts, this, dessertsImg);
    });

    // Controlador de eventos click para el botón de drinks
    drinksBtn.addEventListener("click", function () {
        cambiarMenu(drinks, this, drinksImg);
    });

    // Controlador de eventos click para el botón de pasta
    pastaBtn.addEventListener("click", function () {
        cambiarMenu(pasta, this, pastaImg);
    });

    // Controlador de eventos click para el botón de pizzas
    pizzasBtn.addEventListener("click", function () {
        cambiarMenu(pizzas, this, pizzasImg);
    });

    // Controlador de eventos click para el botón de salads
    saladsBtn.addEventListener("click", function () {
        cambiarMenu(salads, this, saladsImg);
    });
});


