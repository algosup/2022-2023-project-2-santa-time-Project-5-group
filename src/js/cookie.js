let acceptCookie = document.querySelector('#accept');
let refuseCookie = document.querySelector('#refuse');
let popup = document.querySelector('#popup');

acceptCookie.addEventListener('click', function() {
    
    popup.style.display = 'none';
    cookie = true;
});
refuseCookie.addEventListener('click', function() {
    popup.style.display = 'none';
    cookie = false;
});
