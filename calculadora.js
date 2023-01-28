/**
 * 
 */
 let textoPantalla = "";
 let primerOperando;
 let operacion;
 let empiezaNumero = false;
 
 function pulsarNumero(numero) {
	let pantalla = document.getElementById("pantalla");
	
	if (textoPantalla == "0" || empiezaNumero) {
		textoPantalla = numero;
		empiezaNumero = false;
	} else {
		textoPantalla = textoPantalla + "" + numero;
	}
	pantalla.value = textoPantalla;
}

function pulsarOperacion(simbolo) {
	let pantalla = document.getElementById("pantalla");
	primerOperando = parseFloat(textoPantalla);
	operacion = simbolo;
	empiezaNumero = true;
	//textoPantalla = "";
	//pantalla.value = textoPantalla;
}

function pulsarIgual() {
	let pantalla = document.getElementById("pantalla");
	let segundoOperando = parseFloat(pantalla.value);
	switch (operacion) {
		case "+":
			textoPantalla = primerOperando + segundoOperando;
			break;
		case "-":
			textoPantalla = primerOperando - segundoOperando;
			break;
		case "*":
			textoPantalla = primerOperando * segundoOperando;
			break;
		case "/":
			textoPantalla = primerOperando / segundoOperando;
			break;
	}
	pantalla.value = textoPantalla;
}

function borrarTodo() {
	let pantalla = document.getElementById("pantalla");
	textoPantalla = "0";
	primerOperando = 0;
	operacion = "";
	pantalla.value = textoPantalla;
}

function borrarUno() {
	let pantalla = document.getElementById("pantalla");
	textoPantalla = textoPantalla.substring(0, textoPantalla.length-1);
	if (textoPantalla.length == 0) {
		textoPantalla = "0";
	}
	pantalla.value = textoPantalla;
}








