function inicializar() {
    pedirDatos();
    devolverDatos();
}

let nombre = "";
let fecha = "";

function pedirDatos() {
    seguir = true;
    while(seguir){
        nombre = prompt("Introduce tu nombre y apellidos: ");
        if(nombre != ""){
            seguir = false;
        }
    }

    seguir = true;
    while(seguir){
        fecha = prompt("Introduce tu fecha de nacimiento DD/MM/AAAA: ");
        if(fecha != ""){
            if(fechaValida(fecha)){
                if(validarFechaNacimiento() == 1){
                    seguir = false;
                }
            }
        }
    }

}

function fechaValida(fecha) {
    //CONTROLAR QUE NO SE INTRODUZCAN CARACTERES NO NUMERICOS
    fechaArray = fecha.split("/");
    if(isNaN(fechaArray[0]) || isNaN(fechaArray[1]) || isNaN(fechaArray[2])){
        return false;
    }

    //CONTROLAR DIAS Y MESES
    if(fechaArray[1] == 1 || fechaArray[1] == 3 || fechaArray[1] == 5 || fechaArray[1] == 7 || fechaArray[1] == 8 || fechaArray[1] == 10 || fechaArray[1] == 12){
        if(fechaArray[0] > 31 || fechaArray[0] < 1){
            return false;
        }
    }else if(fechaArray[1] == 4 || fechaArray[1] == 6 || fechaArray[1] == 9 || fechaArray[1] == 11){
        if(fechaArray[0] > 30 || fechaArray[0] < 1){
            return false;
        }
    }else{
        if(esBisiesto(fechaArray[2])){
            if(fechaArray[0] > 29 || fechaArray[0] < 1){
                return false;
            }
        }else{
            if(fechaArray[0] > 28 || fechaArray[0] < 1){
                return false;
            }
        }
    }
    return true;
}

function esBisiesto(anio){
    if((anio%4) == 0){
        if((anio%100) == 0){
            if((anio%400) != 0){
                return false;
            }
        }
    }
    return true;
}

function devolverDatos(){
    let posPrimA = -1;
    for(let x = 0; x < nombre.length; x++){
        if(nombre.charAt(x) == "a" || nombre.charAt(x) == "A"){
            posPrimA = x;
            break;
        }
    }

    let posUltA = -1;
    for(let x = nombre.length - 1; x > 0 ; x--){
        if(nombre.charAt(x) == "a"  || nombre.charAt(x) == "A"){
            posUltA = x;
            break;
        }
    }

    let estacion = "";
    if(fechaArray[1] == 3 || fechaArray[1] == 4 || fechaArray[1] == 5){
        estacion = "primavera";
    }else if(fechaArray[1] == 6 || fechaArray[1] == 7 || fechaArray[1] == 8){
        estacion = "verano";
    }else if(fechaArray[1] == 9 || fechaArray[1] == 10 || fechaArray[1] == 11){
        estacion = "otoño";
    }else{
        estacion = "invierno";
    }

    document.getElementById("saludo").textContent = "Hola " + nombre;
    document.getElementById("cantCaracteres").textContent = "Tu nombre completo (nombre y apellidos) tiene " + nombre.length + " caracteres, incluidos espacios";
    if(posPrimA == -1){
        document.getElementById("posPrimA").textContent = "Tu nombre no tiene ninguna letra 'A'";
    }else{
        document.getElementById("posPrimA").textContent = "La primera letra 'A' de tu nombre esta en la posicion " + posPrimA;
        document.getElementById("posUltA").textContent = "La ultima letra 'A' de tu nombre esta en la posicion " + posUltA;
    }
    document.getElementById("sin3Prim").textContent = "Tu nombre menos las tres primeras letras es " + nombre.substring(3, nombre.length);
    document.getElementById("mayus").textContent = "Tu nombre todo en MAYUSCULAS es " + nombre.toUpperCase();
    document.getElementById("edad").textContent = "Tu edad es " + calculaEdad() + " años";
    document.getElementById("estacion").textContent = "Naciste un feliz dia de " + estacion + " del año " + fechaArray[2];
    
}

function calculaEdad(){
    const [dia, mes, año] = fechaArray;
    const nacimiento = new Date(año, mes - 1, dia);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    if (hoy < new Date(hoy.getFullYear(), mes - 1, dia)) {
        edad--;
    }
    return edad;
}

function validarFechaNacimiento() {
    const [dia, mes, año] = fechaArray;
    const fechaNacimiento = new Date(año, mes - 1, dia);
    const hoy = new Date();

    hoy.setHours(0, 0, 0, 0);

   if (fechaNacimiento > hoy) {
        return 0;
    } else {
        return 1;
    }
}