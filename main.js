'use strict';

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

window.addEventListener('scroll', function() {
      if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
        // add padding top to show content behind navbar
      } else {
        navbar.classList.remove('navbar--dark');
         // remove padding top from body
      } 
  });

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) =>{
    const target = event.target;
    const scroll = target.dataset.scroll;
    if (scroll == null) {
        return;        // when 'undefined', just return
    } else {
        const scrollToPage = document.querySelector(scroll);
        scrollToPage.scrollIntoView({behavior:"smooth"});
    }
})