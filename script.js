// Author : Arash Tashakori
// © 2024 Arash Tashakori. All rights reserved.
window.addEventListener('scroll', revealSections);


window.addEventListener('load', revealSections);

function revealSections() {

    const reveals = document.querySelectorAll('.education-item, .project-card, .experience-item, .technical-skills, .skills-grid, .main-content h2, .social-icons');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150; 

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('reveal');
        } else {
            reveals[i].classList.remove('reveal');
        }
    }
}


// scrolling for navigation links
document.querySelectorAll('.nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


document.getElementById('toggleCourses').addEventListener('click', function() {
    const courseItems = document.querySelectorAll('.course-item.hidden');
    const isHidden = courseItems[0].style.display === 'none' || courseItems[0].style.display === '';
    
    courseItems.forEach(item => {
        item.style.display = isHidden ? 'block' : 'none';
    });

    this.textContent = isHidden ? 'Show Less' : 'View All';
});






//View More Projects button
document.getElementById('viewMoreProjects').addEventListener('click', function() {
    const fullPageContent = document.getElementById('fullPageContent');
    const projectsPage = document.getElementById('projectsPage');

    //slide out all of current page content
    fullPageContent.classList.add('slide-out-left');

    //after the animation is completed hide the section and show the projects only page
    setTimeout(() => {
        fullPageContent.classList.add('hidden'); 
        fullPageContent.classList.remove('slide-out-left'); 
        projectsPage.classList.remove('hidden'); 
        projectsPage.classList.add('slide-in-right'); 
        
    }, 800); 

    //scroll to the top of the project page
    window.scrollTo(0, 0);
});

//Back to Full Page Button
document.getElementById('backToFullPage').addEventListener('click', function() {
    const fullPageContent = document.getElementById('fullPageContent');
    const projectsPage = document.getElementById('projectsPage');

    
    projectsPage.classList.add('slide-out-right');

    //after the slide-out animation finishes, hide the projects page and show the full page content
    setTimeout(() => {
        projectsPage.classList.add('hidden'); 
        projectsPage.classList.remove('slide-out-right'); 

        
        fullPageContent.classList.remove('hidden'); 
        fullPageContent.classList.add('slide-in-left'); 

        
        setTimeout(() => {
            fullPageContent.classList.remove('slide-in-left'); 
        }, 800); // Wait for the slide-to-left animation to finish
    }, 800);
});

// back to Full Page Button
document.getElementById('backToFullPageB').addEventListener('click', function() {
    const fullPageContent = document.getElementById('fullPageContent');
    const projectsPage = document.getElementById('projectsPage');

    
    projectsPage.classList.add('slide-out-right');

    //after the sliding animation finishes, hide the projects page and show the full page content
    setTimeout(() => {
        projectsPage.classList.add('hidden'); 
        projectsPage.classList.remove('slide-out-right'); 

        
        fullPageContent.classList.remove('hidden'); 
        fullPageContent.classList.add('slide-in-left'); 

        
        setTimeout(() => {
            fullPageContent.classList.remove('slide-in-left'); 
        }, 800); //wait for the slide-in-left animation to end
    }, 800);
});




//add expand and collapse option for project item descriptions
document.querySelectorAll('.project-item-full').forEach(project => {
    const btn = document.createElement('button');
    btn.textContent = 'Expand';
    btn.classList.add('expand-btn');

    btn.addEventListener('click', function() {
        if (project.classList.contains('expanded')) {
            //collapse the project if it's already expanded
            project.classList.remove('expanded');
            btn.textContent = 'Expand';
        } else {
            //expand the project if not expanded
            project.classList.add('expanded');
            btn.textContent = 'Collapse';
        }
    });

    project.appendChild(btn);
});




document.getElementById('defaultMode').addEventListener('click', function() {
    document.body.classList.remove('tritanopia');
});

document.getElementById('tritanopiaMode').addEventListener('click', function() {
    document.body.classList.add('tritanopia');
});
document.getElementById('defaultModeb').addEventListener('click', function() {
    document.body.classList.remove('tritanopia');
});

document.getElementById('tritanopiaModeb').addEventListener('click', function() {
    document.body.classList.add('tritanopia');
});


// Filtering projects:
const dropdownButton = document.getElementById('filter-dropdown-button');
const dropdownMenu = document.getElementById('filter-dropdown-menu');
const filterKeywordsList = document.getElementById('filter-keywords');
const projects = document.querySelectorAll('.project-item-full');

//add 'Reset Filters' button dynamically
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Filters';
resetButton.id = 'reset-filters-button';
resetButton.style.display = 'none'; //initially hidden
dropdownMenu.prepend(resetButton); //prepend the button to the menu

//apply styling
resetButton.style.marginBottom = '10px'; 
resetButton.style.marginTop = '10px'; 
resetButton.style.padding = '10px 20px'; 
resetButton.style.fontSize = '1rem'; 
resetButton.style.border = 'none'; 
resetButton.style.borderRadius = '8px'; 
resetButton.style.backgroundColor = 'var(--primary-color)'; 
resetButton.style.color = 'white'; 
resetButton.style.cursor = 'pointer'; 
resetButton.style.display = 'block';
resetButton.style.marginLeft = 'auto'; 
resetButton.style.marginRight = 'auto';
resetButton.style.textAlign = 'center';

//Add hover effect
resetButton.addEventListener('mouseenter', () => {
    resetButton.style.backgroundColor = 'var(--hover-color)'; 
});
resetButton.addEventListener('mouseleave', () => {
    resetButton.style.backgroundColor = 'var(--primary-color)';
});

//open/close drop down menu
dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

const pinnedKeywords = ['Python', 'Java', 'JavaScript', 'C', 'C#'];

//add the keywords dynamically
const keywordsSet = new Set();
projects.forEach(project => {
    const keywordsElement = project.querySelector('.keyword');
    if (keywordsElement) {
        const keywordsText = keywordsElement.textContent.replace('Keywords:', '').trim();
        const keywords = keywordsText.split(',').map(keyword => keyword.trim());
        keywords.forEach(keyword => keywordsSet.add(keyword));
    }
});

const allKeywords = Array.from(keywordsSet);

// Separate pinned keywords and others
const pinnedKeywordsSet = new Set(pinnedKeywords); // Use a Set for fast lookup
const pinned = allKeywords.filter(keyword => pinnedKeywordsSet.has(keyword));
const nonPinned = allKeywords.filter(keyword => !pinnedKeywordsSet.has(keyword));

// Sort non-pinned keywords alphabetically
const sortedNonPinned = nonPinned.sort();

// Combine pinned and non-pinned keywords
const sortedKeywords = [...pinned, ...sortedNonPinned];

//Add the keywords to the dropdown menu
sortedKeywords.forEach(keyword => {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = keyword;

    button.dataset.keyword = keyword;
    li.appendChild(button);
    filterKeywordsList.appendChild(li);
});

//filter projects based on selected keywords
filterKeywordsList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const selectedKeyword = e.target.dataset.keyword;
        const isActive = e.target.classList.toggle('active');

        // Get all currently active filters
        const activeButtons = filterKeywordsList.querySelectorAll('button.active');
        const activeKeywords = Array.from(activeButtons).map(button => button.dataset.keyword);
        
        //show/hide projects based on the selected keyword
        projects.forEach(project => {
            const keywordsElement = project.querySelector('.keyword');
            if (keywordsElement) {
                const keywordsText = keywordsElement.textContent.replace('Keywords:', '').trim();
                const matches = activeKeywords.some(keyword => keywordsText.includes(keyword));
                
                if (matches || activeKeywords.length === 0) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            }
        });

        //show the reset filters button when any filter is active
        if (activeButtons.length > 0) {
            resetButton.style.display = 'block';
        } 
        else {
            resetButton.style.display = 'none';
            projects.forEach(project => {
                project.style.display = 'block';
            });
        }
    }
});

//resetting filters
resetButton.addEventListener('click', () => {
    //clear all active buttons
    const activeButtons = filterKeywordsList.querySelectorAll('button.active');
    activeButtons.forEach(button => button.classList.remove('active'));

    //show all projects
    projects.forEach(project => {
        project.style.display = 'block';
    });

    //hide the reset filters button
    resetButton.style.display = 'none';
});

