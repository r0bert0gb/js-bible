/*
* ANCHOR - Tarefa 1: escopos de função
------------------------------------------------------*/

// 1 - Qual será a saída na linha 19?
	// undefined, 2, 5, 15

// 2 - O que acontece se tirarmos o "let" na linha 15?
	// atribuição na d global e o log de minhaFn2 será:
	// undefined, 2, 5, 10

// const b = 2;
// let d = 15;

// function minhaFn1(a) {
	// let b;
	// let d = 10;
	// // d = 10;
	// minhaFn2(b);
// }

// function minhaFn2(a) {
	// let c = 5;

	// console.log(a, b, c, d);
	/*
		a -> undefined
		b -> 2 (global)
		c -> 5 (escopo da função)
		d -> 15 (global)
	*/
// }

// minhaFn1();

/*
* ANCHOR - Tarefa 2: strict mode
resolver tornando a função em função pura

resposta: "let a = 2;" dentro da função
------------------------------------------------------*/
// "use strict";
// sem o strict mode, seria criada uma variável "a" GLOBAL
// function minhaFuncao() {
	// let a = 2;
	// // a = 2;
	// return a;
// }

// minhaFuncao();

/*
* ANCHOR - Tarefa 3: callback function
O que será logado?
------------------------------------------------------*/
setTimeout(function minhaFuncao() {
	console.log("Olá da função minhaFuncao");
}, 2000);
/* ^-- será executado mesmo com o erro de referência abaixo! */

minhaFuncao(); // Uncaught ReferenceError: minhaFuncao is not defined
/* minhaFuncao é do escopo da função, NÃO global */
