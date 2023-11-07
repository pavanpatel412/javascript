//glocal scope refers to variable decleared outside of any funtion.these varible can accessed from any where in your cod...//
a = 12;
function globalscope(){
    result = a*2;
    console.log(result);
}
globalscope(a);
//local scope is nothing but variable decleared with in function //....
function localscope(){
    name = "pavan";
    salary = 30000;
    console.log("name is: "+name +"," +"salary is: "+salary);

}
localscope();
//block-scope it is nothing but variable decleared with in condition //...if 
if (true){
    thevariable ="blocke scope";
    console.log(thevariable);
}rr             
