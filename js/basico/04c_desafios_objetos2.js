/*
* Exemplo4: missing properties
------------------------------------------------------*/
const meuObj = {
	a: 3,
	b: true
};

console.log(meuObj.c);
// undefined
// ^-- sempre esse resultado para "missing properties"

console.log(meuObj.propriedadeFaltante);

// adicionando uma propriedade com valor "undefined"
meuObj.novaPropComValorUndefined = undefined;

console.log(meuObj);

console.log(meuObj.novaPropComValorUndefined);
