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
	/*
	Não se define construtor dessa classe!
	Por quê?
	Porque ela NÃO POSSUI propriedades próprias!
	*/

	sum() {
		return this.reduce((soma, elemento) => soma += elemento);
	}

	sumOnlyNumbers() {

		return this.reduce((soma, elemento) =>
			typeof elemento === "number"
				? soma += elemento
				: soma
		, 0);
	}

	onlyNumbers() {
		return this.filter((elemento) => typeof elemento === "number");
	}
}

const meuArray = new ExtendedArray("Super String", true, 5, 105, 331);

console.log(meuArray.sum());
console.log(meuArray.sumOnlyNumbers());

const apenasNumeros = meuArray.onlyNumbers();
console.log(meuArray.onlyNumbers());
console.log(apenasNumeros);
