//* Desafio
/*
Função do arquivo anterior:
O que vai acontecer se a ordem do "setTimeout" e "funcaoEspera"
for invertida?

Eu:
	1 - callback será posta na Web API.
	2 - Execução vai continuar.
		2.1 - 5 segundos da função
	3 - último log será executado
	4 - a pilha do contexto de execução global estará vazia
	5 - A fila de eventos será executada
		5.1 a callback será executada.

Ele:
	1 - invocação do "setTimeout"
		1.1 - o log e o tempo são postos no "Web API"
		1.2 - quando entram na "Web API" os dois segundos já estão contando.
	2 - invocação da "funcaoEspera"
		2.1 a execução de TUDO para por 5 segundos.
		2.2 - os dois segundos da callback já terão passado.
	3 - último statement é executado
	4 - Fila de eventos é executada.
-------------------------------------*/
function funcaoEspera(tempoEmMs) {
	const tempoFuturo = Date.now() + tempoEmMs;

	while (tempoFuturo > Date.now()) {
		// ... esperando ...
	}
}

// invertidos
setTimeout(() => console.log("Callback executada"), 2000);

funcaoEspera(4000);

console.log("Último statement no contexto de execução global");
