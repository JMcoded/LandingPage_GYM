// Función para mostrar/ocultar el menú en pantallas pequeñas
function toggleMenu() {
    const navLinks = document.querySelector('.nav');
    navLinks.classList.toggle('active');
}

const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('active'); // esto rota la burger
});
