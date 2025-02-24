//Crea una lista vacía con el nombre listaGenerica.
let listaGenerica = [];

//Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista
function mostrarArray(lenguajes){
    for(let el=0; el < lenguajes.length; el++){
        console.log(lenguajes[el]);
    };
};
mostrarArray(lenguagesDeProgramacion);

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function invertirArray(lenguajes){
    for(let el = lenguajes.length - 1; el >= 0; el--){
        console.log(lenguajes[el]);
    };
};
invertirArray(lenguagesDeProgramacion);

//Crea una función que calcule el promedio de los elementos en una lista de números.
function promediarArray(lista){
    let total = 0;

    for(let el = 0; el < lista.length; el++){
        total += lista[el]; 
    };

    return total / lista.length;
};
promediarArray([3, 5, 1, 43, 5]);

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numeroMinimoMaximo(lista){
    let menor = lista[0];
    let mayor = lista[0];

    for(let el = 1; el < lista.length; el++){
        if(lista[el] > mayor){
            mayor = lista[el];
        }else if(lista[el] < menor){
            menor = lista[el];
        };
    };

    console.log(menor);
    console.log(mayor);
};
numeroMinimoMaximo([3, 5, 1, 43, 5]);

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarArray(lista){
    let suma = 0;

    for(let el = 0; el < lista.length; el++){
        suma += lista[el];
    };

    console.log(suma);
};
sumarArray([3, 5, 1, 43, 5]);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function mapearArray(array, buscar){
    for(let el = 0; el < array.length; el++){
        if(array[el] === buscar){
            return el;
        };
    };
    return -1;
};
mapearArray([3, 5, 1, 43, 5], 1);

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarMatrices(arr1, arr2){
    let caja = [];

    for(let el = 0; el < arr1.length; el++){
        caja.push(arr1[el] + arr2[el]);
    }

    return console.log(caja);
}
sumarMatrices([3, 5, 1, 43, 5], [1, 2, 3, 4, 5]);

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function powerArray(arr){
    let caja = [];

    for(let el = 0; el < arr.length; el++){
        caja.push(arr[el] ** 2)
    };
    return caja;
};
powerArray([3, 5, 1, 43, 5]);

