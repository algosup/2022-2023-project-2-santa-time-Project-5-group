addEventListener('submit', (event) => {
    event.preventDefault();
    const fiou = document.querySelector('#fiou');
    const searchbar = document.querySelector('#searchbar');
    const content = document.querySelector('#title');
    const containerCountdown = document.querySelector('#container-countdown');
    console.log('content');

    fiou.classList.add('fiou-start');
    searchbar.classList.add('searchbar-start');

    content.classList.add('hidden');
    containerCountdown.classList.remove('hidden')
    containerCountdown.classList.add('reveal');

});