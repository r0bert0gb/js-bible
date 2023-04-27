/*
Create a function "minMax" that will accept any quantity of the arguments.

This function should return array of two elements:
1. First element in the array is minimal value among all arguments
2. Second element in the array is maximal value among all arguments

Use destructuring to parse results of the function calls.
*/
let min, max;

const minMax = (...numeros) => {

	numeros.forEach((elemento, indice) => {

		if (indice === 0) {
			min = elemento;
			max = elemento;
		}

		if (elemento < min) {

			min = elemento;
		}

		if (elemento > max) {

			max = elemento;
		}
	});

	return [min, max];
};

/* call here "minMax" function with arguments 24, 5, 34, 10 */

minMax(24, 5, 34, 10);

console.log(min, max); // 5, 34

/* call here "minMax" function with arguments 18, 23, 103, 70, 80, 25 */
minMax(18, 23, 103, 70, 80, 25);

console.log(min, max); // 18, 103
