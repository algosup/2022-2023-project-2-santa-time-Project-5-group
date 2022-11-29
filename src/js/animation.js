addEventListener('submit', (event) => {
    event.preventDefault();

    Geoco(document.getElementById('search').value);
    AnimationTrigger();

});


function AnimationTrigger() {
    const fiou = document.querySelector('#fiou');
    const content = document.querySelector('#title');
    const containerCountdown = document.querySelector('#container-countdown');

    fiou.classList.add('fiou-start');
    fiou.addEventListener('animationend', () => {
        fiou.classList.remove('fiou-start');
    });

    content.classList.add('hidden');
    containerCountdown.classList.remove('hidden')
    containerCountdown.classList.add('reveal');
}