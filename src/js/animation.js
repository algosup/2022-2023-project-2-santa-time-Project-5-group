addEventListener('submit', (event) => {
    event.preventDefault();
    
    let search = document.getElementById('search');
    let adress = search.value;

    if (adress == "") { // Empty adress case
        deer("noAdress"); // Call deer function
        return;
    }


    async function test (adress) {
        adress  = await Geoco(adress) + " , " + adress;

        if (adress == undefined) { // No adress found case
            search.value = "";
            return;
        }else if (typeof(adress) === 'object') { // No adress found case
            search.value = "";
            deer("noDb");
            return;
        }
        search.value = adress;

        if (ReadCookie('cookie') == "true") {
            CreateCookie('address', adress);
        } 

        AnimationTrigger();
    }
    test(adress);

    

});


