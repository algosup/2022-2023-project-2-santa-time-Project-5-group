(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;


    let date = new Date().getTime();

    fetch("https://worldtimeapi.org/api/timezone/Europe/London")
    .then(r => r.json())
    .then(data => {
        let now = new Date(data.datetime);
        date = Date.parse(now);
        // console.log(date);
    
    });

    const countDown =  	1671926400000; // 12/25/2022 at 00:00:00 UTC


    x = setInterval(function () {
        let distance = countDown - date + (10*offset)  ;

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
        date += 1000;
        //seconds
    }, 1000)
}());
