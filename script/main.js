
// Hamburger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.
  addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }))

// Scroll menu
const navbar = document.getElementById('navbar');
var scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.remove('top')
    if (!scrolled) {
      navbar.style.transform = 'translateY(-4.375rem)';
    }
    setTimeout(function () {
      navbar.style.transform = 'translateY(0)';
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add('top');
    scrolled = false;
  }
}