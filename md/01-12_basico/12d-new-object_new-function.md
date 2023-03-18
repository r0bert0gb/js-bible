# Mais sobre instâncias

Object e Function.

Também são *expressões* equivalentes:

```js
// 1
const meuObjeto1 = new Object({a: 10, b: true});
const meuObjeto2 = {a: 10, b: true};

const minhaFuncao1 = function() {};
const minhaFuncao2 = new Function();

// 2
typeof meuObjeto1; // object
typeof minhaFuncao1; // function

typeof meuObjeto2; // object
typeof minhaFuncao2; // function

// 3
meuObjeto1 instanceof Object; // true
minhaFuncao1 instanceof Function; // true

meuObjeto2 instanceof Object; // true
minhaFuncao2 instanceof Function; // true
```

Toda variável que possua uma função atribuída é instância do Objeto/Função/Variável **Function**. O próximo *prototype* na *prototype chain* é **Object**!

## Instanciando uma função com a new keyword

```js
const minhaFuncao = new Function("a", "console.log(a);");

// no navegador
minhaFuncao
// ƒ anonymous(a
// ) {
// console.log(a);
// }

// no Nodejs
console.log(minhaFuncao);
// [Function: anonymous]

```
>"*Essa sintaxe pode ser útil quando se obtém o conteúdo de outra função em outro servidor*"
>
>Bogdan
