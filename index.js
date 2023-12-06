const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".minute");
const secEl = document.querySelector(".second");

function updateTime() {
    const currentTime = new Date();
    hour = currentTime.getHours();
    min = currentTime.getMinutes();
    sec = currentTime.getSeconds();
    hourDeg = (hour / 12) * 360;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
    minDeg = (min / 60) * 360;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    secDeg = (sec / 60) * 360;
    secEl.style.transform = `rotate(${secDeg}deg)`;
}
setInterval(updateTime, 1000);
