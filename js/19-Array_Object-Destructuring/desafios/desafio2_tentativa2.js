/*
Create a function "minMax" that will accept any quantity of the arguments.

This function should return array of two elements:
1. First element in the array is minimal value among all arguments
2. Second element in the array is maximal value among all arguments

Use destructuring to parse results of the function calls.
*/

let min, max;

const minMax = (...numeros) => {

	const apenasNumeros = numeros.filter(
		(elemento) => typeof elemento === "number"
	);

	if (apenasNumeros.length === 0) return [null, null];

	return [
		apenasNumeros.reduce((min, numero) => min < numero ? min : numero),
		apenasNumeros.reduce((max, numero) => max > numero ? max : numero)
	];
};

/* call here "minMax" function with arguments 24, 5, 34, 10 */
[min, max] = minMax("abc", true);
console.log(min, max); // null null

[min, max] = minMax(24, 5, 34, 10);
console.log(min, max); // 5, 34

/* call here "minMax" function with arguments 18, 23, 103, 70, 80, 25 */
[min, max] = minMax(18, 23, 103, 70, 80, 25);
console.log(min, max); // 18, 103
