obtenerAleatorio= function(){
    let numeroRandom = Math.floor(Math.random() * 3) + 1;
    return numeroRandom;
}

generarElemento = function(){
    let numeroRandom=obtenerAleatorio();
    let cadenaJuego;
    if(numeroRandom==1){
        cadenaJuego="piedra";
    }else if(numeroRandom==2){
        cadenaJuego="papel";
    }else if(numeroRandom==3){
        cadenaJuego="tijera";
    }
    return cadenaJuego;
}

determinarGanador= function(eleccionJugador1, eleccionJugador2){
    let resultado;
    if(eleccionJugador1==eleccionJugador2){
        resultado=0;
    }else if(eleccionJugador1=='papel'& eleccionJugador2=='piedra'){
        resultado=1;
    }else if(eleccionJugador1=='tijera'& eleccionJugador2=='papel'){
        resultado=1;
    }else if(eleccionJugador1=='piedra'& eleccionJugador2=='tijera'){
        resultado=1;
    }else if(eleccionJugador1=='piedra'& eleccionJugador2=='papel'){
        resultado=2;
    }else if(eleccionJugador1=='papel'& eleccionJugador2=='tijera'){
        resultado=2;
    }else if(eleccionJugador1=='tijera'& eleccionJugador2=='piedra'){
        resultado=2;
    }
    return resultado;
}   
generarRuta = function(nombre){
    return "./imagenes/" + nombre + ".jpg";
}