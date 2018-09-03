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

    $("#viewWorkButton").click(function () {
        $('html,body').animate({
            scrollTop: $("#topView").offset().top
        },
            'slow');
    });


}