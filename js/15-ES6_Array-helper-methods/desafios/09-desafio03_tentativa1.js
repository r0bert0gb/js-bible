const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

const arrayCheck = (inputArray) => {

	// * Se todos são números
	if (inputArray.some((elemento) => typeof elemento !== "number")) {
		return "Alguns elementos não são números!";
	}

	// * Se estão em ordem crescente
	const isMaiorQueOAnterior = (elemento, indice, arrayAlvo) => {

		if (indice > 0) {
			return elemento > arrayAlvo[indice - 1];
		}
		return true;
	}

	if (inputArray.every(isMaiorQueOAnterior)) {
		return "O array está em ordem crescente!";
	}

	// * Se estão em ordem decrescente
	const isMenorQueOAnterior = (elemento, indice, arrayAlvo) => {
		if (indice > 0) {
			return elemento < arrayAlvo[indice - 1];
		}
		return true;
	}

	if (inputArray.every(isMenorQueOAnterior)) {
		return "O array está em ordem decrescente!";
	}
};

// console.log(arrayCheck(a));
console.log(arrayCheck(b));
// console.log(arrayCheck(c));
// console.log(arrayCheck(d));

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
