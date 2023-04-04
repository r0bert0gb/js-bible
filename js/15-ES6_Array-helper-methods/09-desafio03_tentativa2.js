const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];


const arrayCheck = (inputArray) => {

	// 1
	if (inputArray.some((elemento) => typeof elemento !== "number")) {

		return "O array contém não-números!";
	}

	// 2
	const isMaiorQueOAnterior = (elemento, indice, array) =>
		indice > 0
			? elemento >= array[indice - 1]
			: true;

	if (inputArray.every(isMaiorQueOAnterior)) {
		return "Ordem crescente";
	}

	// 3
	const isMenorQueOAnterior = (elemento, indice, array) =>
		indice > 0
			? elemento <= array[indice - 1]
			: true;


	if (inputArray.every(isMenorQueOAnterior)){
		return "Ordem decrescente";
	}

	// 4
	return "O array não está ordenado!";
};


console.log("array a: "+ arrayCheck(a)); // nem todos são números
console.log("array b: "+ arrayCheck(b)); // ordem crescente
console.log("array c: "+ arrayCheck(c)); // ordem decrescente
console.log("array d: "+ arrayCheck(d)); // desordenado
/*
Create a function "arrayCheck" with one parameter - "inputArray".

If at least one element in the array is not a number - return "Some elements are not numbers".

If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".

If numbers in the array are sorted in descending order - return "Array is sorted is descending order".

If array is not sorted - return "Array is not sorted"
*/

// console.log(arrayCheck(a)); // Some elements are not numbers
// console.log(arrayCheck(b)); // Array is sorted is ascending order
// console.log(arrayCheck(c)); // Array is sorted is descending order
// console.log(arrayCheck(d)); // Array is not sorted
