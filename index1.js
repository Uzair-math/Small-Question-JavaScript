// //   Q:1. Write a JavaScript program to sum the multiples of 3 and 5 under 1000

// let sum=0;
// for (let i = 0; i < 1000; i++) {
//     if (i % 3 === 0) {
//         sum=sum+i
//     }
//     if (i%5 === 0) {
//         sum=sum+i
//     }
//     else{
//         console.log("Javascript");
//     }
// }
// console.log(sum);


// // Q:2. Write a JavaScript program which iterates from 1 to 100. For multiples of
// // three print "Hello" instead of the number and for the multiples of five print
// // "SeeBiz". For numbers which are multiples of both three and five print "Bye"


// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0  && i % 5 === 0){
//       console.log("Bye",i);
//     } else if (i % 5 === 0) {
//     console.log("Seebiz");
// }   else if (i % 3 === 0)  {
//         console.log("hello",i);
//     }else{
//         console.log(i);
//     }
//     };




// // Q:3. Write a JS code to delete all occurrence of element in given array (Make
// // your own array)


// // let arr=[11,22,33,44,55,66,11,22,33,44,55,66]
// // let uzair =[...new Set(arr)];
// // console.log(uzair);

// let arr =[11,22,33,44,55,11,11,22,33,44,55]

// for (x=0; x< arr.length; x++) {
//    for (i=x+1; i< arr.length; i++) {
//     for (j=x+1; j< arr.length; j++) {
//     if(arr[x]==arr[i]){
//         arr.splice(i,1)
//     }
// }
// }  
// }
// console.log(arr);


// let test=[1,2,3,12,1,2,3,4,2,3,4,1,3,5,6,7,8,9,10,11]

// for (let x = 0; x < array.length; x++) {
//    for (let i = x+1; i < array.length; i++) {
//     for (let j = x+1; j < array.length; j++) {
//       if (test[x]==test[i]) {
//         test.splice()
//       }
        
//     }
    
//    }
    
// }