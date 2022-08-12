var equipo_bayern= [muller, noier, sane, gnabry];

for (var i = 0; i < equipo_bayern.length; i++){
    console.log(equipo_bayern[i]);
}

///////////////////////
function convocacion(jugador){
    console.log(`${jugador} convocado`);
}

for (var jugador of equipo_bayern){
    convocacion(jugador);
}
