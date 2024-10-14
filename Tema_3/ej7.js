// Realizar un script que para una cadena que introducimos desde una 
// prompt, me cuente el número de vocales que tiene la cadena de texto. 
// Ejemplo "El perro de San Roque no tiene rabo porque Rámon Rodríguez 
// se lo ha cortado".

function inicializar() {
    let resultadoVocales = vocales();  // Llamamos a la función una sola vez y almacenamos el resultado
    document.getElementById("vocales").textContent = resultadoVocales;  // Mostrar las vocales encontradas
    document.getElementById("cantVocales").textContent = resultadoVocales.length;  // Mostrar la cantidad de vocales
}

function vocales() {
    let frase = prompt("Introduce una frase: ");
    let vocalesEncontradas = "";

    for (let x = 0; x < frase.length; x++) {  // Recorremos la frase correctamente
        if (esVocal(frase.charAt(x))) {
            vocalesEncontradas += frase.charAt(x);
        }
    }
    return vocalesEncontradas;  // Retornamos las vocales encontradas
}

function esVocal(letra) {
    let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vocales.includes(letra);  // Verificamos si la letra es una vocal
}
