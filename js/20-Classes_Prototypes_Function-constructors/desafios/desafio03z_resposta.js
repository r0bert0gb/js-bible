/**
 * CHALLENGE 7-3: TASK
 *
 * Convert all function constructors to ES6 Classes keeping same functionality
 */

// Exemplo de como usar destructuring na seção dos parâmetros do construtor

// * Product
class Product {

	//* 1 Primeira forma
	// constructor(props) {
	// 	this.price = props.price;
	// }

	// * Segunda forma
	// constructor({price: price}) {
	// 	this.price = price;
	// }

	// * Terceira forma
	constructor({price}) {
		this.price = price;
	}

	priceInfo() {
		console.log(`Price of the product is ${this.price}`);
	}
}
//--------------------------------

// * ElectricDevice

class ElectricDevice extends Product {

	constructor(props) {
		super(props);
		this.energyEfficiencyClass = props.energyEfficiencyClass;
	}

	energyInfo() {
		console.log(`Energy Efficiency Class is ${this.energyEfficiencyClass}`);
	}
}

//--------------------------------

// * TV

class TV extends ElectricDevice {
	constructor(props) {
		super(props);

		this.model = props.model;
		this.diagonal = props.diagonal;
	}
}

//--------------------------------

const propsForMyTv = {
	model: "A1620",
	price: 1200,
	energyEfficiencyClass: "A+",
	diagonal: 42
};

const myTV = new TV(propsForMyTv);

/**
 * VERIFICATION
 */
console.log(myTV);
/* {
  model: "A1620",
  price: 1200,
  energyEfficiencyClass: "A+",
  diagonal: 42,
  __proto__: ...
} */

myTV.energyInfo(); // "Energy Efficiency Class is A+"

myTV.priceInfo(); // Price of the product is 1200

console.log(myTV instanceof TV); // true
console.log(myTV instanceof ElectricDevice); // true
console.log(myTV instanceof Product); // true
console.log(myTV instanceof Object); // true
