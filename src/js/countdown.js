(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/25/",
        xmas = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > xmas) {
        xmas = dayMonth + nextYear;
    }

    const countDown = new Date(xmas).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now + (10*offset);

            document.getElementById("days").innerText = Math.floor(distance / (day)).toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)).toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)).toLocaleString(undefined, { minimumIntegerDigits: 2 }),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second).toLocaleString(undefined, { minimumIntegerDigits: 2 });

            if (distance < 0) {
                document.getElementById("headline").innerText = "It's christmas!";
                document.getElementById("countdown").style.display = "none";
                clearInterval(x);
            }

            if (offset != 0) {
                let timer = 'XMAS : ' + (Math.floor(distance / (day)).toLocaleString(undefined, { minimumIntegerDigits: 2 })) + 'd ' + (Math.floor((distance % (day)) / (hour)).toLocaleString(undefined, { minimumIntegerDigits: 2 })) + 'h - ' + (Math.floor((distance % (hour)) / (minute)).toLocaleString(undefined, { minimumIntegerDigits: 2 })) + ':' + (Math.floor((distance % (minute)) / second).toLocaleString(undefined, { minimumIntegerDigits: 2 }));
                document.title = timer;
            }
            //seconds
        }, 0)
}());