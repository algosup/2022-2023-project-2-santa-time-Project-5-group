addEventListener('submit', (event) => {
    event.preventDefault();
    let adress = document.getElementById('search').value;
    if (adress == "") { // Empty adress case
        deer("noAdress"); // Call deer function
        return;
    }
    Geoco(adress);

    if (ReadCookie('cookie') == "true") {
        CreateCookie('address', adress);
    } 

    AnimationTrigger();

});


