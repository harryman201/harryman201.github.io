function franklinWeather() {
  var weatherRequest = new XMLHttpRequest();
  var apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&id=4156210&APPID=7c630f3bb86f3df59de81030187dd96d';
  weatherRequest.open('get', apiURL, true);
  weatherRequest.send();

  weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp.toFixed(0);
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed.toFixed(0);
    document.getElementById('high-temp').innerHTML = weatherData.main.temp_max.toFixed(0);
    document.getElementById('low-temp').innerHTML = weatherData.main.temp_min.toFixed(0);

    var condition = weatherData.weather[0].description;
    condition = condition.charAt(0).toUpperCase() + condition.slice(1);
    document.getElementById('condition').innerHTML = condition;


    document.getElementById('icon').src = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    console.log(weatherData);

  }
}

function greenvilleWeather() {
  var weatherRequest = new XMLHttpRequest();
  var apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&id=4580543&APPID=7c630f3bb86f3df59de81030187dd96d';
  weatherRequest.open('get', apiURL, true);
  weatherRequest.send();

  weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp.toFixed(0);
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed.toFixed(0);
    document.getElementById('high-temp').innerHTML = weatherData.main.temp_max.toFixed(0);
    document.getElementById('low-temp').innerHTML = weatherData.main.temp_min.toFixed(0);

    var condition = weatherData.weather[0].description;
    condition = condition.charAt(0).toUpperCase() + condition.slice(1);
    document.getElementById('condition').innerHTML = condition;


    document.getElementById('icon').src = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    console.log(weatherData);

  }
}

function springfieldWeather() {
  var weatherRequest = new XMLHttpRequest();
  var apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&id=4250542&APPID=7c630f3bb86f3df59de81030187dd96d';
  weatherRequest.open('get', apiURL, true);
  weatherRequest.send();

  weatherRequest.onload = function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp.toFixed(0);
    document.getElementById('windspeed').innerHTML = weatherData.wind.speed.toFixed(0);
    document.getElementById('high-temp').innerHTML = weatherData.main.temp_max.toFixed(0);
    document.getElementById('low-temp').innerHTML = weatherData.main.temp_min.toFixed(0);

    var condition = weatherData.weather[0].description;
    condition = condition.charAt(0).toUpperCase() + condition.slice(1);
    document.getElementById('condition').innerHTML = condition;


    document.getElementById('icon').src = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    console.log(weatherData);

  }
}
