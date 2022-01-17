// at first set days hours mins seconds as 0
// getting the days hours mins seconds by getElementById
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// final date
const MyBirthDay = "01 jan 2023";

function countdown() {

    // current date  -- new Date() --> in build js function to get today's date
    // destination date -- new Date(variable) --> to get the final date variable date
   
    const newYearsDate = new Date(MyBirthDay);
    const currentDate = new Date();

    // trying to get how many days are left, js is giving the answer in millisec, so divide by 1000 to get total seconds
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    // getting the remaining days, hours, mins and seconds just by applying formula
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // now we are editing the html file to show on the website
    // at first we get the days hours mins seconds by getElementById , store it into new variables
    // now using that variables we are editing the html files to show exact everything on the website
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

// if hours min sec are less than 10, add 0 at the front --> 2sec --> 02 sec
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
// countdown();

// setInterval --> we are alsways updating the time after every 1000 mili second means 1 sec
setInterval(countdown, 1000);
