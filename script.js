function toggleMenu() {
    const menu = document.querySelector(".mobile-nav-links");
    const icon = document.querySelector(".mobile-nav-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}