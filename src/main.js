'use strict';

// Make header transparent when it is on the top
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
      if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
        // add padding top to show content behind header
      } else {
        header.classList.remove('header--dark');
         // remove padding top from body
      } 
  });

// Scrolling to Top Page
// 1) showing Arrow when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', ()=>{
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// 2) Go to the top page when clicking 'arrow'
const pageUp = document.querySelector('.page-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    pageUp.style.opacity = 1;
  } else {
    pageUp.style.opacity = 0;
  }
});

// Handle scrolling when tapping on the header menu
// Active Toggle Button
const navbarMenu = document.querySelector('.header__menu');
const navbarToggleBtn = document.querySelector('.header__toggle');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

navbarMenu.addEventListener('click', () =>{
    navbarMenu.classList.remove('open');
});
