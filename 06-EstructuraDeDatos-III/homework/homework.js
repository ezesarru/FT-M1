'use strict';

// Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
function BinarySearchTree(value) {
   this.value = value
   this.left = null
   this.right = null
}


// insert:
// Agrega un nodo en el lugar correspondiente
BinarySearchTree.prototype.insert = function (value) {   //         7
   if (value < this.value) {  // si es menor...          //     5       10 
      if (this.left) {                                   //  3    6   9     11
         // si ya existe un nodo en la izquierda...
         this.left.insert(value)
      }  // Recursión hasta encontrar un null!
      else {
         // si NO existe un nodo en la izquierda... 
         this.left = new BinarySearchTree(value)   
      }  // Creamos un nuevo arbol!
   }
   else { // si es mayor o igual...
      if (this.right) {
         // si ya existe un nodo en la derecha...
         this.right.insert(value)
      }  // Recursión hasta encontrar un null!
      else {
         // si NO existe un nodo en la derecha... 
         this.right = new BinarySearchTree(value)
      }  // Creamos un nuevo arbol!
   }
}

const my_tree = new BinarySearchTree(7)
console.log(my_tree)






// contains:
// retorna true o false luego de evaluar si cierto valor existe dentro del árbol
BinarySearchTree.prototype.contains = function (value) {        
   if (value === this.value) return true                   //           7
   // si es igual... está!                                 //     5           10
   // si es menor...                                       //  3     6     9      11
   if (value < this.value) {
      if (!this.left) { // La izquierda está vacía?
         return false
      }
      else { 
         return this.left.contains(value)
      } // return ... | return ... | return ... | false
   }
   else { // si es mayor o igual...
      if (!this.right) { // La derecha está vacía?
         return false
      }
      else return this.right.contains(value)
   }  // return ... | return ... | return ... | true
}





// size: 
// retorna la cantidad total de nodos del árbol
BinarySearchTree.prototype.size = function () {             //           7 
   let counter = 1 // 4 //                                  //     5           10
   // Comenzamos en 1 para contar el arbol padre                3     6     9      11

   if (this.right) { // Si existe un nodo en la derecha...
      counter += this.right.size()
   } // 1 + ... | 1 + ... | 1 + ... | 1 + ... = 4

   if (this.left) { // Si existe un nodo en la izquierda...
      counter += this.left.size()
   } // 1 + ... | 1 + ... | 1 + ...

   return counter // Va sumando 1
}






// depthFirstForEach:
// Recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes 
// según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
// Si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   
   // "in-order"  ->  IZQ - NODO - DER
   if (order === 'in-order' || order === undefined) { 
      // Si es in order o no nos proveen ningún parámetro...
      if (this.left && this.left.depthFirstForEach(cb, order)); 
      // Si existe un nodo en la izquierda, entonces, recursión!
      cb(this.value); 
      // El callback almacena los valores
      if (this.right && this.right.depthFirstForEach(cb, order));
      // Si existe un nodo en la derecha, entonces, recursión!
   }

   // "pre-order"  ->  NODO - IZQ - DER 
   if (order === 'pre-order') {
      // Si es pre order...
      cb(this.value); 
      // El callback almacena los valores 
      if (this.left && this.left.depthFirstForEach(cb, order)); 
      // Si existe un nodo en la izquierda, entonces, recursión!
      if (this.right && this.right.depthFirstForEach(cb, order));
      // Si existe un nodo en la derecha, entonces, recursión!
   }

   // "post-order"  ->  IZQ - DER - NODO  
   if (order === 'post-order') {
      // Si es post order...
      if (this.left && this.left.depthFirstForEach(cb, order)); 
      // Si existe un nodo en la izquierda, entonces, recursión! 
      if (this.right && this.right.depthFirstForEach(cb, order));
      // Si existe un nodo en la izquierda, entonces, recursión!
      cb(this.value); 
      // El callback almacena los valores 
   }
}

// let array = [] // [3, 5, 7, 11, 9]
// my_tree.depthFirstForEach(function(value){ array.push(value) })







// breadthFirstForEach:
// Recorre el árbol siguiendo el orden breadth first (BFS, por niveles)
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
   if (this.left) { // Si existe un nodo en la izquierda...
      array.push(this.left)
   }

   if (this.right) { // Si existe un nodo en la derecha...
      array.push(this.right)
   }

   cb(this.value); // El callback almacena los valores

   if (array.length > 0) { // Si aun quedan elementos en el array...
      array.shift().breadthFirstForEach(cb, array);
      // Se borra el primero y recursión!
   }
}

// let bfs = [] // [3, 5, 7, 11, 9]
// my_tree.depthFirstForEach(function(value){ bfs.push(value) })





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
