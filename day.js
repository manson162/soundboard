var theTime = 12;
var bg = "url('imgs/midday.svg')";
var savedTime = 12;
var timeSelectedName = 'Miday'; 
document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime') + ':00 - ' + Cookies.get('timeSelectedName');
document.getElementById('slection').value = Cookies.get('savedTime');
document.body.style.backgroundImage = Cookies.get('bg');


function changeTime() {
    var theTime = document.getElementById('slection').value;
    var bg = Cookies.get('bg');
    Cookies.set('savedTime', theTime, { expires: 100 });  
    document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime')  + ':00 - ' + Cookies.get('timeSelectedName');
    document.body.style.backgroundImage = Cookies.get('bg');


    //MIDNIGHT
    if (document.getElementById("slection").value == 0) {
        Cookies.set('bg', 'url(\'imgs/midnight.svg\')', { expires: 100 })
        Cookies.set('timeSelectedName', 'Mightnight', { expires: 100 })
        document.body.style.backgroundImage = Cookies.get('bg');
        document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime') + ':00 - ' + Cookies.get('timeSelectedName');
    }
    //MIDDAY
    if (document.getElementById("slection").value == 12) {
        Cookies.set('bg', 'url(\'imgs/midday.svg\')', { expires: 100 })
        Cookies.set('timeSelectedName', 'Midday', { expires: 100 })
        document.body.style.backgroundImage = Cookies.get('bg');
        document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime') + ':00 - ' + Cookies.get('timeSelectedName');
    }
    //MORNING
    if (document.getElementById("slection").value > 6 && document.getElementById("slection").value < 12) {
        Cookies.set('bg', 'url(\'imgs/monring.svg\')', { expires: 100 })
        Cookies.set('timeSelectedName', 'Morning', { expires: 100 })
        document.body.style.backgroundImage = Cookies.get('bg');
        document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime') + ':00 - ' + Cookies.get('timeSelectedName');
    }
    //AFTERNOON
    if (document.getElementById("slection").value > 12 && document.getElementById("slection").value < 18) {
        Cookies.set('bg', 'url(\'imgs/afternoon.svg\')', { expires: 100 })
        Cookies.set('timeSelectedName', 'Afternoon', { expires: 100 })
        document.body.style.backgroundImage = Cookies.get('bg');
        document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime') + ':00 - ' + Cookies.get('timeSelectedName');
    }
    //EVENING
    if (document.getElementById("slection").value > 20 && document.getElementById("slection").value < 24) {
        Cookies.set('bg', 'url(\'imgs/evening.svg\')', { expires: 100 })
        Cookies.set('timeSelectedName', 'Evening', { expires: 100 })
        document.body.style.backgroundImage = Cookies.get('bg');
        document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime') + ':00 - ' + Cookies.get('timeSelectedName');
    }
    //SUNRISE
    if (document.getElementById("slection").value > 0 && document.getElementById("slection").value < 6) {
        Cookies.set('bg', 'url(\'imgs/sunrise.svg\')', { expires: 100 })
        Cookies.set('timeSelectedName', 'Sunrise', { expires: 100 })
        document.body.style.backgroundImage = Cookies.get('bg');
        document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime') + ':00 - ' + Cookies.get('timeSelectedName');
    }
    //SUNSET
    if (document.getElementById("slection").value > 17 && document.getElementById("slection").value < 20) {
        Cookies.set('bg', 'url(\'imgs/sunset.svg\')', { expires: 100 })
        Cookies.set('timeSelectedName', 'Sunset', { expires: 100 })
        document.body.style.backgroundImage = Cookies.get('bg');
        document.getElementById('timeSelected').innerHTML = Cookies.get('savedTime') + ':00 - ' + Cookies.get('timeSelectedName');
    }

    
}





/*

MIDNIGHT
This is the middle of the night (00:00 hours).

MIDDAY
This is the middle of the day, also called "NOON" (12:00 hours).

MORNING
This is the time from midnight to midday.

AFTERNOON
This is the time from midday (noon) to evening.
From 12:00 hours to approximately 18:00 hours.

EVENING
This is the time from the end of the afternoon to midnight.
From approximately 18:00 hours to 00:00 hours.

DAWN
This is the time when the sun rises or comes up (sunrise).

DUSK
This is the time when the sun sets or goes down (sunset).






document.getElementById("test").innerHTML = Cookies.get('dint');
document.body.style.backgroundColor = Cookies.get('bg');

function daytime() {
    
    Cookies.set('dint', 'It is Day Time', { expires: 7 })
    Cookies.set('bg', 'yellow', { expires: 7 })
    document.getElementById("test").innerHTML = Cookies.get('dint');
    document.body.style.backgroundColor = "yellow";
    
}


function nighttime() {
    
    Cookies.set('dint', 'It is Night Time', { expires: 7 })
    Cookies.set('bg', 'blue', { expires: 7 })
    var state = Cookies.get('dint');
    document.getElementById("test").innerHTML = Cookies.get('dint');
    document.body.style.backgroundColor = "blue";

}

function changeTime() {
    

    if (document.getElementById("slection").value > 10) {
        document.body.style.backgroundColor = "blue";
        document.getElementById('timeSelected').innerHTML = document.getElementById("slection").value + ':00';
        
    }
    if (document.getElementById("slection").value < 9) {
        document.body.style.backgroundColor = "blue";
    
        
    }


}
*/

