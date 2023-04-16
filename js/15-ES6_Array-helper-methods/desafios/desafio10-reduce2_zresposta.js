const products = [
	{
		title: "Phone case",
		price: 23,
		quantity: 2,
		category: "Accessories"
	},
	{
		title: "Android phone",
		price: 150,
		quantity: 1,
		category: "Phones"
	},
	{
		title: "Headphones",
		price: 78,
		quantity: 1,
		category: "Accessories"
	},
	{
		title: "Sport Watch",
		price: 55,
		quantity: 2,
		category: "Watches"
	}
];

const quantityByCategories = (arrayProdutos) =>
	arrayProdutos.reduce(
		(quantidades, produto) => {

			// console.log("quantidades: " + JSON.stringify(quantidades));

			// console.log("produto: " + JSON.stringify(produto));

			// console.log("-----------------------");

			quantidades[produto.category] =
				(quantidades[produto.category] || 0) + produto.quantity;

			return quantidades;
		}
		, {}
	);

/* Se categoria não está presente, é "undefined". undefined -> valor falsy */

/* Create a function "quantityByCategories" with one parameter "products".

This function "quantityByCategories" should return an object with keys equal to categories and values equal to sum of all quantities in each category.
*/

console.log(quantityByCategories(products));
/* {
	Accessories: 3,
	Phones: 1,
	Watches: 2
} */
