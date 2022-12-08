let input = document.querySelector('input');
let bubble = document.querySelector(".bubble");
let container = document.querySelector("#bubble-container");
let denied = document.querySelector("#refuse");
let accept = true;
const geo = document.querySelector("#gps")


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
denied.addEventListener("click", ()=>{
    accept = false;
});
geo.addEventListener("click", ()=>{
if (accept == false) {
    container.style.opacity = "1";
    bubble.innerHTML = "I can not find you. It seems you did not activate your localisation"

    setTimeout(() => {
        container.style.opacity = "0";
    }, 3000)
}
});
/* ------------------------- NO GEOLOCALISATION END ------------------------- */

