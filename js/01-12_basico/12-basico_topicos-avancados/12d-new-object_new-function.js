/*
* desafio
1: Criar um objeto e função usando a "new" keyword

2: Usar o operador "typeof" para verificar seus tipos.

3: garantir que são instâncias de Object e Function com o
uso de "instanceof"
------------------------------------------------------*/

// * Sintaxes EQUIVALENTES!
// 1
const meuObjeto1 = new Object({a: 10, b: true});
const meuObjeto2 = {a: 10, b: true};

const minhaFuncao1 = new Function();
const minhaFuncao2 = function() {};

// 2
console.log(typeof meuObjeto1); // object
console.log(typeof minhaFuncao1); // function

console.log(typeof meuObjeto2); // object
console.log(typeof minhaFuncao2); // function

// 3
console.log(meuObjeto1 instanceof Object); // true
console.log(minhaFuncao1 instanceof Function); // true

console.log(meuObjeto2 instanceof Object); // true
console.log(minhaFuncao2 instanceof Function); // true

console.dir(minhaFuncao2); // [Function: minhaFuncao2]

const minhaFuncao = new Function("a", "console.log(a);");
console.log(minhaFuncao); // [Function: anonymous]
// ☝ pouco legível
