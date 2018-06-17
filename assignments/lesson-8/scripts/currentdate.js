var date = new Date();
//Array of days
var day = ["Sunday",
           "Monday",
           "Tuesday",
           "Wednesday",
           "Thursday",
           "Friday",
           "Saturday"];
//Array of months
var month = ["January",
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
             "December"];
//Set date format
var dateformat = day[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
//Change current date by ID
document.getElementById("currentdate").innerHTML = dateformat;
