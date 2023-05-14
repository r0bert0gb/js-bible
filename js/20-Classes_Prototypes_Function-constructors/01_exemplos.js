/*
* Exemplo 1
Cada função em JS possui a propriedade prototype e pode ser usada
como uma função construtora.

prototype chain:
CivilPlane.prototype -> Object.prototype -> null
*/

// function CivilPlane() {};
// // const CivilPlane = function() {};

// console.log(CivilPlane.prototype); // {constructor: ƒ}

// console.log(CivilPlane === CivilPlane.prototype.constructor); // true

// // * Andando pela "prototype chain"
// console.log(CivilPlane.prototype.__proto__ === Object.prototype); // true
// console.log(CivilPlane.prototype.__proto__.__proto__ === null); // true

/*
* Exemplo 2

Criando nova instância do prototype usando a sintaxe "new"

1. Função construtora chamada
2. Objeto vazio é criado
3. __proto__ é adicionado
4. novas prop. adicionadas
5. novo objeto é retornado pela função construtora
-------------------------------------*/

// function CivilPlane(props) {

// 	console.log(this);
// 	console.log(this.__proto__);

// 	this.numberOfSeats = props.numberOfSeats;

// 	console.log(this);
// }

// const propsParaSmallPlane = {
// 	numberOfSeats: 4
// };

// const smallPlane = new CivilPlane(propsParaSmallPlane);

// smallPlane.__proto__ === CivilPlane.prototype // true

/*
* Exemplo 3

NÃO FAÇA ISSO!
método "seatsInfo" será adicionado para cada instância do protótipo
-------------------------------------*/
// function CivilPlane(props) {
// 	this.numberOfSeats = props.numberOfSeats;

// 	this.seatsInfo = function() {
// 		console.log(`Número de assentos no avião é ${this.numberOfSeats}`);
// 	};
// }
// const propsParaSmallPlane = {
// 	numberOfSeats: 4
// };
// const smallPlane = new CivilPlane(propsParaSmallPlane);

// const propsParaLargePlane = {
// 	numberOfSeats: 250
// };
// const largePlane = new CivilPlane(propsParaLargePlane);

/*
* Exemplo 4
Adicionando o método ao PROTÓTIPO
-------------------------------------*/
// function CivilPlane(props) {
// 	this.numberOfSeats = props.numberOfSeats;
// }
// const propsParaSmallPlane = {
// 	numberOfSeats: 4
// };

// ? Por que, com arrow function, dá "undefined"?
// Porque o "this", agora, aponta para "Window" ou "Global"
// CivilPlane.prototype.seatsInfo = () => {
// 	console.log(`Número de assentos no avião é ${this.numberOfSeats}`);
// };

// CivilPlane.prototype.seatsInfo = function() {
// 	console.log(`Número de assentos no avião é ${this.numberOfSeats}`);
// };

// CivilPlane.prototype.modifySeatsNumber = function(novaQtdeAssentos) {
// 	this.numberOfSeats = novaQtdeAssentos;
// };

// const smallPlane = new CivilPlane(propsParaSmallPlane);

// const propsParaLargePlane = {
// 	numberOfSeats: 250
// };
// const largePlane = new CivilPlane(propsParaLargePlane);

// smallPlane.seatsInfo(); // 4
// smallPlane.modifySeatsNumber(10);
// smallPlane.seatsInfo(); // 10

// Lembrar que, até agora, o protótipo de CivilPlane é Object.prototype!
// Não está seguindo a herança do diagrama!

/*
* Exemplo 5
Adicionando mais um nível na PROTOTYPE CHAIN
CivilPlane.prototype -> Airplane.prototype -> Object.prototype
-------------------------------------*/

function Airplane(props) {
	this.wingspan = props.wingspan;
	this.maxRangeOfFlight = props.maxRangeOfFlight;
}

Airplane.prototype.airplaneInfo = function() {
	console.log(`Wingspan of the airplane os ${this.wingspan} and max range of flight is ${this.maxRangeOfFlight}`);
};

function CivilPlane(props) {

	Airplane === Airplane.prototype.constructor
	Airplane.call(this, props);
	this.numberOfSeats = props.numberOfSeats;
}

CivilPlane.prototype = Object.create(Airplane.prototype);
// console.log(CivilPlane.prototype.__proto__ === Airplane.prototype); // true

// console.log(CivilPlane.prototype.constructor === CivilPlane); // false

CivilPlane.prototype.constructor = CivilPlane;
// console.log(CivilPlane.prototype.constructor === CivilPlane); // true

CivilPlane.prototype.seatsInfo = function() {
	console.log(`Número de assentos: ${this.numberOfSeats}`);
};

CivilPlane.prototype.modifySeatsNumber = function(newSeatsQty) {
	this.numberOfSeats = newSeatsQty;
}

const propsForSmallPlane = {
	numberOfSeats: 4,
	wingspan: 20,
	maxRangeOfFlight: 1000
};
const smallPlane = new CivilPlane(propsForSmallPlane);

const propsForLargePlane = {
	numberOfSeats: 250,
	wingspan: 60,
	maxRangeOfFlight: 3500
};
const largePlane = new CivilPlane(propsForLargePlane);

console.log(smallPlane instanceof CivilPlane);
