// Select all the nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Smooth scroll to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Open modal when clicking on a project
    projects.forEach(project => {
        project.addEventListener('click', function() {
            const modalId = project.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.add('show');
        });
    });

    // Close modal when clicking on the close button
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.classList.remove('show');
        });
    });

    // Close modal when clicking outside modal content
    modals.forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
});
