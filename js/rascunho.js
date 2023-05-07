const meuArray = [1, 2];
const {length, d} = meuArray; // Arrays são objetos!
console.log(length, d); // 2 undefined

const v1 = true;
const v2 = new Boolean(true);

console.log(v1 === v2);

const v3 = true;

console.log(v1 === v3);
