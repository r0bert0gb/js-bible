const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

const arrayCheck = (inputArray) => {

	// 1
	if (inputArray.some((elemento) => typeof elemento !== "number")) {
		return "nem todos são números";
	}

	// 2
	if (inputArray.every((elemento, indice, array) =>
		indice > 0
			? elemento >= array[indice - 1]
			: true
		)
	) {
		return "ordem crescente";
	}

	// 3
	if (inputArray.every((elemento, indice, array) =>
		indice > 0
			? elemento <= array[indice - 1]
			: true
		)
	) {
		return "ordem decrescente";
	}

	// 4
	return "Não está ordenado."

};

console.log(arrayCheck(a)); // nem todos são números
console.log(arrayCheck(b)); // ordem crescente
console.log(arrayCheck(c)); // ordem decrescente
console.log(arrayCheck(d)); // desordenado
