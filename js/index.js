const header = document.querySelector('.header'), 
    menuBtn = document.querySelector('.header__nav-menu');

menuBtn.onclick = () => {
    header.classList.toggle('menu-active');
}