//* Exemplo 1: this no contexto de execução global

// console.log(this); // browser: window

// console.log(this === window); //browser: true

// this.console.log("Método de this");
// referência ao objeto global/window (nesse contexto)

//* Exemplo 2: this DENTRO de uma função
// function minhaFuncao() {
// 	console.log(this);
// }

// console.log(minhaFuncao()); // Nodejs: Global
// minhaFuncao(); // Browser: Window
//? Por quê? Porque a função foi chamada no contexto GLOBAL.
// Referência ao contexto do qual a função foi chamada

//* Exemplo 3: THIS numa função com uso de STRICT MODE

// "use strict";

// function minhaFuncao() {
// 	console.log(this);
// }

// minhaFuncao(); // undefined

// window.minhaFuncao(); // window
// global.minhaFuncao(); // global

//* Exemplo 4: THIS dentro de um método de objeto
// const meuObjeto = {
// 	nome: "Mike",
// 	idade: 25,
// 	saudacao: function() {
// 		console.log(this);

// 		console.log("Nome da pessoa é " +
// 			this.nome + " e a idade é " +
// 			this.idade + "."
// 		);
			// Nome da pessoa é Mike e a idade é 25.
	// }
// };

// meuObjeto.saudacao(); // o próprio objeto
// ☝ {nome: 'Mike', idade: 25, saudacao: ƒ}

// saudacao(); // erro de referência.
