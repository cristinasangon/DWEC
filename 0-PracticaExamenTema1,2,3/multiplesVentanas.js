function inicializar(){
    document.getElementById("abrirVentanas").onclick = function(){abrirCincoVentanas()}
}

var ventana;

function abrirCincoVentanas(){
    for(x = 0; x < 5; x++){
        ventana = window.open("", x, "height = 300, width= 400");
    }
}

