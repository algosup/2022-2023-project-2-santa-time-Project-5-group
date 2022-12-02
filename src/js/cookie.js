let acceptCookie = document.querySelector('#accept');
let refuseCookie = document.querySelector('#refuse');
let popup = document.querySelector('#popup');

// EVENTS
// alert (ReadCookie('cookie'));

if (ReadCookie('cookie') == "true") {
    popup.style.display = "none";
    cookie = true;
    if (ReadCookie('adress') != "") {
        Geoco(ReadCookie('adress'));
    }
} else {
    acceptCookie.addEventListener('click', function() {
        popup.style.display = 'none';
        cookie = true;
        CreateCookie('cookie', cookie, 365);
    });
    refuseCookie.addEventListener('click', function() {
        popup.style.display = 'none';
        cookie = false;
    });
}
