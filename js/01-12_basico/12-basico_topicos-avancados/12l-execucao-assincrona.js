/*
* Desafio
Escrever função com 1 parâmetro tempoEmMs. Dentro da função, criar
"while loop". Loop deve rodardurante o tempoEmMs.
Dica: usar o método "now" da função Date
*/

function funcaoEspera(tempoEmMs) {

	const tempoFuturo = Date.now() + tempoEmMs;

	while (tempoFuturo > Date.now()) {}

	console.log("now: " + Date.now() + " tempoFuturo: " + tempoFuturo);
}

funcaoEspera(3000);

console.log("Terminou");
