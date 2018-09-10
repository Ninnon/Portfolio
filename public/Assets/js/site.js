// $(document).ready(function () {
//     var canvas = document.getElementById("theCanvas");
//     canvas.width = $("#parent").width();
//     canvas.height = $("#parent").height();
// });



window.onload = function () {



window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}



    $(".myButton").click(function () {
        $('html,body').animate({
            scrollTop: $("#topView").offset().top
        },
            'slow');
    });
    $(".home").click(function () {
        $('html,body').animate({
            scrollTop: $("#myCanvas").offset().top
        },
            'slow');
    });
    $(".about").click(function () {
        $('html,body').animate({
            scrollTop: $("#topView").offset().top-50
        },
            'slow');
    });
    $(".portfolio").click(function () {
        $('html,body').animate({
            scrollTop: $("#portfolioView").offset().top-100
        },
            'slow');
    });
    $(".contact").click(function () {
        $('html,body').animate({
            scrollTop: $("#contactView").offset().top
        },
            'slow');
    });

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
// above works. delete everything below if it screws it up

    var sections = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                
                nav.find('li').removeClass('active');
                sections.removeClass('active');

                // $(this).addClass('active');
                nav.find('li[class="scroll' + $(this).attr('class') + '"]').addClass('active');
            }
        });
    });

    $('li > a').click(function () {
        $('li').removeClass('active');
        $(this).parent().addClass('active');
    });


}