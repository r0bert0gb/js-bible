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
* ANCHOR - Do... While.. Loop
------------------------------------------------------*/
// let i = 0;

// do {
// 	console.log(i);
// 	i++;
// } while (i <= 10);

/*
* ANCHOR - For In com OBJETOS
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
* ANCHOR - For In com propriedades herdadas de Object
------------------------------------------------------*/

const meuObjeto = {
	a: "abc",
	b: true,
	c: null,
	d: 150
};

// propriedade de prototype.
Object.prototype.globalProp = "Propriedade Herdada";

for (let propriedade in meuObjeto) {
	console.log(propriedade, meuObjeto[propriedade]);
}
