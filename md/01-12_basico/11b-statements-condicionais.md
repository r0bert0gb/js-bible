# Statements Condicionais

- [Statements Condicionais](#statements-condicionais)
  - [IF Statement](#if-statement)
  - [IF ELSE Statement](#if-else-statement)
  - [Switch](#switch)
  - [Operador Ternário](#operador-ternário)

Os que serão vistos

- if
- if else
- switch
- operador ternário (não é statement! É expressão!)

## IF Statement

Nada de novo

```js
if (condição) {
  // Se a condição retornar TRUE
}
```

## IF ELSE Statement

Nada de novo. Bloco **ELSE** se a condição do **IF** der *false*

## Switch

Mesma sintaxe do C e Java.

[Topo](#statements-condicionais)

---

## Operador Ternário

Por debaixo dos panos, é uma expressão e expressões produzem um valor.

Provando que é uma expressão: pode ser usado como parâmetro de função:
```js
let value = 11;
console.log(value > 0 ? value : -value); // 11

value = -5;
let res = value > 0 ? value : -value;
console.log(value); // 5 (- -5)
```

Igual no Java

`Condicao ? Expressao se True : Expressao se False`

**IMPORTANTE:** só é possível informar uma única expressão entre o operador `:`. Uma expressão se true, outra se false.

Exemplo com valores **truthy** e **falsy**

```js
let valor = 11;
// diferente de zero -> valor truthy

valor
  ? console.log("Valor truthy: " + valor) // <-
  : console.log("Valor falsy: " + valor);
```

[Topo](#statements-condicionais)
