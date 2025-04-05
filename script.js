const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const rightnav = document.querySelector(".rightnav");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
    // rightnav.classList.toggle("v-class-resp");
    rightnav.classList.toggle("v-class-show");
    navbar.classList.toggle("h-nav-resp");
    burger.classList.toggle("toggle");
    navList.classList.toggle("v-class-resp");
    navList.classList.toggle("v-class-show");
   
});

// Jab nav-list ke kisi link par click ho, menu band ho jaye
