/* ==========================================
   PORTFOLIO JAVASCRIPT
========================================== */

const navbar = document.querySelector(".navbar");
const scrollBtn = document.getElementById("scrollTop");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const fadeElements = document.querySelectorAll(".fade-in");

/* ==========================================
   NAVBAR SCROLL EFFECT
========================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        navbar.classList.add("nav-scroll");
    } else {
        navbar.classList.remove("nav-scroll");
    }

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   ACTIVE NAVBAR LINK
========================================== */

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   FADE IN ON SCROLL
========================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

fadeElements.forEach(item => {

    observer.observe(item);

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement = document.querySelector(".hero h2");

const roles = [

    "Java Full Stack Developer",

    "Frontend Developer",

    "Spring Boot Enthusiast",

    "Problem Solver"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent = currentRole.substring(0, charIndex++);

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typingElement.textContent = currentRole.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

/* ==========================================
   CURRENT YEAR
========================================== */

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${year} Ashvin Kumar | Designed with ❤️`;

}

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("Portfolio Loaded Successfully 🚀");