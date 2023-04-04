
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

console.log(divisiveisPor5);
console.log(divisiveisPor5b);
console.log(maioresQue10);
console.log(maioresQue10b);
