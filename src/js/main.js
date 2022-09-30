import './_vendor';
import './_functions';



let menuBtn = document.querySelectorAll('.header__btn-toggle')
const nav = document.querySelector('.header__menu-cat')
const lineOne = document.querySelector('nav .menu-btn .line--1')
const lineTwo = document.querySelector('nav .menu-btn .line--2')
const lineThree = document.querySelector('nav .menu-btn .line--3')
const link = document.querySelector('nav .nav-links')
const targetBody = document.querySelector('body')
menuBtn.forEach(e => {
    e.addEventListener('click', () => {
        targetBody.classList.toggle('menu-open')
        nav.classList.toggle('nav-open')
        lineOne.classList.toggle('line-cross')
        lineTwo.classList.toggle('line-fade-out')
        lineThree.classList.toggle('line-cross')
        link.classList.toggle('fade-in')
    })
})
