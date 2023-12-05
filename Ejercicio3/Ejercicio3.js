/* Crea una función llamada lazyMultiply para multiplicar dos números. Si a la función se le
pasan dos parámetros devolverá inmediatamente la solución. Si a la función se le pasa un único
parámetro devolverá una función que, al pasarle un segundo parámetro, devolverá el resultado de
la multiplicación.
Ejemplos:
lazyMultiply(7,4) // 28
const perTwo = lazyMultiply(2)
perTwo(3) // 6
lazyMultiply(5)(10) // 50 */

function lazyMultiply(num1 , num2){
    if (num2 === undefined){
       return function (num2) {
            return (num1 * num2);
    } 
    }else {
        return (num1 * num2);
    }
}

console.log(lazyMultiply(2,3)); //6
console.log(lazyMultiply(5,10)); //50

const perTwo = lazyMultiply(2);
console.log(perTwo(3)); //6

const perThree = lazyMultiply(3);
console.log(perThree(5)); //15