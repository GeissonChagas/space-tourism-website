const hamburguer = document.querySelector('.mobile-menu-icon');
const menuResponsivo = document.querySelector('.menu-responsivo');


hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('menu-open')
})

hamburguer.addEventListener('click', () => {
    menuResponsivo.parentElement.classList.toggle('menu-open')
})