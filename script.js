// Function to show/hide sections
function showSection(sectionId, eventArg) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.style.borderBottom = '2px solid transparent';
    });

    const clickedLink = eventArg && eventArg.target ? eventArg.target : document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (clickedLink && clickedLink.style) {
        clickedLink.style.borderBottom = '2px solid white';
    }
}

// Initialize - show About Me section by default
document.addEventListener('DOMContentLoaded', function() {
    // Show the About section by default
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.classList.add('active');
    }

    // Highlight the first nav link
    const firstLink = document.querySelector('.nav-link');
    if (firstLink) {
        firstLink.style.borderBottom = '2px solid white';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
