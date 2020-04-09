var allSounds = "";

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


function textToClipboard(url) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

fetch("./sounds.json")
    .then(function (resp) {
        return resp.json();
    })
    .then(function (data) {
        preformLoop(data);
        allSounds = data;
    })

function preformLoop(data) {
    document.getElementById("myUL").innerHTML = "";

    for (i = 0; i < data.length; i++) {


        if (localStorage.getItem(data[i].ID) === "Fav") {
            var line = document.createElement("LI");
            line.className = "soundBar";
            var url = "\"https://www.syrinscape.com/online/frontend-api/" + data[i].Trigger + "/play/?auth_token=1e93a1db5e982879f3a030972f5367cf0eefdf69\""
            var sound = "\"" + data[i].ID + "\""
            line.innerHTML = "<a href='#0' class='name' onclick='play(" + url + ")'> <b>" + data[i].Name + "</b> - " + data[i].Type + "</a> <a href='#0' class='fav' onclick='removeFav(" + sound + ")'> <i class='fa fa-toggle-on' aria-hidden='true'></i>"
            "</a>";

            document.getElementById("myUL").appendChild(line);

        }
    }
    for (i = 0; i < data.length; i++) {


        if (localStorage.getItem(data[i].ID) != "Fav") {
            var line = document.createElement("LI");
            line.className = "soundBar";
            var url = "\"https://www.syrinscape.com/online/frontend-api/" + data[i].Trigger + "/play/?auth_token=1e93a1db5e982879f3a030972f5367cf0eefdf69\""
            var sound = "\"" + data[i].ID + "\""
            line.innerHTML = "<a href='#0' class='name' onclick='play(" + url + ")'> <b>" + data[i].Name + "</b> - " + data[i].Type + "</a> <a href='#0' class='fav' onclick='fav(" + sound + ")'>   <i class='fa fa-toggle-off' aria-hidden='true'></i> "
            "</a>";

            document.getElementById("myUL").appendChild(line);

        }
    }

}

function play(url) {
    textToClipboard(url);
    fetch(url);

    /*
        localStorage.setItem("m:16595", "Fav");
        localStorage.setItem("m:16596", "Fav");
        localStorage.setItem("m:16597", "Fav");
        localStorage.setItem("m:16598", "Fav");
        localStorage.setItem("m:16602", "Fav"); */
}

function fav(sound) {
    localStorage.setItem(sound, "Fav");

    preformLoop(allSounds)
}

function removeFav(sound) {
    localStorage.removeItem(sound, "Fav");

    preformLoop(allSounds)
}