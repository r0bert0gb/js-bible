# Fases das variáveis

- [Fases das variáveis](#fases-das-variáveis)
  - [Ciclo de vida de VAR](#ciclo-de-vida-de-var)

Não são as fases em código! É feita internamente pelo *JS Engine*

**Declaração**

 Registro da variável no seu respectivo **escopo**.

**Inicialização**

Alocação em memória para a variável. Declaração com *var* pega *undefined* automático.

**Atribuição**

Nessa fase, valores são atribuídos às variáveis.

## Ciclo de vida de VAR

![](../prints/2023-03-26-09-18-45.png)

declaração e inicialização acontecem na etapa **Compilation Phase** do JS Engine. Antes da execução. É por isso que a ordem da declaração com var não importa.

Lembrar de *Hoisting*.

```js
a = 10;
var a;
// compilation phase declara e inicializa "a".
// execution phase atribui o valor 10 (quando chega na linha).
```

[Topo](#fases-das-variáveis)
