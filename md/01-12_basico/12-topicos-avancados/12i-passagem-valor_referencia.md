# Passagem por valor e passagem por referência

Eu já sei do que se trata. Vejamos como é em JS.

Lembrar que primitivos são **imutáveis** e tipos Object(tipo referência) são **mutáveis**.

## Passagem por valor

```js
/*
* Passagem por valor

passagem de uma variável de tipo primitivo NÃO
pode ter o valor alterado dentro da função.
-------------------------------------*/
function minhaFuncao(parametroA) {

	parametroA = 12;

	return parametroA;
}

const a = 10;

console.log(minhaFuncao(a)); // 12

console.log(a); // "a" permanece sendo 10
```

## Passagem por referência

```js
/*
* Passagem por referência
-------------------------------------*/
const meuArray = [1, 2, 3];

console.log(meuArray);
// (3) [1, 2, 3]

function minhaFuncao(array) {

	// prova que o ponteiro é o mesmo.
	console.log(meuArray === array); // true

	array.push(4);

	console.log(array);
  // (4) [1, 2, 3, 4]

	return array;
}

minhaFuncao(meuArray);

console.log(meuArray);
// (4) [1, 2, 3, 4]
```

[Topo](#passagem-por-valor-e-passagem-por-referência)

## Desafio

```js
/*
* Desafio
Criar uma função que adiciona um método para
o objeto global "window"
-------------------------------------*/

// provando que this, nesse contexto, = window
console.log(this === window);

function addCustomGlobalMethod(objetoGlobal) {

	objetoGlobal.customMethod = function() {
		console.log("Saudações do método customizado");
	}
}

addCustomGlobalMethod(this);

// as 3 chamadas de função são equivalentes:
window.customMethod();
this.customMethod();
customMethod();
```

[Topo](#passagem-por-valor-e-passagem-por-referência)