// * Exemplo 1
// Se TODOS os elementos do array são números e positivos

const meusNumeros1 = [3, -5, 1, 10, -7];

//* fazendo direto
const resultado = meusNumeros1.every(
	(elemento) => (typeof elemento === "number") && (elemento >= 0)
	);
	console.log(resultado);

	//--------------------------------

const meusNumeros2 = [3, 5, 1, 10, 7];

// * Criando uma função
const fnNumeroPositivo =
	(elemento) => (typeof elemento === "number") && (elemento >= 0);

const isTodosPositivos = meusNumeros2.every(fnNumeroPositivo);

console.log(isTodosPositivos);

// * Reutilizando a função fnNumeroPositivo
const isAlgunsPositivos = meusNumeros2.some(fnNumeroPositivo);
console.log(isAlgunsPositivos);

/*
* Exemplo 2
-------------------------------------*/
console.log("Exemplo 2");

const itens = [
	{ nome: "Computador", qtde: 10 },
	{ nome: "Telefone",	qtde: 3	},
	{ nome: "Headphones", qtde: 15 }
];

//* Testes de disponibilidade
if(itens.every((item) => item.qtde > 5)) {
	console.log("Todos possuem disponibilidade de 5 ou mais");
} else {
	console.log("Nem todos possuem disponibilidade 5 ou mais");
}

const fnDisponibilidade = (elemento) => elemento.qtde >= 5;

if(itens.every(fnDisponibilidade)) {
	console.log("Todos possuem disponibilidade de 5 ou mais");
} else {
	console.log("Nem todos possuem disponibilidade 5 ou mais");
}

//* Todos os itens devem ter qtde > 0. Ao menos um dos itens deve ter qtde <= 5

if (itens.every((item) => item.qtde > 0) && itens.some((item) => item.qtde <= 5))
console.log("Alguns itens terminarão em breve!");

console.log("------------");

const isItemEmEstoque = (elemento) => elemento.qtde > 0;
const isItemTerminando = (elemento) => elemento.qtde <= 5;

if (
	itens.every(isItemEmEstoque) &&
	itens.some(isItemTerminando)
) {
	console.log("Alguns itens terminarão em breve!");
}

if (
	itens.every((item) => item.qtde > 0) &&
	itens.some((item) => item.qtde <= 5)
) {	console.log("Alguns itens terminarão em breve!"); }

//* Se algum dos itens foram todos vendidos
if (itens.some((item) => item.qtde === 0)) {
	console.log("Alguns itens estão fora de estoque!");
}
