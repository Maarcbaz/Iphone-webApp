let search__field, search, menu, overlay;
search__field = document.querySelector('#search')
search = document.querySelector('#search__icon')

menu = document.querySelector('.menu__icon')
overlay = document.querySelector('.overlay')

search.addEventListener('click', () => {
    if(search__field.style.display == 'block') {
        search__field.style.display = 'none'
    }
    else {
        search__field.style.display = 'block'
    }
})

menu.addEventListener('click', () => {
    if(overlay.style.width == '250px') {
        overlay.style.width = '0'
    }
    else {
        overlay.style.width = '250px'
    }
})