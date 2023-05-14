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
		return this.reduce((sum, elemento) => sum + elemento);
		// Retorno implícito do reduce
	}

	onlyNumbers() {
		return this.filter((elemento) => typeof elemento === "number");
	}
}

// const primeiraInstancia = new ExtendedArray(5, 1, "string", 1, 5, 100, true, 2);

// const meusNumeros = primeiraInstancia.onlyNumbers();

// console.log(primeiraInstancia.sum());
// console.log(meusNumeros);

// primeiraInstancia.push("abc");

// console.log(primeiraInstancia instanceof ExtendedArray); // true
// console.log(primeiraInstancia instanceof Array); // true
// console.log(primeiraInstancia instanceof Object); // true

const segundaInstancia = new ExtendedArray(true, "", null, 2, 10, false, "abc");

console.log(segundaInstancia.onlyNumbers()); // [2, 10] ainda instância de ExtendedArray

console.log(segundaInstancia.sum());

const arrayFiltrado = segundaInstancia.onlyNumbers();

console.log(arrayFiltrado);

