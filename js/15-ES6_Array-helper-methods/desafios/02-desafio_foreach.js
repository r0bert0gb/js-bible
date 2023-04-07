const myCities = ["London", "New York", "Singapore"];

/* Create a function called "arrayInfo" that will return string like
"London is located at the index 0 in the myCities array" */

/* Iterate over the "myCities" array, call "arrayInfo" function for each of the elements and print result of the call to the console */

// Option 1: "for"

// Option 2: "forEach"

// O que eu fiz:
// 1
function arrayInfo1(array) {

	for (let i = 0; i < array.length; i++) {
		console.log(array[i] +" is located at the index "+ i +" in the myCities array!");
	}
}
arrayInfo1(myCities);

// 2
myCities.forEach(
	(cidade, index) =>
			console.log(cidade +" is located at the index "+ index +" in the myCities array!")
);

separador()

// O que ele fez:

const arrayInfo2 = (cidade, teste) =>
console.log(
	cidade +" is located at the index "+ teste +" in the myCities array"
);

// 1
for (let i = 0; i < myCities.length; i++) {

	arrayInfo2(myCities[i], i);
}

separador();

// 2
myCities.forEach((cidade, indice) => console.log(cidade +" is located at the index "+ indice +" in the myCities array"));

function separador() {
	console.log("-----------------------------------------");
}
