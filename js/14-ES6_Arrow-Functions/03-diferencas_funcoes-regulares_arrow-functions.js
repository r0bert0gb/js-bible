
const objeto = {
	valor: 100,
	info: function () {
		return this.valor; // 100
	}
	// info: () => this.valor // undefined
};

// console.log(objeto.info());
// objeto.info();

// Exemplo 2: função construtora
function ItemSupermercado(nome, categoria) {
	this.nome = nome;
	this.categoria = categoria;
}

// const ItemSupermercado = (nome, categoria) => {
// 	this.nome = nome;
// 	this.categoria = categoria;
// }
// ItemSupermercado is not a constructor

ItemSupermercado.prototype.info = function() {
	return this.nome + " é um(a)" + this.categoria;
}

const maca = new ItemSupermercado("Maçã", "fruta");
console.log(maca);

const brocolis = new ItemSupermercado("Brócolis", "vegetal");
console.log(brocolis);
