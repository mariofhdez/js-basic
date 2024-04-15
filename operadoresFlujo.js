// definimos un objeto de forma literañ

empleado = {
    nombre: "Smith",
    profesion: "Agente",
    edad: 42,
    armas: ["Pistola","Rifle","Kung Fu"]
}

console.log(empleado);

var serializado = JSON.stringify(empleado);

console.log(serializado);

//des-serializar el objeto

serializado = serializado + '}'; //forzar un error para que entre en el catch

var leido;

try {
    leido = JSON.parse(serializado);
} catch(err){
    console.log("No se pudo leer serializado");
}

if(typeof(leido) != 'undefined'){
    console.log("Hay algo leído");
} else {
    console.log("no hay nada leído");
}

//Bucle for

for(var i = 0; i < empleado.armas.length; i++){
    var arma = empleado.armas[i];
    console.log(empleado.nombre + (arma == 'Kung Fu' ? ' sabe ':' tiene ') + arma);
}