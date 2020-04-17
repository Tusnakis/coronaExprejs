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

    if($('.divVacio').children().length > 0){
        for(var x = 1; x < $('table').children().eq(1).children().length; x++){
            if(x == 1){
                $('table').children().eq(1).children().eq(x).children().eq(2).css("color","#fc0000");
            } else {
                if(parseFloat($('table').children().eq(1).children().eq(x - 1).children().eq(2).text().trim()) < parseFloat($('table').children().eq(1).children().eq(x).children().eq(2).text().trim())){
                    $('table').children().eq(1).children().eq(x).children().eq(2).css("color","#fc0000");
                } else {
                    $('table').children().eq(1).children().eq(x).children().eq(2).css("color","#008a10");
                }
            }
        }
    }
}