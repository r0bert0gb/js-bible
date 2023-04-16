const postsJSON = [
	'{"postId":1355,"commentsQuantity":5}',
	'{"postId":5131,"commentsQuantity":13}',
	'{"postId":6134,"commentsQuantity":2}'
];

/* From the "postsJSON" array create "posts" array that will consist of JavaScript objects */

//* Usando for loop
var posts = [];

for (let i = 0; i < postsJSON.length; i++) {

	posts.push(JSON.parse(postsJSON[i]));
}

//* Usando o "map" helper method
const posts1 = postsJSON.map(JSON.parse);

console.log("----------------");

const objetificador = (elemento) => JSON.parse(elemento);

const posts2 = postsJSON.map(objetificador);

console.log(posts);
console.log(posts1);
console.log(posts2);
