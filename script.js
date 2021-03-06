function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

/*JS for Toggle Menu For small screens*/
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}
// owl carousel script
$('.carousel').owlCarousel({
    margin: 100,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 100,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        50: {
            items: 2,
            nav: false
        }
    }
});