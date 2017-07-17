var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');


var date = new Date();

var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

// position = curentTime * (360/sectionsOfTimeUnit) + displacment of other timeNunites
let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock(){
        
    /* update postions */
    hrPosition = hrPosition+(3/360);
    minPosition = minPosition+(6/60);
    secPosition = secPosition+6;

    hour.style.transform = "rotate(" + hrPosition + "deg)";
    minute.style.transform = "rotate(" + minPosition + "deg)";
    second.style.transform = "rotate(" + secPosition + "deg)";

}

setInterval(runTheClock, 1000);