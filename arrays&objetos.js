
var productos = [
    {nombre: "moto", costo: 3000},
    {nombre: "pc", costo: 17000},
    {nombre: "monitor", costo: 4000},
    {nombre: "escritorio", costo: 2000},
    {nombre: "lampara", costo: 700},
    {nombre: "extenciones", costo: 300},
    {nombre: "silla", costo: 3000},
];

var productos_filtrados = productos.filter(function(producto){
    return productos.costo <= 7000;
});

