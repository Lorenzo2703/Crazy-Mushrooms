window.onload = function () {
  location.href = "index.html#page-top";
  window.scrollTo(0, 0);
};

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

  myFunction(); // Call listener function at run time
  document.addEventListener("change", myFunction()); // Attach listener function on state changes

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

function myFunction() {
  var x = window.matchMedia("(max-width: 600px)");
  if (x.matches) {
    // If media query matches
    const splide = new Splide(".splide", {
      type: "loop",
      autoplay: true,
      gap: 20,
      perPage: 3,
      interval: 4000,
      padding: 20,
      speed: 2000,
      perMove: 3,
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
      gap: 70,
      perPage: 3,
      interval: 4000,
      padding: 70,
      speed: 2000,
      perMove: 3,
      pauseOnHover: false,
      resetProgress: false,
    }).mount();

    splide1.on("resize", () => {
      splide1.destroy(true);
      myFunction(x);
    });
  }
}

var slideUp = {
  distance: "500%",
  delay: 200,
  duration: 500,
  origin: "bottom",
  opacity: 0,
};
var slideUp5 = {
  distance: "500%",
  duration: 1500,
  delay: 2000,
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

document.getElementById("text-2").addEventListener("click", function name() {
  setTimeout(function () {
    document.getElementById("text-2").style.color = "gold";
    document.getElementById("input-text").style.opacity = "1";
    document.getElementById("input-text").style.transition =
      "all 300ms linear;";

    document.getElementById("input-text").innerHTML =
      '<h3 class=" text-white text-center p-1 mb-1">CRAZY MUSHROOMS</h3>Crazy mushrooms was created as a bridge between two extremely high yielding sectors: the gaming industry and the crypto market.\nOur project is split into two main phases: <ul><li>COLLECTING NFT</li> <li>PLAYING THE GAME</li></ul><ol><li>The first phase consists in the development of three-dimensional characters (NFT), animated and elaborated with care, every mushrooms will be developed through an algorithmic mixing strategy,  which grants SINGULARITY to each of them and DIFFERENT POWERS! \n The characters will be dropped on the following marketplace:\n\n<u>-link COMING SOON-</u>\n\n</li><li>Throughout the duration of first phase the Treeelab team will provide for the users a brand new game that features the use of the very MUSHROOMS!   The game will be completely FREE TO PLAY, and, most importantly, available for IOS and Google Play! Crazy Mushrooms will give the possibility to EARN REAL MONEY to its players, by joining the platform\'s economic ecosystem.\n\nWELL… WHAT ARE YOU WAITING FOR?! GO CHECK OUT OUR SHROOMS!!!</li></ol>';
  }, 350);
});

document.getElementById("text-3").addEventListener("click", function name() {
  setTimeout(function () {
    document.getElementById("text-3").style.color = "gold";

    document.getElementById("input-text").style.opacity = "1";
    document.getElementById("input-text").style.transition =
      "all 300ms linear;";

    document.getElementById("input-text").innerHTML =
      '<h3 class=" text-white text-center p-1 mb-1">THE COLLECTIONS</h3>Our mushrooms are divided in collections, the second collection will be dropped only after the game launch:<ul><li>MAGIC Nation</li><li>Upcoming…</li></ul>*check the blockchain paragraph to know more about the single drops* \n*a collection is made by 10K NFT, the number of mushrooms varies in each drop (#500 in the 1st)* \n\nEvery collection contains mushrooms with different rarities and traits:<ul><li>1 golden rings (uncommon)</li> <li>2 golden rings (rare)</li><li>3 golden rings (epic)</li><li>4 golden rings (legend)</li></ul>';
  }, 350);
});

document.getElementById("text-4").addEventListener("click", function name() {
  setTimeout(function () {
    document.getElementById("text-4").style.color = "gold";

    document.getElementById("input-text").style.opacity = "1";
    document.getElementById("input-text").style.transition =
      "all 300ms linear;";

    document.getElementById("input-text").innerHTML =
      '<h3 class="text-white text-center mb-1 p-1">THE MUSHROOMS</h3><strong>Only 2 deity</strong>(unique base) mushrooms will be dropped: the dates will be announced through our social channels, make sure you stay tuned!! \n\nEvery mushrooms will be developed through an algorithmic mixing strategy, which grants SINGULARITY to each of them and DIFFERENT POWERS! \n\nThe legends are the “matrices”, crafted manually, the rarity of the others depends on the number of the same legendary. <strong>The mushrooms’ kind of set is established by the weapon.</strong> \n\n\n<h5>ARE YOU READY TO BECOME A MUSHROOM MASTER? \nCOLLECT THE RAREST CHARACTERS!\n BRING THEM INTO THE GAME,\n CREATE YOUR ARMY,\n BECOME THE STRONGEST OF YOUR KINGDOM AND THEN OF THE ENTIRE MUSHROOMVERSE!!</h5>';
  }, 350);
});

document.getElementById("text-5").addEventListener("click", function name() {
  setTimeout(function () {
    document.getElementById("text-5").style.color = "gold";

    document.getElementById("input-text").style.opacity = "1";
    document.getElementById("input-text").style.transition =
      "all 300ms linear;";

    document.getElementById("input-text").innerHTML =
      '<h3 class="text-white text-center mb-1 p-1">THE GAME</h3>The Crazy Mushrooms Game will be launched in the Q4 of 2022, the game is a RTS and the players get to face each other commanding their mushrooms armies. The first mode that will implemented is the PVP mode, the champaign mode will be added with future updates. In the PVP the match is divided into three main phases: \n\n-> Army setup\n-> Traps deployment\n-> Battle \n\n <uCheck the whitepaper to know more about it </u>';
  }, 350);
});

window.addEventListener("mousedown", function name() {
  document.getElementById("text-2").style.color = "white";
  document.getElementById("text-3").style.color = "white";
  document.getElementById("text-4").style.color = "white";
  document.getElementById("text-5").style.color = "white";
  document.getElementById("input-text").style.transition = "all 300ms linear;";
  document.getElementById("input-text").style.opacity = "0";
  document.getElementById("input-text").innerHTML = "";
});

ngForFunctionality();

ScrollReveal().reveal(".text-5", slideUp5);
ScrollReveal().reveal(".text-2", slideUp2);
ScrollReveal().reveal(".text-3", slideUp3);
ScrollReveal().reveal(".text-4", slideUp4);

ScrollReveal().reveal(".best1", slideUp);
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
  document.getElementById("countdown").innerHTML = "";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

particlesJS.load("particles-js", "/js/particlesjs-config.json");
