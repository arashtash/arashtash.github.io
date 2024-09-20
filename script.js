
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


// Smooth scroll for navigation links
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






// Handle View More Projects Button
document.getElementById('viewMoreProjects').addEventListener('click', function() {
    const fullPageContent = document.getElementById('fullPageContent');
    const projectsPage = document.getElementById('projectsPage');

    // Slide out the entire current page content
    fullPageContent.classList.add('slide-out-left');

    // After the animation completes, hide the section and show the projects-only page
    setTimeout(() => {
        fullPageContent.classList.add('hidden'); 
        fullPageContent.classList.remove('slide-out-left'); 
        projectsPage.classList.remove('hidden'); 
        projectsPage.classList.add('slide-in-right'); 

        // Scroll to the top of the project list
        
    }, 800); 

    window.scrollTo(0, 0);
});

// Handle Back to Full Page Button
document.getElementById('backToFullPage').addEventListener('click', function() {
    const fullPageContent = document.getElementById('fullPageContent');
    const projectsPage = document.getElementById('projectsPage');

    
    projectsPage.classList.add('slide-out-right');

    // After the slide-out animation finishes, hide the projects page and show the full page content
    setTimeout(() => {
        projectsPage.classList.add('hidden'); 
        projectsPage.classList.remove('slide-out-right'); 

        
        fullPageContent.classList.remove('hidden'); 
        fullPageContent.classList.add('slide-in-left'); 

        
        setTimeout(() => {
            fullPageContent.classList.remove('slide-in-left'); 
        }, 800); // Wait for the slide-in-left animation to finish
    }, 800);
});




document.getElementById('defaultMode').addEventListener('click', function() {
    document.body.classList.remove('tritanopia');
});

document.getElementById('tritanopiaMode').addEventListener('click', function() {
    document.body.classList.add('tritanopia');
});
