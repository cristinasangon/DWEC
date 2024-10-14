var ventana;

function inicializar(){
    ventana = window.open("", "ventana", "height=500,width=800");
    document.getElementById("botonAceptar").onclick = function(){abrirEnlace()}
}

function abrirEnlace(){
    enlace = document.getElementById("enlace").value;
    ventana = window.open(enlace, "ventana", "height=500,width=800");
}

