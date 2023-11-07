// //=====================//
//call back// sample example.....................
function greet(name,callback){
    console.log("hi"+" "+name);
    callback();
  }
  function callme(){
   console.log("i am callback function");
  }
  greet("anudeep",(callme));


console.log("========================================================")
//employe details using callback fumciton;;

function employe(name,callback){
  console.log("name is:"+name);
  callback();
}
function displaysalary(age,callback){
  setTimeout(function(){
  console.log("age is:"+age);
  callback()
},3000);
}

function displayvillage(){
  setTimeout(function(){
    console.log("village is cheerlavancha");
  },6000)
}
employe("pavan",displayvillage);
displaysalary(24,displayvillage);

console.log("====================================")
//another example for callback function//
 function add(a,b,callback){
  setTimeout(function(){
    console.log("a+b is;",a+b);
    callback()
  },9000);
  

}
function some(){
  setTimeout(() => {
    console.log("adding above values");
  }, 10000);
  
}
add(4,5,some)
console.log("================================================================================")

 function emp1(name,age,callback){
    result = name+age;
    if(typeof callback === "function" ){
      callback(result)
    }
  }
  function emp2(name,age,callback){
    result = name+age;
    if(typeof callback ==="function"){
      callback(result);
    }
  }
  function combine(){
    emp1("pavan ",24 ,function(emp1result) {
    emp2("raju ",27 ,function(emp2result){
    console.log("the two employes are:",emp1result+emp2result);
    });
    });
  }
    combine();