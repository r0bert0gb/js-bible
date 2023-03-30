// function expression anônima
function (a, b) {
	return a + b;
}
// ^-- erro de sintaxe ao usar isso "standalone"

//* Recriando acima com sintaxe Arrow Function
(a, b) => a + b // expressão

//* Outra equivalente
(a, b) => {

	return a + b; // statement
}

(a, b) =>  ({
    a1: a,
    b1: b
})
