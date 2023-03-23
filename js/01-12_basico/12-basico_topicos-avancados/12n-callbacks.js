/*
Callbacks são funções usadas como parâmetros na chamada de
outra função
*/

function funcaoEspera(tempoEmMs) {
	const tempoFuturo = Date.now() + tempoEmMs;

	while (tempoFuturo > Date.now()) {
		// esperando...
	}
}

funcaoEspera(5000);

//* Não está bloqueando a última linha
setTimeout(() => console.log("Callback executada"), 2000);

console.log("Último statement no contexto de execução global");
