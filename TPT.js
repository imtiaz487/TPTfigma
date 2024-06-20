function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}
document.getElementById('menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

