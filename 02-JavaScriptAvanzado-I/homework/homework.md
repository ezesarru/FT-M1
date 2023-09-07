      # Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5;
var b = 10;
var c = function (a, b, c) {     // A=8, B=9, C=10
   var x = 10;                   // X=10
   console.log(x);               // 10
   console.log(a);               // 8
   var f = function (a, b, c) {  // A=8, B=9, C=10,
      b = a;                     // A=8
      console.log(b);            // B=8
      b = c;                     // B=10
      var x = 5;  
   };
   f(a, b, c);                   // A=8, B=9, C=10
   console.log(b);               // B=9
};
c(8, 9, 10);  
console.log(b);                  // B=10
console.log(x);                  // X=1
```




```javascript
console.log(bar);        // undefined
console.log(baz);        // nada
foo();
function foo() {
   console.log('Hola!'); // undefined
}
var bar = 1;
baz = 2;
```






```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco
```









```javascript
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```







```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // 'The Flash'
   console.log(pm); // 'Reverse Flash'
}
console.log(instructor); // 'The Flash'
console.log(pm); // 'Franco'
```






### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"        // 2
"2" * "3"      // 6
4 + 5 + "px"   // 9px
"$" + 4 + 5    // $45 
"4" - 2        // 2
"4px" - 2      // NaN
7 / 0          // infinito
{}[0]          // undefined     
parseInt("09") // 9             // si ambos son falsos, 
5 && 2         // 2             // si ambos son verdaderos, se agarra el último
2 && 5         // 5             // si alguno es falso, se agarra el verdadero
5 || 0         // 5          
0 || 5         // 5
[3]+[3]-[10]   // 33-10= // 23 <-- este, ya que el + también concatena
3>2>1          // error
[] == ![]      // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined
   console.log(foo()); // 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();  // 
```

Y el de este código? :





```javascript

var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack; // 'Meow Mix'
}

getFood(false); 
```







### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname()); // Aurelio De Rosa

var test = obj.prop.getFullname;     // Undefined

console.log(test());                 // Undefined
```




### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);            // 1 
   setTimeout(function () {
      console.log(2);
   }, 1000);                  // 4
   setTimeout(function () {
      console.log(3);         // 3
   }, 0);
   console.log(4);            // 2
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
