const nome = "Fulano";
const idade = 20;

const verificarIdade = (arrayDeStrings, nome, idade) => {
	console.log(arrayDeStrings, nome, idade);

	return idade >= 18
		? `${nome} é adulto!`
		: `${nome} é menor de idade!`;
};

console.log(verificarIdade`${nome} possui ${idade} anos de idade`);