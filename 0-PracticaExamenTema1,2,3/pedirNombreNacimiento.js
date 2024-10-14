function inicializar(){
    pedirNombre();
    pedirNacimiento();
    mostrarDatos();
}

function pedirNombre(){
    nombre = "";
    while(nombre == ""){
        nombre = prompt("Introduce tu nombre");
        if(nombre == ""){
            alert("No puedes instroducir un dato vacio");
        }
    }
}

function pedirNacimiento(){
    fechaNacimiento = "";
    fechaActual = new Date();

    fechaInvalida = true;
    
    while(fechaInvalida){
        fechaNacimiento = prompt("Introduce tu fecha de nacimiento (DD/MM/AAAA)");
        nacimientoArray = fechaNacimiento.split("/");
        if(isNaN(nacimientoArray[0]) || isNaN(nacimientoArray[1]) || isNaN(nacimientoArray[2])){
            alert("Has introducido datos no validos, la fecha debe estar escrita con numeros y con el siguiente formato: DD/MM/AAAA");
        }else if((fechaActual.getDate()) < nacimientoArray[0] && (fechaActual.getMonth() + 1) <= nacimientoArray[1] && (fechaActual.getFullYear()) <= nacimientoArray[2]){
                alert("No has podido nacer porque la fecha que has introducido es futura a hoy");
        }else if(nacimientoArray[1] > 12 || nacimientoArray[1] < 1){
                alert("El mes " + nacimientoArray[1] + " no existe");
        }else if(nacimientoArray[0] < 1){
                alert("Los dias no pueden ser <= 0");
        }else if(nacimientoArray[1] == 4 || nacimientoArray[1] == 6 || nacimientoArray[1] == 9 || nacimientoArray[1] == 11){
            if(nacimientoArray[0] > 30){
                alert("Los meses Abril, Junio, Septiembre y Noviembre solo tienen 30 dias y has introducido " + nacimientoArray[0]);
            }
        }else if(nacimientoArray[1] == 1 || nacimientoArray[1] == 3 || nacimientoArray[1] == 5 || nacimientoArray[1] == 7  || nacimientoArray[1] == 8  || nacimientoArray[1] == 10  || nacimientoArray[1] == 12){
            if(nacimientoArray[0] > 31){
                alert("Los meses Enero, Marzo, Mayo, Julio, Agosto, Octubre y Diciembre solo tienen 30 dias y has introducido " + nacimientoArray[0]);
            }
        }else if(nacimientoArray[1] == 2){
            if(esBisiesto(nacimientoArray[2]) && nacimientoArray[0] > 29){
                alert("Febrero de " + nacimientoArray[2] + " tiene 29 dias por ser bisiesto pero has intrducido " + nacimientoArray[0]);
            }else{
                if(nacimientoArray[0] > 28){
                    alert("Febrero de " + nacimientoArray[2] + " tiene 28 dias porque no es bisiesto pero has intrducido " + nacimientoArray[0]);
                }
            }
        }else{
            break;
        }
    }
}

function esBisiesto(año){
    if(año%4 == 0){
        if(año%100 == 0){
            if(año%400 == 0){
                return true;
            }else{
                return false;
            }
        }else{
            return true;
        }
    }
}

function mostrarDatos(){
    edad = fechaActual.getFullYear() - nacimientoArray[2];
    if(fechaActual.getMonth() + 1 < nacimientoArray[1]){
        edad--;
    }else if(fechaActual.getMonth() - 1 == nacimientoArray[1] && fechaActual.getDate() < nacimientoArray[0]){
        edad--;
    }

    document.getElementById("edad").textContent = "Tu edad es " + edad;
}