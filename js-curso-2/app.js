let title = document.querySelector('h1');
title.textContent = "Hora del Desafío";

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
let clickedMsg = "El botón fue clicado";

function onClickConsole(){
    return alert(clickedMsg);
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
function onClickPrompt(){
    let ciudad = prompt('Indique el nombre de una ciudad de Brasil');

    //Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
    return alert(`Estuve en ${ciudad} y me acordé de ti`);
}
