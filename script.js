const menuItems = document.querySelectorAll(".menu li a");
const hamburger = document.querySelector(".hamburger");
const desktopMenu = document.querySelector(".desktop__menu");
const mobileMenu = document.querySelector(".mobile__menu");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menuItems.forEach((item) => {
            item.classList.remove("active");
        });
        item.classList.add("active");
        mobileMenu.classList.toggle("active");
    });
});

document.addEventListener("click", (e) => {
    if (
        !desktopMenu.contains(e.target) &&
        !hamburger.contains(e.target) &&
        !mobileMenu.contains(e.target)
    ) {
        menuItems.forEach((item) => {
            item.classList.remove("active");
        });
    }
});

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});