var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {        
        var json = JSON.parse(xhttp.responseText);
        actualizarTabla(json.data);        
    }
  };



var boton = document.getElementById('botonTraerDatos');
boton.addEventListener('click',()=>{
    xhttp.open("GET", "https://reqres.in/api/products", true);
    xhttp.send();
});

//actualiza la tabla con los datos del objeto que le pasan
function actualizarTabla(datos) {
    var tabla = document.getElementById("tablaFichas");
    for(elem of datos) {
        var fila = document.createElement("tr");
        fila.innerHTML = "<td>"+ elem.id + "</td>" + "<td>"+ elem.name + "</td>" + "<td>"+ elem.year + "</td>" +"<td>"+ elem.color + "</td>" +"<td>"+ elem.pantone_value + "</td>";
        tabla.appendChild(fila);
    }
}