
function inicializar(){
    nuevaVentana()
    document.getElementById("abrir-link").onclick=abrirLink;
}

var nuevaVentana;

function nuevaVentana(){
    nuevaVentana = window.open("", "ventana", "height=400,width=800");
}

function abrirLink(){
    var url = document.getElementById("url").value;
    
    // Verifica si se ingresó una URL
    if (url) {
        // Abre una nueva ventana con la URL proporcionada por el usuario
        nuevaVentana = window.open(url, "ventana", "height=400,width=800");
    } else {
        // Muestra una alerta si el campo está vacío
        alert("No se ha podido abrir la pagina por falta de url");
    }
}
