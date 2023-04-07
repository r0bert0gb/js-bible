//*LINK "reduce" helper method

//*ANCHOR somar números de um array
// const meusNumeros = [5, 10, 3, 15];

// const soma = (arrayDeNumeros) =>
// 	arrayDeNumeros.reduce((acumulador, numero) => {

// 		console.log("Acumulador agora: " + acumulador + " e número é " + numero);
// 		return acumulador + numero;
// 	}, 0);

// console.log(soma(meusNumeros));

//*ANCHOR reduzir um array de objetos para um array de strings
// const pessoas = [
// 	{ nome: "Verônica", idade: 25 },
// 	{ nome: "João", idade: 21 },
// 	{ nome: "Mike", idade: 27 }
// ];

// const nomesPessoas = (arrayPessoas) => arrayPessoas.reduce(
// 	(nomes, pessoa) => {
// 		nomes.push(pessoa.nome);
// 		return nomes;
// 	}, []);

// console.log(nomesPessoas(pessoas));

//*ANCHOR remover duplicatas
const frutas = ["banana", "laranja", "maçã", "maçã", "laranja", "manga"];

const frutasUnicas = (arrayDeFrutas) => arrayDeFrutas.reduce(

	(elementosUnicos, fruta) => {

		if (!elementosUnicos.includes(fruta)) {
			elementosUnicos.push(fruta);
		}

		return elementosUnicos;
	}
, []);

console.log(frutas);
console.log(frutasUnicas(frutas));
