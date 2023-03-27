/*
* Compilation Phase (eu)
Escopos:

Global {

	2 -> "const b = 5":
	declarada, não inicializada

	4 -> "const sum"
	declarada, não inicializada.

	10, 13 -> finalResult
	Nada. Não declarada, não inicializada e nem atribuída.
	Escopo global na fase de execução

	16 -> "var a":
	declarada e inicializada com "undefined"

	18 -> "function mult":
	declarada, inicializada e atribuída

}

sum {
	8 -> "a" e "b"
	declaradas e inicializadas com "undefined"

	18 -> "a" e "b"
	declaradas e inicializadas com "undefined"
}

if {
	9 -> "let multResult"
	declarada, não inicializada

} else {
	12 -> "let sumResult":
	declarada, não inicializada


}

mult {
	19 -> result:
	declarada e inicializada com undefined
}

*/

/*
* Ele

Global {
	2 -> const b;
	declarada, TDZ

	4 -> const sum;
	declarada, TDZ

	16 -> var a;
	declarada e inicializada com "undefined"

	18 -> function mult
	declarada, inicializada e atribuída.
}

sum {
	Nada acontece.
	Inicializada e atribuída apenas na "Execution Phase"
}

if {
	9 -> let multResult;
	declarada, não inicializada (TDZ)

} else {
	12 -> let sumResult
	declarada, não inicializada (TDZ)
}

mult {
	18 -> "var a" e "var b"
	declaradas e inicializadas como "undefined"

	21 -> "var result";
	declarada e inicializada como "undefined"


}
*/
