var numero = 1;

console.log(numero);
console.log(typeof(numero));

var numero = 'hola';
console.log(typeof(numero));

//strings
console.log("texto de prueba".split(' '));

var textoLargo = 
    'Linea 1\n'+
    'Linea 2\n'+
    'Linea 3\n'+
    'Linea 4\n'+
    'Linea 5\n';
console.log(textoLargo);

var textoLargo2 = [
    'linea1',
    'linea2'
].join('\n');
console.log(textoLargo2);

var objeto = {
    numero: 1,
    texto: "hola",
    sumaDos: function(v){
        return v + 2;
    }
}
console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(5));

//array

var array = [
    1,
    'hola',
    function(v){return v+2},
    {valor:'holla'}
]

console.log(array);

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

//Hoisting: se refiere al scope de las variables o la existencia de las variables en el codigo

var x = 100;

var y = function() {
    if(x == 100){
        var x = 30;
    }
    return x;
}

console.log(x,y());