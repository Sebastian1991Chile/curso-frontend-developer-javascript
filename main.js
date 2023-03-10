const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

function toogleCarritoAside(){
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}