function inicializar(){
    //DEVUELVE LA LONGITUD DE LA CADENA
    let cadena = "Hola esto es una cadena";
    console.log("La longitud de la cadena es " + cadena.length);

    //CONVIERTE LA CADENA A MAYUSCULAS O MINUSCULAS
    cadena = "minusculas a mayusculas";
    console.log(cadena.toUpperCase);

    cadena = "MAYUSCULAS A MINUSCULAS";
    console.log(cadena.toLowerCase);

    //DEVUELVE LA POSICION EN LA QUE SE ENCUENTRA EL STRING
    cadena = "Cristina Sanchez";
    console.log("La letra 's' aparece en la posicion " + cadena.indexOf('s'));
    console.log("La Palabra 'Sanchez' aparece en la posicion " + cadena.indexOf('Sanchez'));

    //EXTRAE LOS CARACTERES EN EL RANGO QUE LE INDIQUE
    cadena = "Hola esto es una cadena";
    console.log("Posicion 3 hasta el final '" + cadena.substring(3) + "'");
    console.log("Posicion 3 hasta 7 '" + cadena.substring(3, 7) + "'");

    //EXTRAE LOS CARACTERES EN EL RANGO QUE LE INDIQUE USANDO NUMEROS NEGATIVOS
    cadena = "Hola esto es una cadena";
    console.log(cadena.slice(-3));
    console.log(cadena.slice(2));
    console.log(cadena.slice(0 - 2));

    //ELIMINA LOS ESPACIOS AL INICIO Y AL FINAL DE LA CADENA
    cadena = "                Hola esto es una cadena            ";
    console.log("'" + cadena + "' quitando espacios es '" + cadena.trim() + "'");
    
    //DEVUELVE VALOR VOLEANO SI EMPIEZA POR EL VALOR INDICADO
    cadena = "Hola esto es una cadena";
    console.log(cadena.startsWith('Hola'));
    console.log(cadena.startsWith('Adios'));

    //DEVUELVE VALOR VOLEANO SI TERMINA POR EL VALOR INDICADO
    cadena = "Hola esto es una cadena";
    console.log(cadena.endsWith('ena'));
    console.log(cadena.endsWith('esto'));

    //DEVUELVE VALOR VOLEANO SI LA CADENA INCLUYE EL VALOR INDICADO
    cadena = "Hola esto es una cadena";
    console.log(cadena.includes('ena'));
    console.log(cadena.includes('esto'));
    console.log(cadena.includes('adios'));

    //REPITE EL STRING EL NUMERO DE VECES QUE LE INDIQUEMOS
    cadena = "Hola";
    console.log(cadena.repeat(3));

    //TE DA EL CARACTER QUE HAY EN LA POSICION INDICADA
    cadena = "Hola, me, llamo, Cristina";
    console.log(cadena.charAt(17));

    //TE DA EL CODIGO DEL CARACTER QUE HAY EN LA POSICION INDICADA
    console.log(cadena.charCodeAt(17));
    
    //UNE LAS DOS CADENAS
    let cadena1 = "Hola ";
    let cadena2 = "mundo";
    console.log(cadena1.concat(cadena2));

    //REEMPLAZA LA PRIMERA PARABRA INDICADA POR LA SEGUNDA INDICADA
    console.log(cadena.replace("llamo", "soy"));

    //SEPARA EN UN ARRAY LOS EEMENTOS DE LA CADENA CON EL VALOR DE SEPARACION INDICADO
    console.log(cadena.split(","));

    
}
