addEventListener('submit', (event) => {
    event.preventDefault();

    Geoco(document.getElementById('search').value);

    if (ReadCookie('cookie') == "true") {
        CreateCookie('address', document.getElementById('search').value);
    } 

    AnimationTrigger();

});


