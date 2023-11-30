//Modifica la función mergeValues para que sea una función pura.
/*Pura: - Predecible
        - Sin efectos colaterales*/

const MINIMUM = 15;
function mergeValues(arrayOfIntegers) {
 let element; // element será el elemento borrado del array
 let sum = 0; 
 while(element = arrayOfIntegers.pop()) { //.pop elimina el último elemento de un array y lo de devuelve.
 sum += element // Irá sumando los elementos eliminados del array
 }
 sum = Math.max(sum, MINIMUM) //Devolverá el mayor entre el valor de sum y la constante MINIMUN que es 15.
 arrayOfIntegers.push(sum); //Añadirá el valor de num al final de Array y devuelve el tamaño del Array
 return arrayOfIntegers;
}
/* console.log(mergeValues([10,20,30,40])) // [100]
console.log(mergeValues([1,2,3,4])) // [15] (MINIMUM) */

data = [10,20,30,40]
data = mergeValues(data)
console.log(data)

data = [1,2,3,4]
data = mergeValues(data)
console.log(data)
