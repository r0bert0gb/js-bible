//* Operadores typeof e instanceof

/*
* typeof
------------------------------------------------------*/

// typeof 10;

// console.log(typeof 10); // number
// console.log(typeof true); // boolean
// console.log(typeof "abc"); // string
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

/*
console.log(typeof null); // object
Por que "object"?

Estranho por "null" ser um tipo primitivo.
Relacionado com a natureza de "Object".
"Object" pode conter ponteiro para "lugar nenhum"
*/

/*
* Desafio
Usar typeof com Objeto e Array e interpretar o resultado

Ambos são "object"
*/

const meuObjeto = {
	primeiro: "teste1",
	segundo: "teste2"
};
console.log(typeof meuObjeto); // object
console.log(typeof meuObjeto.primeiro); // string

const meuArray = [true, 10, "abc"];
console.log(typeof meuArray); // object
console.log(typeof meuArray[0]); // boolean

//* Como tirar proveito disso?

const a = 10;

if (typeof a === "number") {
	console.log("É um número!");
	// alert("é um número!");
	// ^-- não funciona no Nodejs
}

//* Como diferenciar um objeto de um array e null? usando prototypes!
// if (typeof b === "object") {...}
//! ^-- objeto, array e null retornam true.

/*
* instanceof
------------------------------------------------------*/

// Diferenciando Arrays de Objetos (ainda falta null)
const c = [];
c instanceof Array; // true
c instanceof Object; // true

const d = {};
d instanceof Array; // false
d instanceof Object; // true

//* Desafio
/* Usar operador "instanceof" com String, Boolean e Null e tentar interpretar
os resultados */

const minhaString = "abc";
const meuBolleano = false;
const meuNulo = null;


minhaString instanceof String; // false
meuBolleano instanceof Boolean; // false
// meuNulo instanceof Null; // Erro de referência. Interpretou como nome de variável
/*
! Por que false?
minha resposta: porque não é um objeto, é tipo primitivo.
	"abc" não é um objeto de String.
	É pelo MESMO motivo que "minhaString instanceof Object;" retorna false
*/

//* Exemplo de uso de "instanceof"

const myArray = [1, 2];

if (myArray instanceof Array) {

	console.log("myArray é instância de Array!");

} else {

	console.log("myArray NÃO é instância de Array!");

}
