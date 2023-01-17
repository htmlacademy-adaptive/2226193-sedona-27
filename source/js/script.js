let siteNav = document.querySelector('.site-navigation');
let navToggle = document.querySelector('.site-navigation__toggle');

siteNav.classList.remove('site-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (siteNav.classList.contains('site-navigation--closed')) {
    siteNav.classList.remove('site-navigation--closed');
    siteNav.classList.add('site-navigation--opened');
  } else {
    siteNav.classList.add('site-navigation--closed');
    siteNav.classList.remove('site-navigation--opened');
  }
});

let formBtn = document.querySelector('.feedback-form__button');
let modal = document.querySelector('.modal__container');
let modalBtn = document.querySelector('.modal__button');

formBtn.addEventListener('click', function () {
  modal.classList.remove('modal__container--closed');
});

modalBtn.addEventListener('click', function () {
  modal.classList.add('modal__container--closed');
});
