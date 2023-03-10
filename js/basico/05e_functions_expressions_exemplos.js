/*
Exemplo 1:

Tentar "declarar" uma expressão função
*/

// function() { }
// Não é possível usar uma expressão função sozinha

/* Exemplo 2:
Assinalar uma function expression para uma variável
*/

// const minhaFuncao = function () { };

// minhaFuncao();

// console.log(minhaFuncao());

// console.log(minhaFuncao);
// saída: conteúdo de "minhaFuncao" -> definição da função

/*
* Exemplo 3:
Func Expressions como argumento de outra função (callback functions)
------------------------------------------------------*/
// Caso mais comum de uso de uma expressão função
// setTimeout(function minhaFuncao() { // funciona, mas não faz mto sentido
// setTimeout(function () {
// 	console.log("Exemplo de mensagem atrasada");
// }, 2000);

/*
* Exemplo 4:
Outra callback function
---------------------------------------------- */

let contador = 1;

setInterval(
	function () {
		console.log("Mensagem a cada 2 segundos: " + contador);

		contador++;
	},
	2000
);
