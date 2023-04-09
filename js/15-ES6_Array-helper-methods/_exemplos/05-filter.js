
const meusNumeros = [10, 45, 56, 100, 5];

// * Filter para divisíveis por 5
const divisiveisPor5 = meusNumeros.filter(
	(numero) => numero % 5 === 0 ? true : false
);

// retorno implícito
const divisiveisPor5b = meusNumeros.filter(
	(numero) => numero % 5 === 0
);

//--------------------------------

// * Maiores que 10
const maioresQue10 = meusNumeros.filter(
	(numero) => numero > 10 ? true : false
);

// retorno implícito
const maioresQue10b = meusNumeros.filter(
	(numero) => numero > 10
);

console.log("Array inicial: " + meusNumeros);
console.log("Divisíveis por 5: " + divisiveisPor5);
console.log("Divisíveis por 5b: " + divisiveisPor5b);
console.log("Maiores que 10: " + maioresQue10);
console.log("Maiores que 10b: " + maioresQue10b);
