document.getElementById("execute").onclick = function() {giveResult()}

const white_board = document.getElementById("result");
const data = document.getElementById("data");
const BASE = window.localStorage.getItem("address").toString();

const API_URL = "http://"+BASE+":5000/qr"

function giveResult() {
    var outside;
    fetch(API_URL, {
        method:"POST",

        body: JSON.stringify({
            "data":data.value
        }),

        headers: {
            "Content-type":"application/json"
        }
    })
    .then(response => response.blob())
    .then(images => {
        white_board.style.visibility = "visible";
        white_board.src = URL.createObjectURL(images)
        console.log(outside)
    })

}



function displayData(data_) {
    white_board.style.visibility = "visible";
    white_board.value = data_;
}

//white_board.src = "img/code.png"
//let xhr = new XMLHttpRequest();
//xhr.open("POST", API_URL, true);
//
//xhr.setRequestHeader("Content-Type", "application/json");
//
//xhr.onreadystatechange = function () {
//    let server_response = this.responseText;
//    let b64Response = window.btoa(unescape(encodeURIComponent(server_response)))
//    
//    //console.log(b64Response)
//    //white_board.src = 'data:image/png;base64,'+b64Response;
//
//
//};
//
//let data_ = JSON.stringify({"data":data.value});
//xhr.send(data_);