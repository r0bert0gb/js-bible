/*
* Desafios expressions-vs-statements
------------------------------------------------------*/
/*
* Tarefa 1
expressão ou statement?
------------------------------------------------------*/

// const meuObjeto = {
// 	x: 10,
// 	y: true
// }

// delete meuObjeto.x;
/* 1a: expressão ou statement?
	eu: (errado!) statement. Porque efetua uma ação e não retorna nada.
	Bogdan: expressão tornada(";") em expression statement

1b: por que ";" no final da linha?
	eu (Errado!): por ser statement, o ";" é obrigatório!
	Bogdan: expressão tornada em "expression statement"

	Bogdan: ou porque é uma statement ou porque a expressão foi tornada
	numa "expression statement". A melhor maneira de descobrir é usando
	a linha como argumento de função
	Testando:
*/
// console.log(delete meuObjeto.x); // true
// Válido e retona true! Então, não é statement!

// console.log(delete meuObjeto.y); // true
// mesma coisa

// console.log(delete meuObjeto.z); // true
// delete retorna true mesmo numa propriedade inexistente!

// console.log(meuObjeto);
//------------------------------------------------------

/*
* Tarefa 2:
Prever a saída — antes de executar — o exemplo a seguir

2.1 - o que vai sair no console?
eu:
	string da fn
	true: por quê? true vindo de "(true)"
2.2 - o que significa "true" dentro do parênteses
	eu:	expressão
	Bogdan: expressão! Boolean literal certado pelo operador de agrupamento.

2.3 - a chamada da função é expressão ou statement?
eu:
	expressão, porque retorna algo (mesmo que seja undefined)
------------------------------------------------------*/
// function fn() {
// 	console.log("Saudações da função fn");

// 	return function (a) {
// 		console.log(a);
// 	};
	// ";" porque "return" é statement!
// }

// fn()
// (true)
/* ☝
* IMPORTANTE
Do jeito que está, "fn()" e "(true)" são avaliadas como uma coisa só.
As linhas serão lidas como se estivesse assim: fn()(true)

1 - Executa a função fn
2 - fn retorna outra função
3 - os parênteses em "(true)" significa que "(true)" será um ARGUMENTO
	da função retornada em "fn()" (é confuso, mesmo!)
! o porquê de ser importante tornar expressões em "expressões statements"

fn();
(true)
expressão da chama da de função tornada em "expressão statement".
Agora, true não é usado como argumento da função de retorno
*/

/*
* Tarefa 3:
Por que ";" foi adicionado na segunda função e não na primeira?
------------------------------------------------------*/
function primeiraFuncao(a, b){
	return a + b;
} // Function Declaration (statement)

const segundaFuncao = function(a, b){
	return a + b
}; // Expression Statement
	// const é statement, function expression é expressão:
		// ☝ Expression Statement!

/* eu:
1ª função (certo): a function declaration é uma statement, porém não precisa de ";" por ser um bloco de código entre {}

2ª função (certo): precisa porque declaração de variável é uma statement, e statement precisa de ";" no final.
! CONST torna a expressão numa "expressão statement"
*/

//------------------------------------------------------
