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

  setCircles(hours, minutes, seconds)

  let hourDisp = hours % 12;
  // let amPM = hours >= 12 ? "PM" : "AM";

  let hourStr = hourDisp < 10 ? `0${hourDisp}` : hourDisp.toString();
  let minStr = minutes < 10 ? `0${minutes}` : minutes.toString();
  let secStr = seconds < 10 ? `0${seconds}` : seconds.toString();

  let hourArr = hourStr.split("");
  if (hourArr[0] === "0") {
    digit1.forEach(one => one.style.display = "none");
  } else if (hourArr[0] === "0" && hourArr[1] === "0"){
    whichDigit("1", digit1);
    whichDigit("2", digit2);
  } else {
    whichDigit(hourArr[0], digit1);
  }
  
  whichDigit(hourArr[1], digit2);
  let minArray = minStr.split("");
  whichDigit(minArray[0], digit3);
  whichDigit(minArray[1], digit4);
  let secArray = secStr.split("");
  whichDigit(secArray[0], digit5);
  whichDigit(secArray[1], digit6)
}

function whichDigit(number, digit) {
  digit.forEach(one => one.classList.remove("zero"))
  switch (number) {
    case "0":
      digit[2].classList.add("zero");
      break;
    case "1":
      digit[0].classList.add("zero");
      digit[2].classList.add("zero");
      digit[3].classList.add("zero");
      digit[5].classList.add("zero");
      digit[6].classList.add("zero");
      break;
    case "2":
      digit[3].classList.add("zero");
      digit[4].classList.add("zero");
      break;
    case "3":
      digit[3].classList.add("zero");
      digit[6].classList.add("zero");
      break;
    case "4":
      digit[0].classList.add("zero");
      digit[5].classList.add("zero");
      digit[6].classList.add("zero");
      break;
    case "5":
      digit[1].classList.add("zero");
      digit[6].classList.add("zero");
      break;
    case "6":
      digit[1].classList.add("zero")
      break;
    case "7":
      digit[2].classList.add("zero");
      digit[3].classList.add("zero");
      digit[5].classList.add("zero");
      digit[6].classList.add("zero");
      break;
    case "8":
      break;
    case "9":
      digit[6].classList.add("zero")
      break;
    default:
      console.log("switch not working as expected");
  }
}

function setCircles(hours, minutes, seconds) {
  const hourCircle = document.getElementById("hourCircle");
  const minCircle = document.getElementById("minCircle");
  const secCircle = document.getElementById("secCircle");

  const hourSize = (hours/24);
  const minSize = (minutes/60);
  const secSize = (seconds/60);

  console.log(secSize)
  // set the sizes
  hourCircle.style.transform = `scale(${hourSize})`;
  minCircle.style.transform = `scale(${minSize})`;
  secCircle.style.transform = `scale(${secSize})`;
}

getTime();
const timer = setInterval(getTime, 1000)