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

  var x = window.matchMedia("(max-width: 600px)");
  myFunction(x); // Call listener function at run time
  x.addEventListener(myFunction); // Attach listener function on state changes

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

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    new Splide(".splide", {
      type: "loop",
      autoplay: true,
      gap: 30,
      perPage: 3,
      interval: 3000,
      padding: 30,
      speed: 800,
      perMove: 1,
      pauseOnHover: false,
      resetProgress: false,
    }).mount();
  } else {
    new Splide(".splide", {
      type: "loop",
      autoplay: true,
      gap: 100,
      perPage: 3,
      interval: 3000,
      padding: 100,
      speed: 800,
      perMove: 1,
      pauseOnHover: false,
      resetProgress: false,
    }).mount();
  }
}

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
  duration: 1500,
  delay: 300,
  origin: "bottom",
  opacity: 0,
};
var slideUp2 = {
  distance: "500%",
  duration: 1500,
  delay: 800,
  origin: "bottom",
  opacity: 0,
};
var slideUp3 = {
  distance: "500%",
  duration: 1500,
  delay: 1200,
  origin: "bottom",
  opacity: 0,
};
var slideUp4 = {
  distance: "500%",
  duration: 1500,
  delay: 1700,
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
    value += `<li class="splide__slide">
    <div class="splide__slide__container">
        <img class="img-card" src="${post}">
    </div>
</li>`;
  });
  document.getElementById("for").innerHTML = value;
}

const cbox = document.querySelectorAll(".blur");

for (let i = 0; i < cbox.length; i++) {
  cbox[i].addEventListener("click", function () {
    cbox[i].classList.toggle("blur1");
    for (let i = 0; i < cbox.length; i++) {
      if (!cbox[i].classList.contains("blur1")) {
        cbox[i].classList.add("op");
      }
    }
  });
}

document.addEventListener("mousedown", function () {
  for (let i = 0; i < cbox.length; i++) {
    cbox[i].classList.remove("blur1");
    if (cbox[i].classList.contains("op")) {
      cbox[i].classList.remove("op");
    }
  }
});

ngForFunctionality();

ScrollReveal().reveal(".masthead-text", slideUp);
ScrollReveal().reveal(".text-1", slideUp1);
ScrollReveal().reveal(".text-2", slideUp2);
ScrollReveal().reveal(".text-3", slideUp3);
ScrollReveal().reveal(".text-4", slideUp4);

ScrollReveal().reveal(".best1", slideUp1);
ScrollReveal().reveal(".list", { delay: 500, duration: 1000 });
