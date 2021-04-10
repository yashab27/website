/*Sticky Navbar*/
window.onscroll = function() { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

function myFunction1() {
    document.getElementById("sigin").submit();
}

function myFunction2() {
    document.getElementById("signup").submit();
}