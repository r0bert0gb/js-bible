//

function separador() {
	console.log("----- Separador -----");
}

// let minhaString1, minhaString2;

// minhaString1 = "abc";
// minhaString2 = "bcd";

// console.log(minhaString1 > minhaString2);
// separador();

// let minhaString3 = "Bcd";

// console.log(minhaString1 > minhaString3);
// separador();

// let minhaString = "0";
// let meuNumero = 0;
// let meuBooleano = false;

// console.log(minhaString == meuNumero);
// true

// console.log(meuNumero == meuBooleano);
// true (false é "coagido" a ser número)

// console.log(minhaString == meuBooleano);
// true ("0" "coagido" a ser número, false "coagido" a ser número)

let minhaString = "0";
let meuNumero = 0;
let meuBooleano = false;

// Forçando igualdade de tipo
console.log(minhaString === meuNumero);

console.log(meuNumero === meuBooleano);

console.log(minhaString === meuBooleano);
separador();

console.log(null === undefined); // <- false: tipos diferentes
console.log(null == undefined); // <- true: ambos avaliam para zero

// desafio
console.log();

// ! associatividade esquerda. Vários operadores são lidos da esquerda para a direita
console.log(0 === "" === null === undefined === false);
// ☝ true
/*
1: 0 === "": false

2: false === null: false

3: false === undefined: false

4: false === false: true
*/
