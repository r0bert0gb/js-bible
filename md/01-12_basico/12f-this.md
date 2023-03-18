# Keyword This

- [Keyword This](#keyword-this)
  - [Exemplo 1: this no contexto de execução global](#exemplo-1-this-no-contexto-de-execução-global)
- [Exemplo 2: THIS dentro de uma função](#exemplo-2-this-dentro-de-uma-função)
  - [Exemplo 3: THIS numa função com uso de STRICT MODE](#exemplo-3-this-numa-função-com-uso-de-strict-mode)
  - [Exemplo 4: THIS dentro de um método de objeto](#exemplo-4-this-dentro-de-um-método-de-objeto)

Variável especial que é diferente em *contextos de execução* **diferentes**.

[MD: Contextos de Execução](12e-contexto-de-execucao_e_execution-stack.md)

No contexto de execução global, *this* se refere ao objeto **window**.

> **window** é uma instância da classe/tipo **Window** (confirmar)

É uma auto-referência ao contexto de execução. Assim, é possível acessar propriedades e métodos do contexto/objeto.

## Exemplo 1: this no contexto de execução global

```js
this.console.log("Método de this");
// referência ao objeto global/window (nesse contexto)

window.console.log("Mesmo método chamado por this");
// Browser

global.console.log("Mesmo método chamado por this");
// Nodejs
```

[Topo](#keyword-this)

---

# Exemplo 2: THIS dentro de uma função

```js
function minhaFuncao() {
  console.log(this);
}
```

  ***IMPORTANTE:***

`minhaFuncao();` equivale a `window.minhaFuncao();` ou (Node.js) `global.minhaFuncao();`. Então, *this* é referência ao objeto que chamou a função!

---

## Exemplo 3: THIS numa função com uso de STRICT MODE

```js
"use strict";

function minhaFuncao() {
	console.log(this);
}

minhaFuncao(); // undefined em "strict mode"

window.minhaFuncao(); // window
// global.minhaFuncao(); // global
```

Fica **necessário** especificar a origem do método/função. *This* **não** é passado
com o uso de uma função *"standalone"*

[Topo](#keyword-this)

---

## Exemplo 4: THIS dentro de um método de objeto

```js
const meuObjeto = {
	nome: "Mike",
	idade: 25,
	saudacao: function() {
		console.log(this);

		console.log("Nome da pessoa é " +
			this.nome + " e a idade é " +
			this.idade + "."
        );
			// Nome da pessoa é Mike e a idade é 25.
	}
};

meuObjeto.saudacao(); // o próprio objeto
// ☝ {nome: 'Mike', idade: 25, saudacao: ƒ}

saudacao(); // erro de referência.
```

Chamar sem o prefixo `meuObjeto` equivale a dizer que a propriedade/método faz parte do **objeto window**. Se não existir `saudacao()` em window, ocorre erro de referência.

>`saudacao()` não é uma variável/função de *escopo global*!
