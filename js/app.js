 
 const Menubar = document.querySelector('.main_menu__bar');
 const Navbar = document.querySelector('.navigation__link');

 Menubar.onclick = () => {
     Menubar.classList.toggle('barr');
     Navbar.classList.toggle('active');
 }