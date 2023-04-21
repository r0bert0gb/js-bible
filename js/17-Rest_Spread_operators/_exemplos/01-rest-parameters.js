// const somarNumeros = (...numeros) => {

// const apenasNumeros = numeros.filter(elemento => typeof elemento === "number");

// if (apenasNumeros.length === 0) return 0;

// return apenasNumeros.reduce((soma, numero) => soma + numero, 0);

// 	//* - Fazendo tudo direto (sem atribuição)
// return numeros
// .filter(elemento => typeof elemento === "number")
// .reduce((soma, numero) => soma + numero, 0);

// };

// * Diferenças entre a variável "arguments" e o "rest operator"
function somarNumeros(...numeros) {
	return numeros
		.filter(elemento => typeof elemento === "number")
		.reduce((soma, numero) => soma + numero, 0);
};

somarNumeros(1, 4, 8, 50);

// console.log(somarNumeros(1, 2, 3, 4));
// console.log(somarNumeros("abc", 2, 3, 4));
