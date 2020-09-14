
document.getElementById("convert").onclick = function() {generateResult()}

const white_board = document.getElementById("result_val");
const dropdown_from = document.getElementById("currency");
const dropdown = document.getElementById("currency_result");

const API_URL = "https://api.exchangeratesapi.io/latest?"


function generateResult() {
    let select_1 = dropdown_from.options[dropdown_from.selectedIndex].value;
    let select_2 = dropdown.options[dropdown.selectedIndex].value;
    let amount_wanted = document.getElementById("amount_wanted").value;
    var rate;

    let URL = API_URL+"base="+select_1+"&symbols="+select_2;
    console.log("url is "+URL);
    fetch(URL)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        rate = data['rates'][select_2];
        console.log( "rate is "+rate);

        if (amount_wanted == "") {
            console.log("true")
            amount_wanted = '1';
        }

        let f_amount_wanted = parseFloat(amount_wanted);
        let f_rate = parseFloat(rate);

        let result = f_amount_wanted * f_rate;

        let result_str = amount_wanted +" " + select_1 +" is equal to " + result.toFixed(2) + " " +select_2;
        white_board.innerHTML = result_str;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}


