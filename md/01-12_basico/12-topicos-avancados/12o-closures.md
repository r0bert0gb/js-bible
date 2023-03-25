# Closures

Funcionalidade especial do JS. Closure é criada quando uma função retorna *outra* função. Uma varíavel que teve o retorno atribuído pode chamar essa função. A função terá acesso ao escopo da função interna.

Isso vai ser **revisto** em aulas futuras.

```js
function funcaoExterna(mult) {

	const a = 10;

	function funcaoInterna(b) {

		console.dir(funcaoInterna);

		return (a + b) * mult;
	}

	return funcaoInterna;
}
```

Ao fazermos um `dir` na `funcaoInterna`:

![](../../prints/2023-03-24-10-10-54.png)
