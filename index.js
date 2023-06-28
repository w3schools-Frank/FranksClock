function showTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    //No 0 hour exists, change to 12.
    if (hours == 0) {
        hours = 12;
    };

    //PM HOURS
    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    const time = hours + ":" + minutes + ":" + seconds + session;

    document.getElementById("myClock").innerText = time;
    setTimeout(showTime, 1000);
}

showTime() 