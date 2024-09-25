// Author : Arash Tashakori
// © 2024 Arash Tashakori. All rights reserved.

// color switching
document.getElementById('defaultModeb').addEventListener('click', function () {
    document.body.classList.remove('tritanopia');
});

document.getElementById('tritanopiaModeb').addEventListener('click', function () {
    document.body.classList.add('tritanopia');
});


//add expand and collapse option for project item descriptions
document.addEventListener('DOMContentLoaded', function() {
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
