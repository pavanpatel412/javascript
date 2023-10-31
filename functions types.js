// let x = function() {
//     console.log("this is nani");
// }
// return x();
//named function//
//WITH arguments//
function sum2(x,y){
    return x*y;
}12
console.log(sum2(4,5))
// w/0 parameters//
function sum3(){
    let x = 34;
    let y = 45;
    result = x+y;
    return result;
}
console.log(sum3());
//anonymous function// without assign function name//
 var fun = function(num1,num2) {
    var result = num1*num2;
    return result;

}
console.log(fun(34,45))
//IIFE//WRITE FUNCITON IN PARANTHASIS //
 var result = (function(number1,number2) {
    var result = number1/number2;
        return result;
})(7,8);
console.log(result);

function emp(emp_name, no, salary){
   this.emp_name= emp_name
   this.no = no;
   this.salary = salary;
    
}
emp1 = new emp('pavan',555,1500);
console.log(emp1);
console.log(emp1.emp_name);
console.log(emp1.no);
console.log(emp1.salary);
///---------------------------------------------------------------////////
function add(a,b){
    let c  = a+b;
    return c;
}
function sub(x,y){
    let z = x-y;
    return z;
}
function combine()
{
    console.log(add(4,5));
    console.log(sub(9,6));
}
combine(add, sub);