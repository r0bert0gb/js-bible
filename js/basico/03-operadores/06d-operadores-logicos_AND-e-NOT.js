function separador() {
	console.log("-------------- ------- --------------");
}

//* Operador AND &&

// console.log(true && false);

// desafio: O que vai retornar?

/*
1 - string não vazia -> true
10 - Número diferente de 0 -> true
false - false
"" - string vazia -> false
"abcd" - string não vazia -> true
*/

// O primeiro valor "FALSY" é impresso
console.log("abc" && 10 && false && "" && "abcd"); // false
console.log("abc" && 10 && NaN && "" && "abcd"); // NaN
console.log("abc" && 10 && "" && "abcd"); // ""

// Quando todos os valore são truthy, o último valor Truthy é impresso
console.log("abc" && 10 && true && 123 && "string"); // "string"
// ! TODO valor não-falsy é truthy!

separador();

/*
* Operador NOT (!)
------------------------------------------------------*/

// CONVERTE um truthy para falsy e vice-versa
console.log(!"abc"); // false
console.log(!""); // true
console.log(!0); // true

let minhaVariavel; // undefined
minhaVariavel = undefined;
console.log(!minhaVariavel);

// Checagem rápida de valor truthy/falsy
minhaVariavel = null;
console.log("Checagem rápida \"null\": " + !!minhaVariavel); // false

minhaVariavel = 10;
console.log("Checagem rápida \"10\": " + !!minhaVariavel); // false

separador();

/*
* Quick Recap:

Num console.log:
	- OR: primeiro valor "truthy" (onde a execução termina)
	- AND: primeiro valor "falsy" (onde a execucao termina)
		- Se todos forem truthy, o último truthy
*/
