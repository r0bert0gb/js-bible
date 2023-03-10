// Intro

// let a = 5;
// let b = 3;

// function soma(a, b) {
// 	let c = a + b;
// 	console.log("Resultado: " + c);
// }

// soma(a, b);

/*
* Funções podem ser:
	- valor de uma variável (^ soma)
	- atribuídas como valor para outra variável
	- anônimas (sem nome)
	- usadas como argumento para outra função
	- valor de uma propriedade num objeto (métodos).
*/

/*
* Sintaxe
------------------------------------------------------*/

// Criando como variável
function minhaFuncao(a, b) {
	let c;
	a = a + 1;
	c = a + b;
	return c;
}

let saida = minhaFuncao("String ", 5);

console.log(saida);

// Declaração VÁLIDA
function myFunction() { }
// ^ undefined
