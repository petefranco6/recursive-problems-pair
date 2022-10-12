/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/


// function range(start, end) {
//   // Your code here
//   if(end <= start){
//     return [];
//   } else {
//     let numArray = range(start, end -1);
//     console.log('start', start)
//     console.log("The end: ", end - 1)
//       numArray.push(end-1);
//       return numArray;
//   } 
// }

function range(start, end){
if(start > end){
  return [];
} 
if(start === end){
  return [];
}

let num = range(start + 1, end)
num.unshift(start)
return num
}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}