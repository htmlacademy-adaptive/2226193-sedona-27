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
