function inicializar(){
    pedirFraseContarVocales();
}

function pedirFraseContarVocales(){
    frase = prompt("Introduce una frase:");
    vocales = 0;
    for(x = 0; x < frase.length; x++){
        if(frase.charAt(x) == "a" || frase.charAt(x) == "e" || frase.charAt(x) == "i" || frase.charAt(x) == "o" || frase.charAt(x) == "u" ){
            vocales++;
        }
    }
    document.getElementById("numVocales").textContent = "Hay " + vocales + " vocales en tu frase";
}