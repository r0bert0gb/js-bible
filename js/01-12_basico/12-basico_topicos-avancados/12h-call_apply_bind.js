//* Exemplo 1: Call "helper method"
// "this" customizado

// const meuObjeto = {
// 	a: 10,
// 	b: null
// };

// function minhaFuncao() {
	// console.log(this);
// } // Window (sem "strict mode")

// minhaFuncao(); // "this" é window

// minhaFuncao.call(meuObjeto); // {a: 10, b: null}
// "this" é "meuObjeto"

// Exemplo 1: Call "helper method"
// "this" customizado

/*
* Exemplo 2:
"this" customizado com argumentos
-------------------------------------*/

// const meuObjeto = {
// 	a: 10,
// 	b: null
// };

// function minhaFuncao(a, b) {
// 	console.log(a + b);
// 	console.log(this);
// } // Window (sem "strict mode")

// minhaFuncao(); // "this" é window

// minhaFuncao.call(meuObjeto, 10, 3); // {a: 10, b: null}
// "this" é "meuObjeto"

/*
* Exemplo 3:
CALL: método call do objeto com outro objeto como "this"
-------------------------------------*/
// const pessoa1 = {
// 	cidade: "Porto Alegre",
// 	nome: "Bob",
// 	info: function() {
// 		console.log(
// 			this.nome + " mora em " + this.cidade
// 		);
// 	}
// };

// const pessoa2 = {
// 	cidade: "Paris",
// 	nome: "Fulano"
// }

// pessoa1.info(); // Bob mora em Porto Alegre

// pessoa1.info.call() // undefined mora em undefined

//* pegando o "emprestado" o método "info"
// pessoa1.info.call(pessoa2); // Fulano mora em Paris

/*
* Exemplo 4 - Apply
"this" customizado e argumentos

Quase igual ao exemplo 2. A diferença é que
um array é passado.
-------------------------------------*/
// const meuObjeto = {
// 	a: 10,
// 	b: null
// };

// function minhaFuncao(a, b, c) {
	// "a" e "b" aqui não são as prop. do objeto
	// são os valores passados pelo array!

	// let soma = a + b + c;

	// for(let chave in this) {
	// 	if (typeof this[chave] === "number") {

	// 		soma += this[chave];
	// 	}
	// }

	// console.log(soma);
// } // Window (sem "strict mode")

// minhaFuncao.apply(meuObjeto, [10, 3, 5]);
// {a: 10, b: null}
// "this" é "meuObjeto"

/*
* Exemplo 5
Bind
-------------------------------------*/
const meuObjeto = {
	a: 10,
	b: null
};

function minhaFuncao(a, b) {
	console.log(a + b);
	console.log(this);
}

/* É possível fazer um "preset" do objeto e dos
argumentos da função. A função deve ser chamada depois.
*/

//* preset do objeto e argumentos
const funcaoCustom1 = minhaFuncao.bind(meuObjeto, 5, 3);

funcaoCustom1();

//--------------------------------

//* preset apenas do objeto
const funcaoCustom2 = minhaFuncao.bind(meuObjeto);

funcaoCustom2(2, 3);

/*
* Desafio
Criar "funcaoCustom3" que será preset do "this" e apenas do PRIMEIRO argumento.
Depois, chamar a função com um único argumento.
*/
const funcaoCustom3 = minhaFuncao.bind(meuObjeto, 5);

funcaoCustom3(4);
// ^-- funciona!
