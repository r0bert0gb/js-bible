/*
	Function Expressions são SEMPRE anônimas!
	Lembra um pouco "objetos anônimos" no Java
*/

// Assinalando uma expressão função a uma variável
const minhaFuncao = function (a, b) {
	let c;
	a = a + 1;
	c = a + b;

	return c;
}

/*
	minhaFunção NÃO é Function Expression
	É uma variável que carrega uma Expressão Função como valor.
*/
minhaFuncao(1, 2);
// ^-- não acontece nada (esperado)


console.log(minhaFuncao(1, 2));

// Function Expression como argumento de função
setTimeout(
	function () {
		console.log("Mensagem atrasada");
	},
	2000
);
// Funções como argumentos de função são AKA callback functions
