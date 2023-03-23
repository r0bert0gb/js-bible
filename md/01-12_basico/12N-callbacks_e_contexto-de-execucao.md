# Callbacks e o Contexto de Execução

- [Callbacks e o Contexto de Execução](#callbacks-e-o-contexto-de-execução)
	- [Recap do contexto de execução](#recap-do-contexto-de-execução)
	- [Callback Functions](#callback-functions)

Funções callback, eventos, fila de eventos e contextos de execução.

## Recap do contexto de execução

A função a seguir **para** a execução de tudo enquanto ela não terminar:
```js
function funcaoEspera(tempoEmMs) {
	const tempoFuturo = Date.now() + tempoEmMs;

	while (tempoFuturo > Date.now()) {
		// esperando...
	}
}

funcaoEspera(5000);
```
Por quê? No *contexto de execução global*, é aberto um *contexto de execução de função*. Enquanto a pilha do contexto de execução de função não fechar, o programa fica *preso*.

## Callback Functions

O comportamento é **diferente** para *callback functions* como parâmetros.

>**Callback Functions**: funções usadas como parâmetro de outra função.

A última *statement* **sempre** é executada primeiro! Não importa o tempo em *ms* de *setTimeout*.

```js
setTimeout(() =>
  console.log("Callback executada"), 2000
);

console.log("Último statement no contexto de execução global");

// saída:
// Último statement no contexto de execução global
// Callback executada
```
Por que isso acontece?

A *callback function* (e o valor em *ms*) é posta num local separado de memória(chamado de *Web API*). Após estar na Web API, o *contexto de execução da função* mais externa é fechado e a execução volta para o *contexto de execução global*.

Quando o *contexto de execução global* estiver **vazio**(depois do último log), o que está na *Web API* entra em cena. Após os dois segundos, a *callback function* é posta na *fila de eventos* e a função é executada!
