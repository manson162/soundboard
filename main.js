
    var sound = "";
    var url = "";
function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
 

function play(sound) {
        fetch("https://www.syrinscape.com/online/frontend-api/" + sound + "/play/?auth_token=1e93a1db5e982879f3a030972f5367cf0eefdf69");
        url = "https://www.syrinscape.com/online/frontend-api/" + sound + "/play/?auth_token=1e93a1db5e982879f3a030972f5367cf0eefdf69" ;
        
        textToClipboard (url);
    };   

    function textToClipboard (url) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

 
