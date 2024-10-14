function inicializar(){
    document.getElementById("img1").onclick = function(){mostrarImg("img/1.jpg")};
    document.getElementById("img2").onclick = function(){mostrarImg("img/2.jpg")};
    document.getElementById("img3").onclick = function(){mostrarImg("img/3.jpeg")};
    document.getElementById("img4").onclick = function(){mostrarImg("img/4.jpeg")};
}

var ventana;
function mostrarImg(img){
    ventana = window.open("", "ventana", "height=400, width=500");
    ventana.document.write("<html><head><title>Gato grande</title></head>");
    ventana.document.write("<body>");
    ventana.document.write("<img src = " + img + " alt='fotoGato' width='100%'>");
    ventana.document.write("<input type='button' value='Cerrar ventana' onclick='window.close();'/>");
    ventana.document.write("</body></html>");
}