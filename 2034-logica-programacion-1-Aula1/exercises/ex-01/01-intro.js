//1.Muestra una alerta con el mensaje "¡Bienvenido a nuestro sitio web!".
alert("¡Bienvenido a nuestro sitio web!");

//2.Declara una variable llamada nombre y asígnale el valor "Lua".
let nombre = 'Lua';

//3.Crea una variable llamada edad y asígnale el valor 25.
let edad = 25;

//4.Define una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;

//5.Define una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;

//6.Muestra una alerta con el texto "¡Error! Completa todos los campos."
alert("¡Error! Completa todos los campos.");

//7.Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Preencha todos los campos." Ahora muestra una alerta con el valor de la variable mensajeDeError.
let mensajeDeError = "¡Error! Preencha todos los campos.";
alert(mensajeDeError);

//8.Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
nombre = prompt("Cuál es tu nombre?");

//9.Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
edad = prompt("Cuántos años tienes?");

//10.Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puede obtener su licencia de conducir!".
if(edad >= 18){
    alert("¡Puede obtener su licencia de conducir!");
} else {
    alert("Que pena, debes tener 18 años como mínimo para tener su licencia.");
};
