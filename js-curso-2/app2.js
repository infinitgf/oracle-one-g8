//Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log("Hola, mundo!")
};

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludoPersonal(nombre){
    console.log(`Hola, ${nombre}!`);
}

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicar(numero){
    console.log(`El doble de ${numero} es = ${numero * 2}.`);
}

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promediar(a, b, c){
    console.log(`El promedio es = ${(a + b + c) / 3}`)
}

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(a, b){
    console.log(a > b ? a : b);
}

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function potenciar(a){
    console.log(`El resultado de ${a} por ${a} es = ${a * a}.`);
}