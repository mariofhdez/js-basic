//Funcion básica

function funcionBasica(){
    console.log('Función básica se ejecutó')
}

funcionBasica();

//funcion como declaracion, con argumentos y retorno

function suma(a, b){
    return a + b;
}

console.log(suma(10, 15));

//funcion como expresion

var multiplicar = function(a,b){
    return a * b;
}

console.log(multiplicar(10,15));

var lang = 'es';

function accesoContexto (){
    console.log('El contexto superior es:', lang);
}

accesoContexto();

//Método de un objeto

var agente = {
    nombre: 'Smith',
    saluda: function(){console.log("Hola, soy el agente " + this.nombre)}
}

agente.saluda();

//Constructor de objetos

function Fruta(nombre){
    this.getNombre = function(){
        return nombre;
    }
    this.setNombre = function(valor){
        nombre = valor;
    }
}

var limon = new Fruta('Citrus Limón');

console.log(limon);
console.log(limon.getNombre());
limon.setNombre('Manzana');
console.log(limon.getNombre());