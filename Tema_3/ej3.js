function inicializar(){
    document.getElementById("cinco-ventanas").onclick=abrirCincoVentanas;
}

var nuevaVentana;
function abrirCincoVentanas(){
    for(x = 0; x < 5; x++){
        let nombreVentana = "ventana" + x;
        nuevaVentana=window.open("", nombreVentana, "toolbar=yes, location=no, menubar=yes, resizable=yes, width=300, height=300");
    }
}