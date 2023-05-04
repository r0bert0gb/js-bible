/*
* LINK Object Destructuring
-------------------------------------*/

// ANCHOR Ex 1: Declaração e atribuição com OBJ DESTR.

// const meuObjeto = {
// 	a: 10,
// 	b: true
// };

// Como era feitos antes
// const a = meuObjeto.a;
// const b = meuObjeto.b;

//
// const {a: a, b: b} = meuObjeto;

// console.log(a, b);

// ANCHOR Ex2: igual acima, mas usando shorthand prop. names

// const meuObjeto = {
// 	a: 10,
// 	b: true
// };

// const {a, b} = meuObjeto;

// ANCHOR Ex3: Atribuição usando destructuring + shorthand property
// const meuObjeto = {
// 	a: 10,
// 	b: true
// };

// let a, b;

// "()" para que não seja interpretado como BLOCO!
// ({a, b} = meuObjeto);

// console.log(a, b);

// const outroObjeto = {
// 	a: 20,
// 	b: 5
// };

// ({a, b} = outroObjeto);

// console.log(a, b);

// ANCHOR Ex4: Destructuring de valor não-objeto

// const {a, b} = undefined; //erro
// const {a, b} = null; //erro

// prevenção contra atribuição de undefined ou null
// const val = undefined;

// const {a, b} = val || {}; // falsy value

// console.log(a, b); // undefined undefined

// const meuArray = [1, 2];
// const {length, d} = meuArray; // Arrays são objetos!
// console.log(length, d); // 2 undefined

// ANCHOR Ex5: alterar a ordem das propriedades

// const meuObjeto = {
// 	a: 10,
// 	b: true
// };

// const {b, a} = meuObjeto; // Se o nome for igual, a ordem não importa

// console.log(a, b);

// ANCHOR Ex6: Rest operator em destruct de objeto

// const meuObjeto = {
// 	a: 10,
// 	b: true,
// 	c: [],
// 	d: "abc",
// 	e: 20
// };

// Object.prototype.novaPropriedade = 1;

// const {a, d, ...rest} = meuObjeto;

// console.log(a, d, rest);

// ANCHOR Ex7: Destruct com propriedades que não existem
// const meuObjeto = {
// 	a: 10,
// 	b: true,
// };

// const {a, b, c} = meuObjeto;

// console.log(a, b, c); // 10 true undefined

// ANCHOR Ex8: valores default
// const meuObjeto = {
// 	a: 10,
// 	b: true
// };
// const {
// 	a,
// 	b = "valor default",
// 	c = "valor default"
// } = meuObjeto;

// console.log(a, b, c); // 10 true 'valor default'

// ANCHOR Ex9: novo nome de variável e valor default

// const meuObjeto = {
// 	a: 10,
// 	b: true
// };

// const {
// 	a: novoA,
// 	b: novoB,
// 	c: novoC = "valor default"
// } = meuObjeto;

// console.log(a, b); // a is not defined
// console.log(novoA, novoB, novoC);

// ANCHOR Ex10: Destruct com objeto nested
// const meuObjeto = {
// 	a: 1,
// 	b: 2,
// 	objetoNested: {
// 		c: 3,
// 		d: 4
// 	}
// };

// const {a, b, objetoNested: objetoNested} = meuObjeto;

// console.log(a, b, objetoNested);
// const {c: c, d: d} = objetoNested;

// console.log(a, b, c, d);

// fazendo o destructuring numa ÚNICA LINHA
// const {
// 	a: a,
// 	b: b,
// 	objetoNested: {c: c, d: d}
// } = meuObjeto;

// ^-- usando shorthand properties
// conbinando:
/*
	shorthand properties,
	valores default,
	novos nomes de variáveis,
	destructuring de objetos NESTED
*/
const {
	a,
	b,
	objetoNested: {c, d: novoD, e: novoE = 'valor default E'}
} = meuObjeto;

console.log(a, b, c, novoD, novoE);
