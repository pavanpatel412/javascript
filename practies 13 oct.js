// write a function to  find the factorial of a given number :
function factorial(n){
    if (n===0 || n===1)   {
       return 1;

    }
    else{
         return n*factorial(n-1);

    }

    
}
let number2 = factorial(6);
console.log(number2)
//create a program given number is even or add using if and else conditions:
 const int_number = 5;
if (int_number % 2 === 0){
    console.log("the given number is even;")
}
else{
    console.log("the given number is odd number:")
}

function givennumber(find_number){
    // var find_number = 4;
    if (find_number % 2 === 0){
        console.log("the given number is even number :")
    }
    else{
        console.log("the given number is odd number;")
    }
}
givennumber(4);
givennumber(3)
// create a program using age that person is elgible for vote or not:
var age = 8;
if (age>=18){
    console.log("he & she was eligible for vote")
}
else{
    console.log("not eligible to  vote yet!..")
}
// programm to determind the type of the traingle>>>
var a = 4;
var b = 4;
var c = 5;
if (a === b & b === c){
    console.log("all sides are equal>> equilateral traingle;")
}
else if (a === b & b===a & a<=c & b<=c ){
    console.log("only 2 sides are equal: >> isosceles traingle")
} 
else{
    console.log("all sides are different >>scalane traingle;")
}
// Program to check if a year is a leap year

// Year to check
var year = 2024;

// Check if it's a leap year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
