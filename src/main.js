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
const headerMenu = document.querySelector('.header__menu');
headerMenu.addEventListener('click', (event) =>{
    const target = event.target;
    const scroll = target.dataset.scroll;
  //const menuActive = document.querySelector('.navbar__menu');
    if (scroll == null) {
        return;        // when 'undefined', just return
    } else {
        headerMenu.classList.remove('open');
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

// Filtering
const workCategories = document.querySelector('.work__categories');
const workProjects = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workCategories.addEventListener('click', (e) => {
    e.preventDefault()
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if (filter == null) {
            return;        // when 'undefined', just return
        } 
        
            // Remove Selection from the previous item and select the next one
            const active = document.querySelector('.category__btn.selected');
            active.classList.remove('selected');
            const target = 
                e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
            target.classList.add('selected');

            workProjects.classList.add('animation');
                
            setTimeout(() => {
                projects.forEach((project) => {
                 if(filter === '*' || filter === project.dataset.type) {
                    project.classList.remove('invisible');
                 } else {
                    project.classList.add('invisible');
                 }
            });
                 workProjects.classList.remove('animation');
        },300)
    });


const sectionIds = [
  '#home', '#about', '#skills', '#work', '#testimonials', '#contact',
];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-scroll="${id}"`));

let selectedNavIndex = 0;
let selectedNavItem = navItems[0];
function selectedNavItem(selected) {
  selectedNavItem.classList.remove('active');
  selectedNavItem = selected;
  selectedNavItem.classList.add('active');
}

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
