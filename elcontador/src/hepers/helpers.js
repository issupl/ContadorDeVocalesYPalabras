function cuentaVocales(letra){

    let condicion = false;

    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
        condicion = true;
    }
    
    return condicion;

}

function cuentaPalabras(letraNmenosUno,letraN){

    let condicion = false;
    if(letraN === " " && letraNmenosUno !== " "){
        condicion = true;
    }

    return condicion;
}

function entradaDeTexto(texto){

    let convertida = new String(texto);
  
    let cantidades ={
        numVocales:0,
        numPalabras:0
    }
    
    if(convertida[convertida.length - 1] !== " "){
        convertida = convertida + ' ';
    }

    for(let i = 0; i < convertida.length ; i++){
        if(cuentaVocales(convertida[i])){
            cantidades.numVocales ++;
        }
        if(cuentaPalabras(convertida[i],convertida[i+1])){
            cantidades.numPalabras ++;
        }

        
    }

    return cantidades;
}

export {entradaDeTexto};