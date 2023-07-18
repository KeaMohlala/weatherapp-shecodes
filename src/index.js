let now = new Date();
function formatDate(currentDate) {
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let min = now.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let date = document.querySelector("#date");
  date.innerHTML = `${day}, ${hours}: ${min}`;
}
formatDate();
//
function citySearch(event) {
  event.preventDefault();
  let typeCity = document.querySelector("#search-input");
  let cityValue = document.querySelector("#city");
  cityValue.innerHTML = typeCity.value;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);
//
function changeCelciusTemp(event) {
  event.preventDefault();
  let newTempCelcius = document.querySelector("#temperature");
  newTempCelcius.innerHTML = `20`;
}
let newTempC = document.querySelector("#celcius-link");
newTempC.addEventListener("click", changeCelciusTemp);

function changeFarenheitTemp(event) {
  event.preventDefault();
  let newTempFarenheit = document.querySelector("#temperature");
  newTempFarenheit.innerHTML = `68`;
}
let newTempF = document.querySelector("#farenheit-link");
newTempF.addEventListener("click", changeFarenheitTemp);
