//for each==> to  iterate over the elements of an arrray. This loop is commenly used to perform a specific action for each element in the array.//
numbers = [1,2,3,4,5,6];
numbers.forEach(n=>{
    console.log(n*2);
});
console.log("------------------------")
//another function//
numbers.forEach(function(a){
    console.log((a+9));
});
//for in ==> which is used for iterating over the properties of an object.it is often used with objects,arrays,or other iterable structures..//
const employes = {name:"pavan",age:24,salary:"25k"};
for(employe in employes){
    console.log(employe+" is: "+employes[employe]);
}
console.log("--------------------------------------------")
//example2.....
const employees = [
    { name: "pavan", age: 24, salary: "25k" },
    { name: "kiran", age: 26, salary: "25k" }
];

for (let employeeIndex in employees) {
    const employee = employees[employeeIndex];
    // console.log("Employee " + (parseInt(employeeIndex) + 1));
    console.log("Name: " + employee.name);
    console.log("Age: " + employee.age);
    console.log("Salary: " + employee.salary);
    console.log("------------");
}
let fruits = ["apple","banana","grapes"];
for(somefruits in fruits){
    console.log(fruits+",,,"+fruits[somefruits]);
}
//for of//==>  , the for...of loop iterates directly over the values of an iterable, rather than their properties or indices.
vegetables = ["tomato","brinjal","potatos"];
for(vegetable of vegetables){
    console.log("some vegitables are:"+vegetable);
}
array = [1,3,4,4,5,6,6,6];
for (i=0; i<array.length; i++){
    console.log(array[i]);
}

















