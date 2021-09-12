console.log("file is working");

setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + " " + min + " " + sec;

  document.getElementById("clock-time").innerHTML = currentTime;
}
showTime();

function showDate() {
  let time = new Date();
  var weekday = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("day").innerHTML =
    weekday[time.getDay()] +
    ", " +
    monthNames[time.getMonth()] +
    " " +
    time.getDate();
}
showDate();


function showWeather(){
    
}
