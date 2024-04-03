let puntosUsuario=0;
let puntosComputador=0;

jugar = function(seleccionado){
    let  eleccion=generarElemento();
    let ruta=generarRuta(eleccion);
    mostrarImagen("lblImagen",ruta );
    mostrarTexto("lblSeleccion", "Seleccion Usuario:"+ seleccionado);
    let resultadoGanador=determinarGanador(eleccion,seleccionado);
    if(resultadoGanador==0){
        mostrarTexto("lblResultado", "EMPATE");
    }else if(resultadoGanador==1){
        mostrarTexto("lblResultado", "PERDISTE LA PARTIDA!!");
        puntosComputador=puntosComputador+1;
        mostrarTexto("lblPuntosComputador",puntosComputador);
    }else if(resultadoGanador==2){
        mostrarTexto("lblResultado", "GANASTE LA PARTIDA!!");
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("lblPuntosUsuario",puntosUsuario);
    }
    
    if(puntosUsuario==5){
        mostrarTexto("lblFinal", "HAS GANADO EL JUEGO");
    }else if(puntosComputador==5){
        mostrarTexto("lblFinal", "EL COMPUTADOR TE HA VENCIDO");
    }  
    

    
}

limpiar= function(){
    puntosUsuario=0;
    puntosComputador=0;
    mostrarTexto("lblResultado", "");
    mostrarImagen("lblImagen","");
    mostrarTexto("lblPuntosUsuario", "");
    mostrarTexto("lblPuntosComputador","");
    mostrarTexto("lblFinal", "");
    mostrarTexto("lblSeleccion", "");

}