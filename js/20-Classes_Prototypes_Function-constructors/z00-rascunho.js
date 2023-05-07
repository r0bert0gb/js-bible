// let animal = {
// 	come: true,
// 	andar() {
// 		console.log("Animal andando");
// 	}
// };

// let coelho = {
// 	pula: true,
// 	__proto__: animal
// }

// let orelhaLonga = {
// 	orelha: 10,
// 	__proto__: coelho
// };

// orelhaLonga.andar(); // "Animal andando"

// function funcaoTeste(n1, n2) {
// 	this.n1 = n1;
// 	this.n2 = n2;
// }

// const teste = new funcaoTeste(5, 10);

// console.log(teste);

//--------------------------------

// console.log(Object === Object.prototype.constructor);

// function AviaoCivil(numeroAssentosAviao) {

// 	this.numeroAssentosAviao = numeroAssentosAviao;
// }

// console.log(AviaoCivil.prototype);

// AviaoCivil.prototype.contarQtdeAssentos = function() {
// 	return `O avião possui ${this.numeroAssentosAviao} assentos.`
// };

// console.log(AviaoCivil === AviaoCivil.prototype.constructor);

// const aviaoPessoal = new AviaoCivil(5);

// console.log(aviaoPessoal);
// console.log(aviaoPessoal.__proto__ === AviaoCivil.prototype); // true
// console.log(aviaoPessoal instanceof AviaoCivil); // true

// console.log(aviaoPessoal.contarQtdeAssentos());
