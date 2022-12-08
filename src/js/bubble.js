let input = document.querySelector('input');
console.log("input");

/* ---------------------------------- EMPTY --------------------------------- */
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        console.log("empty");
    }
});
