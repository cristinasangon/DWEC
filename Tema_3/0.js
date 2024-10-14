
function inicializar(){
    document.getElementById("crear-ventana").onclick=crearNueva;
    document.getElementById("cerrar-ventana").onclick=cerrarNueva;
    document.getElementById("escribir-ventana").onclick=nueva;
}

var nuevaVentana;
function crearNueva(){
    nuevaVentana = window.open("http://www.cdpjosecabrera.es", "", "height=400,width=800");
}

function cerrarNueva(){
    nuevaVentana.close(); nuevaVentana = null;
}

function nueva(){
    nuevaVentana=window.open("", "segundaPag", "toolbar=yes, location=no, menubar=yes, resizable=yes, width=300, height=300");
    nuevaVentana.document.write("<html><head><title>Sin titulo</title></head>");
    nuevaVentana.document.write('<body>');
    nuevaVentana.document.write('<p>Con este boton cerramos la ventana</p>');
    nuevaVentana.document.write('<input type="button" value="cerrar" onclick="window.close()">');
    nuevaVentana.document.write("</body></html>");
}
