/**
 * CHALLENGE 1-1 TASK
 *
 * Rewrite code below using let, const and var according to
 * variables usage guidelines
 */

//* ANTES
// numbers1 = [23, 87, 110, 11, 20, 5, 34];
// numbers2 = [11, 21, 31];

// var onlyOddNumbers = function(arr) {
//   oddNumbers = [];
//   qtdeNumerosPares = 0;
//   len = arr.length;

//   for (i = 0; i < len; i++) {
//     arr[i] % 2
//       ? oddNumbers.push(arr[i])
//       : qtdeNumerosPares++;
//   }

//   var info;
//   if (qtdeNumerosPares === 0) {
//     info = "Array contains only odd numbers";
//     console.log(info);
//   } else {
//     info =
//       "There are " +
//       qtdeNumerosPares +
//       " even numbers";
//     console.log(info);
//   }

//   return {
//     oddNumbers: oddNumbers,
//     qtdeNumerosPares: qtdeNumerosPares
//   };

//   var oddNumbers;
// };

// var qtdeNumerosPares;

// console.log(onlyOddNumbers(numbers1));
// console.log(onlyOddNumbers(numbers2));

//* DEPOIS

"use strict";

const numbers1 = [23, 87, 110, 11, 20, 5, 34];
const numbers2 = [11, 21, 31];

const onlyOddNumbers = function(arr) {

  var numerosImpares = [];

  var qtdeNumerosPares = 0;
  const LENGTH = arr.length;

  for (let i = 0; i < LENGTH; i++) {
    arr[i] % 2
      ? numerosImpares.push(arr[i])
      : qtdeNumerosPares++;
  }

  if (qtdeNumerosPares === 0) {

	let info = "Array contains only odd numbers";

    console.log(info);
  } else {

    let info = "There are " + qtdeNumerosPares + " even numbers";

    console.log(info);
  }

  return {
    oddNumbers: numerosImpares,
    qtdeNumerosPares: qtdeNumerosPares
  };
};

console.log(onlyOddNumbers(numbers1));
console.log(onlyOddNumbers(numbers2));
