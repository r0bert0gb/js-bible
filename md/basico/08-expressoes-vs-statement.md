# Diferença entre expressões e statements

Tradução de statement: *declaração*.

- [Diferença entre expressões e statements](#diferença-entre-expressões-e-statements)
  - [Conceito de expressão](#conceito-de-expressão)
    - [Caso especial](#caso-especial)
    - [Expressões com efeitos colaterais](#expressões-com-efeitos-colaterais)

## Conceito de expressão

Quando a linha retorna um valor.

```js
console.log("blablabla");
// ^-- expressão que retorna "undefined".

"abc"
// abc

a + b
// soma de a + b

a <= b || c !== d
// true ou false

minhaFuncao(c, d)
// retorno de minhaFuncao (undefined se não houver retorno)
```

### Caso especial

*Assignment Expression*

```js
a = 10;
// 10
```

LValue e RValue (de left e right).

LValue: expressão que se refere a uma localização em memória.
**Geralmente**, é uma `variável` ou uma `propriedade/campo` de um objeto (com uso de *dot-notation*)


### Expressões com efeitos colaterais

Quando, além de um retornar algo, performa uma ação.

Exemplos:

```js
a = 5;
b++;
minhaFuncao(c, d);
```
