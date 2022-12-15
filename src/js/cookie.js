let acceptCookie = document.querySelector('#accept');
let refuseCookie = document.querySelector('#refuse');
let popup = document.querySelector('#popup');
let search = document.querySelector('#search');

// EVENTS
// alert (ReadCookie('cookie'));

if (ReadCookie('cookie') == "true") {
    popup.style.display = "none";
    cookie = true;
    if (ReadCookie('address') != "") {
        search.value = ReadCookie('address');
        Geoco(ReadCookie('address'));
        //console.log(ReadCookie('address'));
        AnimationTrigger();
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
