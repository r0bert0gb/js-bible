// * EVERY: Verificar se todos os números são positivos

// const meusNumeros = [3, -5, 1, 10, -7];

// fazendo num oneliner
// const isPositivos = meusNumeros.every((elemento) => elemento >= 0);
// console.log(isPositivos);

// const isPositivo = (elemento) => typeof elemento === "number" && elemento >= 0;

// const isTodosPositivos = meusNumeros.every(isPositivo);

// console.log(isTodosPositivos);

// * SOME: se há ao menos número E positivo

// const isAlgunsPositivos = meusNumeros.some(isPositivo);

// console.log(isAlgunsPositivos);

// * EXEMPLO 2

/* Verificar se a quantidade de todos os itens é maior que 5 */

const itens = [
	{
		nome: "Computador",
		qtde: 10
	},
	{
		nome: "Telefone",
		qtde: 3
	},
	{
		nome: "Headphones",
		qtde: 15
	}
];

// Se todos os itens possuem ao menos 5 unidades

if (itens.every((item) => item.qtde > 5)) {
	console.log("Todos os itens estão disponíveis");
} else {
	console.log("Nem todos os itens estão disponíveis");
}



console.log(isTodosMaisQue5);

const isAlgunsMaisQue5 = itens.some((elemento) => elemento.qtde > 5);

console.log(isAlgunsMaisQue5);
