// Date
let currentDateAndTime = new Date();
let newYear = new Date(2024, 0, 1); // parameters are (year, month, date, hour, minutes, seconds, miliseconds)
console.log(currentDateAndTime);
console.log(currentDateAndTime.getFullYear());
console.log(currentDateAndTime.getMonth());
console.log(currentDateAndTime.getDate());
console.log(currentDateAndTime.getHours());
console.log(currentDateAndTime.getMinutes());
console.log(currentDateAndTime.getSeconds());
console.log(currentDateAndTime.getMilliseconds());
console.log(currentDateAndTime.getDay());
console.log(newYear);

// Time
// let currentTime = new Date().getTime();
// console.log(currentTime); // in ms from Janauary 1st, 1970

// Digital Clock
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

let setTime = () => {
    let currentTime = new Date();
    hour.textContent = currentTime.getHours();
    min.textContent = currentTime.getMinutes();
    sec.textContent = currentTime.getSeconds();
}
setInterval(setTime, 1000);