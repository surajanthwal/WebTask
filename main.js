
//importing the main scss file which is to be converted into css file and injected
import './public/sass/main.scss';

//the onscroll event animation- fixing the navbar based on scroll position
window.onscroll = function () {
    changeNavBarStyles()
};

//Changing the navbar styles based on scroll position
function changeNavBarStyles() {
    var navbar = document.getElementById("navbarId");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if (!navbar.classList.contains("navbarMargin"))
            navbar.classList.add("navbarMargin");
    } else if (navbar.classList.contains("navbarMargin"))
        navbar.classList.remove("navbarMargin")
}
