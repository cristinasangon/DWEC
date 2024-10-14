// Realiza un script que pida por teclado 3 edades y 3 nombres e 
// indique el nombre del mayor.

function inicializar(){
    document.getElementById("mayor").textContent = esMayor();
}

function esMayor(){
    let nombres = new Array(3);
    let edades = new Array(3);

    for(x = 0; x < nombres.length; x++){
        nombres[x] = prompt("Nombre: ");
        edades[x] = prompt("Edad: ");
    }

    let mayor = ["", 0];
    for(x = 0; x < edades.length; x++){
        if(edades[x] > mayor[1]){
            mayor[1] = edades[x];
            mayor[0] = x;
        }
    }

    return nombres[mayor[0]];
}