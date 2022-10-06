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
var ifNumbers = arguments(3,9,"9")

//console.log(ifNumbers)

var paragraph = document.querySelector ("p");

//console.log(paragraph);

paragraph.innerHTML = ifNumbers;


//Question 5

//Question 6


//Question 7