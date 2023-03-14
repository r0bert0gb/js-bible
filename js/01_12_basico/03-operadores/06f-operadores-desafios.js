/*
* Tarefa 1
- Comparar duas variáveis. Se variável1 é menor ou igual a variável2

- converter os dois valores para números antes da comparação.
*/

function separador() {
	console.log("----------- --- -----------");
}

let var1 = 10;
let var2 = "5";

// antes de converter
console.log(var1 <= var2);

console.log(+var1 <= +var2);

console.log(Number(var1) <= Number(var2));
separador();


var1 = "20";
var2 = 100;

console.log(+var1 <= +var2);

/*
* Tarefa 2

printar o resto da divisão de var1 por var2
------------------------------------------------------*/

let meuNumero1 = 10;
let meuNumero2 = 3;

console.log(meuNumero1 % meuNumero2);

// "%" - precedência left-to-right

/*
	* Tarefa 3
	* Retorno de com os operadores OR e AND
	O que será printado abaixo?

	Chamados operadores "curto-circuito"

	"&&" precede "||"

	"||" - retorna o valor do PRIMEIRO TRUTHY ou o ÚLTIMO operando
	"&&" - retorna o valor do PRIMEIRO FALSY ou o ÚLTIMO operando
*/

console.log(3 || true && null || false);
/* ☝ Retorna 3

	1º: true && null -> null
		- ☝ primeiro FALSY

	2º: 3 || null -> 3
		- ☝ primeiro TRUTHY

	3º: 3 || false -> 3
		- ☝ primeiro TRUTHY
*/
separador();

//* Tarefa 4: operadores alternativos

let a = 10;

// alternativas para:
// 1
// a = a + 1;
a += 1;
console.log(a);

// 2
// a = a * 2;
a *= 2;
console.log(a);

// 3
// a = a - 5;
a -= 5;
console.log(a);

// 4
// a = a / 2;
a /= 2;
console.log(a);
