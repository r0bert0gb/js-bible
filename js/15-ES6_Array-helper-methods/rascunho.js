const meuArray = [];

meuArray.push(1);
meuArray.push(2);

meuArray[10] = "10";

console.log(meuArray);

// for(let i = 0; i < meuArray.length; i++) {

// 	console.log("Passei no índice "+ i +": "+ meuArray[i]);
// }

meuArray.forEach((elemento, indice) => console.log(indice +": "+ elemento));
