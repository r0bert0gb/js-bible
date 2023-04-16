const myCities = ["London", "New York", "Singapore"];

/* Create a function called "arrayInfo" that will return string like
"London is located at the index 0 in the myCities array" */

/* Iterate over the "myCities" array, call "arrayInfo" function for each of the elements and print result of the call to the console */

const arrayInfo = (elemento, indice) => `Cidade: ${elemento}, índice: ${indice}`;

// Option 1: "for"
for (let i = 0; i < myCities.length; i ++) {
	console.log(arrayInfo(myCities[i], i));
}

// Option 2: "forEach"
myCities.forEach((elemento, indice) => console.log(arrayInfo(elemento, indice)));

console.log("---------------------");

