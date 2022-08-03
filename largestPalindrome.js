let theNumber = 0;
let largest = [];

for (let i = 99; i < 1000; i++) {
  for (let j = i; j < 1000; j++) {
    theNumber = i * j;
    var reverseTheNumber = theNumber.toString().split("").reverse().join("");
    if (theNumber == reverseTheNumber) {
      largest.push(theNumber);
    }
  }
}
console.log(Math.max(...largest));

// let i = 1000;
// let theNumber2 = 0;
// let statu = false;
// while (!statu) {
//     for (let j = 1000; j >= 100; j--) {
//         theNumber2 = i * j;
//         var reverseTheNumber2 = theNumber2.toString().split("").reverse().join("");
//         //console.log(theNumber2, reverseTheNumber2, ' for')

//         if (theNumber2 == reverseTheNumber2) {
//             console.log(theNumber2, reverseTheNumber2, ' if')
//             statu = true;
//         }
//     }
//     i--;
// }
// console.log(theNumber2, ' new');
