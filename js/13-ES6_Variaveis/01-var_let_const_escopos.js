// Em JS, existem 3 maneiras de declarar uma variável
/*
var
let
const
*/

// Escopo
// var a = 10; // escopo global
//* Disponível como propriedade de "window".

// function funcao() {
// 	var b = true;
// 	console.log(b);
// }

// funcao();

// console.log(b);

//* Redeclaração
// var d = false;
// var d = true;

// CUIDADO: dentro de uma função:
// function funcao() {
	// var d = 5;
	// escopo de "d" é APENAS da função!

// 	console.log("\"d\" interno: " + d);
// 	console.log("\"d\" externo: " + window.d);
// }

// funcao();

//* Hoisting (içamento / levantamento)

// variável sem declaração:
// e = 5;

// var e;

/*
* Let
-------------------------------------*/
// let a = 10;
// var b = true;
// console.log(a);

// function funcao() {
// 	let b = true;
// 	console.log(b);
// }

// funcao();

// Até aqui, está igual a var

// {
	// let b1 = 1;
	// existe apenas dentro do bloco
// }
// console.log(b1);

// for(let j = 0; j < 5; j++) {
// 	console.log(j);
// }

//* Redeclaração
// let d = false;
// let d = true; // Erro: Identifier 'd' has already been declared

// function funcao() {
// 	let d = 5;
// 	// escopo de "d" é APENAS da função!

// 	console.log("\"d\" interno: " + d);
// 	console.log("\"d\" externo: " + window.d); // undefined
// }

//* Hoisting
// e = 5;
// let e;

// function funcao4() {
	// console.log(f);
// 	let f;

// 	f = 10;
// }
// funcao4();

/*
* Const
-------------------------------------*/

// const minhaConstante = [];

// minhaConstante.push("novoElemento");
// minhaConstante.push("outroElemento");

// const outraConstante = {};
// console.log(outraConstante);

// outraConstante.a = 10;
// console.log(outraConstante);

// outraConstante.b = 30;
// console.log(outraConstante);

// var a = 10;
// let b = 30;
// const c = 50;

// function funcaoTeste() {
// 	hoisting = 10;
// }

// console.log(hoisting);

var x = 5; // Initialize x
var y = 7; // Initialize y

console.log(x + y);
