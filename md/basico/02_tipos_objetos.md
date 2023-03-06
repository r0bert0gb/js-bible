# Tipos de objetos

Relembrando:

- Quase tudo em JS é um objeto
![](../prints/2023-03-06-16-03-37.png)


- Objeto é uma coleção de pares *nome-valor*.

Em JS, há uma variável default chamada *Object*. Esse objeto também é uma função.

> Toda função em JS é um objeto.

**Todo** objeto é uma instância de *Object*.

![](../prints/2023-03-06-16-25-55.png)

☝ Por que *undefined* no console? Porque as linhas anteriores são *statements*, não são *expressões*.

## Dot Notation

Exatamente igual às propriedades no Java (se forem públicas);

## Bracket Notation

```javascript
// dot notation
variavel.propriedade = 10;

// bracket notation
variavel["propriedade"] = 10;

// com brackets, é possível usar uma variável como nome de propriedade
variavel[varNomePropriedade] = "Uma string qualquer";
```
