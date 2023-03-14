// *for loop simples
// for (let i = 0; i < 5; i++) {
	// console.log("valor: " + i);
// }

//* Array de exemplo (evitar loop convencional com arrays)
// const meuArray = ["primeiro", "segundo", "terceiro"];

// for (let i = 0; i < meuArray.length; i++) {
// 	console.log(meuArray[i]);
// }
// primeiro
// segundo
// terceiro

//* Refazendo o exemplo acima com "while"
// let i = 0;
// ^-- i já precisa existir

// while (i < meuArray.length) {
	// console.log(meuArray[i]);
	// i++;
	// última ação por iteração no foor loop
// }

//* mesmo exemplo com WHILE LOOP

// let x = 0;

// do {
// 	console.log(meuArray[x]);
// 	x++
// } while (x < meuArray.length);

//* For in

// const meuObjeto = {
// 	x: 10,
// 	y: true,
// 	z: "abc"
// }

// for (let propriedade in meuObjeto) {

// 	console.log(propriedade, meuObjeto[propriedade]);
// }

// const meuArray = [true, 10, "abc", null];

// for (let chave in meuArray) {
	// 	console.log(meuArray[chave]);
	// }

//* For of
const meuArray = [true, 10, "abc", null];

for (let elemento of meuArray) {
	console.log(elemento);
}

// Necessário definir um custom Iterable com objetos
const meuObjeto = {
	x: 10,
	y: true,
	z: "abc"
}

for(let propriedade of meuObjeto) {
	console.log(propriedade);
}
// Uncaught TypeError: meuObjeto is not iterable
