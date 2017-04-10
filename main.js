import './public/sass/main.scss';
window.onscroll = function () {
    changeNavBarStyles()
};

function changeNavBarStyles() {
    var navbar = document.getElementById("navbarId");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if (!navbar.classList.contains("navbarMargin"))
            navbar.classList.add("navbarMargin");
    } else if (navbar.classList.contains("navbarMargin"))
        navbar.classList.remove("navbarMargin")
}


// import './user.scss';

// console.log('Hello from Webpack');
// console.log('Hello from Suraj');
// console.log('Final');
// console.log('go away');

// const name="scotch.io";
// setTimeout(() => alert(`Hello there from ${name}`), 300);
