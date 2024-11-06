const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function(event) {
    navLinks.classList.toggle("active");
    event.stopPropagation(); // Evita que el clic en el hamburguesa cierre el menú
});

// Cierra el menú al hacer clic fuera de él
document.addEventListener("click", function(event) {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
        navLinks.classList.remove("active");
    }
});
// Cierra el menú cuando se hace scroll
window.addEventListener("scroll", function() {
    navLinks.classList.remove("active"); // Oculta el menú cuando el usuario hace scroll
});