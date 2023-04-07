// 1
// const meusNumeros = [1, 3, 5, 7];

// const somar = (arrayNumeros) => arrayNumeros.reduce(

// 	(resultado, numero) => resultado + numero
// 	, 0);

// console.log(somar(meusNumeros));
// console.log(somar(["abc", "def", "ghi"]));
// console.log(somar(["abc", 5, true]));

//--------------------------------

// 2
// const pessoas = [
// 	{ nome: "Verônica", idade: 25 },
// 	{ nome: "João", idade: 21 },
// 	{ nome: "Mike", idade: 27 }
// ];

// const pegarNomes = (arrayPessoas) => arrayPessoas.reduce(

// 	(nomes, pessoa) => {
// 		nomes.push(pessoa.nome);
// 		return nomes;
// 	}, []
// );

// console.log(pegarNomes(pessoas)); // ['Verônica','João','Mike']

//--------------------------------

// 3
const frutas = ["banana", "laranja", "maçã", "maçã", "laranja", "manga"];

const removerDuplicatas = (arrayFrutas) => arrayFrutas.reduce(
	(frutasUnicas, fruta) => {

		if (!frutasUnicas.includes(fruta)) {
			frutasUnicas.push(fruta);
		}
		return frutasUnicas;
	}, []
);

console.log(removerDuplicatas(frutas));
