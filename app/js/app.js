const hamburgerMenu = document.querySelector('#hamburgerMenu');
const closeIcon = document.querySelector('#closeIcon');
const headerMobileMenu = document.querySelector('.header__mobile__menu');
const fadeElements = document.querySelectorAll('.has-fade-in');
hamburgerMenu.addEventListener('click', () => {
    headerMobileMenu.classList.add('open');
    fadeElements.forEach((fadeElement) => {
        fadeElement.classList.remove('fade-out');
        fadeElement.classList.add('fade-in');
    });
});
closeIcon.addEventListener('click', () => {
    headerMobileMenu.classList.remove('open');
    fadeElements.forEach((fadeElement) => {
        fadeElement.classList.remove('fade-in');
        fadeElement.classList.add('fade-out');
    });
});