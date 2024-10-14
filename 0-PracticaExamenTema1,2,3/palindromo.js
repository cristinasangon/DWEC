function inicializar(){
    frase = prompt("Introduce una frase:");
    esPalindromo();
}


function esPalindromo(){
    var y = frase.length -1;
    for(x = 0; x < frase.length; x++){
        if(frase.charAt(x) != frase.charAt(y)){
            document.getElementById("palindromo").textContent = "No es palindromo";
            return;
        }
        y--;
    }
    document.getElementById("palindromo").textContent = "Es palindromo";
}