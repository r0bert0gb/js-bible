//* Exemplo 1:

const multiplicador = (num, mult = 2) => num * mult;

console.log(multiplicador(5));

// * Exemplo 2: argumentos obrigatórios

const aviso = (title) => {


	title !== undefined
		? `O texto do botão é ${title}, mas a cor não foi informada!`
		: "Texto e cor não foram informados";

	throw new Error("'criarBotao' deve ser chamada com dois argumentos: title e color");
}


const criarBotao = (title = aviso(), color = aviso(title)) => {

	console.log(title);

	/* Faz de conta que um botão no DOM será criado por aqui */
};

