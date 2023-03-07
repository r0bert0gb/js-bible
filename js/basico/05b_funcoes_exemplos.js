/*
* Exemplo 1 - A função mais simples em JS
------------------------------------------------------*/
// function nomeFuncao() { }

// console.log(nomeFuncao);
// só o nome da função

// console.log(nomeFuncao());
// undefined

// nomeFuncao();
// nada.

// const saidaFuncao = nomeFuncao();

// console.log(saidaFuncao);
// undefined

// é válido passar parâmetros para funções sem parâmetros
// console.log(nomeFuncao(10, true));
// undefined

/*
* Exemplo 2 - Comportamento dos parâmetros da função
------------------------------------------------------*/
// function minhaFuncao(a, b) {
// 	console.log(a);
// 	console.log(b);

// ! se não tem retorno, então retorna UNDEFINED
// }

// minhaFuncao(10, 5);

// minhaFuncao(true, null);

// minhaFuncao();
// dois undefineds

// minhaFuncao("Valor de a");
// "Valor de a" e undefined

// console.log(minhaFuncao(4, 3));
// ! ^ logs da função: 4 e 3. Depois, undefined desse log acima

/*
* Exemplo 3: escopo de função
------------------------------------------------------*/
// function minhaFuncao(a, b) {
// 	console.log(a, b);
// }

// console.log(minhaFuncao(3, 2));

// console.log(a);
// Erro. "a" está fora do escopo

/*
* Exemplo 4: reusar nomes de variáveis
------------------------------------------------------*/

// function minhaFuncao1(a, b) {
// 	console.log(a, b);
// }


// function minhaFuncao2(a, b) {
// * escopo de FUNÇÃO
// 	console.log(a, b);
// }

// minhaFuncao1(1, 3);
// minhaFuncao2(2, 4);

// * escopo GLOBAL
// const a = true;
// const b = null;

// console.log(a, b);

// minhaFuncao1(a, b);

/*
* Exemplo 5: keyword return
------------------------------------------------------*/
// function soma(a, b) {
// 	return a + b;
// }

// soma(50, 10);
// não foi feito nada com o retorno;
/*
	? por que funciona no browser e aqui não?
*/

// console.log(soma(3, 5));

// console.log(soma("abc", 2));

// console.log(soma());

/*
* Exemplo 6: O que acontece depois do retorno?
------------------------------------------------------*/
function minhaFuncao(a) {

	console.log(a);
	return a; // termina aqui
	console.log(a);
	const c = 10;
	console.log(c);
};
