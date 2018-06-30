var weatherRequest = new XMLHttpRequest();
var apiURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
weatherRequest.open('get', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
  var weatherData = JSON.parse(weatherRequest.responseText);

  var i;
  var j;

  for (i = 0; i < weatherData.towns.length; i++) {
    document.getElementsByClassName('townname')[i].innerHTML = weatherData.towns[i].name;
    document.getElementsByClassName('motto')[i].innerHTML = weatherData.towns[i].motto;
    document.getElementsByClassName('yrfound')[i].innerHTML = weatherData.towns[i].yearFounded;
    document.getElementsByClassName('population')[i].innerHTML = weatherData.towns[i].currentPopulation;
    document.getElementsByClassName('rainfall')[i].innerHTML = weatherData.towns[i].averageRainfall;


    var newPara = document.createElement('p');

    for (j = 0; j < weatherData.towns[i].events.length; j++) {

      var listItem = document.createElement('li');
      listItem.textContent = weatherData.towns[i].events[j];
      document.getElementsByClassName('events')[i].appendChild(listItem);
    }


  }

}
