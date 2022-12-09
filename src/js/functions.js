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

async function bdd(adress) {
    const response = await fetch("http://13.81.60.87/api?q="+adress);
    const data = await response.json();
    return data;
}


let x;
// GEOCODING
async function bdd(adress) {
    try {
        const response = await fetch("http://13.81.60.87/api?q="+adress).then((response) => response.json()).then((data) => x = data.features[0].geometry.coordinates[0]);
    } catch (error) {
        //console.log(error);
    }
    return x;
}
async function api(adress) {
    try {
        const response = await fetch("http://api.positionstack.com/v1/forward?access_key=4b4ae932495c70c86277ff78f2609849&query="+adress).then((response) => response.json()).then((data) => x = data.data[0].longitude);
    } catch (error) {
        //console.log(error);
    }
    return x;
}

async function Geoco(adress) {
    let x = await bdd(adress);
    if (x == undefined) {
        x = await api(adress);
        if (x == undefined) {
            console.log("error");
            x = 0;
        }else{
            console.log("api");
            offset = (x/0.0041667) * 100;
        }
    }else{
        console.log("bdd");
        offset = (x/0.0041667) * 100;
    }
    console.log(offset);
}