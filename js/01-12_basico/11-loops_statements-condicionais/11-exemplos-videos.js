/*
* ANCHOR - Exemplo 2 - for loop clássico com arrays
------------------------------------------------------*/
// const meuArray2 = [0, true, "abc", null];

// for (let i = 0; i < meuArray2.length; i++) {
// 	console.log(meuArray2[i]);
// }
// //! ☝ dot notation tenta acessar uma propriedade de NOME i
// //* Não usar FOR LOOPS com Arrays. Má Prática

/*
* ANCHOR - Exemplo 3 - While
------------------------------------------------------*/
// let i = 0;

// while (i > -5) {
// 	console.log("Valor de \"i\": " + i);
// 	i--;
// }

/*
* ANCHOR - Exemplo 4 - Do... While.. Loop
------------------------------------------------------*/
// let i = 0;

// do {
// 	console.log(i);
// 	i++;
// } while (i <= 10);

/*
* ANCHOR - Exemplo 5 - For In com OBJETOS
------------------------------------------------------*/
// const meuObjeto = {
// 	a: "abc",
// 	b: true,
// 	c: null,
// 	d: 150
// };

// for (let propriedade in meuObjeto) {
// 	console.log(propriedade, meuObjeto[propriedade]);
// }

/*
* ANCHOR - Exemplo 6 - For In com propriedades herdadas de Object
------------------------------------------------------*/

// const meuObjeto = {
// 	a: "abc",
// 	b: true,
// 	c: null,
// 	d: 150
// };

// propriedade de prototype.
// Object.prototype.globalProp = "Propriedade Herdada";
//! ☝ Todo os objetos herdam

// for (let propriedade in meuObjeto) {
// 	console.log(propriedade, meuObjeto[propriedade]);
// }
/* Se não quisermos iterar sobre propriedades herdadas: próximos vídeos */

/*
* ANCHOR - Exemplo 7: For In loops com Arrays
------------------------------------------------------*/

//* adicionar propriedade ao prototype
// Array.prototype.propriedadeGlobal = "Propriedade Global do prototype de Array";

// const meuArray = [true, {}, {}, 10];

// console.log(meuArray);

// for (let indice in meuArray){
// 	console.log(indice, meuArray[indice]);
// }

/*
* ANCHOR - Exemplo 8: For Of com Arrays
------------------------------------------------------*/
// const arrayPessoas = [
// 	{
// 		nome: "José",
// 		idade: 25
// 	},
// 	{
// 		nome: "Mike",
// 		idade: 30
// 	},
// 	{
// 		nome: "Alice",
// 		idade: 27
// 	}
// ];

// for (let pessoa of arrayPessoas) {
	// console.log(pessoa);

	// console.log(pessoa.nome + " tem " + pessoa.idade + " anos");
// }
