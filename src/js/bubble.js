let input = document.querySelector('input');
let bubble = document.querySelector(".bubble");
let container = document.querySelector("#bubble-container");

/* ---------------------------------- EMPTY --------------------------------- */
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        if (input.value === "") {
            container.style.opacity = "1";
            bubble.innerHTML = "You didn't typed an adress"

            setTimeout(() => {
                container.style.opacity = "0";
            }, 3000)
        }
    }
});
