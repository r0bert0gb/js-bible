// LINK Destructuring: Array

//ANCHOR Exemplo 1: declaração e atribuição

// const meuArray = [1, 2, 3];

// Como era antes
// let a, b, c;
// a = meuArray[0];
// b = meuArray[1];
// c = meuArray[2];

// Com Destructuring
// let [a, b, c] = meuArray;

// console.log(a, b, c);

//ANCHOR Exemplo 2: atribuição com destructuring

// const meuArray = [1, 2, 3];

// let a, b, c;
// [a, b, c] = meuArray;
// console.log(a, b, c);

// const outroArray = [4, 5, 6];

// [a, b, c] = outroArray;
// console.log(a, b, c);

// ANCHOR Exemplo 3: mais variáveis do que elementos no array

// const meuArray = ["a", "b"];

// const [a, b, c] = meuArray;

// console.log(a, b, c); // 'a', 'b' undefined

// ANCHOR Exemplo 4: valores default (assim como em funções)

// const meuArray = ["a"];

// const [a, b, c = "c"] = meuArray;

// console.log(a, b, c); // 'a', undefined, 'c'

// ANCHOR Exemplo 5: pular elementos num destructuring de um array

// const meuArray = [1, 2, 3, 4, 5];

// // Quero apenas os elementos 3 e 5
// const [, , a, , b] = meuArray;

// console.log(a, b); // 3 5

// ANCHOR Exemplo 6: operador REST num array destructuring

// const meuArray = [1, 2, 3, 4, 5];

// Mais uma forma onde o operador REST pode ser usado!
// Antes, eu sabia apenas como parâmetro de função

// ! esquerda da atribuição: REST. Direita da atribuição: SPREAD
// const [a, b, ...c] = meuArray;

// console.log(a, b, c); // 1, 2, [3, 4, 5]

// // SPREAD
// const d = [...c];
// console.log(d);

// ANCHOR Exemplo 7: deletar o primeiro elemento

// let meuArray = [1, 2, 3];

// const [, ...outroArray] = meuArray;

// console.log(outroArray);

// ANCHOR Exemplo 8: trocar ordem de elementos

// let x = 5, y = 10;

// [y, x] = [x, y];

// console.log(x, y); // 10 5

// ANCHOR Exemplo 9: destructuring numa função

// const meusPosts = [
// 	["Post 1", 10],
// 	["Post 2", 15]
// ];

// destructuring direto nos parâmetros da função
// meusPosts.forEach(
// 	([title, likes]) => console.log(`${title} possui ${likes} likes.`)
// );

// ANCHOR Exemplo 10: destructuring num array nested

const meuArray = [1, 2, [3, 4]];

const [a, b, [c, d]] = meuArray;

console.log(a, b, c, d);
