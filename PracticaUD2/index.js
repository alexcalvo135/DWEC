
//Ej 1. Lectura de numeros
/*
let num=null;

do{
	num = prompt("Introduzca un número: ");

	if(isNaN(Number(num)))
		alert(`${num} no es un número`);
	else
		alert(`${num} es un número`);

}while(num!=="-1");

*/



//Ej 2. Fondo aleatorio
/*
function fondo_aleatorio() {
	let x = parseInt(Math.random()*255);
	let y = parseInt(Math.random()*255);
	let z = parseInt(Math.random()*255);
	let color_fondo = `rgb(${x},${y},${z})`;
	document.body.style.backgroundColor = color_fondo;
}

fondo_aleatorio();
*/



//Ejercicio3. ADIVINA UN NUMERO
/*


do {

	let Aleatorio = parseInt(Math.random()*100);
	console.log(Aleatorio);
	let contador = 1;
	let Nums = [];
	var bool = true;
	do {
		do {
			var num = prompt("Escribe un número del 1 al 100:");
			
			if (isNaN(num)) {
				alert("Eso no es un número");
			}else {
				parseInt(num);
				Nums [contador] = num;
			}
		} while (isNaN(num));

		if (num==null){
			bool = false;
		} else if (num == Aleatorio) {
			alert("¡Enhorabuena, has acertado!");
			alert(`El número de intentos ha sido ${contador}`);
		} else if (num > Aleatorio) {
			alert("El número que buscas está por debajo");
			contador++;
		} else {
			alert("El número que buscas está por encima");
			contador++;
		}
	} while ((num != Aleatorio) && bool);

	let repetidos = 0;
	Nums.sort();

	for (var i = 0; i < Nums.length - 1; i++) {
		if (Nums[i+1] === Nums [i]){
			repetidos++;
		}
	}

	console.log(repetidos);
	console.log(Nums);

	var entrada = document.getElementById("entrada");
	console.log(entrada);

	var salida = document.getElementById("salida");
	console.log(salida);
	let texto = Nums.toString();

	entrada.innerHTML = texto;
	salida.innerHTML = repetidos;

	var aceptar = confirm("¿Quieres abandonar el juego?");
} while (!aceptar && bool);

alert ("Ha terminado el juego")
*/



//Ej4. Factorial

/*
window.onload=function (){
//Declaramos funcion clasica

function factorial(){
	
	let num 7= null;
	do{
		num = prompt("Introduce un número entero:");
		num = parseInt(num);

		if(isNaN(Number(num)))
			alert("No es un numero entero. Vuelve a intertarlo.");
		else{
			let res = 1;
			for(i=1;i<(num+1);i++){
				res*= i;
				
			}
			alert(`El factorial de ${num} es: ${res}`);
		}
	}while(num!=="-1")
	
	

}
factorial();

}*/



//Ej5. Cuadrados
/*
const cont_cuadrado =2000;
function cuadrado_fondo_aleatorio() {
	for(i=1;i<=cont_cuadrado;i++){
		let red = parseInt(Math.random()*255);
		let green = parseInt(Math.random()*255);
		let blue = parseInt(Math.random()*255);
		let color_fondo = `rgb(${red},${green},${blue})`;
		let alto = parseInt(Math.random()*100);
		let largo = parseInt(Math.random()*100);
		
		document.write(`<div style="background-color:${color_fondo};
		left:${largo}%;top:${alto}%;
		position:fixed;width:50px;height:50px"></div>`);		
	}
}
cuadrado_fondo_aleatorio();
*/
