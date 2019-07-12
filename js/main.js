const menuButton = document.querySelector('.menu_button')
const menu = document.querySelector('.menu')
const menuBrand = document.querySelector('.menu_brand')
const menuNavigation = document.querySelector('.menu_navigation')
const menuItems = document.querySelectorAll('.menu_item')

let showMenu = false;

menuButton.addEventListener('click', toggleMenu)
function toggleMenu(){
    if(!showMenu){
        menuButton.classList.add('close');
        menu.classList.add('show');
        menuBrand.classList.add('show');
        menuNavigation.classList.add('show');
        menuItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    }else{
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuBrand.classList.remove('show');
        menuNavigation.classList.remove('show');
        menuItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}