document.getElementById("execute").onclick = function() {giveResult()}

const white_board = document.getElementById("output");
const target = document.getElementById("address_box");
const BASE = window.localStorage.getItem("address").toString();

const API_URL = "http://"+BASE+":5000/lookup/iplookup"

function giveResult() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", API_URL, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        let server_response = this.responseText;
        let string_value = server_response.replace(/(?:\\n)/g, '\n').replace(/\\r/g,"").replace(/\\t/g,"    ");
        console.log(string_value);
        displayData(string_value);
    };

    var data = JSON.stringify({"target":target.value});
    xhr.send(data);
}

function displayData(data) {
    white_board.value = data;
}