var x = window.matchMedia("(max-width: 600px)");
window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function

  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      document.getElementById("treee").classList.add("d-none");
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      document.getElementById("treee").classList.remove("d-none");
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  myFunction(x); // Call listener function at run time
  document.addEventListener("change", myFunction); // Attach listener function on state changes

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
    const splide = new Splide(".splide", {
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

    splide.on("resize", () => {
      splide.destroy(true);
      myFunction(x);
    });
  } else {
    const splide1 = new Splide(".splide", {
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

    splide1.on("resize", () => {
      splide1.destroy(true);
      myFunction(x);
    });
  }
}

window.onload = function () {
  location.href = "#page-top";
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
        <img class="img-card" src="${post}"  alt="Funghetto">
    </div>
</li>`;
  });
  document.getElementById("for").innerHTML = value;
}

document.getElementById("text-2").addEventListener("click", function name() {
  document.getElementById("div-coming").style.display = "none";

  setTimeout(function () {
    document.getElementById("text-2").style.color = "gold";
    document.getElementById("input-text").style.opacity = "1";
    document.getElementById("input-text").style.transition =
      "all 300ms linear;";

    document.getElementById("input-text").innerHTML =
      '<h3 class=" text-white text-center p-1 mb-1"> PLAYING THE GAME</h3><strong>CRAZY MUSHROOMS</strong>\nCrazy mushrooms was created as a bridge between two extremely high yielding sectors: the\ngaming\nindustry and the crypto market.\nOur project is split into two main phases:\n\n* COLLECTING NFT;\n\n1. The first phase consists in the development of three-dimensional characters (NFT), animated\nand elaborated with care, every mushrooms will be developed through an algorithmic mixing\nstrategy, which grants SINGULARITY to each of them and DIFFERENT POWERS!\nThe characters will be dropped on the following marketplace, starting on 2nd Febrary 2022:\n-link-\n\n2. Throughout the duration of first phase the Treeelab team will provide for the users a brand\nnew game that features the use of the very MUSHROOMS! The game will be completely FREE TO PLAY,\nand, most importantly, available for IOS and Google Play! Crazy Mushrooms will give the\npossibility to EARN REAL MONEY to its players, by joining the platform\'s economic ecosystem.';
  }, 350);
});

document.getElementById("text-3").addEventListener("click", function name() {
  document.getElementById("div-coming").style.display = "none";

  setTimeout(function () {
    document.getElementById("text-3").style.color = "gold";

    document.getElementById("input-text").style.opacity = "1";
    document.getElementById("input-text").style.transition =
      "all 300ms linear;";

    document.getElementById("input-text").innerHTML =
      '<h3 class=" text-white text-center p-1 mb-1">WHAT ARE YOU WAITING FOR?!</h3> GO CHECK OUT OUR SHROOMS!!!\nTHE MUSHROOMS\nARE YOU READY TO BECOME A MUSHROOM MASTER?\nCOLLECT THE RAREST CHARACTERS! BRING THEM INTO\nTHE GAME, CREATE YOUR ARMY, BECOME THE\nSTRONGEST OF YOUR KINGDOM AND THEN OF THE ENTIRE\nMUSHROOMVERSE!!';
  }, 350);
});

document.getElementById("text-4").addEventListener("click", function name() {
  document.getElementById("div-coming").style.display = "none";

  setTimeout(function () {
    document.getElementById("text-4").style.color = "gold";

    document.getElementById("input-text").style.opacity = "1";
    document.getElementById("input-text").style.transition =
      "all 300ms linear;";

    document.getElementById("input-text").innerHTML =
      '<h3 class=" text-white text-center mb-1 p-1 text-uppercase">Collections </h3>Our mushrooms are divided in collections:\n1. MAGIC Nation\n2. ?? Upcoming…\n\nEvery collection contains mushrooms with different rarities and traits:\n* *\n*\n* *\n*\nOnly 2 deity (*)mushrooms will be dropped: the dates will be announced through\nour social channels, be sure to stay tuned!!\n-links-\n\n<strong> MUSHROOMS SHOULD NEVER KILL MUSHROOMS…\nBUT TO KEEP PEACE YOU MUST MOVE TO WAR…\nMushroom Ancient</strong>';
  }, 350);
});

window.addEventListener("mousedown", function name() {
  document.getElementById("text-2").style.color = "white";
  document.getElementById("text-3").style.color = "white";
  document.getElementById("text-4").style.color = "white";
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

var countDownDate = new Date("Feb 2, 2022 00:00:00").getTime();
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
