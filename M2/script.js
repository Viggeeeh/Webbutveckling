const hamburgerMenu = document.getElementById("hamburger-menu");
const hamburgerNavigation = document.getElementById("hamburger-navigation");
const contactButton = document.getElementById("primary-button");
const exitButton = document.getElementById("exit-button");

hamburgerMenu.addEventListener("click", () => {
    hamburgerNavigation.style.display = "flex";
});

exitButton.addEventListener("click", () => {
    hamburgerNavigation.style.display = "none";
});

contactButton.addEventListener("click", () => {
    window.location.replace("../bottom-pages/contact.html");
});

