
/**
 * Exemplo 1: declarações de variáveis
*/

// "a", agora, existe no browser (extensão liveserver)

// undefined
// var a;

// console.log(a);

/* Uncaught ReferenceError: b is not defined
	at 02_variaveis.js:10:13 */
// console.log(b);

// undefined
// let c;

// console.log(c);

// erro: constante exige ASSIGNMENT
// const d;

/**
 * 2 - let
*/

// let myNumber = 10;

// console.log(myNumber);

// // declaração
// let minhaString;

// // undefined
// console.log(minhaString);

// // assignment
// minhaString = "Olá da String";

// console.log(minhaString);

// // re-assignment
// minhaString = "Novo valor";

// console.log(minhaString);

/**
 * 3 - "var"
*/

// var myNumber = 10;

// console.log(myNumber);

// // declaração
// var minhaString;

// // undefined
// console.log(minhaString);

// // assignment
// minhaString = "Olá da String";

// console.log(minhaString);

// // re-assignment
// minhaString = "Novo valor";

// console.log(minhaString);

/**
 * 4 - const
*/

// const meuBooleano = true;

// console.log(meuBooleano);

// erro: assignment para constante
// meuBooleano = false;

// erro: "Já foi declarada"
/* O log acima não é executado. O erro foi avaliado PRIMEIRO */
// const meuBooleano = false;

/* Desafio 1:

Declarar variável "meuObjeto" e assinalar o valor {}

Printar a variável no console.

Nota: "meuObjeto" não pode ser reassinalada.
*/
// const meuObjeto = {};

// console.log(meuObjeto);

/* Desafio 2:

declarar:

- variável "x" e assinalar o valor 10.
- "y", assinalar o valor true
- "meuObjeto" com dois pares nome-valor
- "outroObjeto".
	- depois, assinalar um objeto com 3 pares nome-valor
*/

// console.log(meuObjeto);
/*
 {a: 10, b: true, prototype: Object}
*/

// console.log(outroObjeto);
/*
 {
	novoA: 20,
	b: true,
	c: {a: 10, b: true, prototype: Object},
	prototype: Object
 }
*/

// let x = 10;

// const y = true;

// const meuObjeto = {
// 	a: x,
// 	b: y
// };

// console.log(meuObjeto);

// x = 20;

// let outroObjeto;

// outroObjeto = {
// 	novoA: x,
// 	b: y,
// 	c: meuObjeto
// };

// console.log(outroObjeto);
