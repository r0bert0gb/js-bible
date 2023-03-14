/*
* Desafio 1:
adcionar elementos no início do Array

1º: string
2º: 200

saída deve ser:
100, "Hello", true, null

------------------------------------------------------*/
// const meuArray = [true, null];

// console.log(meuArray);

// meuArray.unshift("Hello");
// meuArray.unshift(100);

// console.log(meuArray);

/*
* Desafio 2:

Adicionar um elemento "abc" no índice 10.
1º: logar e explicar a saída
	11 elementos: do índice 2 até o 9 são "ÍNDICES EMPTY"
	! o porquê de ser melhor adicionar elementos usando "PUSH"!

2º: qual a quantidade de índices no array?
	11

------------------------------------------------------*/
// const meuArray = [1, 2];

// meuArray[10] = "abc";

// console.log(meuArray);
// (11) [1, 2, empty × 8, 'abc']

/*
* Desafio 3:
Array de objetos com 3 objetos.
Cada objeto representa um carro e cada carro possui 2 propriedades.
- marca e preço

Adicionar mais um objeto ao array e logar
------------------------------------------------------*/

const arrayDeCarros = [
	{
		marcaCarro: "Volkswagen",
		precoCarro: 10000
	},
	{
		marcaCarro: "Fiat",
		precoCarro: 15000
	},
	{
		marcaCarro: "BMW",
		precoCarro: 30000
	}
];

console.log(arrayDeCarros);

// adicionando direto no PUSH
// arrayDeCarros.push(
// 	{
// 		marcaCarro: "Ford",
// 		precoCarro: 16000
// 	}
// );

// Passando pelo PUSH o objeto já criado.
const novoCarro = {
	marcaCarro: "Ford",
	precoCarro: 16000
};
arrayDeCarros.push(novoCarro);

console.log(arrayDeCarros);
