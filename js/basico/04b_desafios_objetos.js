// /* Exemplo 1: criar objeto e modificar suas propriedades
// ------------------------------------------------------*/

// let meuObjeto;

// meuObjeto = {
// 	a: 10,
// 	b: "abc"
// };

// console.log(meuObjeto);

// // alterando o valor de propriedades com "dot notation"
// meuObjeto.a = 15;
// console.log(meuObjeto);

// // adicionando uma propriedade ao objeto
// meuObjeto.c = true;
// console.log(meuObjeto);

// // deletando "b"
// delete meuObjeto.b;
// console.log(meuObjeto);

/*
* Desafio 1:
- Criar a variável "meuPost"
- Valor inicial: objeto vazio
- adicionar propriedade:
	- "tituloPost"
		- "Objeto é do tipo referência"
	- "likesPost"
		- valor inicial 0
	- "share"
		- false
- aumentar o valor de likesPost em um
- deletar propriedade "share"
*/
// let meuPost = {};

// meuPost.tituloPost = "Objeto é do tipo referência";

// meuPost.likesPost = 0;

// meuPost.share = false;
// console.log(meuPost);

// // meuPost.likesPost += meuPost.likesPost + 1; // funciona
// // meuPost.likesPost++; // funciona
// meuPost.likesPost += 1;
// console.log(meuPost);

// delete meuPost.share;
// console.log(meuPost);

/* Exemplo 2: usar "const" para declaração de objeto
------------------------------------------------------*/

const meuObjeto = {};

// tentando adicionar uma propriedade à um objeto de constante
meuObjeto.a = true;

console.log(meuObjeto);

/*
Não é possível "reassign" na variável, mas é possível
mas é possível mudar o próprio valor se ele for "mutável".
! Objetos SÃO MUTÁVEIS!
*/
