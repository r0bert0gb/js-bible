# Valores mutáveis e imutáveis

- [Valores mutáveis e imutáveis](#valores-mutáveis-e-imutáveis)
  - [Imutáveis](#imutáveis)
  - [Mutáveis](#mutáveis)


## Imutáveis

```js
10
// IMUTÁVEL

const a = 15;
// IMUTÁVEL

let b = 30;
b = 50; // 50
// também IMUTÁVEL. Numa reatribuição, o valor 30 "some".

let c = "abc";
c[2] = "d";
c // "abc"
// ^-- string também é IMUTÁVEL!
```

>Tipos primitivos NÃO são mutáveis!

## Mutáveis

Objetos e Arrays (Arrays também são objetos!)

```js
const meuObjeto = {};
meuObjeto.propriedadeA = true; // objeto mutado
console.log(meuObjeto.propriedadeA); // true

meuObjeto.propriedadeB = null;
console.log(meuObjeto.propriedadeB); // null

delete meuObjeto.propA; // true
```
