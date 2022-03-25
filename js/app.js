// Hamburguer menu responsive

const mobile_menu_button = document.getElementById('mobile-menu')
const active_menu = document.querySelector('.navigation')

mobile_menu_button.addEventListener('click', activeMenu)


function activeMenu(){
    
    active_menu.classList.toggle('active')
    mobile_menu_button.classList.toggle('is-active')
}

// Change Color Navbar 

const navbar = document.querySelector('.navbar')

window.onscroll = function() {

    const scroll = window.scrollY

    if(scroll >= 50){
        navbar.classList.add('change__color')
        mobile_menu_button.classList.add('change__color')
    }else{
        navbar.classList.remove('change__color')
        mobile_menu_button.classList.remove('change__color')
    }
}

