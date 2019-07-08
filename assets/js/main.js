const digit1 = document.querySelectorAll(".digit1");
const digit2 = document.querySelectorAll(".digit2");
const digit3 = document.querySelectorAll(".digit3");
const digit4 = document.querySelectorAll(".digit4");
const digit5 = document.querySelectorAll(".digit5");
const digit6 = document.querySelectorAll(".digit6");

function getTime() {
  const newTime = new Date;
  let hours = newTime.getHours();
  let minutes = newTime.getMinutes();
  let seconds = newTime.getSeconds();

  console.log(hours, minutes, seconds)
}

getTime();
const timer = setInterval(getTime, 1000)