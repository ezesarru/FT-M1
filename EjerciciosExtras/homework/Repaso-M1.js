const {
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
} = require('./DS.js')


// Función countArray:
// A partir de un array en el cual cada posición puede ser un único número u otro array anidado de
// números, determinar la suma de todos los números contenidos en el array.
// Ejemplo:
// const array = [1, [2, [3,4]], [5,6], 7]
// countArray(array) --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)

var countArray = function(array) {

    let suma = 0 // Creamos un contador para ir sumando los elementos numéricos del array

    for(let i = 0; i < array.length; i++) {

        if(Array.isArray(array[i])) {    // Si el elemento actual es un array...

            suma += countArray(array[i]) // Hacemos recursión para sumar los elementos del array anidado
        }
        else {                  // Si el elemento actual no es un array... (en este caso es un número!)

            suma += array[i]    // Por ende, se lo sumamos al contador
        }
    }
    return suma                 // Retornamos el total de la suma de todos los elementos numéricos
}


// Función countProps:
// A partir de un objeto en el cual cada propiedad puede contener cualquier tipo de dato, determinar la cantidad
// de propiedades de objetos en cualquier nivel, ya sea el inicial u objetos anidados.
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj) --> Deberia devolver 10 propiedades: a, a1, a2, a3, f, a, c, o, b, c.

var countProps = function(obj) {

    let counter = 0 // Creamos un contador para ir sumando la cantidad de propiedades encontradas

    // Bucle For in para iterar a través de todas las propiedades del objeto
    for(let prop in obj) {

        counter++   // Por cada propiedad encontrada, counter aumenta en 1

        if(typeof obj[prop] === 'object') { // Si el valor de la propiedad actual es un objeto...

            if(!Array.isArray(obj[prop])) { // Y no es un array... 
                
                // Hacemos recursión para tener en cuenta las propiedades de este objeto anidado
                counter += countProps(obj[prop]) // Y sumamos el resultado al contador
            }
        }
    }
    return counter // Retornamos la cantidad de propiedades encontradas (1 por cada prop)
}


// Método de LinkedLists 'changeNotNumbers':
// Debe cambiar aquellos valores que no puedan transformarse a numeros, por  el string 'Kiricocho' 
// y retornar el número de cambios realizados
// Ejemplo:
// Head --> [1] --> ['2'] --> [false] --> ['Franco']
// lista.changeNotNumbers()
// Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] 
// Y la función debió haber retornado 1.

LinkedList.prototype.changeNotNumbers = function(){
    
    let counter = 0 // Creamos un contador para ir sumando la cantidad de cambios realizados

    let current = this.head // Establecemos el puntero

    while(current) {    // Mientras que exista un current...

        if(isNaN(Number(current.value))) { 
            // Si el valor actual NO puede convertirse a un número...
            // Este valor va a poder convertirse en 'Kiricocho'...

            counter ++ // Así que sumamos 1 al contador

            current.value = 'Kiricocho' // Y transformamos su valor a 'Kiricocho'
        }
        current = current.next  // Pasamos al siguiente valor hasta que no haya más
    }
    return counter  // Retornamos el número de cambios realizados
}


// Método de Queues 'mergeQueues':
// A partir de dos queues recibidas por argumento, retorna una nueva Queue que 
// va 'mergeando' los nodos de las queues anteriores.
// Ejemplo:
// queueOne: [7,3,5]
// queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]

var mergeQueues = function(queueOne, queueTwo) {
    
    let queue = new Queue    // Creamos una Queue vacía para almacenar los elementos fusionados

    // Mientras que alguna de las colas tenga algún elemento...
    while(queueOne.size() || queueTwo.size()) {

        // Almacenamos el primer elemento de la primera cola (si no hay, almacenamos undefined)
        let firstElement = queueOne.dequeue()

        // Almacenamos el primer elemento de la segunda cola (si no hay, almacenamos undefined)
        let secondElement = queueTwo.dequeue()

        // Si pudimos almacenar algún elemento en la primera cola...
        if(firstElement) queue.enqueue(firstElement)
        // Lo añadimos a nuestra Queue vacía

        // Si pudimos almacenar algún elemento en la segunda cola...
        if(secondElement) queue.enqueue(secondElement)
        // Lo añadimos a nuestra Queue vacía

    }
    return queue            // Retornamos la cola resultante con todos los elementos fusionados
}


// Función closureMult:
// Permite generar nuevas funciones que representen las tablas de multiplicación de distintos numeros.

// Ejemplo 1: 
// var multByFour = closureMult(4)
// multByFour(2) --> 8 (2 * 4)
// multByFour(5) --> 20 (5 * 4)

// Ejemplo 2:
// var multBySix = closureMult(6)
// multBySix(4) --> 24 (4 * 6)

// La función recibe el segundo número a multiplicar
var closureMult = function(multiplier) {

    // Retornamos una función interna que recibe el primer número a multiplicar
    return function(num) {

        // Retornamos el resultado de multiplicar el primer número por el segundo
        return num * multiplier
    }
}




// Método de BinarySearchTrees, 'sum':
// Retornar la suma total de los valores dentro de cada nodo del arbol

BinarySearchTree.prototype.sum = function() {

    let suma = this.value // Iniciamos la suma con el valor raíz

    // Si existe un arbol a la izquierda...
    if (this.left) {
        suma += this.left.sum() // Sumamos la suma de los valores del subárbol izquierdo
    }

    // Si existe un arbol a la derecha...
    if (this.right) {
        suma += this.right.sum() // Sumamos la suma de los valores del subárbol derecho
    }

    return suma // Retornamos la suma total
}


module.exports = {
    countArray,
    countProps,
    mergeQueues,
    closureMult
}