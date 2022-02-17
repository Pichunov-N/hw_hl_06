"use strict"

//1
// const sumTo = (n) => {
//     if (n == 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }

// console.log(sumTo(4));
// console.log(sumTo(3));


//2
const findShort = (str) => {
    let shortestWord = str.split(' ').sort(function (a, b) { 
        return (a.length - b.length); 
    });
    return shortestWord[0];
}

console.log(findShort("Lorem ipsum dolor sit amet"));
console.log(findShort("Hello world"));
console.log(findShort("Hi"));
console.log(findShort("She is David's sister"));