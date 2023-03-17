/*
* Exemplos de escopo
------------------------------------------------------*/

let a;
let b;
// ^-- global

function minhaFuncao() {

	let b; // local
	a = true; // global
	b = 10;
	console.log(b); // 10
}

minhaFuncao();

console.log(a); // true (alterada na função)
console.log(b); // undefined (nunca foi fuçada)

//------------------------------------------------------

const x = 5; // global

function minhaOutraFuncao() { // global
	function funcaoInterna() { // local scope
		console.log(x); // 5
	}
	funcaoInterna(); // chamada no escopo local
}

minhaOutraFuncao();

function separador() {
	console.log("//------------------------------------------");
}
