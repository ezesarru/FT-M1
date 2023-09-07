'use strict'
// No cambies los nombres de las funciones.


// Factorear el número recibido como argumento y retornarlo en un array con los factores por los cuales
// se va diviendiendo de menor a mayor
// Ejemplo: factorear(180) --> [1, 2, 2, 3, 3, 5]  1x2x2x3x3x5 = 180 (siempre números primos)

function factorear(num) {
let factors = [1]         // Almacen de números modulados

let x = 2                 // Variable de división

  while (num > 1) {       // Al factorear, siempre hay 1 de resto
    
    if (num % x === 0) {  // Si es divisible...

      factors.push(x)     // Almacenamos el valor por el cuál modulados

      num /= x            // Pisamos el valor de num por el cuál dividimos
  
    } else {

      x++          // Aumenta X para que num se divida por números mayores
    }
  }
  return factors   // Retornamos el array con los valores modulados
}





// bubbleSort, recibiendo un array de números y retornándolo ordenado de menor a mayor
// [1, 5, 7, 8, 9, 4, 1]
//  i
//  j

function bubbleSort(array) {
for (let i = 0 ; i < array.length -1 ; i++) {  // I no avanza hasta que J termine
  for (let j = 0 ; j < array.length -i -1 ; j++) { // J se reinicia cuando llega al final
   
    if (array[j] > array[j + 1]) {        // Compara [J] con [J+1]

      let aux = array[j]                  // Almacenamos el número mayor

      array[j] = array[j + 1]             // Invertimos lugares

      array[j+1] = aux   // Colocamos en [J+1] el número mayor previamente almacenado
    }
  }
}
return array             // Retornamos el array con los números ordenados de menor a mayor
}



// insertionSort, recibiendo un array de números y retornándolo ordenado de menor a mayor
// [1, 5, 7, 8, 9, 4, 1]
//     i
//  j
function insertionSort(array) {
  for(let i = 1; i < array.length ; i++) {
    // Comienza en la posición 1 

    let j = i-1

    let aux = array[i]

    while(j >= 0 && aux < array[j])

      array[j+1] = array[j]

      j--
  }
  array[j+1] = aux
}



// selectionSort, recibiendo un array de números y retornándolo ordenado de menor a mayor
// busca al mínimo valor y lo guarda
// lo compara con todas las posiciones del array
// una vez que encuentra al menor de todo el array, intercambia posiciones
// [1, 5, 7, 8, 9, 4, 1]
//  i
//  j
function selectionSort(array) {
  for(let i = 0; i <array.length; i++) {

    let min = i

    for(let j = i+1 ; j < array.length ; j++) {

      if(array[j] < array[min]) {

        min = j

      }
    }
    if (i !== min) {
      let aux = array[i]

      array[i] = array[min]

      array[min] = aux
    }
  }
  return array
}












// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
