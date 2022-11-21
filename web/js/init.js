const timer = new CountdownTimer({
    selector: "#clock1",
    targetDate: new Date("December, 25 2022 00:00:00"),
    offset: 0, // 3 600 000 = 60 minutes
});

timer.startTimer(); 