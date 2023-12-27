let search__field, search;
search__field = document.querySelector('#search')
search = document.querySelector('#search__icon')

search.addEventListener('click', () => {
    if(search__field.style.display == 'block') {
        search__field.style.display = 'none'
    }
    else {
        search__field.style.display = 'block'
    }
})