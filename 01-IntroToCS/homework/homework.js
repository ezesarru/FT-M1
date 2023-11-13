'use strict';

// Separamos el número       uwuus           1   0   1   0   1
// Si es 1 seguimos, si es 0 no                 
// Hacemos 2 potenciado a la posición    2^4     2^2     2^0
// Sumamos y obtenemos el resultado       16  +   4   +   1   =   21

function BinarioADecimal(num) {    
   let cont = 0
   let array = num.toString().split('').reverse()

   for(let i = 0; i < array.length; i++){
      if(array[i] == 1){
         cont += (2 ** i)
      }
   }
  return cont
}


// constantemente dividimos el número en 2 hasta q el cociente sea 0
// vamos pusheando los restos, desde el último hasta el primero

// almacenar (num % 2) 
// num /= 2 hasta que el cociente sea 0

function DecimalABinario(num) {  
   let binario = []

   while(num >= 1) { 
     
     binario.push(num % 2)
    
     num = Math.floor(num / 2) 
   }
   return binario.reverse().join('') 
}



module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
