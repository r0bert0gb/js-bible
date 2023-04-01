//* números e números ao quadrado
const meusNumeros = [3, 5, 7, 2];

//* simulando o comportamento do map
// const meusNumerosQuadrados = [];
// for(let i = 0; i < meusNumeros.length; i++) {
// 	meusNumerosQuadrados.push(meusNumeros[i] * meusNumeros[i]);
// }

//* Uso do map (maneira 1)
// const meusNumerosQuadrados = meusNumeros.map((elemento) => elemento * elemento);

//* Uso do map com função externa (outra maneira)
// const numerosQuadrados = (elemento) => elemento * elemento;
// const meusNumerosQuadrados = meusNumeros.map(numerosQuadrados);

//* Digamos que eu precise, também, informar o índice dos valores.
// const numerosQuadrados = (elemento, indice) => {
// 	console.log("Elemento no índice "+ indice +" é "+ elemento);
// 	return elemento * elemento;
// };

//* Fazendo a potenciação usando o objeto Math
// const numerosQuadrados = (elemento) => Math.pow(elemento, 2);
// const meusNumerosQuadrados = meusNumeros.map(numerosQuadrados);

//* Usando direto como CALLBACK FUNCTION
// const meusNumerosQuadrados = meusNumeros.map(Math.pow(elemento, 2));

/*
* O que acontece aqui?
Lembrar que map recebe 3 argumentos: valor, índice e array */
const meusNumerosQuadrados2 = meusNumeros.map(Math.pow);

console.log(meusNumeros);
console.log(meusNumerosQuadrados2);
