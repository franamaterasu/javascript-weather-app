// Variables globales
let searchCity = document.getElementById("searchCity");
let cityName;
let sendCity = document.getElementById("sendCity");
let mainSection = document.getElementById("main");
let cityInfo;

// Acceso al DOM
let cityDomTemp = document.getElementById("cityTemp");
let cityDomName = document.getElementById("cityName");
let cityDomIcon = document.getElementById("cityIcon");
let cityDomWeatherName = document.getElementById("cityWeatherName");
let cityDomWeatherDescription = document.getElementById(
  "cityWeatherDescription"
);

// Función para conectarnos a la api del tiempo
function getApi() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7a68b98b464faf27752d6128b275674a`
  )
    .then((response) => response.json())
    .then((data) => {
      cityInfo = data;
      showInfoCity(
        data.weather[0].icon,
        data.name,
        data.sys.country,
        data.weather[0].main,
        data.weather[0].description,
        data.main.temp
      );
    });
}

// Función para obtener el nombre de la ciudad y enviar la petición a la API
function displayCityName(e) {
  e.preventDefault();
  cityName = searchCity.value;
  getApi();
  searchCity.value = "";
}

sendCity.addEventListener("click", displayCityName);

// Funcion para mostrar datos;

function showInfoCity(icon, name, country, weather, weatherDescription, temp) {
  cityDomIcon.src = `http://openweathermap.org/img/wn/${icon}.png`;
  cityDomTemp.innerHTML = temp;
  cityDomName.innerHTML = `${name} - <span>${country}</span>`;
  cityDomWeatherName.innerHTML = weather;
  cityDomWeatherDescription.innerHTML = weatherDescription;
}
