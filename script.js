// Toggle Mobile Menu
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Typing Effect
const typingHeading = document.getElementById('typing-heading');
const typingSubheading = document.getElementById('typing-subheading');

const headingText = "Deep Roots in Tech, Stronger Future Ahead.";
const subheadingText = "Web Development | Cyber Security | Ethical Hacking | Web Penetration Testing";

let headingIndex = 0;
let subheadingIndex = 0;

function typeHeading() {
    if (headingIndex < headingText.length) {
        typingHeading.textContent += headingText.charAt(headingIndex);
        headingIndex++;
        setTimeout(typeHeading, 100); // Typing speed for heading
    } else {
        setTimeout(typeSubheading, 500); // Delay before typing subheading
    }
}

function typeSubheading() {
    if (subheadingIndex < subheadingText.length) {
        typingSubheading.textContent += subheadingText.charAt(subheadingIndex);
        subheadingIndex++;
        setTimeout(typeSubheading, 50); // Typing speed for subheading
    }
}

// Start typing effect
typeHeading();