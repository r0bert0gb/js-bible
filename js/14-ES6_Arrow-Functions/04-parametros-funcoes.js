// Declaração de função
function soma() {
	console.log(arguments); // Arguments
	console.log(typeof arguments); // object

	console.log(Array.isArray(arguments)); // false

	const argumentosArray = Array.from(arguments);
	console.log(argumentosArray);
}

soma(1, 2, 3, 4, 5);

// Reescrevendo como "Arrow Function"
const soma2 = () => {
	console.log(arguments);
	console.log(typeof arguments);
	const argumentosArray = Array.from(arguments);
	console.log(argumentosArray);
}

soma2(1, 2, 3, 4, 5);
