function inicializar(){
    document.getElementById("crear-ventana-gato1").onclick = function() {
        mostrarGatoAmpliado("img/1.jpg");
    };
    document.getElementById("crear-ventana-gato2").onclick = function() {
        mostrarGatoAmpliado("img/2.jpg");
    }
    ;document.getElementById("crear-ventana-gato3").onclick = function() {
        mostrarGatoAmpliado("img/3.jpeg");
    }
    ;document.getElementById("crear-ventana-gato4").onclick = function() {
        mostrarGatoAmpliado("img/4.jpeg");
    };
}

var nuevaVentana;

function mostrarGatoAmpliado(gato){
    nuevaVentana=window.open("", "segundaPag", "toolbar=yes, location=no, menubar=yes, resizable=yes, width=500, height=700");
    nuevaVentana.document.write("<html><head><title>gatito</title></head>");
    nuevaVentana.document.write('<body>');
    nuevaVentana.document.write('<img style="width: 100%;" src="'+ gato +'" alt="gato1">')
    nuevaVentana.document.write('<input type="button" value="cerrar" onclick="window.close()">');
    nuevaVentana.document.write("</body></html>");
}