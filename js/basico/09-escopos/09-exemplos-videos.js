/*
* Exemplo 1: global scope
------------------------------------------------------*/

// "strict";

// var a = 10;
// console.log(a); // 10
// console.log(window.a); // 10
//! erro no Nodejs. Acessível no browser

//* IMPORTANTE
/* variáveis declaradas com VAR são globais.
Ela se torna uma propriedade do objeto global:
- WINDOW(browser)
- GLOBAL(nodejs) */

//* let e const
/* Acessíveis por
.log(b) e .log(c)

undefined se .log(window.b) / .log(window.c)

Elas não são mais mostradas como propriedades de "window", mas ainda
são globais!
*/

// let b = true;
// console.log(b); // true
// console.log(window.b); // undefined

// const c = "abc";
// console.log(c); // "abc"
// console.log(window.c); // undefined

// Também com escopo global. Variável de escopo global.
// acessíveis por "window" do mesmo jeito que a variável "a"
// function minhaFuncao(a){
// 	console.log(a);
// 	console.log(b);
// }

// minhaFuncao();

// console.log(minhaFuncao);
// ƒ minhaFuncao(a){
// 	console.log(a);
// }

// console.log(window.minhaFuncao);
// ƒ minhaFuncao(a){
// 	console.log(a);
// }

/*
* Exemplo 2: function scope
------------------------------------------------------*/

let e;

function minhaFuncao(a, b){
	const c = true;

	console.log(c); // true
	// pelo scope chain, c já está no escopo da função

	// console.log(d);
	// Uncaught ReferenceError: d is not defined

	console.log(e); // undefined

	// console.log(a + ", " + b); // (string)
	console.log(a, b); // número
	// valor dos parâmetros a e b
}

minhaFuncao();

minhaFuncao(2, 3);

//* Parâmetros também possuem "function scope".
// console.log(c); // não há "c" no escopo global
// Uncaught ReferenceError: c is not defined
//* ☝ a mesma coisa para as variáveis a e b
