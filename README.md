# coffee-site
To show my tailwind abilites

### 1- Fully responsive!
### 2- I transform Figma filte into tailwind!
### 3- using dark mode and light mode

```javascript
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


```

### 4-using swiper js
```javascript
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

```

