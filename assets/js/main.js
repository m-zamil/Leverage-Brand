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
if (acc) {
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
}

if (document.querySelector('.swiper')) {
  var swiper = new Swiper('.clients-logos', {
    a11y: false,
    freeMode: true,
    speed: 4000,
    loop: true,
    slidesPerView: 'auto',
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
}

const quoteModal = document.getElementById('quoteModal');
const quoteBtns = document.querySelectorAll('.quoteBtn');

if (quoteModal) {
  quoteBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.body.classList.toggle('modal-open');
      quoteModal.classList.add('visible');
    });
  });

  quoteModal.addEventListener('click', function (e) {
    if (!e.target.matches('.quote-card, .quote-card *')) {
      document.body.classList.toggle('modal-open');
      quoteModal.classList.toggle('visible');
    }
  });
}
