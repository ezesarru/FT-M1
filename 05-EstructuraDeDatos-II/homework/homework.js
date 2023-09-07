'use strict';

/* 
EJERCICIO 1:
Implementar la clase LinkedList, definiendo los siguientes métodos:
*/

function LinkedList() {
  this.head = null              // Crea la 'locomotora', una clase constructora o funct constructora con prop head y valor null
}                               // {head: null}, necesita métodos para unir los vagones a la locomotora                                  

function Node(value) {          // Crea la conformación de los vagones, consta de 2 partes, el value y el next/puntero
  this.value = value            // El 'Vagón', donde almacenamos los datos
  this.next = null              // El 'Gancho', inicialmente tiene el valor de null
}                               // {value: value, next: null}


// add: 
// Agrega un nuevo nodo al final de la lista
LinkedList.prototype.add = function (value) {   // 7, 2
  let node = new Node(value)      // Crea un nodo con el valor argumentado.    
  let current = this.head         // este es el puntero/next                   // Head { Node: {value 7, next: null}}

  // Si no hay nada en current... o current === null.
  if (!current) {                 // Entra una única vez, cuando se agrega el primer nodo
    this.head = node              // El nodo PISA el null, transformándose en este. this.head = {value: 7, next: null}
    return node                   // Retorna el nodo que agregamos (el primero). {value: 7, next: null}
  }

  // {value: 7, next:{value: 2, next: null}},  solo entro al while cuando next no es null
  while (current.next) {          // Recorre la lista enlazada siguiendo la propiedad next de un nodo al siguiente, y se detiene cuando 
    current = current.next        // llega al último nodo de la lista, identificando el último nodo porque su propiedad next es null.                                       
  }                               // Este bucle se ejecuta cuando hay al menos dos nodos en la lista.

  current.next = node             // Transforma el último null en el nuevo nodo
}

// let newList = new LinkedList()
// console.log(newList.add(7))    Node { value: 7, next: null }
// console.log(newList.add(2))    Node { value: 2, next: null }
// console.log(newList.add(5))    Node { value: 5, next: null }
// console.log(newList)           LinkedList { head: Node { value: 7, next: Node: { value: 2, next: Node: { value: 5, next: null } } } } 

// Cris tkm

// remove:
// elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
LinkedList.prototype.remove = function() {
  let current = this.head                   // Puntero/next

  if (!current) return null                 // si current está vacío... retorna null

  else if (!current.next) {                 // Si current.next está vacío... 
    let memoria = this.head.value           // Almacenamos su value
    this.head = null                        // Lo borramos
    return memoria                          // Y retornamos el value previamente almacenado
  }

  // Node { value: 7, next: Node: { value: 2, next: Node: { value: 5, next: null } } } }                                          
  while (current.next.next) {               // Hasta que current.next.next no llegue al final se va a seguir repitiendo 
    current = current.next                  // el bucle. Llega al final, se corta el while, y...
  }

  // Node { value: 2, next: Node: { value: 5, next: null } } 
  let memoria = current.next.value          // Almacenamos el value del último nodo (value: 5)
  current.next = null                       // Lo borramos
  return memoria                            // Y retornamos el value previamente almacenado
}


// search:
// recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos
// un nodo cuyo valor coincida con lo buscado. En el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
LinkedList.prototype.search = function (arg) {   // var arg = function(value) {return value + 2 === 4}
  if (!this.head) return null
  let current = this.head                        // Node { value: 7, next: Node: { value: 2, next: Node: { value: 5, next: null } } } }

  while (current) {
    if (typeof arg === 'function') {
      if (arg(current.value)) return current.value
    }
    if (current.value === arg) return arg

    current = current.next
  }
  return null
}



/*  
EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets, slots, contenedores, casilleros o posiciones posibles para almacenar la información,
donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}). Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). 
*/

function HashTable() {
  this.table = []
  this.numBuckets = 35
}


// hash:
// Función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de
// cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad
// de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
HashTable.prototype.hash = function (key) {          // dia
  let hash = 0                                       // 322
  // 'd i a'                                         // SOLO EL NUM DE CASILLERO, la ubicación
  //  i
  for (var i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  return hash % this.numBuckets                      // 322 % 35 = 14, el resto de un módulo nunca va a ser >35
}


// set:
// Recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
HashTable.prototype.set = function (key, value) {   // 'pepe.hash = 14', '123', // pepe.hash = 14, '321'
  if (typeof key !== 'string') throw TypeError('Keys must be strings')

  let index = this.hash(key)            // 14, me retorna el valor ASCII de la key, el index es la ubicación a guardar el key value

  if (!this.table[index]) {             // si la posición está vacía... 
    this.table[index] = {}              // creamos un objeto en esa posición de la tabla
  }

  this.table[index][key] = value        // accedo a la posición de la tabla, allí hay un objeto, entonces creamos una prop (this.table[index][key])
}                                       // y por último le asignamos un valor a esa prop (this.table[index][key]=value)

// const mi_tabla = new HashTable();
// mi_tabla.set('dai', 23145)
// mi_tabla.set('dia', 4325)



// get:
// Recibe una key por argumento, y busca el valor que le corresponde en el bucket correcto de la tabla.
HashTable.prototype.get = function (key) {
  let index = this.hash(key)            // Le pedimos al hush que nos diga la ubicación

  return this.table[index][key]
}



// hasKey:
// Recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key)            // Le pedimos al hush que nos diga la ubicación

  return this.table[index].hasOwnProperty(key)
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
