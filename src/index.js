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

function searchCity(city) {
  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function showTemperature(response) {
  let searchedCity = document.querySelector("#cities");
  searchedCity.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let celciusTemp = `${temperature}°C`;
  let cityTemp = document.querySelector("#temp");
  cityTemp.innerHTML = celciusTemp;
}
function citySearch(event) {
  event.preventDefault();
  let typeCity = document.querySelector("#search-input");
  searchCity(typeCity.value);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(currentCityTemperature);
}

function currentCityTemperature(response) {
  let currentCity = document.querySelector("#cities");
  currentCity.innerHTML = response.data.name;
  let searchedCityTemp = Math.round(response.data.main.temp);
  let searchedCityTempCelcius = `${searchedCityTemp}°C`;
  let displayCityTemp = document.querySelector("#temp");
  displayCityTemp.innerHTML = searchedCityTempCelcius;
}

function currentCitySearch(event) {
  event.preventDefault();
  let searchCurrentCity = document.querySelector("#current-location");
  searchCity(searchCurrentCity.value);
}
let button = document.querySelector("button");
button.addEventListener("click", currentCitySearch);
