// //* Atribuição a uma variável

// Como eu fazia, até então
const soma1 = function(a, b) {
	return a + b;
}
console.log(soma1(5,3));

// Arrow Function
const soma2 = (a, b) => a + b;

console.log(soma2(5, 6));

//* Função para lidar com um objeto post

const post = {
	titulo: "Título de exemplo",
	comentarios: 10,
	compartilhado: true,
	publicado: true,
	idPost: 5134
}

const processarPost1 = (postAlvo) => {
	return {
		titulo: postAlvo.titulo,
		comentarios: postAlvo.comentarios,
		popular: postAlvo.comentarios > 5 ? true : false
	}
};

const processarPost2 = (postAlvo) => ({
	titulo: postAlvo.titulo,
	comentarios: postAlvo.comentarios,
	popular: postAlvo.comentarios > 5 ? true : false
});

// console.log(processarPost1(post));
// console.log(processarPost2(post));

//* IIFEs

// window.saudacao = () => console.log("Saudações");

// Immediately Invoked anonymous function expression
// jeito 1
(() => {
	function saudacao1() {
		console.log("Saudações1!");
	}
	this.saudacao1 = saudacao1;
	return this;
})();

// jeito 2
(() => {
	this.saudacao2 = function() {
		console.log("Saudações2!");
	}
})();

// jeito 3: arrow function em outra arrow function
(() => {
	this.saudacao3 = () => console.log("Saudações3!");
})();
