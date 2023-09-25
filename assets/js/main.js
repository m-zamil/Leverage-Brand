const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', mobileMenu);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    closeMenu();
  }
});

//Accordion Script
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
const header = document.getElementById('header');
var prevScrollpos = window.screenY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = '0';
  } else {
    header.style.top = '-100%';
  }
  prevScrollpos = currentScrollPos;
};

// Clients slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  freeMode: true,
  mousewheel: true,
});
