function inicializar(){
    document.getElementById("crear-ventana").onclick=crearNueva;
    document.getElementById("cerrar-ventana").onclick=cerrarNueva;
}

var nuevaVentana;
function crearNueva(){
    nuevaVentana = window.open("http://www.google.es", "", "height=400,width=800");
}

function cerrarNueva(){
    nuevaVentana.close(); nuevaVentana = null;
}
