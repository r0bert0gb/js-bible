/*
* desafio 3
For In loop
Impedir o log de propriedades herdadas
------------------------------------------------------*/
// const meuObjeto = {
// 	nome: "Fulano",
// 	idade: 30,
// 	cidade: "Londres"
// };
// console.log(Object.getPrototypeOf(meuObjeto));
// Object.prototype.pais = "Inglaterra";

// Original
// for (let indice in meuObjeto) {
// 	console.log(indice, meuObjeto[indice]);
// }

// console.log("----------------------------------");

// // Solução (pesquisa permitida. Solução da MDN)
// for (let indice in meuObjeto) {

// 	if (meuObjeto.hasOwnProperty(indice)) {
// 		console.log(meuObjeto[indice]);
// 	}
// }

/*
* desafio 4
reescrever o if/else statement usando "operador ternário"
------------------------------------------------------*/

// original
// function arrayVazio(inputArray) {
// 	if(inputArray.length > 0) {
// 		console.log("Array não está vazio!");
// 	} else {
// 		console.log("Array está vazio!");
// 	}
// }
// resposta
function arrayVazio(inputArray) {
	return inputArray.length > 0
		? console.log("Array não está vazio!")
		: console.log("Array está vazio!");
}

// usando um array literal como parâmetro
console.log(arrayVazio([1, 3]));
console.log(arrayVazio([]));
