/*
Comparação Funções Construtoras X Classes
*/

/*
* Exemplo 1
Declaração de classe e instância da classe
*/

// class MyClass {

// }

// const firstInstance = new MyClass();

// console.log(firstInstance);
// console.log(firstInstance.__proto__ === MyClass.prototype); // true
// console.log(MyClass === MyClass.prototype.constructor); // true

/*
* Exemplo 2
Classes sofrem "hoisting" (NÃO!)? Comportamento é o mesmo que LET e CONST!
-------------------------------------*/

// const firstInstance = new MyClass(); // erro
// class MyClass {}

/*
* Exemplo 3
"Expressão Classe"
-------------------------------------*/

// const MyClass = class {};

// const firstInstance = new MyClass();

// console.log(firstInstance);

/*
* Exemplo 4
Método construtor na classe
-------------------------------------*/

// class ComputerMouse {
// 	constructor(props) {
// 		this.type = props.type;
// 		this.color = props.color;
// 		this.interface = props.interface;
// 	}
// }

// const propsForWirelessMouse = {
// 	type: "Wireless",
// 	color: "white",
// 	interface: "Bluetooth"
// };

// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// console.log(wirelessMouse);

/*
* Exemplo 5
Classe não é um objeto literal e seus métodos não são "shorthand" names
-------------------------------------*/
// class ComputerMouse {
// 	// constructor: function (props) { // <- erro!
// 	constructor(props) {
// 		this.type = props.type;
// 		this.color = props.color;
// 		this.interface = props.interface;
// 	}
// }

/*
* Exemplo 6
Valores default para propriedades
-------------------------------------*/

// class ComputerMouse {
// 	constructor(props) {
// 		this.type = props.type || "Computer";
// 		this.color = props.color;
// 		this.interface = props.interface !== undefined
// 			? props.interface
// 			: "Not specified";
// 	}
// }

// const propsForWirelessMouse = {
// 	type: "Wireless",
// 	color: "white",
// 	interface: "Bluetooth"
// };
// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// const propsForGenericMouse = {
// 	color: "red"
// };
// const genericMouse = new ComputerMouse(propsForGenericMouse);

// console.log(genericMouse);

/*
* Exemplo 7
Métodos de classe
-------------------------------------*/
// class ComputerMouse {
// 	constructor(props) {
// 		this.type = props.type;
// 		this.color = props.color;
// 		this.interface = props.interface;
// 	}

// 	mouseInfo() {
// 		console.log(`Tipo do mouse é ${this.type} e sua cor é ${this.color}`);
// 	}

// 	changeMouseType(newType) {
// 		this.type = newType;
// 	}
// }

// const propsForWirelessMouse = {
// 	type: "Wireless",
// 	color: "white",
// 	interface: "Bluetooth"
// };

// const wirelessMouse = new ComputerMouse(propsForWirelessMouse);

// console.log(wirelessMouse);

// wirelessMouse.mouseInfo();

// wirelessMouse.changeMouseType("USB");

// console.log(wirelessMouse);

/*
* Exemplo 8
Herança de classe (novo protótipo na prototype chain)
-------------------------------------*/
// class ComputerAccessories {

// 	constructor(props) {
// 		this.compatibility = props.compatibility || ["PC", "Mac"];
// 	}
// }

// // class ComputerMouse extends ComputerAccessories {
// 	// Se a classe não possuir construtor, o PARENT CONSTRUCTOR será chamado IMPLICITAMENTE
// // }

// class ComputerMouse extends ComputerAccessories {
// 	constructor(...allProps) { // rest
// 		super(...allProps); // spread
// 	}
// }


// const myMouse = new ComputerMouse({compatibility: ["Mac"]});

// console.log(myMouse);

/*
* Exemplo 9
Setar propriedades em classes diferentes
-------------------------------------*/

// class ComputerAccessories {
// 	constructor(props) {
// 		this.compatibility = props.compatibility || ["PC", "Mac"];
// 	}
// }

// Sem "super"
// class ComputerMouse extends ComputerAccessories {
// 	constructor(props) { // * ERRO! Necessário o método SUPER no construtor!
// 		this.type = props.type;
// 	}
// }

// "super" sem argumentos
// class ComputerMouse extends ComputerAccessories {
// 	constructor(props) {
// 		super(); // *ERRO! Cannot read property 'compatibility' of undefined
// 		this.type = props.type;
// 	}
// }
// class ComputerMouse extends ComputerAccessories {
// 	constructor(props) {
// 		super(props);
// 		this.type = props.type;
// 	}
// }

// const myMouse = new ComputerMouse({
// 	compatibility: ["Mac"],
// 	type: "Optical"
// });

// console.log(myMouse);

/*
* Exemplo 10
Adicionando métodos em classes DIFERENTES
-------------------------------------*/

// class ComputerAccessories {
// 	constructor(props) {
// 		this.compatibility = props.compatibility || ["PC", "Mac"];
// 	}

// 	compatibilityInfo() {
// 		this.compatibility.forEach(
// 			(elemento) => console.log(`Acessório compatível com ${elemento}`)
// 		);
// 	}
// }

// class ComputerMouse extends ComputerAccessories {
// 	constructor(props) {
// 		super(props);
// 		this.type = props.type;
// 	}

// 	mouseInfo() {
// 		console.log(`O tipo do mouse é ${this.type}`);
// 		// return `O tipo do mouse é ${this.type}`;
// 	}
// }

// const meuMouse = new ComputerMouse({compatibility: ["Mac", "Tablet"], type: "Bluetooth"});

// meuMouse.compatibilityInfo();

// meuMouse.mouseInfo();

/*
* Exemplo 11
typeof e instanceof com classes
-------------------------------------*/

class ComputerAccessories {
	constructor(props) {
		this.compatibility = props.compatibility || ["PC", "Mac"];
	}

	compatibilityInfo() {
		this.compatibility.forEach(
			(elemento) => console.log(`Acessório compatível com ${elemento}`)
		);
	}
}

class ComputerMouse extends ComputerAccessories {
	constructor(props) {
		super(props);
		this.type = props.type;
	}

	mouseInfo() {
		console.log(`O tipo do mouse é ${this.type}`);
		// return `O tipo do mouse é ${this.type}`;
	}
}

const meuMouse = new ComputerMouse({compatibility: ["Mac", "Tablet"], type: "Bluetooth"});

console.log(typeof ComputerMouse);
// function. Por baixo dos panos, classes são funções construtoras

console.log(meuMouse instanceof ComputerMouse); // true
console.log(meuMouse instanceof ComputerAccessories); // true
console.log(meuMouse instanceof Object); // true
// console.log(meuMouse instanceof null); // Erro. Right side is not an Object

console.log(typeof ComputerMouse.prototype); // object
console.log(typeof ComputerMouse.prototype.constructor); // function

console.log(ComputerMouse.prototype.constructor === ComputerMouse); // true

console.log(meuMouse.__proto__ === ComputerMouse.prototype); // true
console.log(meuMouse.__proto__.__proto__ === ComputerAccessories.prototype); // true
console.log(meuMouse.__proto__.__proto__.__proto__ === Object.prototype); // true
console.log(meuMouse.__proto__.__proto__.__proto__.__proto__ === null); // true


/*
* Exemplo 12
Métodos ESTÁTICOS
-------------------------------------*/

// class ComputerMouse {
// 	constructor(props) {
// 		this.type = props.type;
// 	}

// 	static ownClassMethod() {
// 		console.log("Essa classe seta props para os mouses");
// 	}

// 	mouseInfo() {
// 		console.log(`O tipo do mouse é ${this.type}`);
// 	}
// }

// const meuMouse = new ComputerMouse({type: "Gaming"});

// console.log(meuMouse);

// meuMouse.mouseInfo();
// meuMouse.ownClassMethod(); // Erro: ownClassMethod is not a function

// ComputerMouse.ownClassMethod();
