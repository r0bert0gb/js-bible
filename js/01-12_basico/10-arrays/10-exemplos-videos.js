/*
* Array vazio
------------------------------------------------------*/

// const meuArray = [];
// console.log(meuArray);

//* //ANCHOR - Adicionando elementos ao Array

// const meuArray = [];

// adicionando por ÍNDICE
// meuArray[0] = "valor do índice 0"
// console.log(meuArray);

// meuArray[1] = "valor do índice 1"
// console.log(meuArray);

// adicionando por PUSH
// meuArray.push("Valor do índice 2");
// console.log(meuArray);

//* //ANCHOR - Modificar elementos

// const meuArray = [3, true, "abc", {}];

// adicionando uma propriedade ao objeto no índice 3

// meuArray[3].novaPropriedade = 10;
// meuArray[3]["novaPropriedade"] = 10;

// console.log(meuArray[3].novaPropriedade);
// console.log(meuArray[3]["novaPropriedade"]);
//! equivalentes

//* //ANCHOR - Deletar elementos do Array

// const meuArray = [true, null, 1, 2, "abc"];

// delete meuArray[2];

// console.log(meuArray);
//! o conteúdo foi deletado, mas o índice ainda existe(índice empty)!

// tentando acessar o índice 2
// console.log(meuArray[2]); // undefined

// usando o POP para remover o último índice do array

// antes
// console.log(meuArray);

// meuArray.pop();

// depois
// console.log(meuArray);
//! índice removido!

//* //ANCHOR - Comparando Arrays

// const meuArray1 = [1, 2, 3];
// const meuArray2 = [1, 2, 3];

// console.log(meuArray1 === meuArray2);
// false: objetos DIFERENTES. Ponteiros DIFERENTES

// const copiaDeMeuArray1 = meuArray1;
// console.log(copiaDeMeuArray1 === meuArray1);
//! true: mesmo ponteiro para o MESMO objeto!

// E se eu precisar comparar DOIS arrays?
// console.log(meuArray1.toString() === meuArray2.toString()); // true
// Funciona APENAS se a ordem dos elementos forem as mesmas!
