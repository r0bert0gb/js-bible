# Escopos em JS

- [Escopos em JS](#escopos-em-js)
  - [Scope chain](#scope-chain)
  - [Funções "puras" e "impuras"](#funções-puras-e-impuras)
    - [Puras](#puras)
    - [Impura](#impura)
  - [Strict Mode](#strict-mode)


3 tipos de escopos

- global
- função
- bloco

Nada de novo: *alcance/disponibilidade* de variáveis.
![](../prints/2023-03-12-09-51-11.png)

Variáveis declaradas na *raiz* do arquivo js: global

> local scope e function scope (sinônimos)!

```js
let a;
let b;
// ^-- global

function minhaFuncao() {

  let b; // local
  a = true; // global
  b = 10;
  console.log(b); // 10
}

minhaFuncao();

console.log(a); // true
console.log(b); // undefined
```

>☝ A variável b global não pode mais ser referenciada dentro de `minhaFuncao`

[Topo](#escopos-em-js)

---

## Scope chain

Procurar variáveis partindo do escopo atual e *subindo* até encontrar (se ela existir). Ou seja: escopo global tem a precedência mais baixa na scope chain.

```js
const a = 5; // global

function minhaFuncao() { // global
  function funcaoInterna() { // local scope
    console.log(a); // 5
  }
  funcaoInterna(); // chamada no escopo local
}

minhaFuncao();
```
☝ A variável *"a"* será encontrada percorrendo a *scope chain*.

![](../prints/2023-03-12-10-08-08.png)

[Topo](#escopos-em-js)

---

## Funções "puras" e "impuras"

### Puras

Quando a função altera apenas variáveis de escopo local ou parâmetros da função.

### Impura

Inverso de pura. Os exemplos acima são *funções impuras*.

> Funções "impuras" são uma **PÉSSIMA** prática!

[Topo](#escopos-em-js)

---

## Strict Mode

[Topo](#escopos-em-js)

---
