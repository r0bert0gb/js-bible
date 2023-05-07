/*
* Exemplo 1
* Funções construtoras
Cada função em JS (não-flecha) possui a propriedade
".prototype" e pode ser usada como uma função construtora.

* Prototype Chain:
CivilPlano.prototype -> Object.prototype -> null
*/

// const CivilPlane = function() {};
// function CivilPlane() {}

// console.log(CivilPlane.prototype); // {constructor: ƒ}

// console.log(CivilPlane.prototype.contructor === CivilPlane);

// console.log(CivilPlane.prototype.__proto__ === Object.prototype); // true
// console.log(CivilPlane.prototype.__proto__.__proto__ === null); // true

// * Exemplo 2
/* Criando nova instância do protótipo usando a sintaxe "new" */
// function CivilPlane(props) {
// 	console.log(this);
// 	console.log(this.__proto__);
// 	this.numberOfSeats = props.numberOfSeats;
// 	console.log(this);
// }

// const propriedadesParaSmallPlane = {
// 	numberOfSeats: 4
// };

// const smallPlane = new CivilPlane(propriedadesParaSmallPlane);

// console.log(smallPlane);

// console.log(smallPlane.__proto__ === CivilPlane.prototype); // true

/*
* Exemplo 3
NÃO FAÇA ISSO!
O método será adicionado para cada instância do protótipo.
*/
// function CivilPlane(props) {
// 	this.numeroDeAssentos = props.numeroDeAssentos;

// 	this.seatsInfo = function() {
// 		console.log(`Número de assentos no avião é ${this.numeroDeAssentos}`);
// 	}
// }

// const propsParaSmallPlane = { numeroDeAssentos: 4 };
// const smallPlane = new CivilPlane(propsParaSmallPlane);

// const propsParaLargePlane = { numeroDeAssentos: 250 };
// const largePlane = new CivilPlane(propsParaLargePlane);

// console.log(largePlane);

/*
* Exemplo 4
CORRETO - Método adicionado direto ao prototype
*/

function CivilPlane(props) {
	this.numeroDeAssentos = props.numeroDeAssentos;
}

// Adicionando método ao prototype
// CivilPlane.prototype.seatsInfo = () => { // <- undefined por causa do "THIS"
// 	console.log(`Número de assentos no avião é ${this.numeroDeAssentos}`);
// }
CivilPlane.prototype.seatsInfo = function() { // Opção correta
	console.log(`Número de assentos no avião é ${this.numeroDeAssentos}`);
}

// Adiconando mais um método ao prototype
CivilPlane.prototype.modificarNumeroDeAssentos = function(novaQtdeDeAssentos) {

	if (typeof novaQtdeDeAssentos !== "number" || novaQtdeDeAssentos < 0 || this.numeroDeAssentos === undefined) {
		this.numeroDeAssentos = 0;
	}
	this.numeroDeAssentos = novaQtdeDeAssentos;
}

const propsParaSmallPlane = { numeroDeAssentos: 4 };
const smallPlane = new CivilPlane(propsParaSmallPlane);

const propsParaLargePlane = { numeroDeAssentos: 250 };
const largePlane = new CivilPlane(propsParaLargePlane);

console.log(largePlane);

smallPlane.seatsInfo();
smallPlane.modificarNumeroDeAssentos(10);
smallPlane.modificarNumeroDeAssentos("abc");
smallPlane.seatsInfo();
