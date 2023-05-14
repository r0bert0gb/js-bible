/**
 * CHALLENGE 7-4: TASK
 *
 * Create new class "ExtendedArray" that should extend built-in "Array".
 *
 * Add two custom methods to the new class:
 * 1. "sum" - it should return sum of all elements in the array
 * 2. "onlyNumbers" - it should return new array that will contain only numbers from the source array
 *
 * Create several instances of the new "ExtendedArray" class and test both methods "sum" and "onlyNumbers"
 */

class ExtendedArray extends Array {

	sum() {
		return this.reduce((soma, elemento) => soma += elemento);
	}

	onlyNumbers() {
		return this.filter((elemento) => typeof elemento === "number");
	}
}

const teste = new ExtendedArray(55,4,3,2,1, "abc", true);

console.log(teste.sum());

const novoArray = teste.onlyNumbers();

console.log(novoArray);
