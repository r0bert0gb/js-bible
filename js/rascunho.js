function geraClosure() {
	var variavelInterna = 0;

	function fnClosure(valor) {

		console.dir(fnClosure);

		return variavelInterna + valor;
	}

	return fnClosure;
}

var testaClosure = geraClosure();
