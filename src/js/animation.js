addEventListener('submit', (event) => {
    event.preventDefault();

    Geoco(document.getElementById('search').value);

    if (ReadCookie('cookie') == "true") {
        CreateCookie('adress', document.getElementById('search').value, 365);
    } 

    AnimationTrigger();

});


