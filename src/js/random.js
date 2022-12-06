function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomIntFromInterval(1, 2);
let background = document.querySelector('#main');
let legals = document.querySelector('#legal');
let partners = document.querySelector('#partners');

if (rndInt === 1) {
    background.style.backgroundImage = "url(./img/1.svg)";
    
    legals.classList.add('text-notice-2');
    partners.classList.add('text-notice-2');

    legals.classList.remove('text-notice');
    partners.classList.remove('text-notice');
}

