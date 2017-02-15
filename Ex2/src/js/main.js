"use strict";

function loadContent(idClick) {
    let xhttp = new XMLHttpRequest()
    xhttp.open("GET", "content/" + idClick + ".html", true)

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contentDiv").innerHTML = xhttp.responseText
        }
    }
    
    xhttp.send()
}