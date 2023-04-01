//* THIS com Arrow Functions. Conceito importante!

// const num1 = {
// 	valor: 100,
// 	info: function info() {
// 		console.log(this); // num object
// 		return this.valor;
// 	}
// };
// console.log(num1.info());

//* rescrevendo como Arrow Function
// const num2 = {
// 	valor: 100,
// 	info: () => {
// 		console.log(this); // window object
// 		return this.valor;
// 	}
// };
// console.log(num2.info());

//* EXEMPLO 2
const outroNum = {
	valor: 5,
	info: function info() {
		console.log(this); // OBJETO outroNum
		return this.valor; // 5
	}
	// info: () => {
	// 	console.log(this); // OBJETO window
	// 	return this.valor; // undefined
	// }

};
console.log(outroNum.info());

// const novoNum = {
// 	valor: 17
// }

// console.log(outroNum.info.call(novoNum));

//* EXEMPLO 3
const str = {
	valor: "Saudação atrasada",

	//* This perdido na callback "setTimeout"
	saudacao: function saudacao() {

		console.log(this.valor); // OBJETO str

		setTimeout(function() {
			console.log(this); //
			console.log(this.valor); // undefined
		}, 2000);
	}

	//* Opção 1
	// saudacao: function saudacao() {

	// 	console.log(this.valor); // OBJETO str

	// 	const self = this;

	// 	setTimeout(function() {
	// 		console.log(self); //
	// 		console.log(self.valor); // undefined
	// 	}, 2000);
	// }

	//* Opção 2
	// saudacao: function saudacao() {

	// 	console.log(this.valor); // OBJETO str

	// 	setTimeout(function() {
	// 		console.log(this); //
	// 		console.log(this.valor); // saudação atrasada
	// 	}.bind(this),
	// 		2000
	// 	);
	// }

	//* Opção 3
// 	saudacao: function saudacao() {

// 		console.log(this.valor); // OBJETO str

// 		setTimeout(
// 			() => {
// 				console.log(this); //
// 				console.log(this.valor); // saudação atrasada
// 			}, 2000
// 		);
// 	}
};

// str.saudacao();
