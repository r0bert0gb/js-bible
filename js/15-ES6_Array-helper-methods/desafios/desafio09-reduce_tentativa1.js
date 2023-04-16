const posts = [
	{
		title: "How to find JavaScript developer job?",
		postId: 3421,
		comments: 25
	},
	{
		title: "Is it hard to learn ES6?",
		postId: 5216,
		comments: 3
	},
	{
		title: "Should I learn React or Angular?",
		postId: 8135,
		comments: 12
	}
];

const minimalComentsQty = 10;

/* Create a function "popularPostsIds" with two parameters "posts" and "minimalComentsQty".

This function "popularPostsIds" should return an array of postIds of posts that have quantity of "comments" at least equal to "minimalComentsQty"
*/


// const popularPostsIds = (arrayPosts, qtdeComentarios) => {

// 	return arrayPosts.reduce((arrayRetorno, post) => {

// 		if (post.comments >= qtdeComentarios) arrayRetorno.push(post.postId);

// 		return arrayRetorno;
// 	}, []);
// };

function popularPostsIds(arrayPosts, qtdeComentarios) {

	return arrayPosts.reduce(function(arrayRetorno, post) {

		if (post.comments >= qtdeComentarios) arrayRetorno.push(post.postId);

		return arrayRetorno;
	}, []);
}

console.log(popularPostsIds(posts, minimalComentsQty)); // [3421, 8135]
