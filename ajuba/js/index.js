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

acc[0].click() & acc[10].click();

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
var links = document.getElementsByClassName("menu-link");
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    this.classList.add("active");
  };
}

// Tabs
var tabs = document.getElementsByClassName("tabs-btn");
for (let i = 0; i < tabs.length; i++) {
  tabs[i].onclick = function () {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    this.classList.add("active");

    var vignettes = document.getElementsByClassName("home-vignette");
    for (let j = 0; j < vignettes.length; j++) {
      vignettes[j].classList.add("hidden");
      vignettes[j].classList.remove("visible");

      if (i === j) {
        vignettes[j].classList.add("visible");
      }
    }
  };
}

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
