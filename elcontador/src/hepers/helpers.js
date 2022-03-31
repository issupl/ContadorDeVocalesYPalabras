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

function engadirEspacioFinal(frase){

    if(frase[frase.length - 1] !== " "){
        frase = frase + ' ';
    }
    return frase;
}

function entradaDeTexto(texto){

    let convertida = new String(texto);
  
    let cantidades ={
        numVocales:0,
        numPalabras:0
    }
    
    convertida = engadirEspacioFinal(convertida);


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