const meuArray = [10, [], {}, "abc", true, 15];

const resultado =
	meuArray.find((elemento) => typeof elemento === "string");

console.log(resultado);
