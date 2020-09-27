// Swiper
var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 60,
  mousewheel: { forceToAxis: true },
  breakpoints: {
    // when window width is >= 320px
    999: {
      spaceBetween: 230,
    },
  },
});

// Animate
AOS.init({
  offset: 200,
  duration: 1200,
  delay: 100,
  once: true,
});

// Accordion
var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    this.classList.toggle("active");
  });
}

acc[0].click() & acc[3].click();

// Header menus
onClick("open-menu", () => {
  document.getElementById("mob-menu").style.display = "block";
});

onClick("close-menu", () => {
  document.getElementById("mob-menu").style.display = "none";
});

var menus = document.getElementsByClassName("m-menu");
for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function () {
    document.getElementById("mob-menu").style.display = "none";
  });
}

// Main menu
document.querySelector(".active").classList.remove("active");

var url = window.location.href.replace("?m=1", "");
var uri = url.substring(url.lastIndexOf("/") + 1);
switch (uri) {
  case "#expertise-box":
    document.querySelectorAll(".menu-link")[1].classList.add("active");
    break;
  case "#porfolio":
    document.querySelectorAll(".menu-link")[1].classList.add("active");
    break;
  case "#clients":
    document.querySelectorAll(".menu-link")[1].classList.add("active");
    break;
  default:
    document.querySelectorAll(".menu-link")[0].classList.add("active");
    break;
}

// Tabs
onClick("tab-2", () => {
  var vignettes = document.getElementsByClassName("home-vignette");
  for (let i = 0; i < vignettes.length; i++) {
    vignettes[i].classList.remove("visible");
    vignettes[i].classList.remove("hidden");
  }

  document.querySelector("#vignette-1").classList.add("hidden");
  document.querySelector("#vignette-2").classList.add("visible");
});

// Scroll
onClick("scroll-btn", scrollToTop);

// Helpers
function onClick(id, callback) {
  document.getElementById(id).addEventListener("click", callback);
}

function scrollToTop() {
  window.scrollTo(0, 0);
}

// Events
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-btn").style.display = "block";
  } else {
    document.getElementById("scroll-btn").style.display = "none";
  }
};
