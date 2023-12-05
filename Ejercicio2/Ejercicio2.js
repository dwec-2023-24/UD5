/* Crea una función que permita crear funciones para generar IDs. Las funciones devueltas generarán
una cadena de la longitud definida cuando se invoquen. La cadena se irá incrementando con cada
invocación.
Ejemplos:
const len3Id = createIDGenerator(3);
len3Id() // 001
len3Id() // 002
len3Id() // 003
const len5Id = createIDGenerator(5);
len5Id() // 00001
 Date cuenta de que las funciones que crea createIDGenerator no son
funciones puras, ya que devuelven diferentes valores con los mismos parámetros de
entrada
 */

function createIDGenerator(longitud) {
    let contador = 0;
    return function() {
        contador += 1;
        return String(contador).padStart(longitud, '0');
    };
}

const len3Id = createIDGenerator(3);
console.log(len3Id()); // 001
console.log(len3Id()); // 002
console.log(len3Id()); // 003
console.log(len3Id()); // 004
console.log(len3Id()); // 005

const len5Id = createIDGenerator(5);
console.log(len5Id()); // 00001
console.log(len5Id()); // 00002
console.log(len5Id()); // 00003
console.log(len5Id()); // 00004
console.log(len5Id()); // 00005

const len6Id = createIDGenerator(6);
console.log(len5Id()); // 000001
console.log(len6Id()); // 000002
console.log(len6Id()); // 000003
console.log(len6Id()); // 000004
console.log(len6Id()); // 000005