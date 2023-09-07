'use strict';


function BinarioADecimal(num) {    
   var resultado = num.split('')  
   resultado.reverse()
   var cont = 0

   for (var i = 0; i < resultado.length; i++) {
      if (resultado[i] == 1) {
         cont += (2**i)
      }
   }
   return cont
}



function DecimalABinario(num) {
   var resultado = []
   var cont = num
   while (cont > 0) {
      if (cont %2 == 0) {
         resultado.push(0) 
      }
      else {
         resultado.push(1)
      }
      cont = Math.floor(cont /2)
   }
   resultado.reverse()
   var final = resultado.join('')
   return final
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
