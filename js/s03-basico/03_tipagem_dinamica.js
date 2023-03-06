let minhaVariavel;

// undefined
console.log("minhaVariavel: " + minhaVariavel);

minhaVariavel = 10;
console.log("minhaVariavel: " + minhaVariavel);

minhaVariavel = true;
console.log("minhaVariavel: " + minhaVariavel);

minhaVariavel = {
	x: true,
	y: 10
};
console.log("minhaVariavel: " + minhaVariavel);
// Não dá pra ver o objeto concatenando com string
console.log(minhaVariavel);

/* Desafio

1 - Declarar uma variável
2 - assinalar "null".
	- Determinar o tipo da variável agora
3 - Reassinalar o número 15
	- Qual o tipo da variável agora?
4 - Reassinalar "false" para a mesma variável
	- qual o tipo agora?
*/
// undefined
let superVar;

// tipo null
superVar = null;

// tipo number
superVar = 15;

// tipo boolean
superVar = false;
