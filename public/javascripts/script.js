$(document).ready(init);
function init() {
    var comunidadesArr = ["Andalucía", "Aragón", "Asturias", "Baleares", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y León", "Cataluña", "Ceuta", "C. Valenciana", "Extremadura", "Galicia", "Madrid", "Melilla", "Murcia", "Navarra", "País Vasco", "La Rioja"];
    //var eleccionArr = ["casos", "fallecidos", "uci", "altas"];
    for (var i = 0; i < comunidadesArr.length; i++) {
        /*if(i < 4){
            $('#idEleccion').append('<option value="' + eleccionArr[i] + '">' + eleccionArr[i] + '</option>');
        }*/
        $('#idComunidades').append('<option value="' + comunidadesArr[i] + '">' + comunidadesArr[i] + '</option>');
    }
}