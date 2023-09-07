'use strict';

// Closures

// Ejercicio 1
// La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
// un valor numérico que empieza en 1 e incrementa con cada invocación.


function counter() {
  var cont = 1
  return function() {
    return cont++
  }
}



// Ejercicio 2:
// Lograr mediante un closure, que cacheFunction "recuerde" el resultado de cada operación que hace, que al 
// una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez
// cálculos que ya se hicieron anteriormente.
// cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese
// argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto
// donde cada propiedad sea el argumento, y su valor el resultado de la correspondienteinvocación a cb) 
// de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, 
// porque el resultado estará guardado en la "memoria caché"


function cacheFunction(cb) {
  let cache = {}
  return function(arg) { // recibe arg y lo envía al cb para que haga el calculo
    if (cache.hasOwnProperty(arg)) return cache[arg]
    cache[arg] = cb(arg)
    return cache[arg]
  }
}

//----------------------------------------





// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}



/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);



/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación,
   tres funciones que retornen una cadena (string) y el delimitador especificado 
   (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas 
   deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán 
   sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}

let textoAsteriscos = crearCadena.bind(null, '*', '*') // el primer arg se deja como null, ya que no se usa el
let textoGuiones = crearCadena.bind(null, '-', '-')    // this pero de igual manera se tiene que dejar algo
let textoUnderscore = crearCadena.bind(null, '_', '_') // el primer _ es el primer argumento de la function,
//                                                     // el segundo _ es el segundo argumento de la function
// No modifiquen nada debajo de esta linea             // el string lo manda el test, iría despues del último
// --------------------------------                    // simbolo (*, - o _)

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};
