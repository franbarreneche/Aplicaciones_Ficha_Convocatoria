# Aplicaciones_Ficha_Convocatoria
Ejercicio para la cátedra Aplicaciones I referente a la utilización de técnicas AJAX

El enunciado es el siguiente:
1. Se desea crear un documento Web que al presionar el botón "Solicitar Convocatoria" recupere mediante técnicas AJAX  el archivo ficha_convocatorias.xml, el cual se adjunta en esta tarea.
2. En una situación real, ese archivo XML se genera automáticamente en backend según los datos extraídos de una base de datos.
3. Si la solicitud tiene respuesta satisfactoria, se deberá mostrar en una tabla los siguientes datos:
- Datos de la Convocatoria: expediente_numero, expediente_tipo_documentacion, expediente_ejercicio y asunto_convocatoria, en el formato TIPO NUMERO/AÑO - ASUNTO
- Datos del Pliego: retiro_pliego_direccio, retiro_pliego_plazo_horario, acto_apertura_direccion, acto_apertura_fecha_inicio y acto_apertura_horario_inicio
- Armar una tabla con las condic9iones del pliego (pliegos_articulos->registro): numero, titulo y descripcion
- Por último, mostrar los datos que crea relevantes de la etiqueta get_items_solicitados que son los artículos solicitados en el pliego, por lo cuales deben licitar los distintos proveedores.
- Los demás datos del archivo XMl son irrelevantes
4. Al presionar nuevamente el botón "Solicitar Convocatoria" no se debe agregar al final la información traída, sino que debe reemplazar el contenido anterior.
5. Se requiere que el documento sea robusto, y que el usuario reciba un mensaje si ocurre algún error
6. El código fuente debe estar comentariado
7. Separe estructura de contenido, presentación y funciones en archivos separados
8. El diseño debe ser atractivo e intuitivo
