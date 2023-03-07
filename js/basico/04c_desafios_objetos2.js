/*
* Exemplo4: missing properties (vídeo 40)
------------------------------------------------------*/
// const meuObj = {
// 	a: 3,
// 	b: true
// };

// console.log(meuObj.c);
// undefined
// ^-- sempre esse resultado para "missing properties"
// console.log(meuObj.propriedadeFaltante);

// adicionando uma propriedade com valor "undefined"
// meuObj.novaPropriedadeComValorUndefined = undefined;

// console.log(meuObj);

// console.log(meuObj.novaPropComValorUndefined);
// ! Jamais atribuir o valor "undefined" para uma variável. Usar null!

/*
* Desafio 3:
------------------------------------------------------*/
/*
	- Criar objeto "objectWithNestedObject" com valor inicial {}
	- adicionar propriedade nestedObject tb com valor {}
	- Adicionar prop. a com valor null para o nestedObject
		- usar dot notation
	- Adicionar prop. b com valor true para nested
		- bracket notation
	Criar nova variável com propridade "name"
*/
let objectWithNestedObject = {};
console.log(objectWithNestedObject);

objectWithNestedObject.nestedObject = {};
console.log(objectWithNestedObject);

objectWithNestedObject.nestedObject.a = null;
console.log(objectWithNestedObject);

const newPropertyName = "b";
objectWithNestedObject.nestedObject[newPropertyName] = true;
console.log(objectWithNestedObject);

let name;
