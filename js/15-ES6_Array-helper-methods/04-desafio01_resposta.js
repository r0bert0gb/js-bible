const postsJSON = [
	'{"postId":1355,"commentsQuantity":5}',
	'{"postId":5131,"commentsQuantity":13}',
	'{"postId":6134,"commentsQuantity":2}'
];

/* From the "postsJSON" array create "posts" array that will consist of JavaScript objects */

//* resolução com "for loop"
var posts = [];

for (let i = 0; i < postsJSON.length; i++) {

	posts.push(JSON.parse(postsJSON[i]));
}

// * Resolução com método map() + callback function
// const posts = postsJSON.map((elemento) => JSON.parse(elemento)); // desnecessário

// * OPÇÃO 1
const posts = postsJSON.map(JSON.parse);
							/* ☝ Referência direta ao método!
							Parse recebe 2 argumentos: string e função
							string é aceito normal, o índice é ignorado pelo o que o método esperava.
							*/

// * Resolução com método map() + função externa
// * OPÇÃO 2
// const parseJson = (elemento) => JSON.parse(elemento);

// var posts = postsJSON.map(parseJson);

console.log(posts);
console.log(posts[0].postId);
console.log(posts[0].commentsQuantity);
