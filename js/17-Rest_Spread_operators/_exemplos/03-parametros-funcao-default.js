// LINK Funções: parâmetros default

// ANCHOR Exemplo 1

// const multiplicador = (numero, mult = 2) => numero * mult;

// Normal
// console.log(multiplicador(5, 8)); // 40
// console.log(multiplicador(5, 8)); // 40

// Faltando mult
// console.log(multiplicador(5)); // 10. multi. valor default -> 2

// console.log(multiplicador()); // NaN. "undefined" * 2

// ANCHOR Exemplo 2

// const itemSupermercado1 = (nome, qtde, item) => {
// 	console.log(nome, qtde, item);
// };
// itemSupermercado1("Laranja", 5); // Laranja, 5, undefined

// const itemSupermercado2 = (nome, qtde, item) => {

// 	item = {
// 		nomeItemSupermercado: nome,
// 		qtdeItemSupermercado: qtde
// 	};
// 	console.log(nome, qtde, item);
// };
// itemSupermercado2("Laranja", 5); // Laranja, 5, { objeto }

// const itemSupermercado3 = (
// 	nome,
// 	qtde,
// 	item = {
// 		nomeItemSupermercado: nome,
// 		qtdeItemSupermercado: qtde
// 	}
// ) => {

// 	console.log(nome, qtde, item);
// };
// itemSupermercado3("Laranja", 5); // Laranja, 5, { objeto }

// ANCHOR Exemplo 3: chamando uma função nos argumentos

const aviso = (texto) => {

	console.log(
	texto !== undefined
		? `Texto possui o valor ${texto}, porém falta a cor!`
		: "Texto e nem o título foram informados!"
	);

	throw new Error("A função \"btn\" deve ser chamada com dois argumentos");
};

// Faz de conta que os dois argumentos são OBRIGATÓRIOS.
const btn = (texto = aviso(), cor = aviso(texto)) => {

	console.log(texto);
	// faz de conta: criar um botão no DOM com o texto e cor de fundo fornecidos.

};

btn("Botão 1", "grey");

btn("Botão 2");

