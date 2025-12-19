document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

    // 2. Dark Mode Preference
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

    // 3. Typing Effect
    const textElement = document.querySelector('.typing-text');
    const words = ["Multimedia Computing Student", "UI/UX Designer", "Multimedia Artist"];
    let wordIndex = 0, charIndex = 0, isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        textElement.textContent = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);
        if (!isDeleting && charIndex > currentWord.length) { isDeleting = true; setTimeout(type, 2000); }
        else if (isDeleting && charIndex === 0) { isDeleting = false; wordIndex = (wordIndex + 1) % words.length; setTimeout(type, 500); }
        else { setTimeout(type, isDeleting ? 100 : 200); }
    }
    type();

    // 4. Contact Form Alerts
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Error: Please enter a valid email address.");
        } else {
            alert("Successfully sent!");
            form.reset();
        }
    });

    // 5. Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    window.addEventListener('scroll', () => {
        reveals.forEach(r => { 
            if(r.getBoundingClientRect().top < window.innerHeight - 150) r.classList.add('active'); 
        });
        document.getElementById('back-to-top').style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    document.getElementById('back-to-top').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('year').textContent = new Date().getFullYear();
});