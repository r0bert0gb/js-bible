//* Iterar com for loop e depois com forEach()

const meuArray = [1, true, "abc"];

for(let i = 0; i < meuArray.length; i++) {

	console.log(meuArray[i]);
}

// forEach FORÇA a iteração de TODOS os elementos.
// sintaxe a prova de erros (nessa parte)

console.log("Arrow Function");
meuArray.forEach((elemento) => console.log(elemento));

separador();

console.log("Function Expression");
meuArray.forEach(function(elemento) {
	console.log((elemento));
});

separador();

console.log("Named Function");
meuArray.forEach(iteradorArray);

function iteradorArray(elemento) {
	console.log(elemento);
}

function separador() {console.log("|-------------------------|");}
