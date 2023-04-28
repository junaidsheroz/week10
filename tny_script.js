"use strict";
/*
New Perspectives on HTML5 and CSS3, 8th Edition
Tutorial 9
Tutorial Case

Tulsa's New Year's Bash
Author: 
Date:   

Filename: tny_clock.html
*/
window.alert("Welcome to Tulsa");

runClock()
setInterval('runClock()',1000)
function runClock(){
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    document.getElementById("dateNow").innerHTML = dateStr +"<br/>"+timeStr;

    var newYear = new Date ("January 1, 2024");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft= (newYear - currentDay) / (1000*60*60*24);

    var hoursLeft = (daysLeft-Math.floor(daysLeft))*24;
    var minsLeft = (hoursLeft-Math.floor(hoursLeft))*60;
    var secsLeft = (minsLeft-Math.floor(minsLeft))*60;


    document.getElementById ("days").textContent =Math.floor(daysLeft);
    document.getElementById ("hrs").textContent =Math.floor(hoursLeft);
    document.getElementById ("mins").textContent=Math.floor(minsLeft);
    document.getElementById ("secs").textContent= Math.floor(secsLeft);
}
/* Calculate the days until January 1st */





