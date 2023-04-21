/* Create a function "taggedTemplate" that will return a regular string (not template literal).

Use appropriate method of the function definition and needed amount of arguments.

Use all knowledge gained in the previous sections.

IMPORTANT: Input template literal may have *ANY* quantity of the expressions.

NOTE: If you are stuck - hints down below!
*/

/* Etapas
* 1.
Pegar todos os argumentos e extrair todos os resultados das expressões para um array separado. array "resultadosExpressoes"

- Usar variável "arguments" que só está presente em "Function Declarations".
- Array de argumentos com uso da

* 2.
arrayDeStrings - primeiro parâmetro da tagged function

* 3.
Quantidade de expressões num TEMPLATE LITERAL é argumentos da função - 1

Length do array "resultadosExpressões" = length da "tagged function" - 1

* 4.
Concatenar elementos no "arrayDeStrings" e "resultadosExpressoes"
*/

function taggedTemplate(arrayDeStrings) {

	const resultadosExpressoes = Array.from(arguments).slice(1);

	return arrayDeStrings.reduce((stringConcatenada, stringAtual, indice) => {

		return stringConcatenada + stringAtual
			+ (resultadosExpressoes[indice] !== undefined
				? resultadosExpressoes[indice]
				: ""
			);
	}, "");
}

// FIRST test case
const a = 10;
const b = 5;
const sum = taggedTemplate`Sum of the two variables a(${a}) and b(${b}) is ${a +
	b}`;

console.log(sum);
/* Sum of the two variables a(10) and b(5) is 15 */

// SECOND test case
const girl = "Alice";
const boy = "Bob";
const friendsInfo = taggedTemplate`${girl} and ${boy} are friends!`;

console.log(friendsInfo);
/* Alice and Bob are friends! */

/* HINTS
1. Use regular function declaration instead of anonymous arrow function expression assigned to the variable.
In such way you will get access to the "arguments" inside of the function

2. First argument in the function is array of strings

3. Other arguments are results of all expressions from the template literal.

4. Use "Array.from(arguments)" + "slice" array helper method to create an expressions values array.
In the first test case this array needs to be [10, 5, 15]

5. Use "reduce" array helper method in order to construct resulting string that will be returned at the end of the function.

6. In the callback function for "reduce" helper method you need to concatenate pairs (string, expression value).
First pair in the first test case will be ("Sum of the two variables a(", "10").
*/
