function inicializar(){
    pedirComparar();
}

function pedirComparar(){
    nombres = new Array(3);
    edades = new Array(3);
    mayor = 0;
    posMayor = -1;
    for(x = 0; x < 3; x ++){
        nombres[x] = prompt("Introduce tu nombre:");
        pedirDeNuevo = true;
        while(pedirDeNuevo){
            edades[x] = prompt("Introduce tu edad:");
            if(!isNaN(edades[x])){
                pedirDeNuevo = false;
            }
        }
        if(edades[x] > mayor){
            posMayor = x;
            mayor = edades[x];
        }
    }
    document.getElementById("mayor").textContent = "El mayor es " + nombres[posMayor] + " con " + edades[posMayor] + " años";
}