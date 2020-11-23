//registro e implementacion del listener que realiza cambios cuando la llamada asincronica cambia de estado
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
        if(this.status == 200) {   
            if(document.getElementById("notificacion")) (document.getElementById("notificacion").remove());
            var xml = xhttp.responseXML;
            actualizarTablas(xml);
        }
        else mostrarError("Error "+this.status + ' | Con mensaje: "'+this.statusText+'"');
    }    
  };

//registro e implementacion del listener del boton que hace la llamada asincronica al servidor
var boton = document.getElementById('botonTraerDatos');
boton.addEventListener('click',()=>{
    limpiarTablas();
    xhttp.open("GET", "http://localhost/ficha_convocatorias.xml", true);
    xhttp.send();
});

/*metodo general que dispara las actualizaciones de datos en todsa las tablas
Asume que el parametro con la información que le pasan contiene los datos bien formados */
function actualizarTablas(datos) {    
    actualizarTablaDatosConvocatoria(datos.querySelector("convocatoria"));
    actualizarTablaDatosPliego(datos.querySelector("pliegos").querySelector("registro"));
    actualizarTablaCondicionesPliego(datos.querySelector("pliegos_articulos").querySelectorAll("registro"));
    actualizarTablaArticulos(datos.querySelector("get_items_solicitados"));
}

//funcion auxiliar que actualiza los dato de la tabla Datos Convocatoria
function actualizarTablaDatosConvocatoria(datos) {
    var tabla = document.getElementById("tablaDatosConvocatoria");
    tabla.innerHTML = "<tr><td>"+ datos.getAttribute("expediente_tipo_documentacion") +"</td>"+"<td>"+ datos.getAttribute("expediente_numero") +"/"+ datos.getAttribute("expediente_ejercicio") +"</td>"+"<td>"+ datos.getAttribute("asunto_convocatoria") +"</td></tr>";
}

//funcion auxiliar que actualiza los dato de la tabla Datos Pliego
function actualizarTablaDatosPliego(datos) {
    var tabla = document.getElementById("tablaDatosPliego");
    tabla.innerHTML = "<tr><td>"+ datos.getAttribute("retiro_pliego_direccion")+"</td>"+"<td>"+ datos.getAttribute("retiro_pliego_plazo_horario")+"</td>"+"</td>"+"<td>"+ datos.getAttribute("acto_apertura_direccion")+"</td>"+"<td>"+ (new Date(datos.getAttribute("acto_apertura_fecha_inicio"))).toLocaleDateString()+"</td>"+"<td>"+ datos.getAttribute("acto_apertura_horario_inicio").slice(0,2)+":"+datos.getAttribute("acto_apertura_horario_inicio").slice(2)+" hs</td></tr>";
}

//funcion auxiliar que actualiza los dato de la tabla Condiciones Pliego
function actualizarTablaCondicionesPliego(lista_datos){
    var tabla = document.getElementById("tablaCondicionesPliego");
    //tabla.innerHTML = "<tr><td>"+ datos.getAttribute("numero") +"</td>"+"<td>"+ datos.getAttribute("titulo") +"</td>"+"<td>"+ datos.getAttribute("descripcion") +"</td></tr>";
    for(datos of lista_datos) {
        var fila = document.createElement("tr");
        fila.innerHTML = "<td>"+ datos.getAttribute("numero") +"</td>"+"<td>"+ datos.getAttribute("titulo") +"</td>"+"<td>"+ datos.getAttribute("descripcion") +"</td>"
        tabla.appendChild(fila);
    }
}

//funcion auxiliar que actualiza los dato de la tabla Articulos Solicitados
function actualizarTablaArticulos(datos) {
    var tabla = document.getElementById("tablaArticulos");
    for(registro of datos.children) {
        var fila = document.createElement("tr");
        fila.innerHTML = "<td>"+ registro.getAttribute("descripcion") +"</td>"+"<td>"+ registro.getAttribute("cantidad") +"</td>"+"<td>$"+ registro.getAttribute("precio_estimado") +"</td>"+"<td>"+ ((registro.getAttribute("importado") == 0)?"No":"Si") +"</td>"+"<td>"+ registro.getAttribute("area_destinataria") +"</td>" ;
        tabla.appendChild(fila);
    }
}

//funcion auxiliar para limpiar las tablas
function limpiarTablas() {
    var tablas = [document.getElementById("tablaDatosConvocatoria"),document.getElementById("tablaDatosPliego"),document.getElementById("tablaCondicionesPliego"),document.getElementById("tablaArticulos")];
    for(tabla of tablas) {
        tabla.innerHTML = "";
    }   
}

//funcion auxiliar que muestra una notificacion con un mensaje de error
function mostrarError(msj) {
    var noti = document.getElementById("notificacion");
    if(!noti){
        noti = document.createElement("div");
        noti.id = "notificacion";
        noti.classList.add("notification", "is-danger");        
    }    
    noti.textContent = msj;
    var cont = document.getElementById("contenedorPrinicpal");
    cont.insertBefore(noti,cont.firstChild);
}