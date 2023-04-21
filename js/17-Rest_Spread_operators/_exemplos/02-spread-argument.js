// LINK Spread Operator

//ANCHOR Exemplo 1: function call
// const minhaSaudacao = (nome, cidade, idade) => {

// 	return `Olá de ${nome} que tem ${idade} anos e vive em ${cidade}`;
// };

// const pessoa = ["Fulano", "Porto Alegre", 50];
// console.log(minhaSaudacao(...pessoa));

// const outraPessoa = ["Nova York", 65];
// console.log(minhaSaudacao("Tony", ...outraPessoa));

//ANCHOR Exemplo 2: concatenar arrays
// Usando método "concat"
// const array1 = [1, 2, 3];
// const array2 = [4, 5];

// const array3 = array1.concat(array2);

// const array4 = array1.concat(array2).concat(6);

// console.log(array3);
// console.log(array4);

// Usando "spread operator"
// const array5 = [...array1, ...array2, "último"];
// console.log(array5);

//ANCHOR Exemplo 3: criar data
// const dataInfo = [2025, 5, 10];

// const data = new Date(...dataInfo);

// console.log(data);

//ANCHOR Exemplo 4: copiar valores de um array
// const meuArray = ["a", 5, [], true];

// const novoArray = [...meuArray];
// ^ apenas os valores são copiados (outro PONTEIRO)
// ! Shallow Copy

// novoArray.push(10);
// console.log(novoArray); // ["a", 5, [], true, 10];
// console.log(meuArray); // ["a", 5, [], true];

// novoArray[2].push(7);
// console.log(novoArray); // ["a", 5, [7], true, 10];
// console.log(meuArray); // ["a", 5, [7], true];

//ANCHOR Exemplo 5: copiar objeto
// const meuObjeto = { valor1: 10, valor2: "c", valor3: [1, 2] };

// const objetoCopiado = {...meuObjeto};

// console.log(meuObjeto); // { valor1: 10, valor2: 'c', valor3: [1, 2] }
// console.log(objetoCopiado); // { valor1: 10, valor2: 'c', valor3: [1, 2] }

// objetoCopiado.valor1 = 20;
// objetoCopiado.valor3.pop();

// console.log(meuObjeto); // { valor1: 10, valor2: 'c', valor3: [1] }
// console.log(objetoCopiado); // { valor1: 20, valor2: 'c', valor3: [1] }
// ! Shallow Copy


//ANCHOR Exemplo 6: spread de strings

const minhaString = "Olá, mundo!";

const arrayCaracteres = [...minhaString];

console.log(arrayCaracteres);

// comportamento igual usando o método split do PROTOTYPE de String
const arrayCaracteres2 = minhaString.split("");

console.log(arrayCaracteres2);









