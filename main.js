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
        scrollIntoView(scroll)
    }
})

// 'Contact Me' : Click and to the Contact section
const contactMeBtn = document.querySelector('.home__contact');
contactMeBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});



// Scrolling to Top Page
// 1) showing Arrow when scrolling down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
const pageUp = document.querySelector('.page-up');
document.addEventListener('scroll', ()=>{
    if(window.scrollY > homeHeight / 2) {
        pageUp.classList.add('visible');
    } else {
        pageUp.classList.remove('visible');
    }
});

// 2) Go to the top page when clicking 'arrow'
pageUp.addEventListener('click', ()=>{
    scrollIntoView('#home');
});

function scrollIntoView(selector) {
    const scrollToPage = document.querySelector(selector);
    scrollToPage.scrollIntoView({behavior:"smooth"});
}

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
        } else {
            workProjects.classList.add('animation');
                
            setTimeout(() => {
                projects.forEach((project) => {
                 if(filter === '*' || filter === project.dataset.type) {
                    project.classList.remove('invisible');
                 } else {
                    project.classList.add('invisible');
                 }
            })
            
                workProjects.classList.remove('animation');
            },300)
            
    }
});
    