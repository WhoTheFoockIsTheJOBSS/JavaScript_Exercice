/////////////////////////////////funciones declarativas//////////////////////////////
function un_numero(){
    return 3;
}

un_numero();


////////////////////////////////funciones expresivas/////////////////////////////////
var variable= function(a,b){
    return a+b;
}

variable(1,4);



// ejemplo
 var nombre;

 var saludo= function(nombre){
     console.log(`hola ${nombre}`);
 }
