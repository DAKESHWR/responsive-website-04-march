burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
rightnav = document.querySelector(".rightnav");
navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
    rightnav.classList.toggle("v-class-resp");
    navbar.classList.toggle("h-nav-resp");
    burger.classList.toggle("toggle");
    navList.classList.toggle("v-class-resp");
    document.body.classList.toggle("no-scroll"); // Disable scrolling on body when menu is open
});
// Smooth scrolling effect for anchor links 
