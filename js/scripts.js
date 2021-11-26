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
  x.addListener(myFunction); // Attach listener function on state changes

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

document.getElementById("text-1").addEventListener("click", function name() {
  document.getElementById("input-text").style.opacity = "1";
  document.getElementById("input-text").style.transition = "all 300ms linear;";

  document.getElementById("input-text").innerHTML =
    ' <h4 class=" text-white text-center p-2 mb-0"> WHO ARE WE?</h4> <strong><em>Threelab</em></strong> is a young startup, that was created with a unique aim:\ndeveloping a brand!\nnew MUSHROOM UNIVERSE (link) that easily links all the users to the PLAY TO EARN world. Our\nteam\nseeks to realize a new source of fun and entertainment, powered by the community itself. The\none\ntask that Threeelab oughts to accomplish is to always maintain high quality performances and\na\ntwo-sided relationship with the costumers.\n\n<strong>CRAZY MUSHROOMS</strong>\nCrazy mushrooms was created as a bridge between two extremely high yielding sectors: the\ngaming\nindustry and the crypto market.\nOur project is split into two main phases:\n* COLLECTING NFT;';
});

document.getElementById("text-2").addEventListener("click", function name() {
  document.getElementById("input-text").style.opacity = "1";
  document.getElementById("input-text").style.transition = "all 300ms linear;";

  document.getElementById("input-text").innerHTML =
    '<h4 class=" text-white text-center p-2  mb-0"> PLAYING THE GAME</h4>1. The first phase consists in the development of three-dimensional characters (NFT), animated\nand elaborated with care, every mushrooms will be developed through an algorithmic mixing\nstrategy, which grants SINGULARITY to each of them and DIFFERENT POWERS!\nThe characters will be dropped on the following marketplace, starting on 2nd Febrary 2022:\n-link-\n\n2. Throughout the duration of first phase the Treeelab team will provide for the users a brand\nnew game that features the use of the very MUSHROOMS! The game will be completely FREE TO PLAY,\nand, most importantly, available for IOS and Google Play! Crazy Mushrooms will give the\npossibility to EARN REAL MONEY to its players, by joining the platform\'s economic ecosystem.';
});

document.getElementById("text-3").addEventListener("click", function name() {
  document.getElementById("input-text").style.opacity = "1";
  document.getElementById("input-text").style.transition = "all 300ms linear;";

  document.getElementById("input-text").innerHTML =
    '<h4 class=" text-white text-center p-2  mb-0">WHAT ARE YOU WAITING FOR?!</h4> GO CHECK OUT OUR SHROOMS!!!\nTHE MUSHROOMS\nARE YOU READY TO BECOME A MUSHROOM MASTER?\nCOLLECT THE RAREST CHARACTERS! BRING THEM INTO\nTHE GAME, CREATE YOUR ARMY, BECOME THE\nSTRONGEST OF YOUR KINGDOM AND THEN OF THE ENTIRE\nMUSHROOMVERSE!!';
});

document.getElementById("text-4").addEventListener("click", function name() {
  document.getElementById("input-text").style.opacity = "1";
  document.getElementById("input-text").style.transition = "all 300ms linear;";

  document.getElementById("input-text").innerHTML =
    '<h4 class=" text-white text-center mb-0 p-2 text-uppercase">Collections </h4>Our mushrooms are divided in collections:\n1. MAGIC Nation\n2. ?? Upcoming…\n\nEvery collection contains mushrooms with different rarities and traits:\n* *\n*\n* *\n*\nOnly 2 deity (*)mushrooms will be dropped: the dates will be announced through\nour social channels, be sure to stay tuned!!\n-links-\n\n<strong> MUSHROOMS SHOULD NEVER KILL MUSHROOMS…\nBUT TO KEEP PEACE YOU MUST MOVE TO WAR…\nMushroom Ancient</strong>';
});

window.addEventListener("mousedown", function name() {
  document.getElementById("input-text").style.transition = "all 300ms linear;";
  document.getElementById("input-text").style.opacity = "0";
  document.getElementById("input-text").innerHTML = "";
});

ngForFunctionality();

ScrollReveal().reveal(".masthead-text", slideUp);
ScrollReveal().reveal(".text-1", slideUp1);
ScrollReveal().reveal(".text-2", slideUp2);
ScrollReveal().reveal(".text-3", slideUp3);
ScrollReveal().reveal(".text-4", slideUp4);

ScrollReveal().reveal(".best1", slideUp1);
ScrollReveal().reveal(".list", { delay: 500, duration: 1000 });
