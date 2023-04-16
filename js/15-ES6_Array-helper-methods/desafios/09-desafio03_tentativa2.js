const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

/*
Create a function "arrayCheck" with one parameter - "inputArray".

If at least one element in the array is not a number - return "Some elements are not numbers".

If numbers in the array are sorted in ascending order - return "Array is sorted is ascending order".

If numbers in the array are sorted in descending order - return "Array is sorted is descending order".

If array is not sorted - return "Array is not sorted"
*/

const arrayCheck = (inputArray) => {

	// 1
	const isNotNumero = (elemento) => typeof elemento !== "number";

	if (inputArray.some(isNotNumero)) {

		return "Alguns elementos não são números!"
	}

	// 2
	const isNumeroMaior = (elemento, indice) =>
		indice > 0
			? elemento >= inputArray[indice - 1]
			: true;

	if (inputArray.every(isNumeroMaior)) {
		return "Array ordenado de forma crescente!";
	}

	// 3
	const isNumeroMenor = (elemento, indice) =>
		indice > 0
			? elemento <= inputArray[indice - 1]
			: true;

	if (inputArray.every(isNumeroMenor)) {
		return "Array ordenado de forma decrescente!";
	}

	// 4
	return "Array não ordenado!";
}

console.log(arrayCheck(a)); // Some elements are not numbers
console.log(arrayCheck(b)); // Array is sorted is ascending order
console.log(arrayCheck(c)); // Array is sorted is descending order
console.log(arrayCheck(d)); // Array is not sorted
