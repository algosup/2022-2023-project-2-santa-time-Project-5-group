let acceptCookie = document.querySelector('#accept');
let refuseCookie = document.querySelector('#refuse');
let popup = document.querySelector('#popup');

// EVENTS
// alert (ReadCookie('cookie'));

if (ReadCookie('cookie') == "true") {
    popup.style.display = "none";
    cookie = true;
    if (ReadCookie('address') != "") {
        Geoco(ReadCookie('adress'));
    }
} else {
    acceptCookie.addEventListener('click', function() {
        popup.style.display = 'none';
        cookie = true;
        CreateCookie('cookie', cookie);
    });
    refuseCookie.addEventListener('click', function() {
        popup.style.display = 'none';
        cookie = false;
    });
}
