document.getElementById("execute").onclick=function(){execute_command()}

const white_board = document.getElementById("output");
const command = document.getElementById("command");
const BASE = window.localStorage.getItem("address").toString();

const API_URL = "http://"+BASE+":5000/terminal"


function execute_command() {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", API_URL, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        let server_response = this.responseText;
        let string_value = server_response.replace(/(?:\\n)/g, '\n').replace(/\\r/g,"");
        console.log(string_value);
        displayData(string_value);
    };

    var data = JSON.stringify({"command":command.value});
    xhr.send(data);
}

function displayData(data) {
    output.value = data;
}







//async function execute_command() {
//    let command_value = command.value;
//    console.log(command_value);
//
//    const settings = {
//        method: 'post',
//        headers: {
//            'Accept': 'application/json',
//            'Content-Type': 'application/json',
//            'command': command_value,
//        }
//    }
//    const response = await fetch(API_URL,settings);
//    const data = await response.json();
//    console.log(data);
//}