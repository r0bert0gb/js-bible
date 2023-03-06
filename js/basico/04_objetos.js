// { }

// const a = { x: 10 }

// console.log(a);

// Criando um objeto
const minhaCidade = {
	cidade: "Porto Alegre",
	popular: true,
	pais: "Brazil"
};

// Acessando as propriedades do objeto
console.log(minhaCidade.cidade);
console.log(minhaCidade.popular);
console.log(minhaCidade.pais);

// alterando o valor de uma propriedade
minhaCidade.cidade = "Floripa";
console.log(minhaCidade.cidade);

/* adicionando uma nova propriedade a um objeto:
 Não importa se é uma constante */
const outraCidade = {
	cidade: "Nova York"
};

outraCidade.pais = "USA";

console.log(outraCidade);

// remover uma propriedade de um objeto
delete outraCidade.pais;
// ^-- operador unário!

console.log(outraCidade);

/* Bracket notation - outra maneira de ter acesso às propriedades
------------------------------------------------------*/
const maisUmaCidade = {
	cidade: "Porto Alegre"
};

// adicionando outra propriedade
maisUmaCidade["popular"] = true;

console.log(maisUmaCidade);

/* Qual a diferença entre "dot notation" e "bracket notation"?
É possível fazer isso aqui: */
const propriedadeNomePais = "pais";

maisUmaCidade[propriedadeNomePais] = "Brazil";

console.log(maisUmaCidade);

/* Quando usar as notations dot e bracket?
- dot deve ser sempre a primeira escolha.
- bracket: quando o nome da prop. estiver numa variável.
*/

/* E se a propriedade for outro objeto? (Child / Nested property)
------------------------------------------------------*/
const cidade = {
	nome: "Porto Alegre",
	info: {
		popular: true,
		pais: "Brazil"
	}
};
// imprimindo tudo
console.log(cidade);

// imprimindo propriedade da propridade
console.log(cidade.info.pais);
