const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const backdrop = document.querySelector(".nav-menu-backdrop")
const body = document.querySelector("body");

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.style.overflow="hidden";
  backdrop.style.display="block"
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  body.style.overflow="auto";
  backdrop.style.display="none"
}

document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target) && backdrop.contains(event.target) ) {   
    closeMenu();
  }
});

//Dropdown
const dropBtns = document.querySelectorAll(".dropdown-btn");

if(screen.width < 768){
  dropBtns[0].classList.toggle("active");
}
if(screen.width > 768){
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) ) {   
      var actBtn = document.querySelector(".dropdown-btn.active");
      if(actBtn){
        actBtn.classList.remove("active")
      }
    }
  });
}

dropBtns.forEach(btn => btn.addEventListener("click",(event)=>{
  if(screen.width > 768){
    var actBtn = document.querySelector(".dropdown-btn.active");
    if(actBtn == btn){
      actBtn.classList.remove("active")
    }
    else {
      if(actBtn) actBtn.classList.remove("active");
      btn.classList.toggle("active");
    } 
  }
  else  btn.classList.toggle("active");
}))

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
acc[0].click();

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
  var swiper = new Swiper('.insurers-swiper', {
    a11y: false,
    freeMode: true,
    slidesPerView: 'auto',
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
