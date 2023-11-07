numbers = [1,2,3,4,5,6];
function productof(numbers,callback){
   setTimeout (function(){
    numbers.forEach(element => {
        console.log(element*2);
    });
},5000);
    callback();
};

function multiplay(){
    console.log("the numbers are multiplay with 2:");
}
productof(numbers,multiplay);