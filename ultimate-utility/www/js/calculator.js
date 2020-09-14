
//-------------GETTING ELEMENTS BY REFERENCE---------------------
// Numbers
one = document.getElementById("1");
two = document.getElementById("2");
three = document.getElementById("3");
four = document.getElementById("4");
five = document.getElementById("5");
six = document.getElementById("6");
seven = document.getElementById("7");
eight = document.getElementById("8");
nine = document.getElementById("9");
zero = document.getElementById("zero");

// Operators
add = document.getElementById("addition");
subtract = document.getElementById("subtraction");
multiply = document.getElementById("multiply");
divide = document.getElementById("division");
modulus = document.getElementById("modulus");
square = document.getElementById("square");
squareroot = document.getElementById("squareroot")
byx = document.getElementById("1byx")
backspace = document.getElementById("backspace")


// Calc operations
clear = document.getElementById("clear");
dot = document.getElementById("dot");
equal = document.getElementById("equal");

// Entry text field
entry = document.getElementById("entry");



//----------------SETTING METHODS TO PERFORM------------------------
//Setting function for keys
one.onclick = function() {Display(one)};
two.onclick = function() {Display(two)};
three.onclick = function() {Display(three)};
four.onclick = function() {Display(four)};
five.onclick = function() {Display(five)};
six.onclick = function() {Display(six)};
seven.onclick = function() {Display(seven)};
eight.onclick = function() {Display(eight)};
nine.onclick = function() {Display(nine)};
zero.onclick = function() {Display(zero)};
dot.onclick = function() {Display(dot)};

//Setting function for operators
add.onclick = function() {Display(add)};
subtract.onclick = function() {Display(subtract)};
multiply.onclick = function() {Display(multiply)};
divide.onclick = function() {Display(divide)};
modulus.onclick = function() {Display(modulus)};
square.onclick = function () {Square()};
squareroot.onclick = function () {Root()};
byx.onclick = function () {Byx()}; 
backspace.onclick = function () {Backspace()};

// Setting Operation function for equal sign
equal.onclick = function() {Operation()};

// Setting Clear function for clear button
clear.onclick = function() {Clear()};



// --------------------FUNCTIONS--------------------------
// Display function
function Display(val) {
    var number = val.value;
    entry.value += number;    
}

// Operation function
function Operation() {
    let temp = entry.value;
    entry.value = eval(temp);

}

// Square function
function Square() {
    let temp = entry.value;
    entry.value = temp * temp;
}

// Square root function
function Root() {
    let temp = entry.value;
    entry.value = Math.sqrt(temp)
}

// Byx function
function Byx() {
    let temp = entry.value;
    entry.value = 1/(temp)
}

// Backspace function
function Backspace() {
    let temp = entry.value.toString();
    entry.value = temp.substr(0, temp.length - 1);
}

// Clear function
function Clear() {
    entry.value=null;
    entry.placeholder="0";
}
