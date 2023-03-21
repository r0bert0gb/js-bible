# Immediately Invoked Function Expression

Conteúdo já citado:
[Function Expressions](../../js/01-12_basico/02-funcoes/05d_function_expressions.js)

Funções:

- anônimas
- que não podem ser chamadas sozinhas
- mesma ideia de objetos anônimos no Java

Qual a ideia aqui:

Não *"sujar"* o escopo global com a função **addCustomGlobalMethod**

```js
// Refazendo o desafio do vídeo anterior sem "sujar" o escopo global
// function addCustomGlobalMethod(objetoGlobal) {
(function (objetoGlobal) {
	// A função, desse jeito, não precisa de um nome.

	objetoGlobal.customMethod = function() {
		console.log("Saudações do método customizado");
	}
})(this); // <-- passando o parâmetro direto aqui.

// addCustomGlobalMethod(this);
//* ^-- erro de referência. Não existe mais no escopo global!

// as 3 chamadas de função são equivalentes:
window.customMethod();
this.customMethod();
customMethod();
// customMethod continua sendo propriedade do objeto "window"
```

## Maneiras de escrever a função expressão

### Opção 1

```js
//* OPÇÃO 1:
// Refazendo o desafio do vídeo anterior sem "sujar" o escopo global
// function addCustomGlobalMethod(objetoGlobal) {
(function (objetoGlobal) {
	// A função, desse jeito, não precisa de um nome.

	objetoGlobal.customMethod = function() {
		console.log("Saudações do método customizado");
	}
})(this); // <-- passando o parâmetro direto aqui.
```

### Opção 2

Outra forma:

- remover **this** na chamada da função
- remover parâmetro objetoGlobal
- referenciar **window** com uso do *this*

```js
//* OPÇÃO 2:
(function () {
	this.customMethod = function() {
		console.log("Saudações do método customizado");
	}
})();
```

### Opção 3: arrow function

Ainda não visto.

```js
(() => {
	this.customMethod = function() {
		console.log("Saudações do método customizado");
	}
})();
```
