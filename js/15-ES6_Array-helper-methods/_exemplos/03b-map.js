const meusNumeros = [3, 5, 7];
const meusNumerosQuadrados1 = [];


for (let i = 0; i < meusNumeros.length; i++) {

	meusNumerosQuadrados1.push(Math.pow(meusNumeros[i], 2));
}
// console.log(meusNumerosQuadrados1);

//--------------------------------

//* Com function expression
// const meusNumerosQuadrados2 = meusNumeros.map(function(elemento, indice) {

// 	console.log("Índice "+ indice +": "+ elemento);
// 	return Math.pow(elemento, 2);
// });

// * Com Arrow Function
// const meusNumerosQuadrados2 = meusNumeros.map(
// 	(elemento) => Math.pow(elemento, 2)
// );

// * Recriando o comportamento da Função Expressão
// const meusNumerosQuadrados2 = meusNumeros.map((elemento, indice) => {

// 	console.log("Índice "+ indice +": "+ elemento);
// 	return Math.pow(elemento, 2);
// });

// * Arrow Function Externa
const geraQuadrados = (elemento) => Math.pow(elemento, 2);

const meusNumerosQuadrados2 = meusNumeros.map(geraQuadrados);

console.log(meusNumerosQuadrados2);
