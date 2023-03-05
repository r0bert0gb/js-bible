
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

const meuBooleano = true;

console.log(meuBooleano);

// erro: assignment para constante
// meuBooleano = false;

// erro: "Já foi declarada"
/* O log acima não é executado. O erro foi avaliado PRIMEIRO */
// const meuBooleano = false;
