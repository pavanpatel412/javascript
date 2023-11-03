//for each==> to  iterate over the elements of an arrray. This loop is commenly used to perform a specific action for each element in the array.//
//using arrow funciton//
numbers = [1,2,3,4,5,6];
numbers.forEach(n=>{
    console.log(n*2);
});
console.log("------------------------")
//using unnamed function//
numbers.forEach(function(a){
    console.log((a+9));
});
console.log("=================================================================")
//example2 using push method within function//
function some(){
    const arrg= [1,2,4,5];
    const arg1 =[];
    arrg.forEach(function(item){
        arg1.push(item*item);
    });
    console.log(arg1);
    arrg.forEach(function(product){
        RESULT = product*product
        console.log(RESULT);
    });
}
some();
//for each fuction in objects.....//
obj1 = {a:2,b:3,c:4};
Object.keys(obj1).forEach(function(k){
    console.log(k+" is: "+obj1[k])
})


//==========//
const number = [1,2,3,4];
number.forEach(value => {
    console.log(Math.sqrt(value))
});
