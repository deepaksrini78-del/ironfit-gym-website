// =========================
// NAVIGATION
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (targetId && targetId.startsWith("#")) {
            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


// =========================
// BUTTON INTERACTION
// =========================

const joinButtons = document.querySelectorAll(".btn");

joinButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("href");

        if (target === "#") {
            alert("Thanks for your interest in IronFit Gym!");
        }
    });
});


// =========================
// CURRENT YEAR
// =========================

const footerText = document.querySelector("footer p");

if (footerText) {
    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} IronFit Gym. All rights reserved.`;
}