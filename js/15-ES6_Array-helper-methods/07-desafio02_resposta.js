const posts = [
	{ postId: 1355, commentsQuantity: 5 },
	{ postId: 5131, commentsQuantity: 13 },
	{ postId: 6134, commentsQuantity: 2 }
];

/* Criar uma função que recebe dois parâmetros: postId e posts. Retorna
o objeto que casa com o postId.

Se não houver um post, retornar "undefined" */

const funcao = (postId, arrayPosts) =>
	arrayPosts.find((elemento) => elemento.postId === postId);

// * Deve sair aqui
console.log(funcao(1355, posts));

function funcao2(postId, arrayPosts) {
	arrayPosts.find((elemento) => elemento.postId === postId);
}

console.log(funcao2(1355, posts));

const funcao3 = function (postId, arrayPosts) {
	arrayPosts.find((elemento) => elemento.postId === postId);
}

console.log(funcao3(1355, posts));
