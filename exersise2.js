// //print only vowels in the statement //
// //using for in//
// // let name = "this is pavan kumar"
// // for(let k in name){
// //     let c =name[k];
// //     if( c ==='a'|| c ==='e'|| c==='i'||c ==='o'||c ==='u' ){
// //         console.log(c);
// //     }
// // }
// //using for loop
// var unique = '';
// var count = 0;
// let somename = "am a i pavan kumar"
// for (let i=0; i<=somename.length; i++){
//     for(let j = i+1; j<=somename.length; j++){
//         if(somename[i] === somename[j]){
//             count++;
//             unique += somename[i];
     
//         }
//     }
   
//     // let l = strings[i]
//     // if(l ==='a'|| l ==='e' || l ==='o' || l ==='u'|| l ==='i'){
//     //     console.log(l);
//     // }
// }
// console.log(somename[i]);


// console.log("-------------------------------------------------------")

// //using while lopp
// let student = "pavan  kumar is good boy";
// let some = 0;
// while(some < student.length){
//     let k =student[some];

//     if(k ==='a'|| k ==='e' || k ==='i' || k ==='u'||k ==='o'){
//         console.log(k);
//     }
//     some++;
    
// }
// var unique = '';
// var count = 0;
// let somename = "am a i pavan kumar";

// for (let i = 0; i < somename.length - 1; i++) {
//     for (let j = i + 1; j < somename.length; j++) {
//         if (somename[i] === somename[j]) {
//             if (!unique.includes(somename[i])) {
//                 unique += somename[i];
//             }
//         }
//     }
// }

// console.log("Duplicate characters: " + unique);

var unique = '';
let somename = "am a i pavan kumar";

for (let i = 0; i < somename.length; i++) {
    if (unique.indexOf(somename[i]) === -1) {
        unique += somename[i];
    }
}

console.log("Unique characters: " + unique);
