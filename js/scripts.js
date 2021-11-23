/*!
 * Start Bootstrap - Grayscale v7.0.3 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

window.onload = function () {
  location.href = "index.html#page-top";
};

var slideUp = {
  distance: "500%",
  delay: 100,
  duration: 1000,
  origin: "bottom",
  opacity: 0,
};
var slideUp1 = {
  distance: "500%",
  duration: 1000,
  delay: 300,
  origin: "bottom",
  opacity: 0,
};

const anArray = [
  "../assets/img/Angel.png",
  "../assets/img/Barbarian.png",
  "../assets/img/Devil.png",
  "../assets/img/Doctor.png",
  "../assets/img/Goblin.png",
  "../assets/img/Guardian.png",
  "../assets/img/Hunter.png",
  "../assets/img/Jester.png",
  "../assets/img/Mage.png",
  "../assets/img/Shaman.png",
];

function ngForFunctionality() {
  let value = "";
  anArray.forEach((post) => {
    value += ` <div class="col-4  col-md-2"><img class="img-card"src="${post}" alt=""></div></div>`;
  });
  document.getElementById("for").innerHTML = value;
}

const cbox = document.querySelectorAll(".blur");

for (let i = 0; i < cbox.length; i++) {
  cbox[i].addEventListener("click", function () {
    cbox[i].classList.toggle("blur1");
  });
}

ngForFunctionality();

ScrollReveal().reveal(".masthead-text", slideUp);
ScrollReveal().reveal(".text-1", slideUp);
ScrollReveal().reveal(".text-2", slideUp1);
ScrollReveal().reveal(".text-3", slideUp);
ScrollReveal().reveal(".text-4", slideUp1);

ScrollReveal().reveal(".featured", slideUp);
ScrollReveal().reveal(".one", slideUp);
ScrollReveal().reveal(".two", slideUp);
ScrollReveal().reveal(".best", slideUp);
ScrollReveal().reveal(".list", { delay: 500, duration: 1000 });
