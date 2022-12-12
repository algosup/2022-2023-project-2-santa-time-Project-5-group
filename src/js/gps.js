let gps = document.getElementById("gps");

gps.addEventListener("click", (event) => {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;

        // console.log(`Your location: (${latitude},${longitude})`);
        offset = (longitude / 0.0041667) * 100;

        // Animation Trigger 
        AnimationTrigger();
    }

    // handle error case
    function onError() {
        // console.log('error');
        deer("noGeo"); // Call deer function
    }

});