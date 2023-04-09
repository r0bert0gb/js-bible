const persons = [
	{
		name: "Andy",
		friendsQty: 10,
		index: 1
	},
	{
		name: "Mike",
		friendsQty: 5,
		index: 2
	},
	{
		name: "Sophia",
		friendsQty: 10,
		index: 3
	},
	{
		name: "Joshua",
		friendsQty: 3,
		index: 4
	},
	{
		name: "John",
		friendsQty: 10,
		index: 5
	},
	{
		name: "Gabriella",
		friendsQty: 8,
		index: 6
	},
	{
		name: "Tyler",
		friendsQty: 7,
		index: 7
	},
	{
		name: "Dylan",
		friendsQty: 2,
		index: 8
	},
	{
		name: "Sarah",
		friendsQty: 5,
		index: 9
	},
	{
		name: "Alexa",
		friendsQty: 10,
		index: 10
	},
	{
		name: "Henry",
		friendsQty: 10,
		index: 11
	},
	{
		name: "Arianna",
		friendsQty: 10,
		index: 12
	}
];

/* Create a function "sortPersonsByFriendsQty" with one parameter "persons".

This function "sortPersonsByFriendsQty" should sort input array of persons by friendsQty of each person in ascending order and return resulting array.
*/

/*
* Which sorting algorithm is used here in Google Chrome, Firefox, Node.js?

	1 - Quicksort para o V8
	2 - Insertion sort para o Firefox
	3 - Merge Sort

31 interações no Firefox, 27 no V8 e 29 no Safari.


* Is this sorting stable or not?
	Instável no Chrome! A ordem dos índices NÃO foi mantida!

	Estável no Firefox. A ordem dos índice FOI mantida!

	Estável no Safari. A ordem dos índice FOI mantida!

*/

console.log(persons);
  /* Array of persons sorted by friendsQty in ascending order
*/
