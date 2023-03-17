
/*
//* ANCHOR -  1: valores IMUTÁVEIS
------------------------------------------------------*/
10

const a = 15;
// IMUTÁVEL

let b = 30;
b = 50; // 50
// também IMUTÁVEL. Numa reatribuição, o valor 30 "some".

let c = "abc";
c[2] = "d";
c // "abc"
// ^-- string também é IMUTÁVEL!

//* tipos primitivos NÃO são mutáveis!

/*
* ANCHOR - 2: valores MUTÁVEIS

Objetos e Arrays (Arrays também são objetos!)
------------------------------------------------------*/
const meuObjeto = {};
meuObjeto.propriedadeA = true; // objeto mutado
console.log(meuObjeto.propriedadeA); // true

meuObjeto.propriedadeB = null;
console.log(meuObjeto.propriedadeB); // null

delete meuObjeto.propA; // true

/*
* desafio
	1: Array vazio numa variável.
	2: adicionar alguns elementos
	3: remover o último elemento do array
*/
const meuArray = [];

meuArray.push(true);
meuArray.push(8);
meuArray.push(null);

console.log(meuArray);

meuArray.pop();
console.log(meuArray);
