let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1001632123", nombre: "Mario", apellido: "Martinez", sueldo: 400.0 }
]
let esNuevo = false;
let roles=[];

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    let empleadoNuevo;
    if (esCedulaValido(valorCedula) & esNombreValido(valorNombre, 'lblErrorNombre') & esApellidoValido(valorApellido, 'lblErrorApellido') & esSueldoValido(valorSueldo, 'lblErrorSueldo')) {
        if (esNuevo) {
            let empleado = {}
            empleado.cedula = valorCedula;
            empleado.nombre = valorNombre;
            empleado.apellido = valorApellido;
            empleado.sueldo = valorSueldo;
            empleadoNuevo = agregarEmpleado(empleado);
            if (empleadoNuevo) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                deshabilitarCajasTexto();
                esNuevo=false;
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA: " + empleado.cedula);
                esNuevo=false;
            }
        }
        if(!esNuevo){
            let empleadoEncontrado= buscarEmpleado(valorCedula);
            empleadoEncontrado.nombre = valorNombre;
            empleadoEncontrado.apellido = valorApellido;
            empleadoEncontrado.sueldo = valorSueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
        }
        deshabilitarCajasTexto();
    }


}
limpiar = function(){
    mostrarTextoEnCaja('txtCedula',"");
    mostrarTextoEnCaja('txtNombre',"");
    mostrarTextoEnCaja('txtApellido',"");
    mostrarTextoEnCaja('txtSueldo',"");
    esNuevo=false;
    deshabilitarCajasTexto();
}
ejecutarBusqueda=function(){
    let valorCedula = recuperarTexto("txtBusquedaCedula");
    let busqueda=buscarEmpleado(valorCedula);
    if(busqueda==null){
        alert("EMPLEADO NO EXISTE");
    }else{
        mostrarTextoEnCaja("txtCedula",busqueda.cedula);
        mostrarTextoEnCaja("txtNombre",busqueda.nombre);
        mostrarTextoEnCaja("txtApellido",busqueda.apellido);
        mostrarTextoEnCaja("txtSaldo",busqueda.saldo);
        deshabilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSaldo");
        
    }

}
ejercutarNuevo = function () {
    esNuevo = true;
    habilitarComponente('txtCedula');
    habilitarComponente('txtNombre');
    habilitarComponente('txtApellido');
    habilitarComponente('txtSueldo');
    habilitarComponente('btnGuardar');

}
buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    if (buscarEmpleado(empleado.cedula) == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }

}


esSueldoValido = function (sueldo, componente) {
    let valido;
    if (sueldo >= 400 && sueldo <= 5000) {
        valido = true;
        mostrarTexto(componente, "");
    } else {
        valido = false;
        if (isNaN(sueldo)) {
            mostrarTexto(componente, "CAMPO OBLIGATORIO");
        } else {
            mostrarTexto(componente, "Sueldo entre 400.0 y 5000.0");
        }

    }
    return valido;
}

esApellidoValido = function (apellido, componente) {
    let elementoApellido;
    let validacion = true;
    if (apellido.length >= 3) {
        for (let i = 0; i < apellido.length; i++) {
            elementoApellido = apellido.charAt(i);
            if (!esMayuscula(elementoApellido)) {
                validacion = false;
            }
        }
        if (validacion == false) {
            mostrarTexto(componente, "Ingresar solo letras Mayusculas");
        } else {
            mostrarTexto(componente, "");
        }

    } else {
        validacion = false;
        if (apellido == "") {
            mostrarTexto(componente, "CAMPO OBLIGATORIO");
        } else {
            mostrarTexto(componente, "Ingresar al menos 3 letras Mayusculas");
        }

    }
    return validacion;
}
esNombreValido = function (nombre, componente) {
    let elementoNombre;
    let validacion = true;
    if (nombre.length >= 3) {
        for (let i = 0; i < nombre.length; i++) {
            elementoNombre = nombre.charAt(i);
            if (!esMayuscula(elementoNombre)) {
                validacion = false;
            }
        }
        if (validacion == false) {
            mostrarTexto(componente, "Ingresar solo letras Mayusculas");
        } else {
            mostrarTexto(componente, "");
        }

    } else {
        validacion = false;
        if (nombre == "") {
            mostrarTexto(componente, "CAMPO OBLIGATORIO");
        } else {
            mostrarTexto(componente, "Ingresar al menos 3 letras Mayusculas");
        }

    }
    return validacion;
}
esCedulaValido = function (cedula) {
    let digito = 0;
    let valido = false;
    if (cedula.length == 10) {
        for (let i = 0; i < cedula.length; i++) {
            let caracter = cedula.charAt(i);
            if (esDigito(caracter)) {
                digito++;
            }
        }
        if (digito != 10) {
            mostrarTexto('lblErrorCedula', "Ingresar 10 digitos");
            valido = false;
        } else {
            mostrarTexto('lblErrorCedula', "");
            valido = true;
        }

    } else {
        if (cedula == "") {
            mostrarTexto('lblErrorCedula', "CAMPO OBLIGATORIO");
        } else {
            mostrarTexto('lblErrorCedula', "Ingresar 10 digitos");
        }
    }
    return valido;
}

deshabilitarCajasTexto = function () {
    deshabilitarComponente('txtCedula');
    deshabilitarComponente('txtNombre');
    deshabilitarComponente('txtApellido');
    deshabilitarComponente('txtSueldo');
    deshabilitarComponente('btnGuardar');
}
mostrarOpcionEmpleado = function () {
    mostrarComponente('divEmpleado');
    ocultarComponente('divRol');
    ocultarComponente('divResumen');
    deshabilitarCajasTexto();
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    mostrarComponente('divRol');
    ocultarComponente('divEmpleado');
    ocultarComponente('divResumen');
    deshabilitarComponente('btnGuardarRol');
    mostrarRoles();
}
mostrarOpcionResumen = function () {
    mostrarComponente('divResumen');
    ocultarComponente('divEmpleado');
    ocultarComponente('divRol');
}
mostrarEmpleados = function () {
    let cmpTablaEmpleados = document.getElementById('tablaEmpleados');
    let elementoEmpleado;
    let contenidoTabla = "<table><tr>"
        + "<th>CEDULA</th>"
        + "<th>NOMBRE</th>"
        + "<th>APELLIDO</th>"
        + "<th>SUELDO</th>"
        + "</tr>"
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>";
    cmpTablaEmpleados.innerHTML = contenidoTabla;
}

buscarRol = function(){
    let valorCedula=recuperarTexto("txtBusquedaCedulaRol");
    let empleadoEncontrado=buscarEmpleado(valorCedula);
    if(empleadoEncontrado!=null){
        mostrarTexto("infoCedula",empleadoEncontrado.cedula);
        mostrarTexto("infoNombre",empleadoEncontrado.nombre+" "+empleadoEncontrado.apellido);
        mostrarTexto("infoSueldo",empleadoEncontrado.sueldo);
        
    }else{
        alert("El empleado no existe");
    }
}

calcularAporteEmpleado = function(sueldo){
    let valorAporte= (sueldo*9.45)/100;
    return valorAporte;
}

calcularValorAPagar = function(sueldo, aporte, descuento){
    let valorAPagar= sueldo-aporte-descuento;
    return valorAPagar;
}

calcularRol = function(){
    let valorSueldo=recuperarTextoDiv("infoSueldo");
    let valorDescuento=recuperarFloat("txtDescuentos");
    let valorAporte;
    let valor;
    if( valorDescuento!=""&&valorDescuento>=0&&valorDescuento<=valorSueldo){
        valorAporte=calcularAporteEmpleado(valorSueldo);
        valor=calcularValorAPagar(valorSueldo,valorAporte,valorDescuento);
        mostrarTexto('infoIESS',valorAporte);
        mostrarTexto("infoPago", valor);
        habilitarComponente('btnGuardarRol');
    }

}

buscarRolArreglo=function(cedula){
    let rolEncontrado;
    let elementoRol;
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        if(elementoRol.cedula==cedula){
            rolEncontrado=elementoRol;
            break;
        }else{
            rolEncontrado= null;
        }
    }
    return rolEncontrado;
}
agregarRol = function(rol){
    let rolEncontrado=buscarRolArreglo(rol.cedula);
    if(rolEncontrado==null){
        roles.push(rol);
        alert("Se agrego el Rol con Exito");
        return true;
    }else{
        alert("Empleado ya existente");
        return false;
    }   
    
}

calcularAporteEmpleador= function(sueldo){
    let valorAPagar= (sueldo*11.15)/100;
    return valorAPagar;
}

guardarRol= function(){
    let valorAPagarEmpleador;
    let valorAporte=recuperarFloatDiv('infoIESS');
    let valorAPagar=recuperarFloatDiv("infoPago");
    let valorNombre=recuperarTextoDiv('infoNombre');
    let valorCedula=recuperarTextoDiv("infoCedula");
    let valorSueldo=recuperarFloatDiv("infoSueldo");

    valorAPagarEmpleador=calcularAporteEmpleador(valorSueldo);
    rol={}

    rol.cedula=valorCedula;
    rol.nombre=valorNombre;
    rol.sueldo=valorSueldo;
    rol.valorAPagar=valorAPagar;
    rol.aporteEmpleado=valorAporte;
    rol.aporteEmpleador=valorAPagarEmpleador;
    if(agregarRol(rol)==true){
        alert("Rol Guardado con Exito");
        deshabilitarComponente('btnGuardarRol');
        mostrarRoles();

    }
    

    
}

mostrarRoles = function(){
    let cmpTabla= document.getElementById('tablaResumen');
    let elementoRol;
    let contenidoTabla="<table><tr>"
    +"<th>CEDULA</th>"
    +"<th>NOMBRE</th>"
    +"<th>VALOR A PAGAR</th>"
    +"<th>APORTE EMPLEADO</th>"
    +"<th>APORTE EMPLEADOR</th></tr>"
    for(let i=0;i<roles.length;i++){
        elementoRol=roles[i];
        contenidoTabla +=
            "<tr><td>" + elementoRol.cedula + "</td>"
            + "<td>" + elementoRol.nombre + "</td>"
            + "<td>" + elementoRol.valorAPagar + "</td>"
            + "<td>" + elementoRol.aporteEmpleado + "</td>"
            + "<td>" + elementoRol.aporteEmpleador + "</td>"
            + "</tr>"
    }
    contenidoTabla+="</table>"
    cmpTabla.innerHTML=contenidoTabla;
    mostrarTotales();
}

mostrarTotales = function(){
    let totalEmpleado=0;
    let totalEmpleador=0;
    let totalAPagar=0;
    let elementoRoles;
    let totalNominal;
    for(let i =0;i<roles.length;i++){
        elementoRoles=roles[i];
        totalEmpleado+=elementoRoles.aporteEmpleado;
        totalEmpleador+=elementoRoles.aporteEmpleador;
        totalAPagar+=elementoRoles.valorAPagar;
    }
    mostrarTexto('infoTotalPago', totalAPagar);
    mostrarTexto('infoAporteEmpresa', totalEmpleador);
    mostrarTexto('infoAporteEmpleado', totalEmpleado);
    totalNominal=totalEmpleado+totalEmpleador+totalAPagar;
    mostrarTexto('infoTotalNominal', totalNominal);

}