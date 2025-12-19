document.addEventListener('DOMContentLoaded', () => {
    // Mobile Nav
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Dark Mode Persistence
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'dark') body.setAttribute('data-theme', 'dark');

    themeToggle.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Contact Form Pop-ups
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
            alert("Error: Please enter a valid email address.");
        } else {
            alert("Successfully sent!");
            form.reset();
        }
    });

    document.getElementById('year').textContent = new Date().getFullYear();
});