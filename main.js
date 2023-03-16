const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    // Add the following lines to show/hide the menu
    if (navMenu.classList.contains("active")) {
      navMenu.style.opacity = "1";
      navMenu.style.visibility = "visible";
    } else {
      navMenu.style.opacity = "0";
      navMenu.style.visibility = "hidden";
    }
  }

