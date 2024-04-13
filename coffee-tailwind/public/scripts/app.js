const toggleThemeBtns = document.querySelectorAll('#toggle-theme');
const navbarMobileBtn = document.querySelector('#bar-button')
const mobileNavMenu = document.querySelector('#mobile-nav__menu')
const navMobileCover = document.querySelector('.overlay')
const exitBtn = document.querySelector('#exitSvg')
const chevronDown = document.querySelector('#DownChevron')
const mobileNavSubmenu = document.querySelector('#mobile-nav__submenu')
const mobileShoppingCardIcon  = document.querySelector('#mobiles-shoppingCard-icon')
const mobileShoppingCardMenu = document.querySelector('#mobile-shoppingCard__menu')
const exitMobileIcon = document.querySelector('#exit-mobile-card__icon')


toggleThemeBtns.forEach(toggleThemeBtn => {
    toggleThemeBtn.addEventListener('click', function () {
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'

        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')

        }

    })

})

//*Mobile nav menu open and close.

navbarMobileBtn.addEventListener('click', () => {
    mobileNavMenu.classList.replace('-right-64', 'right-0')
    navMobileCover.classList.replace('hidden', 'block')


})

exitBtn.addEventListener('click', () => {
    mobileNavMenu.classList.replace('right-0', '-right-64')
    navMobileCover.classList.replace('block', 'hidden')

})

window.addEventListener('click' , (event)=> {
    console.log(event.target);
    if (event.target.id == 'cover') {
        mobileNavMenu.classList.replace('right-0', '-right-64')
        navMobileCover.classList.replace('block', 'hidden')
        mobileShoppingCardMenu.classList.replace('left-0' , '-left-64')
        
    }


})

//*Mobile nav submenu open and close:
chevronDown.addEventListener('click' , ()=> {
    mobileNavSubmenu.classList.toggle('submenu--open')
    chevronDown.classList.toggle('rotate-180')
})



mobileShoppingCardIcon.addEventListener('click' , ()=> {
    mobileShoppingCardMenu.classList.replace('-left-64' , 'left-0')
    navMobileCover.classList.replace('hidden', 'block')
    
})

exitMobileIcon.addEventListener('click' , ()=> {
    mobileShoppingCardMenu.classList.replace('left-0' , '-left-64')
    navMobileCover.classList.replace('block', 'hidden')
})


//* Swiper js for best selling products.
const swiper = new Swiper ('.mySwiper' , {
    slidesPerView: 2,
    spaceBetween: 14,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20
          },

          1024: {
            slidesPerView: 4 ,
            spaceBetween:20

          }

    },

    navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
      },
}) 




