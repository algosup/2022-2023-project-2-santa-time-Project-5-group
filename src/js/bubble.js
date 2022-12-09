let input = document.querySelector('input');
let bubble = document.querySelector(".bubble");
let container = document.querySelector("#bubble-container");
let denied = document.querySelector("#refuse");
let geo = true;
const svg = document.querySelector("#gps")


input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        /* ---------------------------------- EMPTY --------------------------------- */
        if (input.value === "") {
            container.style.opacity = "1";
            bubble.innerHTML = "You did not typed an adress"

            setTimeout(() => {
                container.style.opacity = "0";
            }, 3000)
        }
        /* -------------------------------- EMPTY END ------------------------------- */
    }
});

/* --------------------------- NO GEOLOCALISATION --------------------------- */
svg.addEventListener("click", () => {
    navigator.geolocation.watchPosition(function () {
        console.log("geolocalisation on");
    },
        function (error) {
            if (error.code == error.PERMISSION_DENIED) {

                console.log("geolocalisation off");
                container.style.opacity = "1";
                bubble.innerHTML = "I can not find you. It seems you did not activate your localisation"

                setTimeout(() => {
                    container.style.opacity = "0";
                }, 3000)
            }
        });
});
/* ------------------------- NO GEOLOCALISATION END ------------------------- */

