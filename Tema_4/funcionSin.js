var array = [1, 2, 3, 4, 5];

function inicializar(){
    //numero =Number(prompt("Introduce un numero para quitar al array:"));
    console.log(array.sin('3'));
    console.log(array.sin('C'));
}

Array.prototype.sin = function(num){
    if(isNaN(num)){
        return "DATO ERRONEO";
    }

    var nuevaArray = [];
    for(var x = 0; x < array.length; x++){
        if(array[x] != num){
            nuevaArray.push(array[x]);
        }
    }
    return nuevaArray;
}