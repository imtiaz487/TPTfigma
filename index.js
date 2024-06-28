const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.addEventListener('click', function() {
  mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
});

