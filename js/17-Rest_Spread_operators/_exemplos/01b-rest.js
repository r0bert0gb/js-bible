//
const somarNumeros = (...numeros)  =>
	numeros
		.filter(numero => typeof numero === "number")
		.reduce((soma, numero) => soma + numero, 0);


console.log(somarNumeros("abc", 2, 3, 4));
