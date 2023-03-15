//* For in
const meuObjeto = {
	x: 10,
	y: true,
	z: "abc"
}

for (let propriedade in meuObjeto) {
	// console.log(propriedade); // apenas o nome da prop
	console.log(propriedade, meuObjeto[propriedade]);
}

const meuArray = [true, 10, "abc", null];

console.log("For in - Array");
for (let indice in meuArray) {
	console.log(indice, meuArray[indice]);
}

console.log("For of - Array");
for (let elementoArray of meuArray) {
	console.log(elementoArray);
}
