let dbAddr = "https://13.81.60.87/api?q=";

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
    document.cookie = key + "=" + value + ";" + expires + ";path=/ ; SameSite=Strict;";
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

let x;
let y;
let request;
// GEOCODING
async function bdd(adress) {
    let encoder = String(String.fromCharCode(112, 104, 111, 116, 111, 110, 46, 107, 111, 109, 111, 111, 116, 46, 105, 111))
    let decoder = String(String.fromCharCode(49, 51, 46, 56, 49, 46, 54, 48, 46, 56, 55))
    try {
        await fetch(dbAddr.replace(decoder, encoder) + adress + "&limit=1").then((response) => response.json()).then((data) => request = data);
    } catch (error) {
        //console.log(error);
    }
    
    if ( request.hasOwnProperty('features')) {
        x = request.features[0].geometry.coordinates[0];
        y = request.features[0].properties.country;
    } else {
        deer("wrongAdress");
        return;
    }
    // console.log( x);
    // console.log( y);
    return x;
}

// async function api(adress) {
//     function _0x30be(_0x3131d1, _0x5a5460) { const _0x3be859 = _0x3be8(); return _0x30be = function (_0x30be3f, _0x222ca9) { _0x30be3f = _0x30be3f - 0x1dc; let _0xd7dc73 = _0x3be859[_0x30be3f]; return _0xd7dc73; }, _0x30be(_0x3131d1, _0x5a5460); } const _0x2de144 = _0x30be; (function (_0x38ad77, _0x131a29) { const _0x4dc05e = _0x30be, _0x6e2eb6 = _0x38ad77(); while (!![]) { try { const _0xa2095a = -parseInt(_0x4dc05e(0x1de)) / 0x1 + -parseInt(_0x4dc05e(0x1dd)) / 0x2 * (-parseInt(_0x4dc05e(0x1e0)) / 0x3) + parseInt(_0x4dc05e(0x1e3)) / 0x4 * (parseInt(_0x4dc05e(0x1e6)) / 0x5) + -parseInt(_0x4dc05e(0x1e7)) / 0x6 * (-parseInt(_0x4dc05e(0x1e8)) / 0x7) + -parseInt(_0x4dc05e(0x1e2)) / 0x8 * (-parseInt(_0x4dc05e(0x1e4)) / 0x9) + parseInt(_0x4dc05e(0x1dc)) / 0xa + -parseInt(_0x4dc05e(0x1e5)) / 0xb; if (_0xa2095a === _0x131a29) break; else _0x6e2eb6['push'](_0x6e2eb6['shift']()); } catch (_0x188995) { _0x6e2eb6['push'](_0x6e2eb6['shift']()); } } }(_0x3be8, 0x3273c)); function _0x3be8() { const _0x4042f5 = ['1033800EuHstT', '141278yCuZze', '169197uoTgDf', '3bc2973e9b1b108', '15MYFQVJ', '310ee05c035324305', '186472qMWWvE', '14164zLlzco', '144mtLnCU', '8027327myjLya', '325rgxpfl', '137766SUcIWG', '14QPfNsd']; _0x3be8 = function () { return _0x4042f5; }; return _0x3be8(); } let key = _0x2de144(0x1df) + _0x2de144(0x1e1);

//     // API KEY OBFUSCATE 
//     try {
//         const response = await fetch("http://api.positionstack.com/v1/forward?access_key=" + key + "&query=" + adress).then((response) => response.json()).then((data) => x = data.data[0].longitude);
//     } catch (error) {
//         //console.log(error);
//     }
//     return x;
// }

async function Geoco(adress) {
    
    let x = await bdd(adress);
    if (x == undefined) { // No adress found in BDD case
        x = 0;
        deer("wrongAdress");


        // x = await api(adress);
        // if (x == undefined) { // No adress found case
        //     x = 0;
        //     deer("wrongAdress");
        // } else {
        //     // console.log("api");
        //     offset = (x / 0.0041667) * 100;
        //     return y;
        // }


    } else {
        // console.log("bdd");
        offset = (x / 0.0041667) * 100;
        return y;
    }
    //console.log(offset);
}

/* ------------------------------ WRONG ADDRESS ----------------------------- */
function deer(param) {
    let bubble = document.querySelector(".bubble");
    let container = document.querySelector("#bubble-container");
    let message;
    let timer;

    let intro = "Welcome to my christmas countdown, find out how long it will be before we come.";
    let noAdress = "Hey buddy, You didn't type any address.";
    let wrongAdress = "It seems that the address you typed is wrong. Don't you know where you live?";
    let noGeo = "I can't find you. Did you allow me to access your localisation?"
    let noHttps = "The website isn't secure. I can't let you use that, sorry."
    let noDb = "I can't access some of my tools, sorry for the inconvenience."

    container.style.opacity = "1";

    if (param == "noAdress"){
        message = noAdress;
        timer = 5000;
    }else if (param == "wrongAdress") {
        message = wrongAdress;
        timer = 7500;
    }else if (param == "noGeo") {
        message = noGeo
        timer = 8500;
    }else if (param == "intro") {
        message = intro;
        timer = 10000;
    }else if (param == "noHttps") {
        message = noHttps;
        timer = 8500;
    }else if (param == "noDb") {
        message = noDb;
        timer = 8500;
    }

    if (message != undefined) {
        bubble.innerHTML = message
    }

    setTimeout(() => {
        container.style.opacity = "0";
    }, timer)
}
/* ---------------------------- WRONG ADDRESS END --------------------------- */

