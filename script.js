const navMenu = document.querySelector('.nav-menu');

const menuBtn = document.getElementById('headermenubtn');

const closeBtn = document.getElementById('close-btn');

const navLink = document.querySelectorAll('.nav-link');

menuBtn.addEventListener('click', () => {
  navMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navMenu.style.display = 'none';
});

navLink.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navMenu.style.display = 'none';
  });
});
