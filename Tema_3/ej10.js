let activa_cronometro;
cronometro_activado = true;

function inicializar() {
    const now = new Date();
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("cronometro").textContent = `${horas}:${minutos}:${segundos}`;
    
    cronArray = [horas, minutos, segundos];

    activa_cronometro = setInterval("emitir_con_setInterval()", 1000);

    document.getElementById("detenerBtn").onclick = detener_interval;
    document.getElementById("reanudarBtn").onclick = continuar_interval;
}

let cronArray; 

function emitir_con_setInterval() {
    let horas = parseInt(cronArray[0], 10);
    let minutos = parseInt(cronArray[1], 10);
    let segundos = parseInt(cronArray[2], 10);

    segundos++;
    
    if (segundos >= 60) {
        minutos++;
        segundos = 0;
    }

    if (minutos >= 60) {
        horas++;
        minutos = 0;
    }

    cronArray[0] = String(horas).padStart(2, '0');
    cronArray[1] = String(minutos).padStart(2, '0');
    cronArray[2] = String(segundos).padStart(2, '0');

    document.getElementById("cronometro").textContent = cronArray.join(":");
}

function detener_interval() {
    clearInterval(activa_cronometro); 
    cronometro_activado = false;
}

function continuar_interval() {
    const now = new Date();
    const horas = String(now.getHours()).padStart(2, '0');
    const minutos = String(now.getMinutes()).padStart(2, '0');
    const segundos = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("cronometro").textContent = `${horas}:${minutos}:${segundos}`;
    
    cronArray = [horas, minutos, segundos];

    activa_cronometro = setInterval("emitir_con_setInterval()", 1000);

    document.getElementById("detenerBtn").onclick = detener_interval;
    cronometro_activado = true;
}
