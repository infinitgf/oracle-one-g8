//1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let diaDelUsuario = prompt("Qué día es hoy?");

(diaDelUsuario === "sábado" || "domingo") ? alert("¡Buen fin de semana!") : alert("¡Buena semana!");

//2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numUser = prompt("Ingresa un número.")

(numUser > 0) ? alert("El número es positivo") : alert("El número es negativo");

//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacion = 100;

(puntuacion >= 100) ? alert("¡Felicidades, has ganado!") : alert("Intentalo nuevamente para ganar.");

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoUsuario = "16.54"
let templateSaldo = `El saldo de su cuenta es ${saldoUsuario}`;

//5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUsuario = prompt("Ingrese su nombre.");
alert(`Bienvenida/o ${nombreUsuario}`);