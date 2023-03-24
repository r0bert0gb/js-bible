// * Closures

/*
O que vai acontecer?

1. funcaoExterna declarada no context de execução global
2. atribuição do retorno de "funcaoExterna" para "resultado"

*/

function funcaoExterna(mult) {

	const a = 10;

	function funcaoInterna(b) {

		console.dir(funcaoInterna);

		return (a + b) * mult;
	}

	return funcaoInterna;
}

const resultado1 = funcaoExterna(2);
console.log(resultado1(5)); // 60

const resultado2 = funcaoExterna(3);
console.log(resultado2(5)); // 90
