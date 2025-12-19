document.addEventListener('DOMContentLoaded', () => {
    
    // FEATURE 1: Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // FEATURE 2: Dark Mode with PERSISTENCE (Stays after refresh)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // 1. Check if user already has a theme saved
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    // 2. Toggle theme and save the choice
    themeToggle.addEventListener('click', () => {
        if (body.hasAttribute('data-theme')) {
            body.removeAttribute('data-theme');
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });

    // FEATURE 3: Typing Text Effect
    const textElement = document.querySelector('.typing-text');
    const words = ["CS Student", "UI/UX Designer", "Multimedia Artist"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 2000); 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); 
        } else {
            setTimeout(type, isDeleting ? 100 : 200);
        }
    }
    type();

    // FEATURE 4: Dynamic Copyright Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // FEATURE 5: Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);

    // FEATURE 6: Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // FEATURE 7: Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.getAttribute('href').includes(current)) {
                li.classList.add('active');
            }
        });
    });

    // FEATURE 8: Contact Form Validation with POP-UPS
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop the form from actually sending

        // 1. Check Email Validity
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            // ERROR POP-UP
            alert("Error: Please enter a valid email address.");
            return; // Stop here
        }

        // 2. If email is good, show success POP-UP
        alert("Successfully sent!");
        
        // Optional: clear form after sending
        form.reset(); 
    });
});