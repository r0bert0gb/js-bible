# Contexto de Execução e Pilha de Contexto de Execução

- [Contexto de Execução e Pilha de Contexto de Execução](#contexto-de-execução-e-pilha-de-contexto-de-execução)
  - [Exemplo 1](#exemplo-1)
  - [Exemplo 2](#exemplo-2)
  - [Desafio](#desafio)

Contexto de execução **global** e **function**.

## Exemplo 1

```js
console.log("Esse é o contexto de execução global");

const a = 10;

console.log(a);

function minhaFuncao(a, b) {
	console.log("Esse é o contexto de execução de função");
	return a + b;
}
//* ☝ contexto de execução GLOBAL (inclui a declaração da função)

"Browser: " + minhaFuncao(5, 10); // browser
console.log("Nodejs: " + minhaFuncao(5, 10)); // Nodejs
//* ☝ contexto de execução de FUNÇÃO

console.log(minhaFuncao(5, 10));
console.log(minhaFuncao(2, 3));
//* contexto de execução de função foi criado DUAS vezes
```

[Topo](#contexto-de-execução-e-pilha-de-contexto-de-execução)

## Exemplo 2

```js
console.log("Contexto de Execução Global - nível raiz na pilha de contexto de execução");

function primeiroNivel() {
	console.log("Contexto de Execução de Função - segundo nível na pilha");

	function segundoNivel() {
		console.log("Contexto de Execução de Função - terceiro nível na pilha");
	}
	segundoNivel();
}

primeiroNivel();
```

## Desafio

```js
//* Desafio

/* Criar uma função "terceiroNivel" dentro
de "segundoNivel". Isso vai criar outro nível
de execução na pilha de contexto de execução!*/

console.log("Contexto de Execução Global - nível raiz na pilha de contexto de execução");

function primeiroNivel() {
	console.log("Contexto de Execução de Função - segundo nível na pilha");

	function segundoNivel() {
		console.log("Contexto de Execução de Função - terceiro nível na pilha");

		function terceiroNivel() {
			console.log("Quarto nível na pilha");
		}

		terceiroNivel();
	}
	segundoNivel();
}

primeiroNivel();
```


<!-- ## Global Execution Context

## Function Execution Context -->
