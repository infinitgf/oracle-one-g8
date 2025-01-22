let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}