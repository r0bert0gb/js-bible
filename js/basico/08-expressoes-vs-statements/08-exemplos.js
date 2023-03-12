/*
* Expressões
------------------------------------------------------*/
// 10
// "abc"
// 5 + 3
// ☝ expressões
//! Não aparece retorno no Nodejs, mas aparece no browser


// * Function Expression
// function(a) {
// 	console.log(a);
// }
// ☝ erro! Não permitido uma Function Expression usada em standalone

// Para evitar o erro acima:
// (function (a) {
// 	console.log();
// })
//! Agora, o erro é outro!
// "3 não é uma função".
// Resolvido tornando a expressão "5 + 3" em expression statement

// Outra forma: alterando a localização do ";" (logicamente, não muda nada)
// ; (function (a) {
// 	console.log(a);
// })

// outra:

// ; (function () {
// console.log("Olá da IIFE");
// })()
// ☝ "()" chamar a função(tb expressão)
//* ^-- Imidiately Invoked Function Expression

// let a;
// statement

// a = 10
// expression

// 5 = true
//! Erro de sintaxe:
// PRECISA ser uma variável ou propriedade de objeto.
// O código não chega a ser executado!

// 4 <= 10 <= 20 || 5
// 4 <= 10: true
// true <= 20: true
// true passa a ser 1
// true || 5 -> true
// retorno do primeiro valor TRUTHY

/*
* Statements
------------------------------------------------------*/
// let a;

// a = 3

// function minhaFuncao(arg1) {
// 	return arg1 + 1;
// statement
// }

// minhaFuncao(a)

// console.log("Teste");

//* Provando que return é uma statement
// Passar como argumento de função
// function outraFuncao(return 5) {
// 	console.log("Não serei executada!");
// }
// ☝ de novo: o código inteiro NÃO é executado

// if statement
// if (true) {
// 	console.log("Olá da \"if\" statement");
// }

//* Provando que if é uma statement
// console.log(
// 	if (true) {
// 	console.log("Olá da \"if\" statement");
// });

/*
* expressions statements
------------------------------------------------------*/
console.log("Teste");
// ";" torna a expressão numa "expression statement".
// "Teste": "string expression"

// console.log(console.log("Teste"););
// ☝ não permitido uso de statement como argumento

console.log(console.log("Teste"));
// Válido!
// log externo: expression statement
// log interno: expression
// saída: print da interna e undefined do retorno da interna

let a; // statement

a = 5; // expression statement

true // expression
true; // expression statement
