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
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  document.getElementById("day").innerHTML =
    weekday[time.getDay()] +
    ", " +
    monthNames[time.getMonth()] +
    " " +
    time.getDate();
}
showDate();

function showWeather() {}

function showLocation() {
  fetch("https://geoip-db.com/json/")
    .then(
      (resp) => resp.json() // this returns a promise
    )
    .then((repos) => {

      let country = repos.country_name;
      let postal = repos.postal;
      document.getElementById("country").innerHTML = country +", "+ postal;
    })
    .catch((ex) => {
      console.error(ex);
    });
}
showLocation();

/*
*   La api free de clima se cayo y no encontre un reemplazo
*
*
*/
function showWeather(){
    let url = "https://goweather.herokuapp.com/weather/";
    fetch(url)
    .then(
      (resp) => resp.json() 
    )
    .then((repos) => {

      let country = repos.temperature;

    })
    .catch((ex) => {
      console.error(ex);
    });
}
