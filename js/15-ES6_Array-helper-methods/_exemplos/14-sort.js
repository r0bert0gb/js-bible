// * Sort

const numeros = [10, 5, 79, 27, 50, 14, 27, 5, 11];

//* Ordem Crescente
// console.log(numeros.sort((a, b) => a - b));

//* Ordem Decrescente
// console.log(numeros.sort((a, b) => b - a));

//* Quantidade de pares comparados

let qtdeComparacoes = 0;

console.log(numeros.sort((a, b) => {

	console.log(a, b);

	qtdeComparacoes++;

	return a - b;
}));

console.log(qtdeComparacoes + " comparações");
