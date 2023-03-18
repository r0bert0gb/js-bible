//* Exemplos Nodejs

console.log(Array); // [Function: Array]

console.log(typeof global); // object

//* ANCHOR - instanciando um Array
const meuArray = [];
const meuArray2 = new Array();
// Equivalentes

//* comparando arrays
const meuArray3 = [1, 2, 3];
const meuArray4 = new Array(1, 2, 3);

if (meuArray3 === meuArray4) {
    console.log("Iguais");
} else {
    console.log("Diferentes");
} // DIFERENTES
// Objetos diferentes
if (meuArray3.values === meuArray4.values) {
  console.log("Iguais");
} else {
  console.log("Diferentes");
} // IGUAIS
  // apenas o conteúdo pode ser igual!

//* Instanciando uma string

// Sintaxes NÃO equivalentes!
const minhaString1 = "abc";
const minhaString2 = new String("abc");

console.log("typeof minhaString1: " + typeof minhaString1);
console.log("typeof minhaString2: " + typeof minhaString2);

console.log(minhaString1 instanceof String); // false
console.log(minhaString2 instanceof String); // true
console.log(minhaString2 instanceof Object); // true

//* Usando método de uma string
// Métodos disponíveis no "prototype" do Objeto/Função String
// instanciando
const minhaString = new String("String qualquer");

// chamando o método
console.log(minhaString.toUpperCase());
