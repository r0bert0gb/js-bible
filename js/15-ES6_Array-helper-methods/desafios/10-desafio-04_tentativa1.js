const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false
// 1: Por que "a" e "b" são diferentes?
//* Porque array é do tipo referência. Mesmos valores e número de elementos, mas arrays diferentes.

/* Create a function "isArraysEqual" with two parameters "arrayOne" and "arrayTwo".

If two arrays are equal (have same quantity of the elements and all elements match e.g. arrayOne[0] === arrayTwo[0] etc.) return "true".

Otherwise return "false". */

//LINK - Refazer

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log(isArraysEqual(a, b)); // true
console.log(isArraysEqual(a, c)); // false
console.log(isArraysEqual(a, d)); // false
