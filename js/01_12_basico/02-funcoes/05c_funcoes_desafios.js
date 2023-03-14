/*
* Desafio 1:
Criar função com que multiplica 3 parâmetros.
Printar o resultado.

Criar variável e assinalar o resultado da função

Não retorna nada (sem "return").
*/

// function mult3(a, b, c) {
// console.log(a * b * c);

// 	const resultado = a * b * c;
// 	console.log(resultado);
// }

// let variavel = mult3(5, 5, 5);

// console.log(variavel);

/*
* Desafio 2:
criar função "concatenarStrings"

Dois parâmetros e retorna o resultado
*/

// function concatStrings(string1, string2) {
// 	return string1 + " " + string2;
// inserir um caractere espaço para forçar como string.
// }

// concatStrings(1, 2);

// console.log(concatStrings("Primeira string", "Segunda string"));
// console.log(concatStrings(5, 3));

/*
* Desafio 3:

- duas funções.
	- funcaoExterna
		2 parâmetros
- Criar função funcaoInterna dentro de funcaoExterna.
	- funcaoInterna
		1 parâmetro
		retorna o quadrado do parâmetro

	Função externa: somar os dois parâmetros
	Chamar a função interna e usar a saída como argumento da Interna
	Printar o resultado da funcaoInterna
*/
function funcaoExterna(v1, v2) {

	function funcaoInterna(valor) {
		return valor * valor;
	}

	// const soma = v1 + v2;
	// const resultado = funcaoInterna(soma);
	// const resultado = funcaoInterna(v1 + v2);
	// * ^-- melhor legibilidade

	console.log(funcaoInterna(v1 + v2));
}

funcaoExterna(5, 3);
