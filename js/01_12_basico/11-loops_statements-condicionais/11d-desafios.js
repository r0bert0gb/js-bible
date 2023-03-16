/*
* desafio 1
loop por propriedades de um objeto.
Se o nome da propriedade for "key1" ou "key3", logar
o valor da propriedade
------------------------------------------------------*/
// const meuObjeto = {
// 	key1: true,
// 	key5: 10,
// 	key3: "abc" ,
// 	key4: null,
// 	key10: NaN
// };

// for (let indice in meuObjeto) {
// 	if (indice === "key1" || indice === "key3") {

// 		console.log(meuObjeto[indice]);
// 	}
// }

/*
* desafio 2
Gerar número de 4 dígitos randômicos (range 1000 - 9999)
Garantir que ele não esteja no Array.
Se casar com um do array, gerar outro número de 4 dígitos
Se não casar, ele é único. Adicionar ao array.
------------------------------------------------------*/
const meusNumeros = [
	9,
	7,
	8,
	3,
	5,
	2
];
let novoNumeroRandomico;

//* minha solução

// console.log(novoNumeroRandomico);

// numeroTentativas = 0;

// do {
// 	let numeroIgual = false;

// 	novoNumeroRandomico = Math.floor(Math.random() * (9999 - 1000)) + 1000;
//! Math é um objeto "builtin" no JS

// 	for(indice in meusNumeros) {
// 		if (novoNumeroRandomico === meusNumeros[indice]) {
// 			numeroIgual = true;
// 		}

// 	}
// 	if(!numeroIgual) {
// 		meusNumeros.push(novoNumeroRandomico);
// 	}

// 	numeroTentativas++;
// } while (meusNumeros.length < 7);

// console.log("Tentativas: " + numeroTentativas);
// console.log(meusNumeros);

//* solução dele
const MINIMO = 1;
const MAXIMO = 9;

let numerosRejeitados = [];


function getNumeroRandomicoInteiro(minimo, maximo) {
	return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function isNaoUnico(novoNumeroRandomico) {
	for (numero of meusNumeros) {
		if (numero === novoNumeroRandomico) {

			numerosRejeitados.push(novoNumeroRandomico);

			return true;
		}
		// return false;
		// ^-- sem essa linha, retorna — implicitamente — "undefined".
		//* "undefined" é um "falsy value"
	}
}

let numeroTentativas = 0;

do {
	novoNumeroRandomico = getNumeroRandomicoInteiro(MINIMO, MAXIMO);

	numeroTentativas++;
} while (isNaoUnico(novoNumeroRandomico));

meusNumeros.push(novoNumeroRandomico);

console.log(meusNumeros);
console.log("Número de tentativas: " + numeroTentativas);
console.log("Números rejeitados: "
	+ numerosRejeitados.length === 0
		? "nenhum"
		: numerosRejeitados
);
