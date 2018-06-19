var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&id=4156210&APPID=7c630f3bb86f3df59de81030187dd96d';
weatherRequest.open('get', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
  var weatherData = JSON.parse(weatherRequest.responseText);

  document.getElementById('current-temp').innerHTML = weatherData.main.temp;
  console.log(weatherData);
}
