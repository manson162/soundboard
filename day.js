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

