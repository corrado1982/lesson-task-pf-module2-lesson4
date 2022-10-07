//Question 1

function textFunction (){
    console.log("What the func is this nonsense?");
}
textFunction()

//Question 2

function names (firstName, lastName ) {

    var fullName = firstName + " " + lastName;
    console.log(fullName);
}

names ("Corrado Di Rofi")



//Question 3

function numbers (firstNumber, secondNumber) {


    if 
        ((typeof firstNumber !== "number") || (typeof secondNumber !== "number" )) {
    return "Please supply number values"}
    else
     
    {
    return firstNumber * secondNumber ;
        
    } 
    
}
var result = numbers(3, 9)

console.log(result)



//Question 4

function arguments (arg1, arg2, arg3) {

    var numberCovert1 = parseFloat(arg1);
    var numberCovert2 = parseFloat(arg2);
    var numberCovert3 = parseFloat(arg3);
   

    if 
        (isNaN(numberCovert1) || isNaN(numberCovert2) || isNaN(numberCovert3)) {
    return "Invalid argument types";}
    
    else {
        return numberCovert1 + numberCovert2 + numberCovert3;
    }
}
var ifNumbers = arguments(3,9,"p")

//console.log(ifNumbers)

var paragraph = document.querySelector ("p");

//console.log(paragraph);

paragraph.innerHTML = ifNumbers;


//Question 5

var selectHeading = document.querySelector (".heading");


function buttonHeading () {
    var headingSelect = document.querySelector ("h1");
    headingSelect.innerHTML += ": Updated";
    //headingSelect.innerHTML = "Functions:" +" "+ "Updated" +" "+ "Updated";
};
selectHeading.onclick = buttonHeading;
//headingSelect.innerHTML = "Functions: Updated: Updated";



//Question 6

var buttonTitle = document.querySelector (".title");
var selectTitle = document.querySelector ("title");

function changeTitle () {

    selectTitle.innerHTML = "I've been updated";
}

buttonTitle.onclick = changeTitle;
//console.dir(document);

//Question 7

var buttonRed = document.querySelector (".red");
var buttonOrange = document.querySelector (".orange");
var buttonPink = document.querySelector (".pink");
var body = document.querySelector ("body");

  

function turnRed () {
    body.style.backgroundColor = "red";
}
buttonRed.onclick = turnRed;

function turnOrange () {
    body.style.backgroundColor = "orange";
}
buttonOrange.onclick = turnOrange;

function turnPink () {
    body.style.backgroundColor = "pink";
}
buttonPink.onclick = turnPink;
