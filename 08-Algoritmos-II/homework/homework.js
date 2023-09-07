'use strict'
// No cambies los nombres de las funciones.






// Crear el método quickSort, retornando el array numérico recibido por argumento ordenado de menor a mayor
function quickSort(array) {
  // Caso base: Si el array tiene 0 o 1 elemento, está automáticamente ordenado, así que se devuelve tal cual.
  if (array.length <= 1) return array

  // Selecciona un pivote aleatorio del array.
  let pivot = array[Math.floor(Math.random() * array.length)]

  // Inicializa tres arrays vacíos: 'left' para elementos menores que el pivote, 'right' para elementos mayores que el pivote,
  // y 'pivotArray' para elementos iguales al pivote.
  let left = []
  let right = []
  let pivotArray = []

  // Recorre el array original y distribuye los elementos en los arrays 'left', 'right' y 'pivotArray' según su relación con el pivote.
  for (let i = 0; i < array.length; i++) {
    if (array[i] === pivot) {
      // Si el elemento es igual al pivote, agrégalo a 'pivotArray'.
      pivotArray.push(array[i])
    } else if (array[i] < pivot) {
      // Si el elemento es menor que el pivote, agrégalo a 'left'.
      left.push(array[i])
    } else if (array[i] > pivot) {
      // Si el elemento es mayor que el pivote, agrégalo a 'right'.
      right.push(array[i])
    }
  }

  // Llama recursivamente a quickSort en los subarrays 'left' y 'right', y luego concatena los resultados con 'pivotArray'
  // en el orden correcto.
  return quickSort(left).concat(pivotArray, quickSort(right))
}





// Implementar el método conocido como mergeSort para ordenar de menor a mayor
function mergeSort(array) {
  // Comprueba si la longitud del array es 1 o menor. Si es así, el array ya está ordenado y se devuelve.
  if (array.length <= 1) return array

  // Calcula el índice divisor, que divide el array en dos partes aproximadamente iguales.
  let divisor = Math.floor(array.length / 2)

  // Divide el array en dos subarrays: 'left' y 'right'.
  let left = array.slice(0, divisor)
  let right = array.slice(divisor)

  // Inicializa un array vacío llamado 'result' donde se almacenarán los elementos ordenados.
  let result = []

  // Llama recursivamente mergeSort en los subarrays 'left' y 'right' para dividirlos.
  const leftArray = mergeSort(left)
  const rightArray = mergeSort(right)

  // Comienza a combinar los subarrays ordenados en el array 'result'.
  while (leftArray.length && rightArray.length) {

    // Compara el primer elemento de 'leftArray' y 'rightArray'.
    if (leftArray[0] < rightArray[0]) {

      // Si el primer elemento de 'leftArray' es menor, lo agrega a 'result'.
      result.push(leftArray.shift())
    } else {
      // Si el primer elemento de 'rightArray' es menor o igual, lo agrega a 'result'.
      result.push(rightArray.shift())
    }
  }
  // Después de que uno de los subarrays se agote, agrega los elementos restantes del otro subarray a 'result'.
  return result.concat(leftArray, rightArray)
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
