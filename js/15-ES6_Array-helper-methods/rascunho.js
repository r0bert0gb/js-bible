
// Callback functions

function perguntar(pergunta, sim, nao) {

	if (confirmar(pergunta)) {
		sim();
	} else {
		nao();
	}
}

function showOk() {
	console.log("Seu ganancioso!");
}
