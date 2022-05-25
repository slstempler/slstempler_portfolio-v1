//flag for dark mode state
let darkstate = "on";
const currentPage = window.location.pathname;

function dark_toggle() {
    //let element = document.getElementById("header");
    //element.classList.toggle("lightmode");

    //locate navbar icon
    let toggled = document.getElementById("toggle-button");

    //check state, apply effects as needed and swap flag
    if (darkstate == "on" && (currentPage == "/slstempler_portfolio/" || currentPage == "/index.html" || currentPage == "/slstempler_portfolio/index.html")) {
        darkstate = "off";
        toggled.src = "./assets/lightmode-nav.png";
    }
    else if (darkstate == "on"){
        darkstate = "off";
        toggled.src = "../assets/lightmode-nav.png";
    }
    else if (darkstate == "off" && (currentPage == "/slstempler_portfolio/" || currentPage == "/index.html" || currentPage == "/slstempler_portfolio/index.html")){
        darkstate = "on";
        toggled.src = "./assets/darkmode-nav.png";
    }
    else if (darkstate == "off"){
        darkstate = "on";
        toggled.src = "../assets/darkmode-nav.png";
    }
    else {
        console.log("oh no there has been an issue with the JS");
    }

    //toggle core text/background colors
    document.body.classList.toggle("lightmode");
}