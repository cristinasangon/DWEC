//Realiza un script que dada una cadena que introducimos desde una 
//prompt, comprobar si es o no un palíndromo.

let texto = "";
function inicializar(){
    texto = solicitarTexto("Introduzca una frase:");
    document.getElementById("palindromo").textContent = esPalindromo();
}

function solicitarTexto(mensaje) {
    while (texto.trim() === "") {
        texto = prompt(mensaje);
    }
    return texto;
}

function esPalindromo(){
    seguir = true;
    x = 0;
    y = texto.length - 1;
    while(seguir && (x < texto.length)){
        if(texto.charAt(x) != texto.charAt(y)){
            seguir = false;
        }
        x++;
        y--;
    }
    if(seguir){
        return "Es palindroma";
    }else{
        return "No es palindroma";
    }
}

