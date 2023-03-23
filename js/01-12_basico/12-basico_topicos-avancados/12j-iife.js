//* IIFEs

/*
* Immediately Invoked Function Expression
-------------------------------------*/

//* OPÇÃO 1:
// Refazendo o desafio do vídeo anterior sem "sujar" o escopo global
// function addCustomGlobalMethod(objetoGlobal) {
// (function (objetoGlobal) {
	// A função, desse jeito, não precisa de um nome.

// 	objetoGlobal.customMethod = function() {
// 		console.log("Saudações do método customizado");
// 	}
// })(this); // <-- passando o parâmetro direto aqui.

// //* OPÇÃO 2:
(function () {
	this.customMethod = function() {
		console.log("Saudações do método customizado");
	}
})();

//* OPÇÃO 3: arrow functions
// (() => {
// 	this.customMethod = function() {
// 		console.log("Saudações do método customizado");
// 	}
// })();

//* ^-- erro de referência. Não existe mais no escopo global!

// as 3 chamadas de função são equivalentes:
window.customMethod();
this.customMethod();
customMethod();
// customMethod continua sendo propriedade do objeto "window"
