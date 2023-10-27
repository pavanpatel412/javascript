myarray2 = [3,4,5,6,7];
myarray = ["pavan","raju","nani","durga","somesh"];
console.log(myarray.slice(1,4));
console.log(myarray2.slice(1,4));
console.log(myarray.pop());
console.log(myarray);
console.log(myarray.push("kiran"));
console.log(myarray);
console.log(myarray.shift());
console.log(myarray);
console.log(myarray.unshift("hj"));
console.log(myarray);




//convert arrrays to string//
const fruits = ["apple","banana","mango"];
console.log(fruits.toString());
//join method is also convert arrays into string. join something what we are given in console//
console.log(fruits.join("**"));

//map method //
const numbers = [1, 2, 3, 4, 5];{
const doubled = numbers.map((number) => number*number);
  console.log(doubled);
}
//filter method is used while condition is true then it is printed
let pavan = [-2,3,-4,5,5,6];{
  console.log(pavan.filter(pr=>pr>0));
}
//reduce method //
let some_numbers = [1,2,3,4,6,6,7,5,54];
const some2 = some_numbers.reduce((acc,number1 ) => acc+number1);
console.log(some2);