const postsJSON = [
	'{"postId":1355,"commentsQuantity":5}',
	'{"postId":5131,"commentsQuantity":13}',
	'{"postId":6134,"commentsQuantity":2}'
];

/* From the "postsJSON" array create "posts" array that will consist of JavaScript objects */

// * Como deve ser(eu acho)
const postExemplo = {
	postId: 1355,
	commentsQuantity: 5
}


const posts = postsJSON.map((elemento, indice) => {

});


console.log(posts);
