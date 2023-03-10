//* OR ||

console.log(true || false); // true
console.log(false || true); // true

console.log("abc" || ""); // abc (false para empty string)
console.log("" || "abc"); // abc

console.log("" || ""); // "empty string" (mesmo avaliando para false)

// desafio
console.log("" || 0 || null || undefined || NaN || false);
// ! retorna false por ser o último operando

/* Falsy values:
	- ""
	- 0
	- null
	- undefined
	- NaN
	- false
*/

let cidade;

const cidadePadrao = "Porto Alegre";

console.log(cidade || cidadePadrao);

cidade = "Caxias";

minhaCidade = cidade || cidadePadrao;

console.log(minhaCidade);

// ---

let outraCidade = cidade || console.log("por favor, informe a cidade.") || cidadePadrao;
// * lembrar que .log retorna undefined e undefined é um falsy value
