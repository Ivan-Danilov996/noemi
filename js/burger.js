const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', function showMenu() {
if (burger.classList.contains('active')) {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('lock');
    }
    else {
    burger.classList.add('active');
    menu.classList.add('active');
    body.classList.add('lock');
    }
    
})

