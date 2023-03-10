/*

setTimeout
setInterval
clearIntervar

Printar APENAS 5 mensagens com intervalo de 2 segundos

"Mensagem 1"
"Mensagem 2"
"Mensagem 3"
"Mensagem 4"
"Mensagem 5"
*/

/* O que faz clearInterval?

cancela uma ação repetitiva temporizada anteriormente chamada por setInterval()
*/

let i = 1;

const meuIntervalo = setInterval(function () {
	console.log("Mensagem " + i);
	i++;
}, 2000);

setTimeout(function () {
	clearInterval(meuIntervalo);
}, 10000);














// Solução Bogdan

// let i = 1;

// const meuIntervalo = setInterval(function () {
// 	console.log("Mensagem " + i);
// 	i++;
// }, 2000);

// setTimeout(function () {
// 	clearInterval(meuIntervalo);
// }, 10000);
