// La funcion isNaN es para verificar si un numero es valido o no
// Reto 1

let temperaturaFahrenheit = parseFloat(prompt("Ingrese la temperatura en grados Fahrenheit:"));

let Grados = (temperaturaFahrenheit - 32) * (5/9);
alert(temperaturaFahrenheit + "°F equivale a " + Grados.toFixed(2) + "°C");

// Reto 2.1

let numero = parseInt(prompt("Ingrese un número:"));

if (numero > 0) {
  alert("El número ingresado es positivo.");
} else if (numero < 0) {
  alert("El número ingresado es negativo.");
} else {
  alert("El número ingresado es cero.");
}

// Reto 2.2

let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

if (numero1 > numero2) {
  alert("El primer número ingresado (" + numero1 + ") es mayor que el (" + numero2 + ").");
} else if (numero1 < numero2) {
  alert("El segundo número ingresado (" + numero2 + ") es mayor que el (" + numero1 + ").");
} else {
  alert("Ambos números ingresados son iguales.");
}


// Reto 2.3

let Numero1 = parseInt(prompt("Ingrese el primer número entero positivo:"));
let Numero2 = parseInt(prompt("Ingrese el segundo número entero positivo:"));
let Numero3 = parseInt(prompt("Ingrese el tercer número entero positivo:"));

if (Numero1 <= 0 || Numero2 <= 0 || Numero3 <= 0) {
  alert("Por favor, ingrese tres números enteros positivos válidos.");
} else {
  let menor = Math.min(Numero1, Numero2, Numero3);
  let mayor = Math.max(Numero1, Numero2, Numero3);

  alert("El número menor ingresado es: " + menor);
  alert("El número mayor ingresado es: " + mayor);
}