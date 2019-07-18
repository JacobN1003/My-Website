//Menu Overlay-------------------------------------------------------------
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

//Map Overlay------------------------------------------------------------------
const address_button = document.querySelector('.address_button')
const mapButton = document.querySelector('.mapButton')
const map = document.querySelector('.map')
const map_canvas = document.querySelector('.map_canvas')

let showMap = false;
address_button.addEventListener('click', toggleMap)
mapButton.addEventListener('click', toggleMap)
function toggleMap(){
    if(!showMap){
        address_button.classList.add('close');
        mapButton.classList.add('show');
        map.classList.add('show');
        map_canvas.classList.add('show');
        
        showMap = true;
    }else{
        mapButton.classList.remove('close');
        mapButton.classList.remove('show');
        map.classList.remove('show');
        map_canvas.classList.remove('show');
        
        showMap = false;
    }
}

//Email Box ->
//ttps://css-tricks.com/all-about-mailto-links/

