veces = 0;
num_color = 1;
activa_color = setInterval("emitir_con_setInterval()", 1000);

function emitir_con_setInterval(){
    if(num_color==1){
        document.bgColor = "BlueViolet";
        num_color = 2;
    }else{
        document.bgColor = "LightSeaGreen";
        num_color = 1;
    }
    veces+=1;
    document.getElementById("numero").textContent = veces + 1;

    if(veces >= 5){
        clearInterval(activa_color);
        alert("Ya van 5 veces el cambio de color...se acabo");
    }
}