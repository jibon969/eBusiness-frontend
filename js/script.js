
// Header fixed script
window.onscroll = function() {
    var navbar = document.querySelector('header');
    if (window.pageYOffset > 100) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
};