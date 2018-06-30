var high = parseFloat(document.getElementById("high-temp").innerHTML);
var low = parseFloat(document.getElementById("low-temp").innerHTML);
var ws = parseFloat(document.getElementById("windspeed").innerHTML);

var tavg = (high + low) / 2;

var windchill = 35.74 + 0.6215 * tavg - 35.75 * Math.pow(ws, .16) + 0.4275 * tavg * Math.pow(ws, .16);



document.getElementById("windchill").innerHTML = Math.round(windchill);
document.getElementById("windchill").innerHTML = high;
