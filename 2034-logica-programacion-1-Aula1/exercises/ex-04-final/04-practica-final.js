//1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenida/o!');

//2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "German";
console.log(`Hola ${nombre}!`);

//3.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre = "German";
alert(`Hola ${nombre}!`);

//4.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
//  Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(lenguaje);

//5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
// Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
// Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 18;
let valor2 = 3;
let resultado = valor1+valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
//  Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
//  Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 18;
let valor2 = 3;
let resultado = valor1-valor2;

console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);

//7.Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
// utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edadUsuario = (prompt('Ingrese su edad:') >= 18) ? 'Es mayor de edad.' : 'Es menor de edad.';

//8.Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt('Ingrese un número');

if(numero == 0){
    console.log('El numero ingresado es cero.');
} else if(numero > 0){
    console.log('El numero ingresado es positivo.')
} else {
    console.log('El numero ingresado es negativo')
}

//9.Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

//10.Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

//11.Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

//12.Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

//13.Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.



// ------------  SOLUCIONES  -------------

/*### Resolución de los desafíos del curso de lógica de programación

**Practicar la lógica de programación**, que incluye conceptos como variables, condicionales (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos proporcionan la base para resolver problemas de manera estructurada, tomar decisiones en el código, crear iteraciones controladas e interactuar eficazmente con los usuarios.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar eficientemente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde el principio es fundamental para construir una base sólida y exitosa en el campo de la programación.

#### Calentamiento en programación - Respuestas

1. **Mensaje de bienvenida**

   ```
   console.log('¡Bienvenido!');
   ```

2. **Saludo personalizado**

   ```
   nombre = 'Gui Lima';
   console.log(`¡Hola, ${nombre}!`);
   ```

3. **Saludo personalizado con alerta**

   ```
   nombre = 'Gui Lima';
   alert(`¡Hola, ${nombre}!`);
   ```

4. **Pregunta y respuesta utilizando prompt**

   ```
   lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
   console.log(lenguajePreferido);
   ```

5. **Suma de dos valores**

   ```
   valor1 = 42;
   let valor2 = 8;
   let resultado = valor1 + valor2;
   console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
   ```

6. **Resta de dos valores**

   ```
   valor1 = 10;
   let valor2 = 8;
   let resultado = valor1 - valor2;
   console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);
   ```

7. **Determinar si es mayor o menor de edad**

   ```
   edad = prompt('Ingresa tu edad:');
   if (edad > 17) {
       console.log('Eres mayor de edad.');
   } else {
       console.log('Eres menor de edad.');
   }
   ```

8. **Verificar si un número es positivo, negativo o cero**

   ```
   numero = parseFloat(prompt("Ingresa un número:"));
   if (numero > 0) {
       console.log("El número es positivo.");
   } else if (numero < 0) {
       console.log("El número es negativo.");
   } else {
       console.log("El número es cero.");
   }
   ```

9. **Imprimir números del 1 al 10 con un bucle while**

   ```
   numero = 1;
   while (numero <= 10) {
       console.log(numero);
       numero++;
   }
   ```

10. **Determinar si una nota es aprobada o reprobada**

    ```
    nota = 8; // Reemplaza con el valor de la nota que deseas probar
    if (nota >= 7) {
        console.log("Aprobado");
    } else {
        console.log("Reprobado");
    }
    ```

11. **Número aleatorio con Math.random**

    ```
    numeroAleatorio = Math.random();
    console.log(numeroAleatorio);
    ```

12. **Número entero aleatorio entre 1 y 10 con Math.random**

    ```
    numeroIntAleatorio = parseInt(Math.random() * 10) + 1;
    console.log(numeroIntAleatorio);
    ```

13. **Número entero aleatorio entre 1 y 1000 con Math.random**

    ```
    numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
    console.log(numeroIntAleatorio);
    ```
    */