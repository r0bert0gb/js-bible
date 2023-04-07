const tags = [
	["javascript", "es6"],
	["css", "flexbox"],
	["html", "web-browser"]
  ];

  const fruits = [
	{ title: "Orange", quantity: 10 },
	{ title: "Banana", quantity: 5 },
	{ title: "Apple", quantity: 25 }
  ];

  const primitiveTypesArray = [
	25,
	"x",
	true,
	undefined,
	null
  ];

const elementIsIncluded = (searchElement, array) => {

	if (searchElement instanceof Array) {

		const arraysParaStrings = array.map((elemento) => JSON.stringify(elemento));

		// console.log(arraysParaStrings);
		// console.log(searchElement);

		return arraysParaStrings.includes(JSON.stringify(searchElement));
	}

	if (searchElement instanceof Object) {

		const objetosParaString = array.map((elemento) => JSON.stringify(elemento));

		return objetosParaString.includes(JSON.stringify(searchElement));
	}
	return array.includes(searchElement);
}

/* Create a function "elementIsIncluded" with two parameters "searchElement" and "array".
If type of the "searchElement" is object or array, you need to convert each element in the "array" to the string and then apply "includes" method with argument that will be also converted to the string.
If type of the "searchElement" is not an object or array - simply apply "includes" method and return result
*/

  console.log(elementIsIncluded(["css", "flexbox"], tags)); // true

  console.log(elementIsIncluded(["flexbox", "css"], tags)); // false

console.log(
	elementIsIncluded(
		{ title: "Apple", quantity: 25 },
		fruits
	)
); // true

console.log(elementIsIncluded({ title: "Banana" }, fruits)); // false

console.log(elementIsIncluded(25, primitiveTypesArray)); // true
