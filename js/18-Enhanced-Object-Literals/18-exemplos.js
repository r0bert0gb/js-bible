/*
* S18 - Enhanced Object Literals
-------------------------------------*/

/*
* 0 Recap de Object Literal
-------------------------------------*/

let meuObjeto = {
	prop1: 10,
	prop2: "String",
	prop3: function() {
		console.log(this.prop1, this.prop2);
	}
};

console.log(meuObjeto);

console.dir(meuObjeto);

/*
* 1 Enhanced Object Literals
-------------------------------------*/

const num = 10;
const str = "Hello World";
const bool = true;

const meuObjeto2 = {
	num,
	str,
	bool
};

console.log(meuObjeto2);


/*
* 2 Shorthand method names
-------------------------------------*/


// Para funções normais, não para "arrow functions"! Lembrar do "this"

const meuCarro = (make, year) => {
	return {
		make,
		year,
		// info: function(price) {
		info(price) { // ^-- equivalantes
			return `${make} custa ${price}$`
		}
	};
};

const newCar = meuCarro("Tesla", 2020);

console.log(newCar.info(1500));

/*
* 3 Computed property names
-------------------------------------*/

// Um placeholder para nome de propriedade
const BG_COLOR_PROP = "bgColor";

const botao = {
	title: "Botão 1",
	[BG_COLOR_PROP]: "blue"
};

const lista = {
	options: ["Opção 1", "Opção 2"],
	[BG_COLOR_PROP]: "grey"
};

console.log(botao);
console.log(lista);
