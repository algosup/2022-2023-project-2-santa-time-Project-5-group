addEventListener('submit', (event) => {
    event.preventDefault();
    const fiou = document.querySelector('#fiou');
    const searchbar = document.querySelector('#searchbar');

    fiou.classList.add('fiou-start');
    searchbar.classList.add('searchbar-start');
});