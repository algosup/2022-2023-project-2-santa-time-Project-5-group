// Animation
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

// COOKIES
function CreateCookie(key, value) {
    let days = 182; // 6 months
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = key + "=" + value + ";" + expires + ";path=/";
}

function ReadCookie(key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// GEOCODING
function Geoco(adress) {
    fetch("http://api.positionstack.com/v1/forward?access_key=4b4ae932495c70c86277ff78f2609849&query="+adress).then((response) => response.json()).then((data) => offset = (data.data[0].longitude/ 0.0041667) * 100);
}