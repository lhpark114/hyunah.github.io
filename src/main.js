'use strict';

// Make header transparent when it is on the top
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

document.addEventListener('scroll', function() {
      if (window.scrollY > headerHeight) {
        header.classList.add('header--dark');
        // add padding top to show content behind header
      } else {
        header.classList.remove('header--dark');
         // remove padding top from body
      } 
  });


// Handle scrolling when tapping on the header menu
const navbarMenu = document.querySelector('.header__menu');
navbarMenu.addEventListener('click', (event) =>{
    const target = event.target;
    const scroll = target.dataset.scroll;
  //const menuActive = document.querySelector('.navbar__menu');
    if (scroll == null) {
        return;        // when 'undefined', just return
    } else {
        navbarMenu.classList.remove('open');
        scrollIntoView(scroll);
    }
})


// Active Toggle Button
const navbarToggleBtn = document.querySelector('.header__toggle');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
})


// 'Contact Me' : Click and to the Contact section
const contactMeBtn = document.querySelector('.home__contact');
contactMeBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});



// Scrolling to Top Page
// 1) showing Arrow when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
const pageUp = document.querySelector('.page-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight / 2) {
        pageUp.style.opacity = 1;
    } else {
        pageUp.style.opacity = 0;
    }
});

// 2) Go to the top page when clicking 'arrow'
pageUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
});



// Home Fade effects
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});



function scrollIntoView(selector) {
    const scrollToPage = document.querySelector(selector);
    scrollToPage.scrollIntoView({behavior:"smooth"});
  selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersection && entry.intersectionRatio > 0 ) {
      const index = sectionIds.indexOf(`#{entry.target.id}`);
      
      if(entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1;
      } else {
        selectedNavIndex = index - 1;
      }
    }
    
  });
}
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observer(section));

window.addEventListener('wheel', () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0;
  } else if(
    Math.round(window.scrollY + window.innerHeight) === document.body.clientHeight
  ) {selectedNavIndex = navItems.length - 1;}
  selectNavItem(navItems[selectedNavIndex]);
})
