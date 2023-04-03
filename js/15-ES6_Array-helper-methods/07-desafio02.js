const posts = [
	{ postId: 1355, commentsQuantity: 5 },
	{ postId: 5131, commentsQuantity: 13 },
	{ postId: 6134, commentsQuantity: 2 }
];

/* Crie uma função que terá dois parâmetros. postId e posts.
Retorna o objeto com o postId que casou */

console.log(posts.find((post) => post.postId === 5131));

// const funcao = (idPost, arrayPosts) =>
// 	arrayPosts.find((post) => post.idPost === idPost);

function funcao(id, array) {
	array.find((post) => post.postId === id)
}

console.log(funcao(6134, posts));



posts.find((post) => post.postId === 5131)
