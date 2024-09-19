
window.addEventListener('scroll', revealSections);


window.addEventListener('load', revealSections);

function revealSections() {
    // Select elements that should have the reveal effect
    const reveals = document.querySelectorAll('.education-item, .project-card, .experience-item, .technical-skills, .skills-grid, .main-content h2, .social-icons');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150; // adjust this value to control when the effect triggers

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

if (navigator.userAgent.includes('iPhone')) {
    document.querySelector('meta[name="viewport"]').setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no");
}
