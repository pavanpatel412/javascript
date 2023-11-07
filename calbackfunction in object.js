//call back functions in objects//example...........

const students = {name:"pavan",age:24,salary:"50k"};
function empdetails(students,callback){
  for(let details in students){
    console.log(details+" is :"+students[details]);
  }
  callback();
}
function details2(){
  console.log("<=== details of students are")
}
empdetails(students,details2);
