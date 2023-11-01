//print the vowels of the string //
let string  = " some vowels in  string";
let some = 0;
let lastVowel = [];
while(some<string.length){
    let k = string[some];
    if('aeiou' .includes(k) && !lastVowel.includes(k)) {
        console.log(k);
        lastVowel.push(k);
    }
    some++;
}
console.log("-----------------------------------------------------")
//using foor loop....
let somename = 'toady is dussera'
let lastVowels = [];

for (let some = 0; some < somename.length; some++) {
    let k = somename[some];

    if ('aeiou'.includes(k) && !lastVowels.includes(k)) {
        console.log(k);
        lastVowel.push(k);
    }
}
console.log("---------------------------------------------------------------------")
//to print the statement in alphabetic order...

let statement = "APPLE";
//to use below conditon to converst above into alphabetic order//

let sortstatement = statement.split('').sort( ).join(' ');
// for(var v=65; v<=90; v++){
//     var ch = String.fromCharCode(v);
    
//          console.log(ch);
// }

console.log(sortstatement);
//--------------------------------------------------------//
              