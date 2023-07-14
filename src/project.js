'use strict';

// Filtering
const workCategories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const workProjects = document.querySelector('.projects');

workCategories.addEventListener('click', (e) => {
    e.preventDefault()
    const filter = e.target.dataset.filter;
        if (filter == null) {
            return;        // when 'undefined', just return
        } 
    handleActiveSelection(e.target)
    filterProjects(filter);    
});

function handleActiveSelection(target) {
    // Remove Selection from the previous item and select the next one
    const active = document.querySelector('.category__btn--selected');
    active.classList.remove('category__btn--selected');
    target.classList.add('category__btn--selected');
}

function filterProjects(filter) {
    projects.forEach((project) => {
        if(filter === '*' || filter === project.dataset.type) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    workProjects.classList.add('animation');   
    setTimeout(() => {
        workProjects.classList.remove('animation');
    }, 300);
}