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

    if ($(window).width() < 768) {
        $(".about").click(function () {
            if ($("#navBar").hasClass("sticky")) {
                $('html,body').animate({
                    scrollTop: $("#aboutMe").offset().top
                },
                    'slow');
            } else {
                $('html,body').animate({
                    scrollTop: $("#aboutMe").offset().top - 225
                },
                    'slow');
            }
        })

    } else {
        $(".about").click(function () {
            if ($("#navBar").hasClass("sticky")) {
                $('html,body').animate({
                    scrollTop: $("#aboutMe").offset().top
                },
                    'slow');
            } else {
                $('html,body').animate({
                    scrollTop: $("#aboutMe").offset().top - 50
                },
                    'slow');
            }

        });
    }



    $(".myButton").click(function () {

        $('html,body').animate({
            scrollTop: $("#topView").offset().top - 50
        },
            'slow');
    });
    $(".home").click(function () {
        $('html,body').animate({
            scrollTop: $("#myCanvas").offset().top
        },
            'slow');
    });

   
    $(".portfolio").click(function () {
        $('html,body').animate({
            scrollTop: $("#projects").offset().top - 50
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


    
    }