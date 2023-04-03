
const meusNumeros = [10, 45, 56, 100, 5];

// * Filter para divisíveis por 5
const divisiveis5 = meusNumeros.filter(
	(numero) => numero % 5 === 0 ? true : false
);

// retorno implícito
const divisiveis5b = meusNumeros.filter(
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

console.log(divisiveis5);
console.log(divisiveis5b);
console.log(maioresQue10);
console.log(maioresQue10b);
