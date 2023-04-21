/*
Create a function "meanScore" that will accept any quantity of the arguments, gather them into single array and return mean value of all arguments rounded to 2 decimal places.

If at least one element in the gathered array is not a number - throw following error to the console:
"Supplied arguments must contain only numbers!"

Type of the returned value must be a "number".

HINT: In this Challenge you should use both rest and spread operators.
*/


const meanScore = (...pontos) => {

	if (pontos.every(elemento => typeof elemento === "number")) {

		return parseFloat(pontos.reduce((media, elemento) => {

			return media + elemento / pontos.length;

		}, 0).toFixed(2));

	} else {
		throw new Error("Os argumentos fornecidos devem ser apenas números!");
	}
};





const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ["abc", 1.3, true, 2.5, 1.9];

/* all elements from "scores1" */
console.log(meanScore(...scores1)); // 1.93

/* all elements from "scores1" and "scores2" */
console.log(meanScore(...scores1, ...scores2)); // 2.8

/* all elements from "scores1" and "scores2" and "scores3" */
console.log(meanScore(...scores1, ...scores2, ...scores3)); // 2.59

/* all elements from "scores4" */
console.log(meanScore(...scores4));
// Supplied arguments must contain only numbers!
