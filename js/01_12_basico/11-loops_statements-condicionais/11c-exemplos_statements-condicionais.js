//ANCHOR - IF ELSE

// const meuArray = [4, true, "abc", null, 5, 10];

// if (meuArray.length > 5) {
// 	console.log("Array tem mais de 5 elementos");
// } else {
// 	console.log("Array tem menos de 5 elementos");
// }

//ANCHOR - Switch
// const cor = "verde";

// switch(cor) {
// 	case "verde":
// 		console.log("É a cor verde");
// 		break;
// 	case "amarelo":
// 		console.log("É a cor amarela");
// 		break;
// 	case "vermelho":
// 		console.log("É a cor vermelha");
// 		break;
// 	default:
// 		console.log("É a cor desconhecida");
// }

//ANCHOR - Operador Ternário

let i = 10;
let j;

// numa única linha:
j = i < 100 ? i : 0;

console.log(j);

// múltipla linhas
i >= 10 && j
	? console.log("Condição é verdadeira")
	: console.log("Condição é falsa");
