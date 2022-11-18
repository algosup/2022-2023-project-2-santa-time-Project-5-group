// class to create a countdown timer
class CountdownTimer {
    // setup timer values
    constructor({ selector, targetDate, backgroundColor = null, foregroundColor = null }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.backgroundColor = backgroundColor;
        this.foregroundColor = foregroundColor;

        // grab divs on frontend using supplied selector ID
        this.refs = {
            days: document.querySelector(`${this.selector} [data-value="days"]`),
            hours: document.querySelector(`${this.selector} [data-value="hours"]`),
            mins: document.querySelector(`${this.selector} [data-value="minutes"]`),
            secs: document.querySelector(`${this.selector} [data-value="seconds"]`),
        };
    }

    getTimeRemaining(endtime) {
        const current = new Date();
        const currentModifier = Date.parse(current) + 3600000; // 3 600 000 = 60 minutes
        const t = new Date(currentModifier);
        const total = Date.parse(endtime) - Date.parse(t);
        console.log(total);

        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const secs = Math.floor((total / 1000) % 60);
        return {
            total,
            days,
            hours,
            mins,
            secs,
        };
    }

    updateTimer({ days, hours, mins, secs }) {
        this.refs.days.textContent = days;
        this.refs.hours.textContent = hours;
        this.refs.mins.textContent = mins;
        this.refs.secs.textContent = secs;
    }


    startTimer() {
        const timer = this.getTimeRemaining(this.targetDate);
        this.updateTimer(timer);
        setInterval(() => {
            const timer = this.getTimeRemaining(this.targetDate);
            this.updateTimer(timer);
        }, 1000);
    }
}
