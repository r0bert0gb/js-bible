

const meuNumero = 10;
const minhaString = "olá";
const meuArray = [1, 2];
const meuObjeto = {propriedade: 10};
const meuBooleano = true;
const minhaSaudacao = (nome) => "Olá, " + nome;


const templateString = "Número é " + meuNumero + " minha string é " + minhaString + " meuArray é " + meuArray + " meu objeto " + meuObjeto + " meu booleano é " + meuBooleano + "e a função retorna" + minhaSaudacao("Nome Qualquer");

console.log(templateString);

const templateLiteral = `Número é ${meuNumero} minha string é ${minhaString} meuArray é ${meuArray} meu objeto ${meuObjeto} meu booleano é ${meuBooleano} e a função retorna ${minhaSaudacao("Nome Qualquer")}`;

console.log(templateLiteral);

const templateLiteral2 = `Número é ${meuNumero} minha string é ${minhaString} meuArray é ${meuArray} meu objeto ${meuObjeto} meu booleano é ${meuBooleano} e a função retorna ${((nome) => "Olá, " + nome)("Mike")}`;

console.log(templateLiteral2);

// Criando botões em HTML

btn1 = "Botão 1";
btn2 = "Botão 2";

const meusBotoes = `
	<div>
		<button>${btn1}</button>
		<button>${btn2}</button>
	</div>
`

// só printar no console
console.log(meusBotoes);

// "printar" no documento
document.body.innerHTML = meusBotoes;
