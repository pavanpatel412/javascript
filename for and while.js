const name = "pavan kumar doing a job"
for(let ovewls in name){
    let o = name[ovewls]
    if(o === "a"|| o === "e" || o === "i" || o ==="o" || o === "u"){
        console.log("ovewlse in the name are ;", o)
    }
}
// using while loop is 
let somthing = "i am alone";
let wahile_is = 0;
while(wahile_is<somthing.length){
    let j = somthing[wahile_is];
    if(j === "a"|| j === "e" || j === "i" || j  ==="o" || j === "u"){
        console.log("ovewlse in the name............. are ;", j)
    }
    
    wahile_is++;
}

var k = "";
const forloop = "this is my number";
for(let i = 0; i<forloop.length; i++){
    if(k.indexOf(forloop[i]) === -1){
    k += forloop[i]
    }
  
}
console.log(k)
var unique = '';
let somename = "am a i pavan kumar";

for (let i = 0; i < somename.length; i++) {
    if (unique.indexOf(somename[i]) === -1) {
    unique += somename[i]
    
    }
}
console.log("Unique characters: " + unique);

// sum of the all numbers is
const number = [3.4,5,6,5,4,6];
let total = number.reduce(element => {
    return (element+element)
});
console.log(total)











// [[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]

const numbers = [1, 2, 3, 4, 5];

// Callback function to perform a custom operation on each element
function customOperation(value) {
    // For example, let's double the value
    return value * 2;
  }
  
  // Function to apply a callback function to each element in an array using map
  function applyCustomOperation(arr, callback) {
    return arr.map(callback);
  }
  
  // Apply a custom operation (doubling in this case) to each element in the array
const customOperationResult = applyCustomOperation(numbers, customOperation);
console.log("Custom Operation Result:", customOperationResult);
  