//FOR LOOP PRINT NUMBERS FROM 1 TO 10
// let i =10;
// for(i=8; i<10; i++)
// {
//     console.log(i)
// }
//PRINT NAMES IN THE LIST USING FOR LOOP
const names = ["prashanth", "pavan","indira","odelu","sowmya","LOKESH","DILEEP"]

for (i=0; i<names.length; i++){
    console.log(names[i])
}
//PRINT KEYS AND VA LUES IN THE DICTIONARY
const  veh= {car:"benz",trucks:"vans",bikes:"herohonda"}
for (let k in veh){
    console.log(k + " is " +veh[k])
}
// print strings in touple
var students = JSON.parse('[{"name":"pavan","place":"cheerlavancha","number":810874378},{"name":"raju","place":"vemulawada","number":8886729298},{"name":"cherry","place":"karimnagar","number":8638648}]');

for (var i = 0; i < students.length; i++) {
    var student = students[i];
    console.log("Name: " + student.name);
    console.log("Place: " + student.place);
    console.log("Number: " + student.number);
}
var prompt = require('prompt-sync')();
let  num = prompt('enter your number:');
for(let i=0; i<=num; i++)
{
    console.log(i);
}