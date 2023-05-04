let animal = {
	come: true,
	andar() {
		console.log("Animal andando");
	}
};

let coelho = {
	pula: true,
	__proto__: animal
}

let orelhaLonga = {
	orelha: 10,
	__proto__: coelho
};

orelhaLonga.andar();
